import React,{useState} from "react";
import TinderCard from 'react-tinder-card'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,UserAddOutlined,UserDeleteOutlined  } from '@ant-design/icons';
import './Header.css';
function Piccard()
{
    const { Meta } = Card;
    const [people,setPeople] = useState([
        {
            name: 'sahil',
            url : ''
        },
        {
            name : 'hsvhkds',
            url : ''
        },
        {
            name : 'sdids',
            url : ''
        }
    ]);
    
    return(
        <div className="lol">
           <center>
               <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <UserDeleteOutlined  key="setting" />,
      <UserAddOutlined key="edit" />,
      
    ]}
  >
    <Meta
      
      title="sahil singla"
      description="This is the description"
    />
  </Card>
  </center>
  <center>
               <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://imageio.forbes.com/specials-images/imageserve/60ede06c39d1b0ed3859d7ab/Facebook-CEO-Mark-Zuckerberg/0x0.jpg?fit=crop&format=jpg&crop=2155,1437,x0,y0,safe"
      />
    }
    actions={[
      <UserDeleteOutlined  key="setting" />,
      <UserAddOutlined key="edit" />,
      
    ]}
  >
    <Meta
      
      title="sahil singla"
      description="This is the description"
    />
  </Card>
  </center>
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://imageio.forbes.com/specials-images/imageserve/60ede06c39d1b0ed3859d7ab/Facebook-CEO-Mark-Zuckerberg/0x0.jpg?fit=crop&format=jpg&crop=2155,1437,x0,y0,safe"
      />
    }
    actions={[
      <UserDeleteOutlined  key="setting" />,
      <UserAddOutlined key="edit" />,
      
    ]}
  >
    <Meta
      
      title="sahil singla"
      description="This is the description"
    />
  </Card>
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://imageio.forbes.com/specials-images/imageserve/60ede06c39d1b0ed3859d7ab/Facebook-CEO-Mark-Zuckerberg/0x0.jpg?fit=crop&format=jpg&crop=2155,1437,x0,y0,safe"
      />
    }
    actions={[
      <UserDeleteOutlined  key="setting" />,
      <UserAddOutlined key="edit" />,
      
    ]}
  >
    <Meta
      
      title="sahil singla"
      description="This is the description"
    />
  </Card>
        </div>

    );
}

export default Piccard;