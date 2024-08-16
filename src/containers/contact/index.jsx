import React, {useEffect, useState} from "react";
import { AiFillPhone } from "react-icons/ai";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser';
import "./styles.scss";

const Contact = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [description,setDescription] = useState('');

    useEffect(() => {
        document.title = 'Contact';
      }, []);

      const sendEmail = (e) =>{
        e.preventDefault();
        
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_PUBLIC_KEY);

        setName('');
        setEmail('');
        setDescription('');
        alert("Email sent successfully!");
      }

    return (
        <section id="contact" className="contact">

            <PageHeaderContent
                headerText="My Contact"
                icon={<AiFillPhone size={40} />}
            />

            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <form onSubmit={sendEmail}>
                        <div className="contact__content__form">
                            <div className="contact__content__form__controls-wrapper">
                                <div className="name-wrapper">
                                    <input value={name} onChange={(e) => setName(e.target.value)} required name="name" className="inputName" type={'text'} />
                                    <label htmlFor="name" className="nameLabel">Name</label>
                                </div>
                                <div className="email-wrapper">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} required name="email" className="inputEmail" type={'text'} />
                                    <label htmlFor="email" className="emailLabel">Email</label>
                                </div>
                                <div className="description-wrapper">
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required name="description" className="inputDescription" type={'text'} rows={5} />
                                    <label htmlFor="description" className="descriptionLabel">Message</label>
                                </div>
                            </div>
                            <button className="button" >Submit</button>
                        </div>
                    </form>
                </Animate>

            </div>

        </section>
    )
}
export default Contact;