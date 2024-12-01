import {readFile} from './readFile.ts'
import {calculateTotalDistance} from './calculateTotalDistance.ts'
import { calculateSimilarityScore } from './calculateSimilarityScore.ts';

console.log('Solving advent of code day 1');

const data = readFile('01/input.txt')
console.log('distance is '+ calculateTotalDistance(data[0], data[1]))
console.log('similarity score is '+ calculateSimilarityScore(data[0], data[1]))