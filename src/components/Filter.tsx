import { useState } from "react";
import FilterHomeWork from './FilterHomework'

export type filterType = "all" | "dollars" | "rouble"



const Filter = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<filterType>("all")



    let currentMoney = money;
    if (filter === "rouble") {
        currentMoney = money.filter((filterdMoney) => filterdMoney.banknots === "RUBLS")
    }
    if (filter === "dollars") {
        currentMoney = money.filter((filterdMoney) => filterdMoney.banknots === "Dollars")
    }


    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }


    return (
        <>
            <FilterHomeWork cur={currentMoney} onC={onClickFilterHandler}/>
        </>
    )
}

export default Filter