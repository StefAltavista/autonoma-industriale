import React, { useEffect, useContext } from "react";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";
import { GlobalContext } from "../globalContext/context";

export default function Authorize() {
    const [values, handleChange] = useStatefulFields();
    const { dispatch } = useContext(GlobalContext);

    const [thanks, isVisib, error, handleClick, token] = useAuthSubmit(
        "api/authorize",
        values
    );

    useEffect(() => {
        if (thanks && token) {
            dispatch({ type: "LOG_IN", payload: token });
        }
    }, [thanks, token]);

    return (
        <div>
            {isVisib && (
                <div className="authorize">
                    {error && (
                        <p className="error">
                            Something went wrong, please try again
                        </p>
                    )}
                    <input
                        className="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Submit</button>
                </div>
            )}
            {thanks && <p>Welcome Comrade</p>}
        </div>
    );
}
