import React from "react";
import { Form, Input,Button } from 'antd';
import './Header.css';
import { CheckOutlined,CloseOutlined ,UserOutlined ,WhatsAppOutlined } from '@ant-design/icons';
import Piccard from "./Piccard";
import { Router,Routes, Route, Link } from "react-router-dom";
import Swipe from "./Swipe";
const Card =() =>
{
   
    
    return (
        <>
        <div className="flex flex-col items-center">
      <div className="header"> <UserOutlined className="h_user"/><h1>Welcome!</h1> <WhatsAppOutlined className="h_close"/></div>
      <Piccard/>
      <center><nav>
                <Link to="/">Logout</Link>
              </nav></center>
        </div>
     </>
    )
    
}
export default Card;