const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require("web3")
const { interface, bytecode } = require("./compile")

// Dummy wallet details to send contract to the Rinkeby test network
const provider = new HDWalletProvider(
  "make giant debate crystal drip nephew veteran swarm symbol wire prepare fever",
  "https://rinkeby.infura.io/v3/0c18f56a3dec48d1886f827249f4c90e"
)

const web3 = new Web3(provider)

const deploy = async () => {
  // This function is not actually required by want to use async / await
  // must be inside a function
  const accounts = await web3.eth.getAccounts()

  console.log("Attempting to deploy from account", accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] })

  console.log("Contract deployed to", result.options.address)
  provider.engine.stop()
}

deploy()

// 0xFb9881c7845d9660f1c8708Ef02E69405a28C17f
