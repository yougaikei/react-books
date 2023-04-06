import React from "react";
import Nav from "./Navigation";

function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    );
}

export default Layout;