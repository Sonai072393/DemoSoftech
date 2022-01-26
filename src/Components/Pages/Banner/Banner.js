import React from 'react';

import style from './banner.module.css';
import banner from '../../UI/Img/ERP-Banner1-1536x560.png';

const Banner =()=>{
    return(
        <div >
            <img src={banner} alt='banner' className={style.banner} />
        </div>
    );
}

export default Banner;