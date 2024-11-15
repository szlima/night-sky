import { useContext } from 'react';
import { IoArrowUndo, IoArrowRedo } from 'react-icons/io5';

import { DrawingsContext } from '../contexts/DrawingsContext';

import './styles/header.css';

function Header(){
    const {
        drawings, nextDrawings, undoDrawing, redoDrawing
    }= useContext(DrawingsContext);

    return (
        <header className='header'>
            <h1 className='header__title'>Night sky</h1>
            <nav className="header__menu">
                <button type='button' className='menu__button' onClick={undoDrawing} disabled={!drawings.length}>
                    <IoArrowUndo/>
                </button>
                <button type='button' className='menu__button' onClick={redoDrawing} disabled={!nextDrawings.length}>
                    <IoArrowRedo/>
                </button>
            </nav>
        </header>
    );
}

export default Header;