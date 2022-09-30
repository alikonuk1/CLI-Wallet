import chalk from 'chalk';
import ethers from 'ethers';

export function create () {
    const wallet = ethers.Wallet.createRandom();
    console.log(` `);
    console.log(` `);
    console.log(chalk.green.bold(`Private Key = `) + `${wallet.privateKey}`);
    console.log(` `);
    console.log(chalk.green.bold(`Mnemonic = `) + `${wallet.mnemonic.phrase}`);
    console.log(` `);
    console.log(chalk.green.bold(`Public Address = `) + `${wallet.address}`);
    console.log(` `);
    console.log(` `);
}
