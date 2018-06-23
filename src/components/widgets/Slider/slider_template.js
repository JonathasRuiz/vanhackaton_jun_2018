import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

import styles from './style.css';

const SliderTemplates = (props) => {

    let template=null;

    const settings={
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidestoScroll:1,
        ...props.settings
    }    

    switch(props.type){
        case "featured":
        template=props.data.map((item,i)=>{
            return(
                <div key={i} style={{color:'black'}}>
                <div className={styles.featured_item}>          
                        <div className={styles.featured_image} style={{background:`url(./img/logo.png)`}}>
                        </div>
                        <Link to="/">
                            <div className={styles.featured_caption}>
                            {item.item}
                            </div>
                        </Link>
                    </div>        
                </div>
            )
        })
        break;

        default:
        template=null;
    }
    

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    
    );
};

export default SliderTemplates;