import { createContext, useContext } from "react";

export const GameParameters = createContext(null);

export function UseGameParameters() {
    return useContext(GameParameters);
}