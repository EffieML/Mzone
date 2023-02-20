import React from 'react';
import mzonelogo from '../../img/mzonelogo.png'
import githublogo from '../../img/githublogo.png'
import linkedin from '../../img/linkedin.jpg'
import portfolio from '../../img/portfolio.png'
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <div className='footer-container-inner'>
                <div className='footer-logo'>

                    <img src={mzonelogo} className='nav-bar1-logo-img' alt='mzone' />

                </div>
                <div className='footer-links'>
                    <div className='footer-logoname1'>Ming Liu</div>
                </div>
                <div className='footer-logo-container'>
                    <a href='https://effieml.github.io/' target="_blank">
                        <div className='footer-links'>
                            <img src={portfolio} alt='linkedin' />
                            <div className='footer-logoname'>Portfolio</div>
                        </div>
                    </a>
                </div>
                <div className='footer-logo-container'>
                    <a href='https://www.linkedin.com/in/effie-liu-b57372261/' target="_blank">
                        <div className='footer-links1'>
                            <img src={linkedin} alt='linkedin' />
                            <div className='footer-logoname'>LinkedIn</div>
                        </div>
                    </a>
                </div>
                <div className='footer-logo-container'>
                    <a href='https://github.com/EffieML/Mzone' target="_blank">
                        <div className='footer-links'>
                            <img src={githublogo} alt='github' />
                            <div className='footer-logoname'>GitHub</div>
                        </div>
                    </a>
                </div>
                <div className='acad-container'>
                    <div className='acad-inner'>Inspired by Amazon</div>
                    <div className='acad-inner'>Academic Use Only</div>
                </div>
            </div>

        </div>
    )


}

export default Footer;
