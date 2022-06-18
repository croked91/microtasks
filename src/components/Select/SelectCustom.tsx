import React, { useState } from "react";
import s from "./Select.module.css"

let localState = [
    { name: "Ten" }, { name: "Twenty" }, { name: "Thirty" }
]



export const SelectCustom = () => {

    const [age, setAge] = useState("")
    const [x, setX] = useState(false)


    let i = localState.map(el => <li className={s.lishka}>{el.name}</li>)

    let onOfListHandler = () => {
        setX(!x)
    }

    return (
        <div className={s.rootRoot}>
            <div onClick={onOfListHandler} className={s.root}>
                <label className={s.labelSelect}>Age</label>
                <svg className={s.svg}><path className={s.path} d="M7 10l5 5 5-5z"></path></svg>
            </div>
            <div className={x ? s.rootList : s.rootlistOff}>
                <ul className={s.list}>
                    <li className={s.lishka + " " + s.none}>None</li>
                    {i}
                </ul>
            </div>
        </div>
    )
}