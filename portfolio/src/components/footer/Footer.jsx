import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sofia Genchi</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/sofia-genchi" className="home__social-icon" target={'_blank'}><i class="uil uil-linkedin"></i></a>

                <a href="https://github.com/SofiaGenchi" className="home__social-icon" target={'_blank'}><i class="uil uil-github"></i></a>
            </div>

            <span className='footer__copy'>
                &#169; SofiaGenchi. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer