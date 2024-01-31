import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Customers.module.css";
import one from "../../utils/images/one.png";
import two from "../../utils/images/two.png";
import three from "../../utils/images/three.png";
import four from "../../utils/images/four.png";
import { FaChevronDown } from "react-icons/fa6";
// import message from "../../utils/images/Frame 10.png";
// import setting from "../../utils/images/setting.png";
// import star from "../../utils/images/star.png";
// import column from "../../utils/images/column.png";
import arrow from "../../utils/images/right_arrow.png";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";

const customers = [
  {
    name: "chris criedkly",
    location: "supermarket villanova",
    image: one,
  },
  {
    name: "maggie johnson",
    location: "oasis organic inc.",
    image: two,
  },
  {
    name: "gael harry",
    location: "new york finest fruits",
    image: three,
  },
  {
    name: "jenna sullivan",
    location: "walmart",
    image: four,
  },
];
const Customers = () => {
  const [active, setActive] = useState(1);
  return (
    <Card className={style.customers}>
      <div className={style.heading}>
        <h1>customers</h1>
        <div className={style.sort}>
          Sort by <span>newest</span> <FaChevronDown size={10} />
        </div>
      </div>
      <section className={style["customer-section"]}>
        {customers.map((customer, index) => (
          <article className={`${index === 1 && style.active}`}>
            <img src={customer.image} />
            <div className={style['customer-info']}>
              <h1>{customer.name}</h1>
              <p>{customer.location}</p>
            </div>
            <div className={style.actions} style={index === active ? {visibility: "visible"}: {}}>
                <figure>
                 <LuMessageCircle style={{color: "#734A00"}}/>
                </figure>
                <figure>
                <FaRegStar style={{color: "#734A00"}}/>
                </figure>
                <figure>
                <LuPencil style={{color: "#734A00"}}/>
                </figure>
                <figure>
                <BsThreeDotsVertical style={{color: "#734A00"}}/>
                </figure>
            </div>
          </article>
        ))}
        <button className={style['show-all-btn']}><span>all customer</span><img src={arrow} /></button>
      </section>
    </Card>
  );
};

export default Customers;
