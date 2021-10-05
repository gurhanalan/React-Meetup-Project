import React from "react";
import styles from "./layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <main className={styles.main}>{props.children}</main>
        </div>
    );
};

export default Layout;
