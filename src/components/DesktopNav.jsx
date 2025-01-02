// imports css
import "/src/css/desktopNavigation.css";

// imports gsap timeline
import GsapTimelines from "../helpers/GsapTimelines";
import { useRef } from "react";
// eslint-disable-next-line react/prop-types
export default function DesktopNav({ ScrollToPageNumber, ChangeActiveClass }) {
    const mainEl = useRef();
    function ScrollToPage(sectionNumber, newActive) {
        GsapTimelines.MobileNavIn(".desktopNavigation", true);
        ChangeActiveClass(newActive);
        ScrollToPageNumber(sectionNumber - 1);
    }
    function OpenMobileNav() {
        console.log("hi");
        GsapTimelines.MobileNavIn(".desktopNavigation", false);
    }

    return (
        <>
            <aside className="desktopNavigation" ref={mainEl}>
                <span className="burgerMenu" onClick={OpenMobileNav}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                        />
                    </svg>
                </span>
                <h1>Zico Backer</h1>
                <nav>
                    <ul>
                        <li>
                            <a
                                id="Home"
                                className="active"
                                onClick={(el) => {
                                    ScrollToPage(1, el.target);
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                id="About"
                                onClick={(el) => {
                                    ScrollToPage(2, el.target);
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                id="#Projects"
                                onClick={(el) => {
                                    ScrollToPage(3, el.target);
                                }}
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
