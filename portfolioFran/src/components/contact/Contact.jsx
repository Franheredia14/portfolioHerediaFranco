import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { toast } from 'react-toastify';

const Contact = () => {
    
    const [values, setValues] = useState({
        name:"",
        email: "",
        project: "",
    })

    const [formError, setFormError] = useState({
        name: false,
        email: false,
        project: false,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (values?.name.length === 0 || values?.email.length === 0) {
            setFormError({
                ...formError,
                name: values.name.length === 0,
                email: values.email.length === 0,
            });

            setFormSubmitted(true);
            return;
        }

        emailjs.sendForm('service_d9tyfpy', 'template_pd5ywtl', form.current, '_7sg7BJfxAFGizLSb')

        form.current.reset();
        setValues({ name: '', email: '', project: '' });
        setFormError({ name: false, email: false, project: false });
        setFormSubmitted(false);

        toast.success('Mensaje enviado!', {
            position: "bottom-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
        setFormError({...formError, [e.target.name]: false});
    }


    console.log(values);

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Ponte en contacto</h2>
        <span className="section__subtitle">Contáctame</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Habla conmigo</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">herediafrancojob@gmail.com</span>

                        <a href="mailto:herediafrancojob@gmail.com" className="contact__button">Escríbeme{" "}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">(+54)3516605223</span>

                        <a target='_blank' href="https://api.whatsapp.com/send?phone=543516605223&text=Hola, mas info!" className="contact__button">Escríbeme{" "}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">¿Quieres trabajar conmigo?</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Nombre</label>
                        <input type="text" onChange={onChange} name="name" className="contact__form-input" placeholder='Ingresa tu nombre'/>
                    </div>

                    <div className="span__error-container">
                    {formSubmitted && !values.name && <span className="span__error">* Debes ingresar un nombre para poder enviar el mensaje</span>}
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" onChange={onChange} name="email" className="contact__form-input" placeholder='Ingresa tu email'/>
                    </div>

                    <div className="span__error-container">
                    {formSubmitted && !values.email &&<span className="span__error">* Debes ingresar un mail para poder enviar el mensaje</span>}
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Proyecto o propuesta</label>
                        <textarea name="project" onChange={onChange} cols="30" rows="10" className="contact__form-input" placeholder='Cuéntame sobre tu proyecto o envíame tu propuesta'></textarea>
                    </div>
{/* 
                    <div className="span__error-container">
                        <span className="span__error">* Se enviará el mensaje sin texto en este campo</span>
                    </div> */}

                    <button type="submit" className="button button--flex">Enviar{" "} <i class="uil uil-location-arrow contact__form-submit"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact