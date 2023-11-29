import React, { useState } from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {

  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="skills section" id="skills">
        <h3 className="section__title">Habilidades</h3>
        <span className="section__subtitle">Nivel Técnico</span>

        <div className="skills__container container grid">
            <Frontend/>        
            <Backend/>
        </div>
        <span className="section__subtitle more__button skills__more" onClick={() => {toggleTab(1)}}>Ver más <i className="uil uil-arrow-right more__button-icon"></i></span>
        
        <div className="more__content">
        <div className={toggleState === 1 ? "more__modal active-modal" : "more__modal"}>
          <div className="more__modal-content">
            <i className="uil uil-times more__modal-close" onClick={() => {toggleTab(0)}}></i>

            <h3 className="more__modal-title">Habilidades Blandas</h3>

            <ul className="more__modal-more grid">
              <li className="more__modal-description">
                <i className="uil uil-check-circle more__modal-icon"></i>
                <p className="more__modal-info">Comunicación acertiva</p>
              </li>

              <li className="more__modal-description">
                <i className="uil uil-check-circle more__modal-icon"></i>
                <p className="more__modal-info">Proactividad</p>
              </li>

              <li className="more__modal-description">
                <i className="uil uil-check-circle more__modal-icon"></i>
                <p className="more__modal-info">Resolucón de problemas</p>
              </li>

              <li className="more__modal-description">
                <i className="uil uil-check-circle more__modal-icon"></i>
                <p className="more__modal-info">Pensamiento crítico</p>
              </li>

              <li className="more__modal-description">
                <i className="uil uil-check-circle more__modal-icon"></i>
                <p className="more__modal-info">Determinación</p>
              </li>

              <li className="more__modal-description">
                <i className="uil uil-check-circle more__modal-icon"></i>
                <p className="more__modal-info">Adaptabilidad</p>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Skills