import * as fs from 'fs';
type Data = [number[], number[]]

export function readFile(fileName: string): Data {
    const data: Data = [[], []]
    const fileContent = fs.readFileSync(fileName, 'utf8')
    const lines = fileContent.split('\n')
    for (const line of lines) {
        const [item1, item2] = line.split('   ')
        data[0].push(Number(item1))
        data[1].push(Number(item2))
    }
    
    return data
}