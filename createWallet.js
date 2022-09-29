const ethers = require('ethers');

const createWallet = async () => {
    const wallet = ethers.Wallet.createRandom();
    console.log(` `);
    console.log(` `);
    console.log(`Private Key = ${wallet.privateKey}`);
    console.log(` `);
    console.log(`Public Address = ${wallet.address}`);
    console.log(` `);
    console.log(` `);
}

createWallet();