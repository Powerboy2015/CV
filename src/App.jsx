// // importing css
import "./css/App.css";

// importing components
import Curtain from "./components/Curtain";
import ContentSection from "./components/ContentSection";
import PhoneCurtain from "./components/PhoneCurtain";
import DesktopNav from "./components/DesktopNav";

// importing page sections
import AboutMe from "./components/AboutMe";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";

// importing functions
import mathFunctions from "./helpers/mathFunctions";
import GsapTimelines from "./helpers/GsapTimelines";
import { useEffect, useState, useRef } from "react";

// the most useless router ever.

function App() {
    const [sections, setSections] = useState([]);
    const [currentSection, setCurrentSection] = useState(0);
    const scrollIsActive = useRef(false);
    const scrollCooldown = useRef(false);

    // const [ticking, setTicking] = useState(false);

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

    // the useEffect for the scroller.
    useEffect(() => {
        const scrollEl = document.querySelector("main");

        // the mobile scroller code
        const scrollerDesktop = (event) => {
            event.preventDefault();
            if (scrollCooldown.current || !scrollIsActive.current) return;
            scrollCooldown.current = true;
            setTimeout(() => {
                scrollCooldown.current = false;
            }, 500);

            // increases or decreases currentsection value based on going up or down, also made a clamp for it.
            if (event.deltaY > 0) {
                let newcurrent = currentSection + 1;
                ScrollToPage(
                    mathFunctions.ClampInt(0, newcurrent, sections.length - 1)
                );
            } else if (event.deltaY < 0) {
                let newcurrent = currentSection - 1;
                ScrollToPage(
                    mathFunctions.ClampInt(0, newcurrent, sections.length - 1)
                );
            }
        };

        // the functions for mobile scrolling

        let startY = 0;

        const scrollerMobileStart = (event) => {
            startY = event.touches[0].clientY;
        };

        // needs the passive:false. just incase
        const scrollerMobileMove = (event) => {
            event.preventDefault();
        };

        const scrollerMobileEnd = (event) => {
            const endY = event.changedTouches[0].clientY;

            if (startY > endY) {
                let newcurrent = currentSection + 1;
                ScrollToPage(
                    mathFunctions.ClampInt(0, newcurrent, sections.length - 1)
                );
            } else if (startY < endY) {
                let newcurrent = currentSection - 1;
                ScrollToPage(
                    mathFunctions.ClampInt(0, newcurrent, sections.length - 1)
                );
            }
        };

        scrollEl.addEventListener("wheel", scrollerDesktop, {
            passive: false,
        });
        scrollEl.addEventListener("touchstart", scrollerMobileStart);
        scrollEl.addEventListener("touchmove", scrollerMobileMove, {
            passive: false,
        });
        scrollEl.addEventListener("touchend", scrollerMobileEnd);

        return () => {
            scrollEl.removeEventListener("wheel", scrollerDesktop);
            scrollEl.removeEventListener("touchstart", scrollerMobileStart);
            scrollEl.removeEventListener("touchmove", scrollerMobileMove);
            scrollEl.removeEventListener("touchend", scrollerMobileEnd);
        };
    });

    // resets window so I don't cry about it being halfway if it shouldn't be
    useEffect(() => {
        window.scrollTo(0, 0);

        let data = document.querySelectorAll("section.Content");
        setSections(data);
    }, []);

    const isDesktop = window.innerWidth > 911 ? true : false;

    return (
        <>
            {isDesktop ? (
                <>
                    <Curtain
                        TimelineFinish={() => {
                            scrollIsActive.current = true;
                        }}
                    ></Curtain>
                </>
            ) : (
                <PhoneCurtain
                    TimelineFinish={() => {
                        scrollIsActive.current = true;
                    }}
                ></PhoneCurtain>
            )}

            <DesktopNav
                ScrollToPageNumber={ScrollToPage}
                ChangeActiveClass={ChangeActiveClass}
            ></DesktopNav>

            <main>
                <ContentSection>
                    {/* <h2>Home</h2> */}
                    <LandingSection></LandingSection>
                </ContentSection>
                <ContentSection>
                    <AboutMe></AboutMe>
                </ContentSection>
                <ContentSection>
                    <ProjectSection></ProjectSection>
                </ContentSection>
            </main>
        </>
    );
}

export default App;
