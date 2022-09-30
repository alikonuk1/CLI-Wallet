#! /usr/bin/env node
import { Command } from 'commander';
import { list } from './scripts/list.js';
import { create } from './scripts/create.js';
import { save } from './scripts/save.js';

const program = new Command();

program
    .command('create')
    .description('Create a wallet')
    .action(create)

program
    .command('list')
    .description('List saved wallets')
    .action(list)

program
    .command('save <address> <privateKey> <mnemonic>')
    .description('Save wallet to the list')
    .action(save)
    
program.parse();
