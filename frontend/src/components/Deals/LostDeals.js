import React from "react";
import Card from "../Card/Card";
import style from "./Revenues.module.css";
import arrow from "../../utils/images/right_arrow.png";

const LostDeals = () => {
    return(
    <Card className={style["main-card"]}>
      <div className={style.heading}>
        <h1>Lost deals</h1>
      </div>
      <div className={style["revenue-percent"]}>
        <h1>4%</h1>
      </div>
      <div className={style.info}>
        <p>you closed 96 out of 100 deals</p>
      </div>
      <div className={style.report}>
        <button>All deals <img src={arrow}/></button>
      </div>
    </Card>
    )
}

export default LostDeals;