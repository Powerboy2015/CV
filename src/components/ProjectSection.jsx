import ProjectElement from "./ProjectElement";
import "/src/css/ProjectSection.css";

export default function ProjectSection() {
    return (
        <>
            <div className="ProjectSection">
                <h2>My project</h2>
                <div className="inner">
                    <ProjectElement
                        ProjectTitle="Chocolatier"
                        ProjectLink="https://github.com/ZicoBacker/Chocolatier"
                        ProjectParagraph="A schoolproject where me and my classmates had to make a website about a chocolatier business"
                        ProjectDate="Jun 24 2024"
                        ProjectLanguages={["HTML", "SCSS", "PHP", "JS"]}
                        ProjectImage="/chocolatier.png"
                    ></ProjectElement>
                    <ProjectElement
                        ProjectTitle="NewCV"
                        ProjectLink="https://github.com/Powerboy2015/CV/tree/CV-version-2"
                        ProjectParagraph="Since it has been about a year when I did my CV, It was time to renovate a bit and utilise more of what I learned"
                        ProjectDate="2 jan 2025"
                        ProjectLanguages={["JSX", "GIT"]}
                        ProjectImage="/NewCV.png"
                    ></ProjectElement>
                </div>
                <a href="/Projects">See more projects</a>
            </div>
        </>
    );
}
