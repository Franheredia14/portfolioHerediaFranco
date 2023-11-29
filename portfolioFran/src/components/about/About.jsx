import React from 'react'
import FranAbout from '../../assets/FranAbout.png'
import Info from './Info'
import CV from '../../assets/CVFrancoHeredia.pdf'
import "./about.css"

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">Acerca de mi</h2>
        <span className="section__subtitle">Introducción</span>

        <div className="about__container container grid">
            <img src={FranAbout} alt="" className="about__img" />
            <div className="about__data">
                <Info/>

                <p className="about__description">Desarrollador Web FullStack. Mi compromiso con la mejora constante me motiva a abrazar nuevos desafíos y tecnologías. Siempre persigo metas claras en mi carrera y busco oportunidades que me impulsen a convertirme en una mejor versión de mí mismo. Destaco por mi capacidad de aprendizaje rápido, mi pasión por auto-superarme y mi habilidad para adaptarme y crecer dentro de cualquier ámbito.</p>

                <a download="" href={CV} className="button button--flex">Descargar CV 
                    <svg class="button__icon"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="1" d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About