import React, { useState } from "react";
import { Menu, Space, Layout } from "antd";
import { upperCase } from "lodash";
import {
  CaretRightFilled,
  GatewayOutlined,
} from "@ant-design/icons";

import menuItems from "../../services/menu/index.json";

import DynamicIcon from "../core-component/Icon/iconComponent";
import style from "./style.module.scss";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

const { Sider } = Layout;

const cardContent = [
  "Tresuary Managment System",
  "Direct Debit/Invoice System",
  "Remote Cheque printing",
];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const renderMenuItems = (items, collapsed) => {
  return items.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <React.Fragment key={item.key}>
          <Menu.SubMenu
            key={item.key}
            icon={<DynamicIcon iconName={`${item.icon}`} label={item.label} isCollapsed={collapsed}/>}
            title={upperCase(item.label)}
          >
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
          {/* <span className={style['menu__submenu-label']}>{item.label}</span> */}
          <Menu.Divider style={{ backgroundColor: "#ffff" }} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={item.key}>
          <Menu.Item
            key={item.key}
            icon={<DynamicIcon iconName={`${item.icon}`} />}
          >
            {upperCase(item.label)}
          </Menu.Item>
          <Menu.Divider />
        </React.Fragment>
      );
    }
  });
};

const onClick = (e) => {
  console.log("click", e);
};

const MenuLeft = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleSidebar}
      breakpoint="lg"
      collapsedWidth="95"
      style={{
        color: "#fff",
        backgroundColor: "#4A5869",
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        width: 256
      }}
    >
      <Menu
        onClick={onClick}
        theme="dark"
        mode="vertical"
        style={{ backgroundColor: "#4A5869" }}
      >
       
        {renderMenuItems(menuItems, collapsed)}
        
        {collapsed ? (
              <Card
              hoverable
              className={style["menu__menu-card"]}
              cover={<GatewayOutlined className={style['card__bottom-card-icon']} />}
            >
            <p style={{width: "40px"}}>More Solution</p>
            </Card>
        ) : (
            <Card
          size="small"
          title={
            <Space>
              <GatewayOutlined />
              <span>More Solution</span>
            </Space>
          }
          className={style["menu__menu-card"]}
          headStyle={{ color: "#ffff" }}
        >
          <Space size="middle" direction="vertical">
            {cardContent.map((value, index) => (
              <Meta
                key={index}
                avatar={<CaretRightFilled />}
                description={<span style={{ color: "#ffff" }}>{value}</span>}
              />
            ))}
          </Space>
        </Card>
        )}
         
          
      </Menu>
    </Sider>
    </Layout>
  );
};

export default MenuLeft;
