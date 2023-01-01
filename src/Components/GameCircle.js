const GameCircle = ({id,className, onCircleClicked}) => {
    return ( 
        <div className={`gameCircle ${className}`} onClick = {() => onCircleClicked(id)}></div>
    );
}
 
export default GameCircle;