import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../globalContext/context";
import Authorize from "./Authorize";
import useValidateAccess from "../hooks/useValidateAccess";

export default function Admin() {
    const [access] = useValidateAccess();
    const { globalState } = useContext(GlobalContext);
    useEffect(() => {
        console.log("global state:", globalState);
    });

    return (
        <div id="admin">
            {!access && !globalState.userAccessToken && <Authorize />}
            {access || globalState.userAccessToken ? (
                <div id="adminMenu">
                    <Link to="/mailinglist">Mailinglist</Link>
                    <Link to="/newevent">New Event</Link>
                </div>
            ) : null}
        </div>
    );
}
