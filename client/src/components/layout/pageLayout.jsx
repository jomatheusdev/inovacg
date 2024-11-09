import React from 'react';
import '../../styles/layout.css'

const PageLayout = ({ headerContent, mainContent, footerContent }) => {
    return (
        <section className='content'>
            <div className="page-layout">
             {headerContent}
             {mainContent}
             {footerContent}
            </div>
        </section>
    );
};

export default PageLayout;
