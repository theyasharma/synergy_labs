const Web3 = require('web3')

const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/5061a2cd70e345ceafc6b1348f0f4810')


const web3 = new Web3(provider)

web3.eth.getBalance('0x30154562b81788b2a4FD126682795A49A02CCaE1').then(balance =>{

    const ether =web3.utils.fromWei(balance,'ether')
    console.log(ether)

})