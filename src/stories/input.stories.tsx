import React, { useRef, useState, ChangeEvent } from 'react';


export default {
    title: 'input',
    component: 123,
};

export const UncontrolledInput = () => <input />

export const UseStateUncontrolledInput = () => {
    let [value, setValue] = useState('');

    return <>
        <input onChange={(event) => {
            const actualValue = event.currentTarget.value;
            setValue(actualValue)
        }} /> {value}
    </>
}
export const GetValueByButtonClickUncontrolledInput = () => {
    let [value, setValue] = useState('');
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


export const СontrolledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler} />

}



export const СontrolledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input checked={parentValue} type="checkbox" onChange={onChangeHandler}/>
    )
}

export const СontrolledSelect = () => {
    const [parentValue, setParentValue] = useState <string | undefined> (undefined)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option value="1">none</option>
            <option value="2">Minsk</option>
            <option value="3">Kazan</option>
            <option value="4">Shmazan</option>
            <option value="5">Ufa</option>
            <option value="6">Ufa</option>
        </select>
    )
}