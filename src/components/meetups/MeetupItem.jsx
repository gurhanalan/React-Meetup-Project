import React, { useContext } from "react";
import Card from "../ui/Card";
import styles from "./meetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetUpItem = ({ meetup }) => {
    const { image, title, address, description, id } = meetup;
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id: id,
                title: title,
                description: description,
                image: image,
                address: address,
            });
        }
    };
    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remove from Favorites"
                            : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetUpItem;
