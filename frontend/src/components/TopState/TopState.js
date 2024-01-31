import React from "react";
import style from "./TopState.module.css";
import Card from "../Card/Card";

const TopState = () => {
  return (
    <Card className={style["main-container"]}>
      <div className={style.heading}>
        <h1>Top states</h1>
      </div>
      <div className={style["line-chart-container"]}>
        <div className={style["ny"]}>
          <span>ny</span>
          <span className={style.num}>120K</span>
        </div>
        <div className={style["ma"]}>
          <span>ma</span>
          <span className={style.num}>80K</span>
        </div>
        <div className={style["nh"]}>
          <span>nh</span>
          <span className={style.num}>70K</span>
        </div>
        <div className={style["or"]}>
          <span>or</span>
          <span className={style.num}>50K</span>
        </div>
      </div>
    </Card>
  );
};

export default TopState;
