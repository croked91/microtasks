import React from "react";
import { title } from 'process';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

let items = [
    {title: 'grisha', value: 1},
    {title: 'petya', value: 2},
    {title: 'misha', value: 3}
]

export function Select (props: SelectPropsType){
    return (
        <div>
            <div>{}</div>
            {items.map(i => <div>{i.title}</div>)}
        </div>
    )
}