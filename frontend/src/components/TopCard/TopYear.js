import React from "react";
import Card from "../Card/Card";
import style from "./TopCard.module.css";

const TopYear = () => {
    return(
        <Card className={style['top-card']}>
            <div className={style.heading}>
                <p>Top Year</p>
            </div>
            <div className={style['info']}>
                <h2>2023</h2>
                <span style={{fontSize: "400", color: "#454545"}}>96k gold so far</span>
            </div>
        </Card>
    )
}

export default TopYear;