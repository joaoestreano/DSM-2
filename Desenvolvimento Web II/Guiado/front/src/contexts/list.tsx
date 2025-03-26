import { useContext } from "react";
import { CtxCar } from "./CtxCar";

export default function List(){
    const {cars} = useContext(CtxCar);

    return <ol>
        {
            cars.map( (item,index)=>  <li key={index}>{item.model} - {item.color}</li>)
        }
    </ol>
}