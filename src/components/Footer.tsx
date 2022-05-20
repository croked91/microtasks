import { produceWithPatches } from "immer"

type typeOfBodyProps = {
    titleForFooter:string
}

const Footer: React.FC<typeOfBodyProps> = (props) => {
    return (
        <div>{props.titleForFooter}</div>
    )

}



export default Footer