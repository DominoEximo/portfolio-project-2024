import React , { useEffect } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import "./styles.scss"


const Skills = () => {

    useEffect(() => {
        document.title = 'Skills';
      }, []);

    return (
        <section id="skills" className="skills">

            <PageHeaderContent
                headerText="My Skills"
                icon={<HiAdjustmentsHorizontal size={40} />}
            />
            <div className="skills__content-wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform: 'translateX(0px)'
                                }}
                            >
                                <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                                <div className="skills__content-wrapper__inner-content__progressbar-container">
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity : 1", "opacity : 1"]}
                                                iterationCount="1"
                                            >
                                                <div key={j} className="progressbar-wrapper" >
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth="2"
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        trailWidth="2"
                                                        strokeLinecap="square"
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
export default Skills;