import React from "react";
import style from "./Sidbar.module.css";
import logo from "../../Logo.png";
import Card from "../Card/Card";
import dashboard from "../../utils/images/dashboard.png";
import customer from "../../utils/images/customer.png";
import allreport from "../../utils/images/all_reports.png";
import conversation from "../../utils/images/conversations.png";
import deal from "../../utils/images/deals.png";
import exporti from "../../utils/images/exports.png";
import geography from "../../utils/images/geography.png";
import UserInfo from "../UserInfo/UserInfo";
const Sidbear = () => {
    return(
        <Card className={style.sidebar}>
          <figure>
            <img src={logo} alt="logo"/>
          </figure>
         
          <ul>
            <li className={style.in}>
               <input type="search" placeholder="search"/>
            </li>
            <li>
                <img src={dashboard} alt="dashboard"/>
                <a href="/dashboard">Dashboard</a>
            </li>
            <li>
                <img src={customer} alt="customer"/>
                <a href="/customers">dashboard</a>
            </li>
            <li>
                <img src={allreport} alt="all_report"/>
                <a href="/all_rerports">all reports</a>
            </li>
            <li>
                <img src={geography} alt="geography"/>
                <a href="/geography">geography</a>
            </li>
            <li>
                <img src={conversation} alt="conversation"/>
                <a href="/conversations">conversations</a>
            </li>
            <li>
                <img src={deal} alt="deal"/>
                <a href="/deals">deals</a>
            </li>
            <li>
                <img src={exporti} alt="export"/>
                <a href="/export">export</a>
            </li>
          </ul>
          <UserInfo/>
        </Card>
    )
}

export default Sidbear;