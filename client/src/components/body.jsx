import React from 'react';
import '../styles/body.css';
import FirstContent from './content/first-content';
import SecondContent from './content/second-content';
import ThirdContent from './content/third-content';
import FourthContent from './content/fourth-content';


const Body = () => {
    return (
        <section className='body--content'>
          <FirstContent />
          <SecondContent />
          <ThirdContent />
          <FourthContent />
        </section>
    );
};

export default Body;