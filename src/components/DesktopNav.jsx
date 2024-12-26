// imports css
import "/src/css/desktopNavigation.css";

// eslint-disable-next-line react/prop-types
export default function DesktopNav({ ScrollToPageNumber }) {
    function ScrollToPage(sectionNumber, newActive) {
        let currentActive = document.querySelector("a.active");
        currentActive.classList.remove("active");
        //
        ScrollToPageNumber(sectionNumber - 1);
        //
        newActive.classList.add("active");
    }

    return (
        <>
            <aside className="desktopNavigation">
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
                        <li>
                            <a
                                id="#About"
                                onClick={(el) => {
                                    ScrollToPage(4, el.target);
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
