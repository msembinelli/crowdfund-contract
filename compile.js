const path = require('path');
const fs = require('fs');
const solc = require('solc');

const crowdfundPath = path.resolve(__dirname, 'contracts', 'Crowdfund.sol')
const source = fs.readFileSync(crowdfundPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Crowdfund'];
