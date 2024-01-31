import React from "react";
import style from "./Card.module.css"
const Card = ({children, className}) => {
    const receiveClass = className;
    return(
        <div className={`${receiveClass} ${style.card}`}>
            {children}
        </div>
    )
}

export default Card;