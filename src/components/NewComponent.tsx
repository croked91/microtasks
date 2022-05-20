import { table } from "console"
import { promises } from "fs"

type NewComponentType = {
    cars: Array<topCarsType>
}

type topCarsType = {
    manufacturer: string
    model: string
}


export const NewComponent: React.FC<NewComponentType> = (props) => {
    return (<ul>
        {props.cars.map((topCars: topCarsType, index: number) => {
            return (
                <li key={index}>
                    <span>{topCars.manufacturer}</span>
                    <span> {topCars.model}</span>
                </li>
            )
        })}
    </ul>
    )
}

export const NewComponent1: React.FC<NewComponentType> = (props) => {
    return (
        <div>
            <table>
                
                {props.cars.map((topCars: topCarsType, index: number) => {
                    return (
                        <tr key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{topCars.manufacturer}</td>
                                <td> {topCars.model}</td>
                            </tr>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

