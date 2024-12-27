// importing css
import "/src/css/LandingSection.css";

export default function LandingSection() {
    return (
        <>
            <div className="LandingSection">
                {/* flexed div */}
                <div className="upper">
                    <h1 className="Ball">This is a big image</h1>
                </div>
                <div className="lower">
                    <div className="content">
                        <div className="title">
                            <h1>Hi, I&apos;m zico</h1>
                        </div>
                        <div className="paragraph">
                            I've been programming for about two years now
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
