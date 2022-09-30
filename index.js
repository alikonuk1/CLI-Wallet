#! /usr/bin/env node
import { Command } from 'commander';
import { list } from './scripts/list.js';
import { create } from './scripts/create.js';

const program = new Command();

program
    .command('create')
    .description('Create a wallet')
    .action(create)

program
    .command('list')
    .description('List saved wallets')
    .action(list)
    
program.parse();
