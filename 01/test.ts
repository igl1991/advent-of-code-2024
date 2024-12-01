import { describe, expect, it } from '@jest/globals'
import { calculate } from './calculate.ts'
import {readFile } from './readFile.ts'

describe('day 01', ()=>{
    describe('calculate', ()=>{
        it('should calculate correctly for testinput', ()=>{
            expect(calculate(
                [3, 4, 2, 1, 3, 3],
                [4, 3, 5, 3, 9, 3]
            )).toBe(11)
        })

        it('should calculate correctly on sorted array', ()=>{
            expect(calculate(
                [1, 2, 3], 
                [2, 4, 5]
            )).toBe(5)
        })
        
        it('should calculate correctly on unsorted array', ()=>{
            expect(calculate(
                [2, 3, 1], 
                [5, 4, 2]
            )).toBe(5)
        })
    
        it('should return fail with uneven array lengths', ()=>{
            expect(()=>calculate([], [1])).toThrow()
        })
    })

    describe('read file', ()=>{
        it('should parse file correctly', ()=>{
            const data = readFile('01/input.txt')
            expect(data[0].length).toBe(1000)
            expect(data[1].length).toBe(1000)
        })
        
        it('should parse file with test file', ()=>{
            const data = readFile('01/testinput.txt')
            expect(data).toMatchInlineSnapshot(`
[
  [
    3,
    4,
    2,
    1,
    3,
    3,
  ],
  [
    4,
    3,
    5,
    3,
    9,
    3,
  ],
]
`)
        })
    })
})