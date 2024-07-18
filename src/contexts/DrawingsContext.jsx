import { createContext, useState } from 'react';

const inicialState= {
    drawings: [],
    nextDrawings: [],
    addDrawing: () => {},
    undoDrawing: () => {},
    redoDrawing: () => {}
};

const DrawingsContext= createContext(inicialState);

function DrawingsProvider({children}){
    const [drawings, setDrawings]= useState([]);
    const [nextDrawings, setNextDrawings]= useState([]);

    const addDrawing= e => {
        setDrawings(previousDrawings => {
            const newDrawing= {
                type: 'moon',
                x: e.clientX,
                y: e.clientY
            };
            return [...previousDrawings, newDrawing];
        });
        setNextDrawings([]);
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

    return (
        <DrawingsContext.Provider value={{
            drawings, nextDrawings, addDrawing, undoDrawing, redoDrawing
        }}>
            {children}
        </DrawingsContext.Provider>
    );
}

export {DrawingsContext, DrawingsProvider};