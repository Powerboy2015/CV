/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "/src/css/ProjectElement.css";

export default function ProjectElement({
    ProjectTitle,
    ProjectLink,
    ProjectParagraph,
    ProjectDate,
    ProjectLanguages,
    ProjectImage,
}) {
    const [langs, setLangs] = useState();

    useEffect(() => {
        if (typeof ProjectLanuages !== "string") {
            let list = "Languages: ";
            ProjectLanguages.forEach((language) => {
                list += language + " ";
            });
            setLangs(list);
        } else {
            // if only one languages, just set that.
            setLangs(ProjectLanguages);
        }
    }, [ProjectLanguages]);
    return (
        <>
            <article className="project">
                <a href={ProjectLink} className="linkThrough">
                    <div className="image">
                        <img src={ProjectImage} alt={ProjectTitle} />
                    </div>
                    <div className="text">
                        <div>
                            <h3>{ProjectTitle}</h3>
                            <p>{ProjectParagraph}</p>
                        </div>
                        <div className="details">
                            <p className="date">{ProjectDate}</p>
                            <p className="languages">{langs}</p>
                        </div>
                    </div>
                </a>
            </article>
        </>
    );
}
