import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

/* const DUMMY_DATA = [
    {
        id: "m1",
        title: "This is a first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
            "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
        id: "m2",
        title: "This is a second meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Meetupstreet 5, 12345 Meetup City",
        description:
            "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
];  */

const AllMeetups = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        fetch(
            "https://react-meetup-project-c8a5b-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);

                const meetupData = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };
                    meetupData.push(meetup);
                }

                setLoadedMeetups(meetupData);
            });
    }, []);

    if (isLoading) {
        return <p>The page is loading</p>;
    }

    return (
        <div>
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
};

export default AllMeetups;
