const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3") // note capitalisation for the constructor function
const web3 = new Web3(ganache.provider())
// Create new instance of Web3 and connect to locally hosted ganache test network
// Can only deploy a contract when you have access to an account
const { interface, bytecode } = require("../compile")

let accounts
let inbox

beforeEach(async () => {
  // Get a list of all accounts
  // Note using the instance of Web3 - 'web3'
  // Almost every web3 function is async and returns a promise
  accounts = await web3.eth.getAccounts()

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" })
})

describe("Inbox", () => {
  it("deploys a contract", () => {
    // ok method - checks whatever is passed in to the assert
    // function actually exists
    assert.ok(inbox.options.address)
  })

  it("has a default message", async () => {
    // need to call a method on our Inbox contract
    // two methods tied to our contract - message and setMessage
    const message = await inbox.methods.message().call()
    assert.equal(message, "Hi there!")
  })

  it("can change the message", async () => {
    // receive a transaction hash back from the function
    // modifying the blockchain so need to assign who pays
    // not assigned to a variable
    await inbox.methods.setMessage("bye").send({ from: accounts[0] })
    const message = await inbox.methods.message().call()
    assert.equal(message, "bye")
  })
})

// class Car {
//   park() {
//     return "stopped"
//   }

//   drive() {
//     return "vroom"
//   }
// }

// Mocha functions
// it - run a test and make an assertion
// describe - group together 'it' functions
// beforeEach - execute some general set up code
// beforeEach - common initialisation code for multiple tests

// let car

// beforeEach(() => {
//   car = new Car()
// })

// describe("Car", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped")
//   })

//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom")
//   })
// })
