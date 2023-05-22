import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import * as Icons from "react-icons/fa";
import {
  BankOutlined,
  CheckOutlined,
  CustomerServiceOutlined,
  FaHeart,
  ProjectOutlined,
  SecurityScanOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

const DynamicIcon = ({ iconName, color = null, label, isCollapsed }) => {
  const iconMap = {
    FaLaptopCode: DashboardOutlined,
    FaDiagramProject: ProjectOutlined,
    FaHeart: CustomerServiceOutlined,
    FaServicestack: CustomerServiceOutlined,
    FaMoneyCheck: CreditCardOutlined,
    FaMoneyBill: IdcardOutlined,
    FaBuildingColumns: BankOutlined,
    FaShieldHalved: SecurityScanOutlined,
    FaReceipt: UsergroupAddOutlined,
    CaretUpOutlined: CaretUpOutlined,
    CaretDownOutlined: CaretDownOutlined,
  };

  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null; // You can render a loading state or fallback icon here
  }

  return isCollapsed ? (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span
        style={{
          position: "relative",
          bottom: "-12px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "66px",
        }}
      >
        {label}
      </span>
      <IconComponent style={{ marginTop: "-45px" }} />
    </div>
  ) : (
    <IconContext.Provider value={{ size: "2em", color: "blue" }}>
      <>
        <IconComponent />
      </>
    </IconContext.Provider>
  );
};
export default DynamicIcon;
