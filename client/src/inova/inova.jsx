import React from 'react';
import PageLayout from '../components/layout/pageLayout';
import Header from '../components/header';
import Footer from '../components/footer';
import Body from '../components/body'; // Certifique-se de importar o Body

const InovaCG = () => {
    return (
        <PageLayout
            headerContent={<Header />}
            mainContent={<Body />}
            footerContent={<Footer />}
        />
    );
};

export default InovaCG;
