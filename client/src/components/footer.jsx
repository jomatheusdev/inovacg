import React from 'react';
import '../styles/footer.css';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a href="https://www.instagram.com/ecossistemainovacao/">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/ecossistemainovacao/">
                        <img src={facebook} alt="Facebook" />
                    </a></div>
                <p>Powered by Ecossistema de Inovação &copy; </p>
                <nav className="footer-nav">
                    <a href="/about">Sobre nós</a>
                    <a href="/team">Equipe</a>
                    <a href="/funding">Captação</a>
                    <a href="/trends">Tendências</a>
                    <a href="/contact">Contato</a>
                    <a href="/events">Eventos</a>
                    <a href="/results">Resultado</a>
                    <a href="/projects">Projetos</a>
                    <a href="/communication">Comunicação</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;