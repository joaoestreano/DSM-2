
import { createContext, useState, } from "react";
import { LetterCtxProps } from "../types";

const letterCtx = createContext<LetterCtxProps>({} as LetterCtxProps);

function LetterProvider({ children }: Props) {
  const [input, setInput] = useState("");

  return (
    <letterCtx.Provider value={{input, setInput}}>
      {children}
    </letterCtx.Provider>
  );
}

interface Props {
  children:React.ReactNode;
}

export { letterCtx, LetterProvider };
