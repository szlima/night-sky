import { useContext } from 'react';

import { ShapeContext } from '../contexts/ShapeContext';

import './styles/drawing.css';

function Drawing({type, x, y}){
    const {isMoonShape}= useContext(ShapeContext);

    const drawingPosition= {
        top: y,
        left: x
    };

    return (
        <div className={`drawing ${isMoonShape(type) && 'drawing--moon'} drawing--${type}`} style={drawingPosition}></div>
    );
}

export default Drawing;