import React, { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "../../css/welcome.css";

export default function Welcome({ children }) {
    const vidRef = useRef();
    const [enter, setEnter] = useState();
    const [muteIcon, setMuteIcon] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        if (!enter) {
            vidRef.current.muted = false;
        }
        click ? setEnter(true) : setClick(true);
    };
    const toggleMute = (e) => {
        if (e.target.className == "mute") {
            setMuteIcon(!muteIcon);
            vidRef.current.muted = !vidRef.current.muted;
        }
    };
    return (
        <BrowserRouter>
            <div id="welcome" onClick={handleClick}>
                <video
                    className="video"
                    autoPlay
                    loop
                    muted={true}
                    ref={vidRef}
                >
                    <source src="videos/Teaser21march.mp4" type="video/mp4" />
                </video>
                {!enter && (
                    <img
                        src="images/Logo_Cimney_transparent.png"
                        className="logo"
                        alt="enter website"
                    />
                )}

                {enter && <div className="enter">{children}</div>}
            </div>
            {enter && (
                <div className="mute">
                    <img
                        className="mute"
                        onClick={(e) => toggleMute(e)}
                        src={
                            muteIcon
                                ? "icons/soundOn.png"
                                : "icons/soundOff.png"
                        }
                    />
                </div>
            )}
        </BrowserRouter>
    );
}
