import { createContext, useState } from 'react';

const inicialState= {
    drawings: [],
    setDrawings: () => {}
};

const DrawingsContext= createContext(inicialState);

function DrawingsProvider({children}){
    const [drawings, setDrawings]= useState([]);

    const handleDrawings= e => {
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
        <DrawingsContext.Provider value={{drawings, handleDrawings}}>
            {children}
        </DrawingsContext.Provider>
    );
}

export {DrawingsContext, DrawingsProvider};