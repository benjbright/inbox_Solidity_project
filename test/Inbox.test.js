const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3") // note capitalisation for the constructor function
const web3 = new Web3(ganache.provider())
// Create new instance of Web3 and connect to locally hosted ganache test network
// Can only deploy a contract when you have access to an account
beforeEach(() => {
  // Get a list of all accounts
  // Note using the instance of Web3 - 'web3'
  // Almost every web3 function is async and returns a promise
  web3.eth.getAccounts().then((fetchedAccounts) => {
    console.log(fetchedAccounts)
  })

  // Use one of those accounts to deploy the contract
})

describe("Inbox", () => {
  it("deploys a contract", () => {})
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
