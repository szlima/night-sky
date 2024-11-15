import { createContext, useContext, useState } from 'react';

import { ShapeContext } from './ShapeContext';
import { ToolboxContext } from './ToolboxContext';

const inicialState= {
    drawings: [],
    nextDrawings: [],
    addDrawing: () => {},
    undoDrawing: () => {},
    redoDrawing: () => {},
    containsMoon: () => {}
};

const DrawingsContext= createContext(inicialState);

function DrawingsProvider({children}){
    const {currentShape, isMoonCurrentShape, isMoonShape, resetCurrentShape}= useContext(ShapeContext);
    const {setShowExtraOptions}= useContext(ToolboxContext);
    const [drawings, setDrawings]= useState([]);
    const [nextDrawings, setNextDrawings]= useState([]);

    const addDrawing= e => {
        setDrawings(previousDrawings => {
            const newDrawing= {
                type: currentShape,
                x: e.clientX,
                y: e.clientY
            };
            return [...previousDrawings, newDrawing];
        });
        setNextDrawings([]);
        setShowExtraOptions(false);

        if(isMoonCurrentShape())
            resetCurrentShape();
    };

    const undoDrawing= () => {
        let updatedDrawings= drawings;
        const lastDrawing= updatedDrawings.pop();

        setDrawings(updatedDrawings);
        setNextDrawings(previousNextDrawings =>
            [lastDrawing, ...previousNextDrawings]
        );
    };

    const redoDrawing= () => {
        let updatedNextDrawings= nextDrawings;
        const lastDrawing= updatedNextDrawings.shift();

        setDrawings(previousDrawings =>
            [...previousDrawings, lastDrawing]
        );
        setNextDrawings(updatedNextDrawings);
    };

    const containsMoon= () =>
        drawings.some(drawing => isMoonShape(drawing.type));

    return (
        <DrawingsContext.Provider value={{
            drawings, nextDrawings, addDrawing, undoDrawing, redoDrawing, containsMoon
        }}>
            {children}
        </DrawingsContext.Provider>
    );
}

export {DrawingsContext, DrawingsProvider};