import React from 'react';
import Header3 from '../Components/Header/Header3';
import Footer from '../Components/Footer/Footer';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
           <Header3></Header3>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;