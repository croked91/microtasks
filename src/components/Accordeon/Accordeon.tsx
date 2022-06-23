import React, { useReducer } from "react";
import {AccordeonTitleType, ActionType} from '../../App'
import { Immutable } from "../Immutable/Immutable";



const TOOGLE_CONST = "SET-TOGGLE-COLLAPSED"

type AccordeonType = {
    callback: (collapsed: boolean)=>void
    accordeonState: AccordeonTitleType[]
    collapsed: boolean
    state: StateType
}

export type StateType = {
    collapsed: boolean
}

export function reducer (state: StateType, action: ActionType) {
    switch(action.type){
        case TOOGLE_CONST:
            return{...state, collapsed: !state.collapsed}
        default:
            throw new Error("Bad action type")
    }
  }

export const AccordeonBase = (props: AccordeonType) => {
    


    
    const [stateReducer, dispatch] = useReducer(reducer, {collapsed: false})

    const onClickHandler = (collapsed: boolean) => {
        props.callback(collapsed)
    }
    
    let accordeonBody = props.accordeonState.map((el)=> {return(<div>{el.title}</div>)})
    
    return (
        <div>
            {/* <div onClick={()=>onClickHandler(!props.collapsed)}>Title</div>
            {props.collapsed === true ? accordeonBody : ''} */}
            <div onClick={()=>dispatch({type:TOOGLE_CONST})}>Title</div>
            {stateReducer.collapsed === true ? accordeonBody : ''}
            <Immutable />
        </div>
    )
}

export const Accordeon = React.memo(AccordeonBase)