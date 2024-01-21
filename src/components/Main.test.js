import {renderHook, act, render } from "@testing-library/react";
import  {slots} from "../test/slots";

describe("test the states",()=>{
    test("test available times", ()=>{
      const {result} = renderHook(slots);
      act(()=>result.current.updateTimes('2024-01-18'))
      expect(result.current.availableTimes).toBe([
        {id:15, time:'19:00'},
        {id:16, time:'20:00'},
        {id:17, time:'21:00'},
        {id:18, time:'22:00'}])
    })

});
