import React from "react";

import style from '../Card/card.module.css';

const Card =(props)=>{
    return(
<div className={`${style.card} ${props.className}`}>
    {props.children}
</div>
    )
}