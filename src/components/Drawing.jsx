
import './styles/drawing.css';

function Drawing({type, x, y}){

    const drawingPosition= {
        top: y,
        left: x
    };

    return (
        <div className={`drawing drawing--${type}`} style={drawingPosition}></div>
    );
}

export default Drawing;