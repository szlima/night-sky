import { useContext } from 'react';
import { FaMoon, FaStar, FaCloud } from 'react-icons/fa';

import { ShapeContext } from '../contexts/ShapeContext';
import { DrawingsContext } from '../contexts/DrawingsContext';

import './styles/toolbox.css';

function Toolbox(){
    const {shapeOptions, setCurrentShape, isCurrentShape}= useContext(ShapeContext);
    const {containsMoon}= useContext(DrawingsContext);

    const getSelectionClass= shape =>
        isCurrentShape(shape) && 'toolbox__button--selected';

    return (
        <footer className="toolbox">
            <button type='button'
                className={`toolbox__button ${getSelectionClass(shapeOptions.fullMoon)}`}
                onClick={() => setCurrentShape(shapeOptions.fullMoon)}
                disabled={containsMoon()}>
                <FaMoon />
            </button>
            <button type='button'
                className={`toolbox__button ${getSelectionClass(shapeOptions.star)}`}
                onClick={() => setCurrentShape(shapeOptions.star)}>
                <FaStar />
            </button>
            <button type='button'
                className={`toolbox__button ${getSelectionClass(shapeOptions.cloud)}`}
                onClick={() => setCurrentShape(shapeOptions.cloud)}>
                <FaCloud />
            </button>
        </footer>
    );
}

export default Toolbox;