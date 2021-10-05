import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./newMeetupForm.module.css";
const NewMeetupForm = () => {
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const meetupData = {
            title: titleInput.current.value,
            image: imageInput.current.value,
            address: addressInput.current.value,
            description: descriptionInput.current.value,
        };

        console.log(meetupData);
    };

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInput} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="text" required id="image" ref={imageInput} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        required
                        id="address"
                        ref={addressInput}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        rows="5"
                        required
                        id="description"
                        ref={descriptionInput}
                    />
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
