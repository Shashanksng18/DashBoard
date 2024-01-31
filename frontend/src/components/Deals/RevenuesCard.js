import React from "react";
import Card from "../Card/Card";
import style from "./Revenues.module.css";
import arrow from "../../utils/images/right_arrow.png";

const ReveneCard = () => {
  return (
    <Card className={style["main-card"]}>
      <div className={style.heading}>
        <h1>Revenues</h1>
      </div>
      <div className={style["revenue-percent"]}>
        <h1>15%</h1>
      </div>
      <div className={style.info}>
        <p>increase compared to last week</p>
      </div>
      <div className={style.report}>
        <button>Revenues report <img src={arrow}/></button>
      </div>
    </Card>
  );
};

export default ReveneCard;
