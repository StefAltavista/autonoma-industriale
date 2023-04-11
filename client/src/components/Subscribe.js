import React from "react";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";
import { Link } from "react-router-dom";

export default function Subscribe() {
    const [values, handleChange] = useStatefulFields();
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "api/subscribe",
        values
    );

    return (
        <div>
            <div className="content">
                {error && (
                    <p className="error">
                        Something went wrong, please try again
                    </p>
                )}
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Submit</button>
            </div>

            {thanks && <h2 className="seeya">See you soon</h2>}
            <Link to={"/unsubscribe"}>
                <p className="unsubscribe">Unsubscribe</p>
            </Link>
        </div>
    );
}
