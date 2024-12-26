import "/src/css/ContentSection.css"
// import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const ContentSection = ({children }) => {
    return (<section className="Content" >
        {children}
    </section>);    
}
export default ContentSection