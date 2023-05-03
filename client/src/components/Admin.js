import React, { useContext, useState } from "react";

import { GlobalContext } from "../globalContext/context";
import Authorize from "./Authorize";
import useValidateAccess from "../hooks/useValidateAccess";
import "../../css/admin.css";

//modals
import ModalView from "./ModalView";
import Mailinglist from "./Mailinglist";
import NewEvent from "./NewEvent";
import EditEvent from "./EditEvent";
import AddToLabel from "./AddToLabel";
import UploadToArchive from "./UploadToArchive";

export default function Admin() {
    const [access] = useValidateAccess();
    const { globalState } = useContext(GlobalContext);
    const [toggle, setToggle] = useState(false);
    const tools = [
        "MAILING LIST",
        "NEW EVENT",
        "EDIT EVENT",
        "ADD TO LABEL",
        "UPLOAD TO ARCHIVE",
    ];
    const modals = [
        <Mailinglist />,
        <NewEvent />,
        <EditEvent />,
        <AddToLabel />,
        <UploadToArchive />,
    ];
    const openModal = (i) => {
        setToggle(modals[i]);
    };

    return (
        <div id="admin">
            {!access && !globalState.userAccessToken && <Authorize />}
            {access || globalState.userAccessToken ? (
                <>
                    <div id="adminMenu">
                        {tools.map((x, i) => (
                            <div
                                className="tools"
                                onClick={() => openModal(i)}
                                key={i}
                            >
                                <strong>{x}</strong>
                            </div>
                        ))}
                    </div>
                    {toggle && (
                        <ModalView closeModal={() => setToggle(false)}>
                            {toggle}
                        </ModalView>
                    )}
                </>
            ) : null}
        </div>
    );
}
