import React from 'react';
import '../../styles/body/fourth-content.css';
import whatsapp from '../../images/whatsapp.png';
const FourthContent = () => {
    return (
        <div className='fourth-content'>
            <h1>Como chegar</h1>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9199588615475!2d-35.870225399999974!3d-7.249950299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1dd56c7b510f%3A0x7f9090ed2cec933c!2sUNIFACISA%20-%20Centro%20Universit%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1731262100846!5m2!1spt-BR!2sbr" width="600" height="450"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contato'>
            <img src={whatsapp} alt="a" />
            <h2>Fale Conosco</h2>
            </div>

        </div>
    );
};

export default FourthContent;