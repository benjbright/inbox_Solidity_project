const assert = require("assert")
const ganache = require("ganache-cli")
const Web3 = require("web3") // note capitalisation for the constructor function
const web3 = new Web3(ganache.provider())
// Create new instance of Web3 and connect to locally hosted ganache test network
