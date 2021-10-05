import React from "react";
import Card from "../ui/Card";
import styles from "./meetupItem.module.css";

const MeetUpItem = ({ meetup }) => {
    const { image, title, address, description } = meetup;
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
                    <button>To Favorites</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetUpItem;
