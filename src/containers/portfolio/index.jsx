import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent/index";

const Portfolio=() =>{
    return(
        <section id="portfolio" className="portfolio">
            
            <PageHeaderContent
            headerText = "My Portfolio"
            icon = {<BsInfoCircleFill size={40}/>}
            />

        </section>
    )
}
export default Portfolio;