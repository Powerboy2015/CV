// importing css
import "/src/css/LandingSection.css";

// import Threejs renderer
import GlobeRender from "../helpers/GlobeRender";
import { useEffect, useRef, useState } from "react";

export default function LandingSection() {
    const renderEl = useRef(null);
    const [globe, setGlobe] = useState(null);

    useEffect(() => {
        if (renderEl.current && !globe) {
            const newGlobe = new GlobeRender(
                document.querySelector("div.upper")
            );
            setGlobe(newGlobe);
        }
    }, [globe, renderEl]);

    useEffect(() => {
        if (globe) {
            globe.CreateCube(1, 1, 1, 0x00ff00);
            globe.setCamera(0, 0, 5);
            globe.startAnimation();
        }
    }, [globe]);

    return (
        <>
            <div className="LandingSection">
                {/* flexed div */}
                <div className="upper" ref={renderEl}></div>
                <div className="lower">
                    <div className="content">
                        <div className="title">
                            <h2>Hi,I&apos;m zico</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                I&apos;ve been programming for about two years
                                now
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
