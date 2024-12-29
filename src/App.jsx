// importing css
import "./css/App.css";

// importing components
import Curtain from "./components/Curtain";
import ContentSection from "./components/ContentSection";
import PhoneCurtain from "./components/PhoneCurtain";
import DesktopNav from "./components/DesktopNav";

// importing page sections
import LandingSection from "./components/LandingSection";

// importing functions
import mathFunctions from "./helpers/mathFunctions";
import GsapTimelines from "./helpers/GsapTimelines";
import { useEffect, useState } from "react";

function App() {
    const [sections, setSections] = useState([]);
    const [currentSection, setCurrentSection] = useState(0);
    const [scrollIsActive, setScrollIsActive] = useState(false);

    // part of the navigation
    function ScrollToPage(newSection) {
        ChangeActiveClass(newSection);
        setCurrentSection(newSection);
        GsapTimelines.AnimatePanel(sections, newSection, sections.length);
    }

    function ChangeActiveClass(newActive) {
        let currentActive = document.querySelector("li > a.active");

        // if we give the sectionNumber it will automatically find the correct navlink.
        if (typeof newActive === "number") {
            newActive = document.querySelectorAll("li > a")[newActive];
        }

        currentActive.classList.remove("active");
        newActive.classList.add("active");
        return currentActive;
    }

    // ads the ability to scroll up and down the page
    window.onwheel = (event) => {
        if (!scrollIsActive) {
            return console.warn("waiting for intro animation to finish...");
        }

        // increases or decreases currentsection value based on going up or down, also made a clamp for it.
        if (event.deltaY < 0) {
            let newcurrent = currentSection + 1;
            ScrollToPage(
                mathFunctions.ClampInt(0, newcurrent, sections.length - 1)
            );
        } else if (event.deltaY > 0) {
            let newcurrent = currentSection - 1;
            ScrollToPage(
                mathFunctions.ClampInt(0, newcurrent, sections.length - 1)
            );
        }
    };

    // resets window so I don't cry about it being halfway if it shouldn't be
    useEffect(() => {
        window.scrollTo(0, 0);

        let data = document.querySelectorAll("section.Content");
        setSections(data);
    }, []);

    const isDesktop = window.innerWidth > 768 ? true : false;

    return (
        <>
            {isDesktop ? (
                <>
                    <Curtain
                        TimelineFinish={() => {
                            setScrollIsActive(true);
                        }}
                    ></Curtain>
                    <DesktopNav
                        ScrollToPageNumber={ScrollToPage}
                        ChangeActiveClass={ChangeActiveClass}
                    ></DesktopNav>
                </>
            ) : (
                <PhoneCurtain
                    TimelineFinish={() => {
                        setScrollIsActive(true);
                    }}
                ></PhoneCurtain>
            )}

            <main>
                <ContentSection>
                    {/* <h2>Home</h2> */}
                    <LandingSection></LandingSection>
                </ContentSection>
                <ContentSection>
                    <h2>Who am I?</h2>
                </ContentSection>
                <ContentSection>
                    <h2>My project</h2>
                </ContentSection>
                <ContentSection>
                    <h2>Contact</h2>
                </ContentSection>
            </main>
        </>
    );
}

export default App;
