import { useContext } from "react";
import { CounterContext } from "../src/context/CounterContext";

export const useCounterContext = () => {

    const context = useContext(CounterContext)

    // se não tem contexto
    if(!context) {
        console.log("Contexto não encontrado")
    }

    return context;
}