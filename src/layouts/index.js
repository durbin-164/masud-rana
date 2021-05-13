import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Space } from 'antd';
import HomePage from '../pages/HomePage'
import Project from '../pages/Project'
import Achievement from '../pages/Achievement'

const { Header, Content, Footer } = Layout;

function PrimaryLayout(){
  return <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2'] } style={{float: 'left'}}>
        <Menu.Item key="1">Md. Masud Rana</Menu.Item>
    </Menu>
    <Menu theme="dark" mode="horizontal" style={{float: 'right'}}>
        <Menu.Item key="1">Project</Menu.Item>
        <Menu.Item key="2">Blog</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
    </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <div style={{ marginTop: 20}}>
          <HomePage/>
        </div>

        <div style={{ marginTop: 20}}>
          <Project/>
        </div>
      
        <div style={{ marginTop: 20}}>
            <Achievement/>
        </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>@Md. Masud Rana</Footer>
  </Layout>
  
}

export default PrimaryLayout