import { useContext, useState } from "react"
import { CtxCar } from "./CtxCar";

export default function Form(){
    const [model,setModel] = useState("");
    const [color,setColor] = useState("");
    const {add} = useContext(CtxCar);
    return<>
        <div>
            <label> Modelo</label>
            <input value={model} onChange={(e)=> setModel(e.target.value)}/>
        </div>
        <div>
            <label>Cor</label>
            <input value={color} onChange={(e)=>setColor(e.target.value)} />
        </div>
        <button onClick={() => add ({color,model})}>Salvar</button>
    </>;
}