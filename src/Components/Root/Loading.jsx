import React from 'react';
import Footer from './../Routes components/footer/Footer';

const Loading = () => {
    return (
        <>
        <div className='w-full h-[65vh] justify-center items-center flex'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Loading;