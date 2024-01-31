import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import style from "./Growth.module.css";
import LineChart from "../../components/LineChart/LineChart";

const API_KEY = process.env.REACT_APP_GET_CSV_DATA;

const Growth = () => {
  const [data, setData] = useState([]);
  console.log(API_KEY)
  const fetchData = async () => {
    const response = await fetch(`https://dash-board-cyan.vercel.app/get_csv_data`);
    if(!response.ok) {
      throw new Error("Cannot fech")
    }
    const data = await response.json();
    setData(data);
    // return data;
  }
  useEffect(() => {
    fetchData();
  }, [])
    return(
       <Card className={style['growth-section']}>
        <div className={style.head}>
        <h1>Growth</h1>
        <select name="yearly">
          <option>Yearly</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
        </select>
        </div>
        <div className={style.chart}>
        <LineChart data={data}/>
         </div>
       </Card>
    )
}

export default Growth;