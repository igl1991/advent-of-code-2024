import {readFile} from './readFile.ts'
import {calculate} from './calculate.ts'

console.log('Solving advent of code day 1');

const data = readFile('01/input.txt')
console.log(calculate(data[0], data[1]))