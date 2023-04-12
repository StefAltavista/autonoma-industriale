import React, { useState } from "react";
import { useStatefulFields } from "../hooks/useStatefulFields";

export default function NewEvent() {
    const [value, handleChange] = useStatefulFields();
    const fields = [
        "evt_name",
        "start_date",
        "start_time",
        "end_date",
        "end_time",
        "evt_location",
        "evt_poster",
        "evt_description",
        "collaborators",
        "published",
    ];

    const submit = () => {
        console.log(value);
    };

    return (
        <div id="newEvent">
            {fields.map((x) => {
                let type =
                    x == "published"
                        ? "checkbox"
                        : x == "start_time" || "end_time"
                        ? "time"
                        : "text";
                return (
                    <div className="eventInput">
                        <p>{x}</p>
                        <input
                            type={type}
                            name={x}
                            onChange={handleChange}
                        ></input>
                    </div>
                );
            })}

            <button onClick={submit}>Submit</button>
        </div>
    );
}
