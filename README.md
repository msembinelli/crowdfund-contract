# crowdfund-contract
A crowdfunding contract for Ethereum written in Solidity, providing democratic and transparent fund allocation.

## Install
`npm install`

## Compile Contracts
First you must create a `config.json` file in the ethereum directory with the following structure:
```
{
	"contracts": {
		"input": "contracts",
		"output": "build",
		"files": [
			"Campaign.sol"
		]
	},
	"provider": {
		"url": "https://rinkeby.infura.io/", // Provider service URL
		"token": "1234567abcde",             // Provider API token
		"mnemonic": "zoo leader seminar raven alien gain faculty wall age relief spot elegant"                             // 12 word metamask mnemonic
	}
}
```
DO NOT commit the config.json file to github with your live mnemonic or API token. config.json has been added to .gitignore in this project.

In the ethereum directory, run:
`node compile.js`

## Test
Run the mocha tests against the smart contracts (on the Ganache local test network):
`npm test`

## Deploy Contract To Rinkeby Test Network
In the ethereum directory, run:
`node deploy.js`

Note down the output address that the contract has been deployed to. You can look  up the contract by entering the address on `https://rinkeby.etherscan.io/`

If you are not deploying from within the ethereum folder, the build output will be in the wrong location and the deploymentAddress property will not be added to CampaignFactory.json output. This will cause the application to throw a 'contract address not found' error.

## Run the web application
`npm start`
