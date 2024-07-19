import { createContext, useState } from "react";

const shapeOptions= {
    star: 'star',
    cloud: 'cloud',
    fullMoon: 'full-moon',
    newMoon: 'new-moon',
    waningCrescent: 'waning-crescent-moon',
    waxingCrescent: 'waxing-crescent-moon'
};

const moonShape= 'moon';

const initialState= {
    shapeOptions,
    currentShape: shapeOptions.star,
    setCurrentShape: () => {},
    isCurrentShape: () => {},
    isMoonShape: () => {},
    resetCurrentShape: () => {}
};

const ShapeContext= createContext(initialState);

function ShapeProvider({children}){
    const [currentShape, setCurrentShape]= useState(shapeOptions.star);

    const isCurrentShape= shape => (currentShape === shape);

    const isMoonShape= shape => shape.includes(moonShape);

    const resetCurrentShape= () => setCurrentShape(shapeOptions.star);

    return (
        <ShapeContext.Provider value={{
            shapeOptions, currentShape, setCurrentShape,
            isCurrentShape, isMoonShape, resetCurrentShape
        }}>
            {children}
        </ShapeContext.Provider>
    );
}

export {ShapeContext, ShapeProvider};