import React from "react";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export default function Unsubscribe() {
    const [values, handleChange] = useStatefulFields();
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "api/unsubscribe",
        values
    );

    return (
        <div>
            {isVisib && (
                <div className="header">
                    <img src="/images/logoAutonoma%20copy.png" />
                </div>
            )}
            <div className="app">
                {isVisib && (
                    <div className="content">
                        {error && (
                            <p className="error">
                                Looks like your email is not here
                            </p>
                        )}
                        <input
                            name="mail"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <button onClick={handleClick}>Unsubscribe</button>
                    </div>
                )}
                {thanks && <h2 className="seeya">GoodBye</h2>}
            </div>
        </div>
    );
}
