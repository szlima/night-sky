import { createContext, useState } from "react";

const shapeOptions= {
    star: 'star',
    cloud: 'cloud',
    fullMoon: 'full-moon',
    newMoon: 'new-moon',
    waningCrescent: 'waning-crescent',
    waxingCrescent: 'waxing-crescent'
};

const initialState= {
    shapeOptions,
    currentShape: shapeOptions.star,
    setCurrentShape: () => {}
};

const ShapeContext= createContext(initialState);

function ShapeProvider({children}){
    const [currentShape, setCurrentShape]= useState(shapeOptions.star);

    return (
        <ShapeContext.Provider value={{shapeOptions, currentShape, setCurrentShape}}>
            {children}
        </ShapeContext.Provider>
    );
}

export {ShapeContext, ShapeProvider};