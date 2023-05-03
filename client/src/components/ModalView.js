import React from "react";
import "../../css/modal.css";

export default function ModalView({ children, closeModal }) {
    return (
        <div id="modalBackground">
            <p id="close" onClick={closeModal}>
                X
            </p>
            {children}
        </div>
    );
}
