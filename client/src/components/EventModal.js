import React from "react";
import "../../css/eventModal.css";

export default function EventModal({ event }) {
    return (
        <div id="event">
            <p>{event.evt_name}</p>
            <img src={event.evt_poster} />
            <div id="evt_date">
                <p>{event.start_date}</p>
                <p>{event.start_time}</p>
                <p>{event.end_date}</p>
                <p>{event.end_time}</p>
            </div>
            <p>{event.evt_description}</p>
        </div>
    );
}
