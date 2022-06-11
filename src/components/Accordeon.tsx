import React from "react";
import {AccordeonTitleType} from '../App'
import { Immutable } from "./Immutable";



type AccordeonType = {
    callback: (collapsed: boolean)=>void
    accordeonState: AccordeonTitleType[]
    collapsed: boolean
}


export const Accordeon = (props: AccordeonType) => {
    

    const onClickHandler = (collapsed: boolean) => {
        props.callback(collapsed)
    }
    
    let accordeonBody = props.accordeonState.map((el)=> {return(<div>{el.title}</div>)})
    
    return (
        <div>
            <div onClick={()=>onClickHandler(!props.collapsed)}>Title</div>
            {props.collapsed === true ? accordeonBody : ''}
            <Immutable />
        </div>
    )
}