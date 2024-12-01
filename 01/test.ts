import { describe, expect, it } from '@jest/globals'
import { calc, readFile } from '.'

describe('day 01', ()=>{
    it('should calculate correctly on sorted array', ()=>{
        expect(calc(
            [1, 2, 3], 
            [2, 4, 5]
        )).toBe(5)
    })
    
    it('should calculate correctly on unsorted array', ()=>{
        expect(calc(
            [2, 3, 1], 
            [5, 4, 2]
        )).toBe(5)
    })

    it('should return fail with uneven array lengths', ()=>{
        expect(()=>calc([], [1])).toThrow()
    })

    it('should parse file correctly', ()=>{
        const data = readFile()
        expect(data[0].length).toBe(1000)
        expect(data[1].length).toBe(1000)
    })
})