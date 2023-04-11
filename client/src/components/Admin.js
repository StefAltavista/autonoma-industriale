import React, { useState, useEffect } from "react";
import { useStatefulFields } from "../hooks/useStatefulFields";
import { useAuthSubmit } from "../hooks/useAuthSubmit";
import axios from "../utils/axios";

export default function Admin() {
    const [users, setUsers] = useState([]);
    const [final, setFinal] = useState(false);
    const [otherErr, setOtherErr] = useState(false);
    const [values, handleChange] = useStatefulFields();
    const [thanks, isVisib, error, handleClick] = useAuthSubmit(
        "api/authorize",
        values
    );

    const lister = (e) => {
        e.preventDefault();
        axios.post("/api/mailinglist").then((data) => {
            if (data.success === false) {
                setOtherErr(true);
            } else {
                console.log("DATA", data.data);
                setUsers(data.data);
                setFinal(true);
            }
        });
    };

    const closeModal = () => {
        setFinal(false);
    };

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
            {thanks && (
                <div className="getList">
                    <button onClick={lister}>GET LIST</button>
                </div>
            )}
            {otherErr && (
                <p className="error">
                    Fuck, something went wrong, call Luca please
                </p>
            )}
            {final && (
                <div className="resultsContainer">
                    <p className="closer" onClick={closeModal}>
                        X
                    </p>
                    <h3 className="mailingList">Mailing List</h3>
                    <p className="total">[ Total: {users.length} ]</p>
                    {users.map((person, idx) => {
                        return (
                            <div key={idx} className="person">
                                <p className="email">
                                    <strong>{person.email}</strong>
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
