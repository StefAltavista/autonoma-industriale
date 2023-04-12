import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

export default function Mailinglist() {
    const [mailinglist, setMailinglist] = useState(false);
    const [otherErr, setOtherErr] = useState(false);

    useEffect(() => {
        axios.post("/api/mailinglist").then((data) => {
            if (data.success === false) {
                setOtherErr(true);
            } else {
                setMailinglist(data.data);
            }
        });
    }, []);

    const closeModal = () => {
        setMailinglist(false);
    };

    return (
        <div id="mailinglist">
            {otherErr && (
                <p className="error">
                    Fuck, something went wrong, call Luca please
                </p>
            )}
            {mailinglist && (
                <div className="resultsContainer">
                    <p className="closer" onClick={closeModal}>
                        X
                    </p>
                    <h3 className="mailingList">Mailing List</h3>
                    <p className="total">[ Total: {mailinglist.length} ]</p>
                    {mailinglist.map((email, idx) => {
                        return (
                            <div key={idx} className="email">
                                <p className="email">
                                    <strong>{email.email}</strong>
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
