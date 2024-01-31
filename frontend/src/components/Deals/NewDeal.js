import React from "react";
import Card from "../Card/Card";
import style from "./NewDeal.module.css";
import btn from "../../utils/images/btn.png"

const deals = [
    {
        name: "Fruit2Go"
    },
    {
        name: "Marshall's MKT"
    },
    {
        name: "CCNt"
    },
    {
        name: "Joana Mini-market"
    },
    {
        name: "Little Brazil Vegan"
    },
    {
        name: "Target"
    },
     {
        name: "Organic Place"
    },
    {
        name: "Morello's"
    }
]
const NewDeal = () => {
    return(
        <Card className={style['deal-container']}>
            <div className={style.heading}>
                <h1>New deals</h1>
            </div>
            <div className={style['all-deals']}>
                    {deals.map((deal) => (
                        <button className={style.deal}>
                            <img src={btn}/>
                            <span>{deal.name}</span>
                        </button>
                    ))}
            </div>
        </Card>
    )
}

export default NewDeal;