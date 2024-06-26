import { UseGameParameters } from "../store/context"

export const Header = () => {
    const {nextPlayer, hasWinner} = UseGameParameters();

    return (
        <>
            <h3 className="mainTitle"><span>TIC</span>- <span>TAC</span>- <span>TOE</span></h3>
            <div className="subHeader">
                <p>{`Next Player: ${nextPlayer}`}</p>
                {/* ikinci sorguda hasWinner varsa ve birinci kosul yanlissa anlami var. üclü kosul kullanimi */}
                <p>{`Winner: ${hasWinner && nextPlayer === "X" ? "O" : hasWinner ? "X": " "}`}</p>
            </div>
        </>
    )
}