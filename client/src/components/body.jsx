import React from 'react';
import '../styles/body.css';
import FirstContent from './content/first-content';
import SecondContent from './content/second-content';
import ThirdContent from './content/third-content';
import FourthContent from './content/fourth-content';
import FifthContent from './content/fifth-content';

const Body = () => {
    return (
        <section>
          <FirstContent />
          <SecondContent />
          <ThirdContent />
          <FourthContent />
          <FifthContent />
        </section>
    );
};

export default Body;