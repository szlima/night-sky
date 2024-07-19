import { useContext } from 'react';
import { FaMoon, FaStar, FaCloud } from 'react-icons/fa';

import { ShapeContext } from '../contexts/ShapeContext';

import './styles/toolbox.css';

function Toolbox(){
    const {shapeOptions, currentShape, setCurrentShape}= useContext(ShapeContext);

    const getSelectionClass= shape =>
        (currentShape === shape) && 'toolbox__button--selected';

    return (
        <footer className="toolbox">
            <button type='button'
                className={`toolbox__button ${getSelectionClass(shapeOptions.fullMoon)}`}
                onClick={() => setCurrentShape(shapeOptions.fullMoon)}>
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