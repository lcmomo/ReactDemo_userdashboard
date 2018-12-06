import  React from  'react';
import {Menu,Icon} from 'antd';

const Header=({location})=>{
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
      <Menu.Item key="/users">
        <a href="/api/users">
          <Icon type="bars"/>Users
        </a>
      </Menu.Item>
      <Menu.Item key="/">
        <a href="/">
          <Icon type="home"/>Home
        </a>
      </Menu.Item>
      <Menu.Item key="/404">
        <a href="#">
          <Icon type="frown-circle"/>404
        </a>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva">
              dva
        </a>
      </Menu.Item>
    </Menu>
  );
}
export  default Header
