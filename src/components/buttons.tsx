import React from "react"

type buttonType = {
    title: string
    callBack: ()=>void
}

export const Button: React.FC<buttonType> = (props) => {
   const onClickHandler = () =>{
       props.callBack()
   }
   
    return (
            <button onClick={onClickHandler}>{props.title}</button>
    )
}