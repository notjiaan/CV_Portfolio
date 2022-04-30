import React from 'react'
import '../css/sec-style/home-style.css';

const Homepage = () => {
    return (
        <>
            <div className="container-fluid  p-5 home-container" id="home">
                <div className="jumbotron container home-text-container">
                    <h4 className="py-3">Hi, I am </h4>
                    <h1 className="display-4  jiaan-abad-home ">JIAAN PATRICK ABAD </h1>
                    <h4 className='py-3 job-position'>Front-End Developer and Designer</h4>
                    <h3><a className="homepage-arrow" href="#about">&#8595;</a></h3>
                </div>
            </div>
        </>
    )
}

export default Homepage