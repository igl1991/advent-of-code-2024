import {describe, it, expect } from '@jest/globals'
import { calc } from '.'

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
})