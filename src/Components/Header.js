import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from './Constants'
const Header = ({ gameState, currentPlayer, winPlayer }) => {

    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div>Player {currentPlayer} Turn</div>
            case GAME_STATE_WIN:
                return <div>Player {winPlayer} wins</div>
            case GAME_STATE_DRAW:
                return <div>Game Draw</div>
            default:
        }
    }
    return (
        <div className="panel header">
            <div className="header-text">
                {renderLabel()}
            </div>
        </div>
    );
}

export default Header;
