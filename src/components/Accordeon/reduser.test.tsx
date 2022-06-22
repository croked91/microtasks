import { reducer, StateType } from "./Accordeon";


test ('collapsed should be true',()=>{

    //data
    const state:StateType = {
        collapsed: false
    }


    //action
    const newState =  reducer(state, {type: "SET-TOGGLE-COLLAPSED"})
    //expectation



expect(newState.collapsed).toBe(true);
})


test ('collapsed should be false',()=>{

    //data
    const state:StateType = {
        collapsed: true
    }


    //action
    const newState =  reducer(state, {type: "SET-TOGGLE-COLLAPSED"})
    //expectation



expect(newState.collapsed).toBe(false);
})
test ('collapsed should be false',()=>{

    //data
    const state:StateType = {
        collapsed: true
    }


    //action

    //expectation



expect(()=>{reducer(state, {type: "TOGGLE-COLLAPSED"})}).toThrowError()
})