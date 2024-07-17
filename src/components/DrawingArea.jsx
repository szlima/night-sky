
import { useContext } from 'react';

import { DrawingsContext } from '../contexts/DrawingsContext';
import Drawing from './Drawing';

import './styles/drawingArea.css';

function DrawingArea(){
    const {drawings, addDrawing}= useContext(DrawingsContext);

    return (
        <div className="drawing-area" onClick={addDrawing}>
            {
                drawings.map((drawing, i) =>
                    <Drawing key={i} type={drawing.type} x={drawing.x} y={drawing.y}/>
                )
            }
        </div>
    );
}

export default DrawingArea;