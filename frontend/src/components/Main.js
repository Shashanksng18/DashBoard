import React from "react";
import Sidbear from "../components/Sidebar/Sidebar";
import ReveneCard from "../components/Deals/RevenuesCard";
import LostDeals from "../components/Deals/LostDeals";
import QuaterGoal from "../components/QuarterGoal/QuarterGoal";
import Customers from "../components/Customers/Customers";
import Growth from "../components/Growth/Growth";
import TopMonth from "../components/TopCard/TopMonth";
import TopYear from "../components/TopCard/TopYear";
import TopBuyer from "../components/TopCard/TopBuyer";
import Chat from "../components/Chat/Chats";
import TopState from "../components/TopState/TopState";
import NewDeal from "../components/Deals/NewDeal";

const Main = () => {
  return (
    <section style={{ display: "flex" }}>
      <div style={{ width: "280px" }}>
        <Sidbear />
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <ReveneCard />
          <LostDeals />
          <QuaterGoal />
        </div>
        <div style={{display: 'flex'}}>
          <Customers />
          <div>
            <Growth/>
            <div style={{display: 'flex'}}>
                <TopMonth/>
                <TopYear/>
                <TopBuyer/>
            </div>
          </div>
        </div>
        <div style={{display: "flex"}}>
          <Chat/>
          <TopState/>
          <NewDeal/>
        </div>
      </div>
    </section>
  );
};

export default Main;
