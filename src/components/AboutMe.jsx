import "/src/css/AboutMe.css";

export default function AboutMe() {
    return (
        <>
            <div className="AboutMeSection">
                <div className="title">
                    <h2>Who am I?</h2>
                </div>
                <div className="inner">
                    <article>
                        <h2>About me</h2>
                        <p>
                            I&apos;m currently studing
                            webdevelopment at MBOUtrecht. I live in nieuwgein
                            with my girlfriend. I enjoy learning new things,
                            especially in programming.
                        </p>
                    </article>
                    <article>
                        <h2>Experience</h2>
                        <p>Software developer at MBOUtrecht</p>
                        <p>It expert systems and devices at MBORijnland</p>
                        <p>experience in storage facilities</p>
                        <p>experience in stores</p>
                    </article>
                    <article>
                        <h2>Goals</h2>
                        <p>
                            My current goal is to develop myself as a software
                            developer. As such I am aiming for a bachelor in
                            computer science. I also have some interests in
                            electrical engineering as a hobby
                        </p>
                    </article>
                </div>
            </div>
        </>
    );
}
