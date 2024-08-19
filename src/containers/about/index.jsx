import React ,{useEffect} from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaDev, FaDatabase } from 'react-icons/fa';
import { GiWarPick, GiMineralHeart } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { Animate } from 'react-simple-animate';
import "./styles.scss";

const About = () => {

    useEffect(() => {
        document.title = 'About';
      }, []);
    
    const personalDetails = [
        {
            label: "Name",
            value: "Papp Dávid",
        },
        {
            label: "Age",
            value: "22",
        },
        {
            label: "Address",
            value: "Hungary, Kálmánháza",
        },
        {
            label: "Email",
            value: "PappDavid32@gmail.com",
        },
        {
            label: "Contact no",
            value: "+36 306618148",
        }
    ];

    const jobSummary = 'I\'m a passionate Junior Developer, eager to start my career in the tech industry. While I may have zero years of professional experience, I have honed my skills through personal projects and self-learning. Furthermore I have a strong foundation in Java, and I\'m excited to bring my enthusiasm for problem-solving and learning to a dynamic team. I\'m looking forward to improving as I embark on this journey in software development.'

    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <h3>Junior Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                    <Animate play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(700px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <GiMineralHeart size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <GiWarPick size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>


                </div>

            </div>

        </section>
    )
}
export default About;