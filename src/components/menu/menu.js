import { Menu, Button } from 'antd';
import React from 'react';
import './menu.css';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BarChartOutlined,
    SketchOutlined,
    PieChartOutlined,
    ExperimentOutlined,
    FormOutlined,
    DesktopOutlined,
    MailOutlined,
} from '@ant-design/icons';

import director from '../../../src/director.jpeg';

const { SubMenu } = Menu;

class Mailmenu extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className='menubar'>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <div className="user d-flex flex-column justify-content-center align-items-center"> 
                        <img className="directorImg mb-2" src={director} alt="art director"></img>
                        <p>Art Director</p>
                    </div>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        Dashboards
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SketchOutlined />}>
                        Layouts
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        Graphs
                    </Menu.Item>

                    <SubMenu key="sub1" icon={<MailOutlined />} title="Mailbox">
                        <Menu.Item key="5">Inbox</Menu.Item>
                        <Menu.Item key="6">Email view</Menu.Item>
                        <Menu.Item key="7">Compose email</Menu.Item>
                        <Menu.Item key="8">Email templates</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<PieChartOutlined />}>
                        Metrics
                    </Menu.Item>
                    <Menu.Item key="10" icon={<ExperimentOutlined />}>
                        Widgets
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FormOutlined />}>
                        Forms
                    </Menu.Item>
                    <Menu.Item key="12" icon={<DesktopOutlined />}>
                        App Views
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}


export default Mailmenu;