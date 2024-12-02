import { readFile } from "./readFile.ts";
import { reportIsSave } from "./reportIsSave.ts";
import { reportIsSave_leveraged } from "./reportIsSave_lever.ts";

console.log('Solving advent of code day 1');

const reports = readFile('02/input.txt')
let saveCount = 0
for (const report of reports) {
    if (reportIsSave(report)) saveCount++
}
console.log(`${saveCount} reports are save`)

saveCount = 0
for (const report of reports) {
    const isSave = reportIsSave_leveraged(report)
    if (isSave) saveCount++
    else console.log(report)
}
console.log(`${saveCount} reports are save (after leveraging the rules)`)
