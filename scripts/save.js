import conf from 'conf';
import chalk from 'chalk';

const save = async () => {
    const config = new conf();
    const walletList = config.get('wallet-list')
    if (walletList && walletList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(chalk.red.bold('You don\'t have any saved wallet yet.'))
    }
}

save();