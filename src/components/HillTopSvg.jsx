import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';



function HillTopSvg()
{
    gsap.registerPlugin(useGSAP);
    useGSAP(() =>{
        gsap.from(".Hilltop-1",{
            x:600,
            duration:5
        })

        gsap.from("#Hilltop-2",{
            x:-600,
            duration:5,
        })
        gsap.from("#welcome",{
            y:-600,
            duration:3,
            delay:5,
            ease: "bounce.inOut"            
        })

        gsap.from("#welcomeUnderText", {
            x:-100,
            opacity:0,
            duration:2,
            delay:7
        })
    })

    return (
    <>
    <div className="HillTops">
                <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="Hilltop-1"
                        d="M-600,100 

                       Q150,10 200,60
                       T300,80

                       Q350,60 400,20
                       T800,80 

                       L800,200 
                       L-600,200 
                       Z"
                        fill="#8EB69B"
                    />

                    <path
                        id="Hilltop-2"
                        d="M0,120 
                       Q150,30 300,100
                       T1400,100 
                       L1400,200
                       L0,200 
                       Z"
                        fill="#DAF1DE"
                    />
                    <rect x="0" y="0" width="2400" height="200" fill="url(#hilltop-pattern)" />
                </svg>
                <div id="welcomeBox">
                <h1 id="welcome">Welcome!</h1>
                <p id="welcomeUnderText">To the green world</p>
                </div>
            </div>
    </>
    )
}

export default HillTopSvg