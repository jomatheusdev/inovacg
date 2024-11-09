import React from 'react';
import PageLayout from './layout/pageLayout';
import '../styles/header.css';
import Carousel from '../libs/carrossel';

const Header = () => {
    return (
            <header className="header">
                <div className="Carrosel--img">
                <Carousel />
                </div>
                <div className='menu'>
                    <nav className="nav">
                        <ul>
                            <li><a href="#home">Sobre nós</a></li>
                            <li><a href="#about">Equipe</a></li>
                            <li><a href="#services">Captação</a></li>
                            <li><a href="#contact">Tendencias</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
};

export default Header;