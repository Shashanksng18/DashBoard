import React from "react";
import Card from "../Card/Card";
import style from "./QuarterGoal.module.css";
import arrow from "../../utils/images/right_arrow.png";

const QuaterGoal = () => {
    return(
        <Card className={style['quarter-goal']}>
            <div className={style.heading}>
                <h1>quarter goal</h1>
            </div>
            <div className={style.circle}>
                <span>84%</span>
            </div>
            <div className={style['all-goals']}>
               <button> All goals <img src={arrow}/></button>
            </div>
        </Card>
    )
}

export default QuaterGoal;