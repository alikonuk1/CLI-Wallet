const ethers = require('ethers');

const createWallet = async () => {
    const wallet = ethers.Wallet.createRandom();
    console.log(`Private Key = ${wallet.privateKey}`);
    console.log(`Mnemonic = ${wallet.mnemonic.phrase}`);
    console.log(`Public Address = ${wallet.address}`);
}

createWallet();