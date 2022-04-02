import logo from './logo.svg';
import { Form, Input,Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './App.css';
import { Router,Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import Card from './Card';
import Swipe from './Swipe';
import 'antd/dist/antd.css'; 

import Piccard from './Piccard';
import Anonymous from './Anonymous';
function App() {
  return (
<div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gin" element={<Gin />} />
        <Route path="Login" element={<Login />} />
        <Route path="Card" element={<Card />} />
        <Route path="Anonymous" element={<Anonymous />} />
        <Route path="Swipe" element={<Swipe />} />
      </Routes>
</div>
  );
}
function Gin()
{
  return(
<div>
<h1>Welcome to React Router!</h1>
<Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
     
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      </Form>
      <center>
<Button type="primary">Primary Button</Button>
</center>
<nav>
        <Link to="/">About</Link>
      </nav>
</div>
  )
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <SmileOutlined />
      </main>
     
     <pre> <nav>
        <Link to="/Login">Login</Link>
      </nav>
      <nav>
        <Link to="/Anonymous">Anonymous Login</Link>
      </nav></pre>
      <nav>
        <Link to="/Swipe">Sign up</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App;
