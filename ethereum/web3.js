import Web3 from 'web3';

let web3;

// Test if we are running server side or browser side
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // In browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/dK5sdbwXqVntSyIINzBu'
    );
    web3 = new Web3(provider);
}

export default web3;