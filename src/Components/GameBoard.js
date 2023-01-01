import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, getComputerMove } from "./Helper";
import { PLAYER_0, PLAYER_1, PLAYER_2, GAME_STATE_PLAYING, GAME_STATE_WIN, GAME_STATE_DRAW } from './Constants'
import { useEffect, useState } from "react";

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(PLAYER_0))
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING)
    const [winPlayer, setWinPlayer] = useState(PLAYER_0)

    const initGame = () => {
        setGameBoard(Array(16).fill(PLAYER_0))
        setCurrentPlayer(PLAYER_1)
        setGameState(GAME_STATE_PLAYING)
    }

    useEffect(() => {
        initGame()
    }, [])

    const initBoard = () => {
        let circles = []
        for (let i = 0; i < 16; i++) {
            circles.push(renderCircle(i))
        }
        return circles
    }
    const circleClicked = (id) => {

        if (gameBoard[id] !== PLAYER_0) return
        if (gameState !== GAME_STATE_PLAYING) return

        if (isWinner(gameBoard, id, currentPlayer)) {
            setWinPlayer(currentPlayer)
            setGameState(GAME_STATE_WIN)
        }

        if (isDraw(gameBoard, id, currentPlayer)) {
            setWinPlayer(PLAYER_0)
            setGameState(GAME_STATE_DRAW)
        }

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer
                return circle
            })
        })
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
    }
    const suggestMove = () => {
        circleClicked(getComputerMove(gameBoard))
    }
    const renderCircle = (id) => {
        return <GameCircle id={id} key={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }
    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
        </>
    );
}

export default GameBoard;