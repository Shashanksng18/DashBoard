import React from "react";
import one from "../../utils/images/one.png";
import style from "./UserInfo.module.css";
const UserInfo = () => {
    return (
      <div className={style["user-info"]}>
        <div className={style['user-detail']}>
          <img src={one} />
          <div className={style['user-role']}>
            <h4>Gustavo Xavier</h4>
            <button>admin</button>
          </div>
        </div>
        <button className={style.setting}>settings</button>
        <button className={style.logout}>logout</button>
      </div>
    );
}

export default UserInfo;