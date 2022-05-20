import { filterType } from "./Filter"



const FilterHomeWork = (props: { 
    cur: Array<{ banknots: string, value: number, number: string }>,
onC:(nameButton:filterType) => void
}) => {
    return (
        <>
            <ul>
                {props.cur.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span>  {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{ marginLeft: "30px" }}>
                <button onClick={(setnameButton) => props.onC("all")}>all</button>
                <button onClick={(setnameButton) => props.onC("rouble")}>rouble</button>
                <button onClick={(setnameButton) => props.onC("dollars")}>dollars</button>
            </div>
        </>
    )

}

export default FilterHomeWork