import { useState } from "react";
import { GameParameters } from "./context";

export const DataProvider = ({children}) => {
    const [nextPlayer, setNextPlayer] = useState('X');
    const [hasWinner, setHasWinner] = useState("");

    return <GameParameters.Provider 
                value={{nextPlayer, setNextPlayer, hasWinner, setHasWinner}}
            >   {children}
            </GameParameters.Provider>
}