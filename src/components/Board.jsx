import { useEffect, useRef, useState } from "react";
import { WINNING_CONDITIONS, tileBoardObject } from "../constants";
import { UseGameParameters } from "../store/context"


export const Board = () => {
    const {nextPlayer, setNextPlayer, hasWinner, setHasWinner} = UseGameParameters();
    const [tileBoard, setTileBoard] = useState(tileBoardObject);
    const ref = useRef(null);

    const resetTile = () => {
        setTileBoard(tileBoardObject);
        setHasWinner(false);
        setNextPlayer("X");
    }

    useEffect(() => {
       checkWinner();
       if (ref.current) {
        ref.current.classList.add(nextPlayer);
        }

    } , [nextPlayer]);

    const checkWinner = () => {
        WINNING_CONDITIONS.map(possibility => {
            const [a, b, c] = possibility;
            if (tileBoard[a] && tileBoard[a] === tileBoard[b] && tileBoard[a] === tileBoard[c]) {
                
                setTimeout(( ) => {
                    if (confirm("Tebrikler Kazandınız, Yeniden Başlamak İster Misiniz?")) {
                        resetTile();
                    }
                }, 200)
                setHasWinner(true);
            }
        })
    }

    const handleClickTile = (element) => {
        if(hasWinner) return;


   
        if (tileBoard[element] === null) {

            setTileBoard(prevState => {
                return {
                    // mevcut durumun guncel halini korur
                    ...prevState,
                    [element]: nextPlayer
                }
            })


            setNextPlayer(nextPlayer => nextPlayer === "X" ? "O" : "X")
            
        }
    }
    console.log(tileBoard);
    return (
        <div className="boxAndButton">
        <div className="bigBox">
            {[...Array(9).keys()].map((element, index) => {
                return (
                    <div className="smallBox" 
                         key={index}
                         onClick={() => handleClickTile(element)}
                         >
                            {tileBoard[element] != null 
                            ? 
                            (<p key={index} className="content" ref={ref}>{`${tileBoard[element]}`}</p>) 
                            : 
                            " "
                            }
                    </div>
                )
            })

            }
        </div>
        <button className="resteBtn" onClick={resetTile} >🔄️</button>
        </div>
    )
}