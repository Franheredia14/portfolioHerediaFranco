import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <p className='work__description'>Desarrollo de una plataforma web dedicada a la comercializacion de residuos y/o materias primas para el reciclaje contribuyendo al concepto de Economia Circular.</p>
        <a href="https://market-residuos.vercel.app/" target='_blank' className='work__button'>
            App Web <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
};

export default WorksItems