import { describe, expect, it } from "@jest/globals";
import { reportIsSave } from ".";
import exp from "constants";

describe('day 02 - part 1', ()=>{
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