import React, { useState } from "react";
import "../../css/newEvent.css";

export default function NewEvent() {
    const [eventData, setEventData] = useState({
        evt_name: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        evt_location: "",
        evt_description: "",
        collaborators: "",
        published: false,
    });
    const fields = [
        "evt_name",
        "start_date",
        "start_time",
        "end_date",
        "end_time",
        "evt_location",
        "evt_description",
        "collaborators",
    ];
    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };
    const submit = () => {
        console.log(eventData);
    };

    return (
        <div id="newEventModal">
            <h3>{eventData.evt_name || "New Event"}</h3>
            <div id="newEventForm">
                <div className="inputs">
                    {fields.map((x, i) => {
                        let type =
                            x == "start_time" || x == "end_time"
                                ? "time"
                                : "text";
                        return (
                            <div className="eventInput" key={i}>
                                <p>{x}</p>
                                <input
                                    type={type}
                                    name={x}
                                    onChange={handleChange}
                                ></input>
                            </div>
                        );
                    })}
                    <div>
                        <p>Public</p>
                        <input
                            type="ratio"
                            name="published"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <div id="posterPreview">
                        <input
                            type="file"
                            name="evt_poster"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <button onClick={submit}>Submit</button>
        </div>
    );
}
