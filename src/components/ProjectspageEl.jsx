import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// importing css
import "/src/css/ProjectspageEl.css";

export default function ProjectsPageEl({
    projectName,
    desc,
    features,
    finishdate,
    usedlangs,
    imgsrc,
}) {
    const [featureList, setFeatureList] = useState([]);
    const [langs, setLangs] = useState("");

    // featuresplitter
    useEffect(() => {
        if (typeof features == "object" || features.length > 1) {
            let templist = [];
            features.forEach((feature) => {
                templist.push(<li className="feature">{feature}</li>);
            });
            setFeatureList(templist);
        }
    }, [features]);

    useEffect(() => {
        if (typeof usedlangs == "object") {
            let tempstring = "used langs: ";
            usedlangs.forEach((lang) => {
                tempstring += lang + " ";
            });
            setLangs(tempstring);
        }
    }, [usedlangs]);

    return (
        <>
            <div className="page-project" href="{gitLink}">
                <div className="pic">
                    <img src={imgsrc} alt="" />
                </div>
                <div className="text">
                    <h2 className="project-name">{projectName}</h2>
                    <div className="description">
                        <p className="paragraph">{desc}</p>
                        <h3>Features:</h3>
                        <ul className="features">{featureList}</ul>
                        <p className="finish-date">
                            release date: {finishdate}
                        </p>
                        <p className="used-languages">{langs}</p>
                        <a href="" className="repo-link">
                            view the repository
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

ProjectsPageEl.propTypes = {
    projectName: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    finishdate: PropTypes.string.isRequired,
    usedlangs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgsrc: PropTypes.string.isRequired,
};
