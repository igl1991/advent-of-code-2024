import {readFile} from './readFile.ts'
import {calculateTotalDistance} from './calculateTotalDistance.ts'

console.log('Solving advent of code day 1');

const data = readFile('01/input.txt')
console.log(calculateTotalDistance(data[0], data[1]))