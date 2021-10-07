import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./mainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                        <span className={styles.badge}>
                            {favoritesCtx.totalFavorites}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
