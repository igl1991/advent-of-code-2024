console.log('Solving advent of code day 1');
import * as fs from 'fs';

type Data = [number[], number[]]

export function readFile(): Data {
    const data: Data = [[], []]

    const fileContent = fs.readFileSync('01/input.txt', 'utf8')
    const lines = fileContent.split('\n')
    for (const line of lines) {
        const [item1, item2] = line.split('   ')
        data[0].push(Number(item1))
        data[1].push(Number(item2))
    }
    
    return data
}

export function calc(locationList1: number[], locationList2: number[]): number {
    if (locationList1.length !== locationList2.length) {
        throw new Error('there should be equal amount of locations')
    }
    const sortedLocation1 = locationList1.sort()
    const sortedLocation2 = locationList2.sort()

    let sum = 0;
    for (let i=0;i<locationList1.length;i++) {
        sum += Math.abs(sortedLocation1[i]-sortedLocation2[i])
    }

    return sum;
}