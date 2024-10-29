import { useContext } from "react";
import { TitleColorContext } from "../src/context/TitleColorContent";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext)

    if(!context) {
        console.log("Context não encontrado")
    }

    return context;
};