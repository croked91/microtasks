import React, { useState,KeyboardEvent } from "react";
import s from "./Select.module.css"

let localState = [
    { name: "Ten", id: 1 }, { name: "Twenty", id: 2 }, { name: "Thirty", id: 3 }
]

type SelectCustomType = {
    callback: (value: any)=>void
}



export const SelectCustom = (type: SelectCustomType) => {

    const [age, setAge] = useState("")
    const [x, setX] = useState(false)
    const [z, setZ] = useState(false)


    let setTitleHandler = (el: string) => {
        if (el === "None") {
            setAge("")
            setX(!x)
            setZ(true)
        } else {
            setAge(el)
            setX(!x)
            setZ(true)
        }
    }



    let i = localState.map((el, index) =>
        <li tabIndex={0} key={index} onClick={() => setTitleHandler(el.name)}
            className={el.name === age ? s.activeLishka + " " + s.lishka : s.lishka}>
            {el.name}
        </li>)

    let onOffListHandler = () => {
        setX(!x)
        setZ(true)
    }

    let onBlurHandler = () => {
        setZ(false)
        setX(false)
    }



    return (
        <div tabIndex={0} onBlur={onBlurHandler} className={s.rootRoot}>
            <div onClick={onOffListHandler} className={z ? s.root + " " + s.rootNone + " " + s.borderBottomOn : s.root}>
                <label className={z ? s.labelTop : s.labelSelect}>Age</label>
                <label className={z ? s.labelListShow : s.labelListHidden}>{age}</label>
                <svg className={x ? s.svgOpen : s.svg}><path className={s.path} d="M7 10l5 5 5-5z"></path></svg>
            </div>
            <div tabIndex={1} className={x ? s.rootList : s.rootlistOff}>
                <ul tabIndex={2}  className={s.list}>
                    <li onClick={() => setTitleHandler("None")} className={s.lishka + " " + s.none}>None</li>
                    {i}
                </ul>
            </div>
        </div>
    )
}

