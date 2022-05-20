import { Button } from "./buttons";
import { useState } from "react";



const FnUS = () => {

    let [a, setA] = useState(1)

 const onClickHandler = () => {
     setA(++a)
     console.log(a)   
 }

 const onClickHandlerReset = () => {
    setA(0)
    console.log(a)   
}

const onClickHandlerMultiplic = () => {
    setA(a = a*2)
    console.log(a)   
}

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Number</button>
            <button onClick={onClickHandlerReset}>0</button>
            <button onClick={onClickHandlerMultiplic}>x2</button>
        </div>
    )
    
}

export default FnUS 