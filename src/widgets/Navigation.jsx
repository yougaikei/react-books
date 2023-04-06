import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
    const items = [
        {
            label: <Link to="/">首页</Link>,
            key: "/",
        },
        {
            label: <Link to="/shop">商城</Link>,
            key: "/shop",
        },
    ];
    const { location } = useSelector((state) => state.router);
    const { pathname } = location;
    return <Menu mode="horizontal" selectedKeys={[pathname]} items={items} />;
}

export default Navigation;
