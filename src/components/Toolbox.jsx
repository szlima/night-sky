import { useContext } from 'react';
import { FaMoon, FaStar, FaCloud } from 'react-icons/fa';
import {
    WiMoonFull, WiMoonNew, WiMoonWaningCrescent4, WiMoonWaxingCrescent3
} from 'react-icons/wi';

import { ShapeContext } from '../contexts/ShapeContext';
import { ToolboxContext } from '../contexts/ToolboxContext';
import { DrawingsContext } from '../contexts/DrawingsContext';

import './styles/toolbox.css';

function Toolbox(){
    const {shapeOptions, setCurrentShape, isCurrentShape, isMoonCurrentShape}= useContext(ShapeContext);
    const {showExtraOptions, setShowExtraOptions}= useContext(ToolboxContext);
    const {containsMoon}= useContext(DrawingsContext);

    const getButtonClass= shape =>
        isCurrentShape(shape) && 'toolbox__button--selected';

    const getDefaultButtonClass= shape =>
        (!showExtraOptions) && getButtonClass(shape);

    const getOptionsButtonClass= () =>
        (showExtraOptions || isMoonCurrentShape()) && 'toolbox__button--selected';

    const handleMoonButton= () => setShowExtraOptions(previous => !previous);

    const setMoonCurrentShape= shape => {
        setCurrentShape(shape);
        setShowExtraOptions(false);
    };

    return (
        <footer className="toolbox">
            <button type='button'
                className={`toolbox__button ${getOptionsButtonClass()}`}
                onClick={handleMoonButton} disabled={containsMoon()}>
                <FaMoon />
            </button>
            <button type='button'
                className={`toolbox__button ${getDefaultButtonClass(shapeOptions.star)}`}
                onClick={() => setCurrentShape(shapeOptions.star)}>
                <FaStar />
            </button>
            <button type='button'
                className={`toolbox__button ${getDefaultButtonClass(shapeOptions.cloud)}`}
                onClick={() => setCurrentShape(shapeOptions.cloud)}>
                <FaCloud />
            </button>

            <div className={`toolbox__options ${!showExtraOptions && 'toolbox__options--disabled'}`}>
                <button type='button'
                    className={`options__button ${getButtonClass(shapeOptions.fullMoon)}`}
                    onClick={() => setMoonCurrentShape(shapeOptions.fullMoon)}>
                    <WiMoonFull />
                </button>
                <button type='button'
                    className={`options__button ${getButtonClass(shapeOptions.waningCrescent)}`}
                    onClick={() => setMoonCurrentShape(shapeOptions.waningCrescent)}>
                    <WiMoonWaningCrescent4 />
                </button>
                <button type='button'
                    className={`options__button ${getButtonClass(shapeOptions.newMoon)}`}
                    onClick={() => setMoonCurrentShape(shapeOptions.newMoon)}>
                    <WiMoonNew />
                </button>
                <button type='button'
                    className={`options__button ${getButtonClass(shapeOptions.waxingCrescent)}`}
                    onClick={() => setMoonCurrentShape(shapeOptions.waxingCrescent)}>
                    <WiMoonWaxingCrescent3 />
                </button>
            </div>
        </footer>
    );
}

export default Toolbox;