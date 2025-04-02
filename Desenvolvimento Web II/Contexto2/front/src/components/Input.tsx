import { useContext } from "react";
import { letterCtx } from "../contexts/LetterCtx";


export default function Input(){
    const {input, setInput}= useContext( letterCtx);
    return <input value={input} onChange={(e)=>setInput(e.target.value)}/>
}