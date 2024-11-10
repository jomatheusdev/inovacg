import React from 'react';
import '../../styles/body/second-content.css';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import email from '../../images/email.png';
import panda from '../../images/panda2.jpeg';
import banner from '../../images/banner.png';
const SecondContent = () => {
    return (
        <div className='second-content'>
            <div className='innerCircle'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='circle'>
                <div className='circle-img'>
                    <img src='' alt='circle-img' />
                </div>

            </div>
            <h2>Juliana Dutra</h2>
            <p>Sistema de informação</p>


            <div className='icons'>
                <img className='social-media' src={instagram} alt='instagram' />
                <img className='social-media' src={facebook} alt='facebook' />
                <img className='social-media' src={email} alt='e-mail' />
            </div>
            <h2> Foi Destaque com E.InovCG</h2>
            <div className='imagens-b2-container'>
                <img className='imagens-b2' src={panda} alt='imagem1' />
                <img className='imagens-b2' src={panda} alt='imagem2' />
                <img className='imagens-b2' src={panda} alt='imagem3' />

            </div>
            <div className='iframe'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/awxmQQmHBXI?si=HiTLn_otMCVGn2ZX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='banner'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default SecondContent;