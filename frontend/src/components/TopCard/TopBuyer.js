import React from "react";
import Card from "../Card/Card";
import style from "./TopCard.module.css";
import maggie from "../../utils/images/two.png";

const TopBuyer = () => {
    return(
        <Card className={style['top-buyer']}>
            <div className={style.heading}>
                <p>Top buyer</p>
            </div>
            <div className={style['info']}>
                <img src={maggie}/>
                <p>maggie johnson</p>
                <span>oasis organic inc.</span>
            </div>
        </Card>
    )
}

export default TopBuyer;