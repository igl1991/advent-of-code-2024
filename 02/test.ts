import { describe, expect, it } from "@jest/globals";
import { reportIsSave } from "./reportIsSave.ts";
import { readFile } from "./readFile";
import { reportIsSave_leveraged } from "./reportIsSave_lever.ts";

describe('day 02 - part 1', ()=>{
    describe('reportIsSave', ()=>{
        it('should mark report as save with decrease', ()=> {
            expect(reportIsSave([7,6,4,2,1])).toBe(true)
        })
    
        it('should mark report as unsafe for wrong level increase', ()=> {
            expect(reportIsSave([1,2,7,8,9])).toBe(false)
        })
        
        it('should mark report as unsafe for wrong level decrease', ()=> {
            expect(reportIsSave([9,7,6,2,1])).toBe(false)
        })
    
        it('should mark report as unsave with first increase than decrease', ()=> {
            expect(reportIsSave([1,3,2,4,5])).toBe(false)
        })
    
        it('should mark report as unsafe', ()=> {
            expect(reportIsSave([8,6,4,4,1])).toBe(false)
        })
    
        it('should mark report as safe with increase', ()=> {
            expect(reportIsSave([1,3,6,7,9])).toBe(true)
        })
        
        it('should mark report as unsave with first decrease than increase', ()=> {
            expect(reportIsSave([8,6,7,2,1])).toBe(false)
        })
    })

    describe('read File', ()=>{
        it('should read file correclty', ()=>{
            const data =  readFile('02/input.txt')
            expect(data.length).toBe(1000)

            expect(data[0].length).toBe(7)
            expect(data[1].length).toBe(8)
        })
    })
})

describe('day 02 - part 2', ()=>{
    describe('reportIsSave_leveraged', () => {
        it('should mark report as save with decrease', ()=> {
            expect(reportIsSave_leveraged([7, 6, 4, 2, 1])).toBe(true)
        })
    
        it('should mark report as unsafe for wrong level increase', ()=> {
            expect(reportIsSave_leveraged([1, 2, 7, 8, 9])).toBe(false)
        })
        
        it('should mark report as unsafe for wrong level decrease', ()=> {
            expect(reportIsSave_leveraged([9, 7, 6, 2, 1])).toBe(false)
        })
    
        it('should mark report as save with first increase than decrease [remove item]', ()=> {
            expect(reportIsSave_leveraged([1, 3, 2, 4, 5])).toBe(true)
        })
    
        it('should mark report as safe [remove item]', () => {
            expect(reportIsSave_leveraged([8, 6, 4, 4, 1])).toBe(true)
        })
    
        it('should mark report as safe with increase', ()=> {
            expect(reportIsSave_leveraged([1, 3, 6, 7, 9])).toBe(true)
        })
        
        it('is save with removing first item', ()=> {
            expect(reportIsSave_leveraged([10, 3, 6, 7, 9])).toBe(true)
        })   

        it('is save with removing last item', ()=> {
            expect(reportIsSave_leveraged([1, 3, 6, 7, 6])).toBe(true)
        })

        it.each([
            [[44, 47, 50, 51, 53, 54, 53]],
            [[70, 73, 75, 77, 80, 81, 84, 84]],
            [[1, 3, 4, 7, 10, 13, 16, 20]],
            [[47, 49, 52, 53, 55, 57, 60, 65]]
        ])('should mark as save', (value)=> {
            expect(reportIsSave_leveraged(value)).toBe(true)
        })

        it.each([
            [[70, 73, 75, 77, 80, 81, 84, 84]],
            [[ 69, 70, 71, 70, 71 ]],
            [[22, 23, 20, 21, 24, 27, 24 ]]
        ])('should mark as unsave', (value)=> {
            expect(reportIsSave_leveraged(value)).toBe(true)
        })
    })    
})