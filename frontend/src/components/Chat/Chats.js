import React from "react";
import style from "./Chat.module.css";
import Card from "../Card/Card";
import chat1 from "../../utils/images/chat1.png";
import chat2 from "../../utils/images/chat2.png";
import chat3 from "../../utils/images/chat3.png";
import chat4 from "../../utils/images/chat4.png";

const Chat = () => {
    return(
        <Card className={style['chat']}>
            <div className={style['chat-info']}>
                <h1>chats</h1>
                <p>2 unread messages</p>
            </div>
            <div className={style['img-container']}>
                <figure>
                    <img src={chat1} alt="chat1"/>
                    <span></span>
                </figure>
                <figure>
                    <img src={chat2} alt="chat2"/>
                    <span></span>
                </figure>
                <figure>
                    <img src={chat3} alt="chat3"/>
                </figure>
                <figure>
                    <img src={chat4} alt="chat4"/>
                </figure>
            </div>
        </Card>
    )
}

export default Chat;