const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const yaml = require('yamljs');
const fs = require('fs');

const compiledFactory = require('./build/CampaignFactory.json');

config = yaml.load('config.yml');

const provider = new HDWalletProvider(
    config.provider.mnemonic,
    config.provider.url + config.provider.token
);

const web3 = new Web3(provider);

const deploy = async () => {
    // Get a list of all accounts
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    // Use one of those accounts to deploy the contract
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    var outputContract = {
        contract: {
            abi: compiledFactory.interface,
            address: result.options.address
        }
    };

    fs.writeFile('contract.yml', yaml.stringify(outputContract, null, 2), function (err) {
        if (err) throw err;
        console.log('Output contract abi and address saved!');
        });

    console.log('Contract deployed to', result.options.address);
};
deploy();
