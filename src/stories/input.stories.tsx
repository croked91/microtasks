import React, {useRef, useState} from 'react';


export default {
    title: 'input',
   component: 123,
};

export const UncontrolledInput = () => <input />

export const UseStateUncontrolledInput = () => {
    let [value, setValue] = useState ('');

    return <>
    <input onChange={(event) => {const actualValue = event.currentTarget.value;
    setValue (actualValue)}}/> {value}
    </>
}
export const GetValueByButtonClickUncontrolledInput = () => {
    let [value, setValue] = useState ('');
    const inputRef = useRef<HTMLInputElement>(null)
    

const save = () => {
    let el = inputRef.current as HTMLInputElement
    setValue(el.value)
}

    return <>
    <input ref={inputRef} /> <button onClick={save}>save</button> {value}
    </>
}

export const СontrolledInputWithFixedValue = () => <input value={'123'} />
export const СontrolledInput = () => <input />