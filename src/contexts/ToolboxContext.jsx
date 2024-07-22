import { createContext, useState } from "react";

const initialState= {
    showExtraOptions: false,
    setShowExtraOptions: () => {}
};

const ToolboxContext= createContext(initialState);

function ToolboxProvider({children}){
    const [showExtraOptions, setShowExtraOptions]= useState(false);

    return (
        <ToolboxContext.Provider value={{showExtraOptions, setShowExtraOptions}}>
            {children}
        </ToolboxContext.Provider>
    );
}

export {ToolboxContext, ToolboxProvider};