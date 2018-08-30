import factorial from './factorial'
import * as yargs from 'yargs'

const argv = yargs.demandOption('num').argv

console.log('=== Fatorial ===');

const num = argv.num

console.log(`O fatorial de ${num} é igual a ${factorial(num)}`);
