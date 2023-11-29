import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Franco</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Acerca de mi</a>
                </li>

                <li>
                    <a href="#work" className="footer__link">Proyectos</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Habilidades</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/francoheredia14/"className="footer__social-link" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://github.com/Franheredia14"className="footer__social-link" target="_blank">
                    <i className="uil uil-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/franco-heredia-454b9a277/"className="footer__social-link" target="_blank">
                    <i className="uil uil-linkedin"></i>
                </a>
            </div>
            <span className='footer__copy'>
            © Heredia Franco. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer