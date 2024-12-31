// importing css
import "/src/css/LandingSection.css";

// import Threejs renderer
import webGL from "three/addons/capabilities/WebGL.js";
import GlobeRender from "../helpers/GlobeRender";
import { useEffect, useRef, useState } from "react";

export default function LandingSection() {
    const renderEl = useRef(null);
    const [globe, setGlobe] = useState(null);

    useEffect(() => {
        if (renderEl.current && !globe && webGL.isWebGL2Available()) {
            const newGlobe = new GlobeRender(
                document.querySelector("div.innerRender")
            );
            setGlobe(newGlobe);
        }
    }, [globe, renderEl]);

    useEffect(() => {
        if (globe) {
            globe.setupScene();
        }
    }, [globe]);

    return (
        <>
            <div className="LandingSection">
                {/* flexed div */}
                <div className="upper">
                    <div className="innerRender" ref={renderEl}></div>
                </div>
                <div className="lower">
                    <div className="content">
                        <div className="title">
                            <h2>Hi,I&apos;m zico</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                Fullstack developer with interests in game and
                                application development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
