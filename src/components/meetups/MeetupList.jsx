import React from "react";
import MeetupItem from "./MeetupItem";
import styles from "./meetupList.module.css";

const MeetupList = ({ meetups }) => {
    return (
        <ul className={styles.list}>
            {meetups.map((meetup) => (
                <MeetupItem key={meetup.id} meetup={meetup} />
            ))}
        </ul>
    );
};

export default MeetupList;
