import React from 'react';
import '../../styles/body/third-content.css';
import internet from '../../images/internet.png';
import banner from '../../images/banner.png';
const ThirdContent = () => {
    return (
        <div className='third-content'>
            <div className='third-content-container'>
            <img className='internet' src={internet} alt="" />
            <h2>Networking</h2>
            <input type="text"  placeholder='Nome' />
            <input type="text"  placeholder='Email' />
            <input type="text"  placeholder='Estado' />
            <div className='checkbox'>
            <input type="checkbox" name="" id="" />
            <p>Termos de uso. Política de privacidade </p>
            </div>

            <button>CADASTRAR</button>
            <p>Ja tem uma conta? <a href='#'>Logar</a></p>
            <div className='banner'>
                <img src={banner} alt="" />
            </div>
            </div>

        </div>
    );
};

export default ThirdContent;