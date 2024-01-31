import React from "react";
import Card from "../Card/Card";
import style from "./TopCard.module.css";

const TopMonth = () => {
    return(
        <Card className={style['top-card']}>
            <div className={style.heading}>
                <p>Top Month</p>
            </div>
            <div className={style['info']}>
                <h2>November</h2>
                <span>2019</span>
            </div>
        </Card>
    )
}

export default TopMonth