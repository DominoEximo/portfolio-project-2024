import React, { useState ,useEffect} from "react";
import {Link} from 'react-router-dom';
import { HiArchiveBox } from "react-icons/hi2";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import './styles.scss';

const portfolioData = [
    {
        id: 2,
        name: "Webshop",
        image: ImageFour,
        link: 'https://github.com/DominoEximo/warehouseproject'
    },
    {
        id: 2,
        name: "REST API",
        image: ImageThree,
        link: 'https://github.com/DominoEximo/50HoursApp'
    },
    {
        id: 3,
        name: "Minecraft Mod",
        image: ImageTwo,
        link: 'https://github.com/DominoEximo/Minecraft_mod'
    },
    {
        id: 3,
        name: "Indie VideoGame",
        image: ImageOne,
        link: 'https://github.com/DominoEximo/DorkSouls'
    },
    {
        id: 4,
        name: "Movie Recommender",
        image: ImageFive,
        link: 'https://github.com/DominoEximo/movie_recommender'
    }
]

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Game Development'
    },
    {
        filterId: 4,
        label: 'Data Science'
    }
]



const Portfolio = () => {

    useEffect(() => {
        document.title = 'Portfolio';
      }, []);

    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);


    function handleFilter(currentId) {
        setFilteredValue(currentId);
    };

    function handleHover(index) {
        setHoveredValue(index);
    };

    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue);


    return (
        <section id="portfolio" className="portfolio">

            <PageHeaderContent
                headerText="My Portfolio"
                icon={<HiArchiveBox size={40} />}
            />
            <div className="portfolio__content">

                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item) => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>

                                {
                                    item.label
                                }

                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div
                                className="portfolio__content__cards__item"
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >

                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.image} />
                                    </a>
                                </div>
                                <div className="overlay">

                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <Link to={item.link} className="button">Visit</Link>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}
export default Portfolio;