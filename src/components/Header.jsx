import { useContext } from 'react';
import { IoArrowUndo, IoArrowRedo } from 'react-icons/io5';

import { DrawingsContext } from '../contexts/DrawingsContext';

import './styles/header.css';

function Header(){
    const {undoDrawing}= useContext(DrawingsContext);

    const handleRedoButton= () => {};

    return (
        <header className='header'>
            <h1 className='header__title'>Night sky</h1>
            <nav className="header__menu">
                <button type='button' className='menu__button' onClick={undoDrawing}>
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