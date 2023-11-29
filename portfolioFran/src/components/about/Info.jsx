import React from 'react'
import "./about.css"

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-briefcase about__icon'></i>
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">• 2 meses Contrato de Práctica</span>
        </div>

        <div className="about__box">
            <i class='bx bx-code-alt about__icon' ></i>
            <h3 className="about__title">Cursos</h3>
            <span className="about__subtitle">• BootCamp "Soy Henry"</span><br />
            <span className="about__subtitle">• FullStackDev UTN</span>
        </div>
    </div>
  )
}

export default Info