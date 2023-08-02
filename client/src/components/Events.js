import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import "../../css/events.css";

import EventModal from "./EventModal";
import ModalView from "./ModalView";

export default function Events() {
    const [eventList, setEventlist] = useState();
    const [eventView, setEventView] = useState(false);
    const default_image = "images/default_image.png";

    useEffect(() => {
        axios.get("/api/events").then((data) => {
            if (data.success === false) {
                setOtherErr(true);
            } else {
                console.log(data.data);
                setEventlist(data.data);
            }
        });
    }, []);

    return (
        <div id="events">
            {eventList &&
                eventList.map((x) => (
                    <img
                        src={x.evt_poster || default_image}
                        onClick={() => setEventView(x)}
                    />
                ))}
            {eventView && (
                <ModalView closeModal={() => setEventView(false)}>
                    <EventModal event={eventView} />
                </ModalView>
            )}
        </div>
    );
}
