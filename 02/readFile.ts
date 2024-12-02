import * as fs from 'fs';
import {type Report} from './reportIsSave.ts'

export function readFile(fileName: string): Report[] {
    const data: Report[] = []
    const fileContent = fs.readFileSync(fileName, 'utf8')
    const lines = fileContent.split('\n')
    
    for (const line of lines) {
        const report = line.split(' ').map(item=>Number(item))
        data.push(report)
    }
    
    return data
}