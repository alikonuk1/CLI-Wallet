import conf from 'conf';
import chalk from 'chalk';


export function save (address, privateKey, mnemonic) {
    const config = new conf();
    let walletList = config.get('wallet-list');

    if (!walletList) {
        walletList = []
    }
    walletList.push({
        text: address,
        text: privateKey,
        text: mnemonic
    });

    config.set('wallet-list', walletList);

    console.log(chalk.green.bold('Task has been added successfully!'));
}
