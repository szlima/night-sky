import { useState } from 'react';

import Drawing from './Drawing';

import './styles/drawingArea.css';

function DrawingArea(){
    const [drawings, setDrawings]= useState([]);

    const handleDrawingArea= e => {
        setDrawings(previousDrawings => {
            const newDrawing= {
                type: 'moon',
                x: e.clientX,
                y: e.clientY
            };
            return [...previousDrawings, newDrawing];
        });
    };

    return (
        <div className="drawing-area" onClick={handleDrawingArea}>
            {
                drawings.map((drawing, i) =>
                    <Drawing key={i} type={drawing.type} x={drawing.x} y={drawing.y}/>
                )
            }
        </div>
    );
}

export default DrawingArea;