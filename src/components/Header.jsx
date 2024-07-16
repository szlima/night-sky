
import { IoArrowUndo, IoArrowRedo } from 'react-icons/io5';

import './styles/header.css';

function Header(){

    const handleUndoButton= () => {};

    const handleRedoButton= () => {};

    return (
        <header className='header'>
            <h1 className='header__title'>Night sky</h1>
            <nav className="header__menu">
                <button type='button' className='menu__button' onClick={handleUndoButton}>
                    <IoArrowUndo/>
                </button>
                <button type='button' className='menu__button' onClick={handleRedoButton}>
                    <IoArrowRedo/>
                </button>
            </nav>
        </header>
    );
}

export default Header;