const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3") // note capitalisation for the constructor function
const web3 = new Web3(ganache.provider())
// Create new instance of Web3 and connect to locally hosted ganache test network

class Car {
  park() {
    return "stopped"
  }

  drive() {
    return "vroom"
  }
}

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
