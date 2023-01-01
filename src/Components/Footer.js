import { GAME_STATE_PLAYING } from './Constants'

const Footer = ({onNewGameClick, onSuggestClick, gameState}) => {
    return ( 
        <div className="panel footer">
            {
                gameState !== GAME_STATE_PLAYING &&
                <button onClick={onNewGameClick}>New Game</button>
            }
            {
                gameState === GAME_STATE_PLAYING &&
                <button onClick={onSuggestClick}>Suggest</button>
            }
        </div>
    );
}
    
export default Footer;
