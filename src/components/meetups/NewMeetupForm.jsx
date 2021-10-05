import React from "react";
import Card from "../ui/Card";
import styles from "./newMeetupForm.module.css";
const NewMeetupForm = () => {
    return (
        <Card>
            <form className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="text" required id="image" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" required id="description" />
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
