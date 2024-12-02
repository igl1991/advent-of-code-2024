import { readFile } from "./readFile.ts";
import { reportIsSave } from "./reportIsSave.ts";

console.log('Solving advent of code day 1');

const reports = readFile('02/input.txt')
let savecount = 0
for (const report of reports) {
    if (reportIsSave(report)) savecount++
}

console.log(`${savecount} reports are save`)