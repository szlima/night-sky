
import { FaMoon, FaStar, FaCloud } from 'react-icons/fa';

import './styles/toolbox.css';

function Toolbox(){

    const handleMoonButton= () => {};

    const handleStarButton= () => {};

    const handleCloudButton= () => {};

    return (
        <footer className="toolbox">
            <button type='button' className='toolbox__button' onClick={handleMoonButton}>
                <FaMoon />
            </button>
            <button type='button' className='toolbox__button' onClick={handleStarButton}>
                <FaStar />
            </button>
            <button type='button' className='toolbox__button' onClick={handleCloudButton}>
                <FaCloud />
            </button>
        </footer>
    );
}

export default Toolbox;