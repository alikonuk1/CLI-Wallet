import conf from 'conf';
import chalk from 'chalk';


export function list () {
    const config = new conf();
    const walletList = config.get('wallet-list');

    if (walletList && walletList.length) {
        console.log(chalk.blue.bold('Wallet list'));

        walletList.forEach((wallet, index) => {
                console.log(chalk.greenBright(`${index}. ${wallet.text}`))})
    } else {
        console.log(chalk.red.bold('You don\'t have any saved wallet yet.'))
    }
}
