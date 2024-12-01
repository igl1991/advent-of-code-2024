import { describe, expect, it } from '@jest/globals'
import { calculateTotalDistance } from './calculateTotalDistance.ts'
import {readFile } from './readFile.ts'
import { calculateSimilarityScore } from './calculateSimilarityScore.ts'

describe('day 01 - part 1', ()=>{
    describe('calculate', ()=>{
        it('should calculate correctly for testinput', ()=>{
            expect(calculateTotalDistance(
                [3, 4, 2, 1, 3, 3],
                [4, 3, 5, 3, 9, 3]
            )).toBe(11)
        })

        it('should calculate correctly on sorted array', ()=>{
            expect(calculateTotalDistance(
                [1, 2, 3], 
                [2, 4, 5]
            )).toBe(5)
        })
        
        it('should calculate correctly on unsorted array', ()=>{
            expect(calculateTotalDistance(
                [2, 3, 1], 
                [5, 4, 2]
            )).toBe(5)
        })
    
        it('should return fail with uneven array lengths', ()=>{
            expect(()=>calculateTotalDistance([], [1])).toThrow()
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

describe('day 01 - part 2', ()=>{
    it('should calculate similarity score', ()=>{
        expect(calculateSimilarityScore(
            [3, 4, 2, 1, 3,3],
            [4, 3, 5, 3, 9, 3]
        )).toBe(31)
    })
})