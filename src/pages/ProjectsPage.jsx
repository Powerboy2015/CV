import { useEffect } from "react";
import ProjectsPageEl from "../components/ProjectspageEl";

export default function ProjectsPage() {
    useEffect(() => {
        import("/src/css/ProjectsPage.css");
    }, []);
    return (
        <>
            <div className="back-to-main">
                <a href="/">Back to the homepage</a>
            </div>
            <div className="ProjectsPage">
                <h1>Recent projects</h1>
                <div className="Projects">
                    <div className="inner">
                        <ProjectsPageEl
                            projectName="Pokedex Electron"
                            desc={
                                "my girlfriend was getting into playing pokemon black and white and was sad there was an phone app that worked really well but shut down for a good pokedex overview. So I decided to work on making one"
                            }
                            features={[
                                "electron app",
                                "can find any pokemon up until black and white",
                                "loads while scrolling",
                                "can see any pokemon",
                                "can see evolutions",
                                "typechart for each pokemon",
                                "can see each pokemon's type",
                            ]}
                            finishdate="v1 release in august"
                            usedlangs={["react", "electron"]}
                            imgsrc="/electron-pokedex.png"
                        ></ProjectsPageEl>
                        <ProjectsPageEl
                            projectName="NewCv"
                            desc={
                                "I had an outdated CV for a year now and thought I could do better, so I got to work"
                            }
                            features={[
                                "animation",
                                "3D rendering",
                                "custom scroll animation",
                                "always available",
                                "seperate projects page",
                                "use of libraries",
                                "attempt to use designing patterns",
                            ]}
                            finishdate={"2 jan 2025"}
                            usedlangs={["React"]}
                            imgsrc={"/NewCV.png"}
                        ></ProjectsPageEl>
                        <ProjectsPageEl
                            projectName="Chocolatier"
                            desc={
                                "A schoolproject where we had to make an website for a chocolatier."
                            }
                            features={[
                                "log in functionality",
                                "responsive",
                                "admin dashboard with Create Read Update Delete",
                            ]}
                            finishdate="24 jun-2024"
                            usedlangs={[
                                "HTML",
                                "SCSS",
                                "tailwind(css framework)",
                                "JS",
                                "PHP 5",
                            ]}
                            imgsrc="/chocolatier.png"
                        />
                        <ProjectsPageEl
                            projectName="SquareColorChanger"
                            desc={
                                "Teacher challenged me to make a small sort of game where if you click a square, it will color itself and all adjecent squares will do the same"
                            }
                            features={["multiple colors", "reset button"]}
                            finishdate="9 april 2024"
                            usedlangs={["html", "javascript", "Css"]}
                            imgsrc="/SquareColorChanger.png"
                        />

                        {/* <ProjectsPageEl projectName=""> */}
                    </div>
                </div>
            </div>
        </>
    );
}
