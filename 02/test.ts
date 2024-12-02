import { describe, expect, it } from "@jest/globals";
import { reportIsSave } from ".";

describe('day 02 - part 1', ()=>{
    it('should mark report as save', ()=> {
        expect(reportIsSave([7,6,4,2,1])).toBe(true)
    })
})