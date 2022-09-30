import conf from 'conf';
import chalk from 'chalk';


export function list () {
    const config = new conf();
    let walletList = config.get('wallet-list');

    if (walletList && walletList.length) {
        console.log(chalk.blue.bold('Wallet list'));

        walletList.forEach((mnemonic, index, privateKey, address) => {
                console.log(chalk.greenBright(`${index}. `) + 
                chalk.green.bold(`Public Address = `) +  (`${address}`) + 
                chalk.green.bold(`  Private Key = `) + (`${privateKey.text}`) + 
                chalk.green.bold(`  Mnemonic = `) + (`${mnemonic.text}`))
            });
    } else {
        console.log(chalk.red.bold('You don\'t have any saved wallet yet.'))
    }
}
