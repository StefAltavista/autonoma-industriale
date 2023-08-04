import React, { useState } from "react";
import "../../css/newEvent.css";
import axios from "../utils/axios";

import readImage from "../utils/readImage";
import uploadImage from "../utils/uploadImage";
import NewEventInputs from "./NewEventInputs";

export default function NewEvent() {
    const [error, setError] = useState();
    const [poster, setPoster] = useState();
    const [imgFile, setImgFile] = useState();

    // const [poster, setPoster] = useState(
    //     "images/default_image.png"
    // );

    const [eventData, setEventData] = useState({
        // evt_name: "",
        // start_date: "",
        // start_time: "",
        // end_date: "",
        // end_time: "",
        // evt_location: "",
        // evt_description: "",
        // evt_poster: "",
        // collaborators: "",
        // published: false,
    });
    const handleInput = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleImage = async (img) => {
        let preview = await readImage(img);
        setPoster(preview);
        setImgFile(img);
    };

    const submit = async () => {
        const imgUrl = await uploadImage(imgFile);
        console.log(imgUrl);
        setEventData({ ...eventData, evt_poster: imgUrl });

        // axios
        //     .post("/api/newevent", eventData)
        //     .then(({ data }) => {
        //         if (!data.success) {
        //             setError(true);
        //         } else {
        //             location.reload();
        //         }
        //     })
        //     .catch((err) => {
        //         setError(err);
        //     });

        console.log(eventData);
    };

    return (
        <div id="newEventModal">
            <h3>{eventData.evt_name || "New Event"}</h3>
            <div id="newEventForm">
                <NewEventInputs
                    handleInput={handleInput}
                    handleImage={handleImage}
                />

                <div id="posterPreview">
                    <img src={poster} />
                </div>
            </div>

            <button onClick={submit}>Submit</button>
        </div>
    );
}
