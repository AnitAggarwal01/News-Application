import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import styles from './slider.module.css';
const SliderTemplate = (props)=>{
    let template = null ;
    const settings ={
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 500,
        ...props.settings
    }
    switch(props.type){
        case 'featured':
        template=props.data.map((item,i)=>{
            return(
                <div key={i}>
                    <div className={styles.featured_item}>
                        <div className={styles.featured_image}style={{backgroundImage:`url(/images/articles/${item.image})`}}></div>
                        <Link to={`/articles/${item.id}`}>
                            <div className={styles.featured_caption}>
                                {item.title}
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
            break;
        default:
            template = null ;
    }
    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )
}
export default SliderTemplate ;