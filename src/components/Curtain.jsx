import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import "/src/css/curtain.css"

// eslint-disable-next-line react/prop-types
function Curtain({TimelineFinish})
{
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
            x:"-100%",
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

        tl.to("#curtain",{
            y:"-100%",
            duration:2,
            ease:"power2.Out",
            delay:1,
            onComplete: TimelineFinish
        })
    })


return(
    <>
    <div id="curtain">
        <div className="middleBox">
            <div className="boxText">
                <h1 id='IntroductionName'>Hi,I&apos;m Zico!</h1>
                <p id='IntroductionSmallText'>I do cool projects</p>
            </div>
            <div className="cube"></div>
        </div>
    </div>
    </>
)
}

export default Curtain;