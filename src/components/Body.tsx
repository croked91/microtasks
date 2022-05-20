import { produceWithPatches } from "immer"

type typeOfBodyProps = {
    titleForBody:string
}

const Body: React.FC<typeOfBodyProps> = (props) => {
    return (
        <div>{props.titleForBody}</div>
    )

}



export default Body