import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import "/src/css/PhoneCurtain.css";

// eslint-disable-next-line react/prop-types
export default function PhoneCurtain({TimelineFinish}) {
    
      gsap.registerPlugin(useGSAP);
    useGSAP(() =>{
    let tl = gsap.timeline();
        tl.from(".cube",{
            scale:10,
            opacity:50,
            duration:3,
            ease:"bounce"

        }) 
        tl.to(".cube",{
            y:"-100%",
            rotation:-90,
            duration:2,
            // delay:0.5,
            ease:"power3.out"    
        })

        tl.from("#IntroductionName",{
            opacity:0
        },"-=75%")
        
        tl.from("#IntroductionSmallText",{
            opacity:0,
            delay:0.5
        })

        tl.to("#PhoneCurtain",{
            y:"-100%",
            duration:2,
            ease:"power2.Out",
            delay:1,
            onComplete: TimelineFinish
        })
    })
    
    return (
        <>
            <div id="PhoneCurtain">
                <div className="middleBox">
                    <div className="boxText">
                        <h1 id="IntroductionName">Hi,I&apos;m Zico!</h1>
                        <p id="IntroductionSmallText">I do cool projects</p>
                    </div>
                    <div className="cube"></div>
                </div>
            </div>
        </>
    );
}
