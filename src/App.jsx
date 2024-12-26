import './css/App.css'
// import HillTopSvg from './components/HillTopSvg'
import Curtain from './components/Curtain'
import ContentSection from './components/ContentSection'
import PhoneCurtain from './components/PhoneCurtain';
// import gsap from 'gsap';
import mathFunctions from './helpers/mathFunctions';
import GsapTimelines from './helpers/GsapTimelines';
import { useEffect } from 'react';

function App() {

  const EnableScollHandling = () => {
      const sections = document.querySelectorAll("section.Content");
      let currentSection = 0;      
      let activeTl = undefined;

      window.addEventListener('wheel', function(event) {
        // instant exit when Animation is currently playing.
        if(activeTl != undefined && activeTl.isActive())
        {
          return;
        }

        let oldCurrent = currentSection;

        // increases or decreases currentsection value based on going up or down, also made a clamp for it.
        if (event.deltaY < 0){
          currentSection = mathFunctions.ClampInt(0,currentSection+1,sections.length-1);
        } else if (event.deltaY > 0 ) {
          currentSection = mathFunctions.ClampInt(0,currentSection-1,sections.length-1);
        }

        if(currentSection != oldCurrent)
        {
          activeTl = GsapTimelines.AnimatePanel(sections,currentSection,sections.length);        
        }
      });
  }
  // resets window so I don't cry about it being halfway if it shouldn't be
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(window.innerWidth);
  let isDesktop = window.innerWidth > 768 ? true : false;
  console.log(isDesktop);



  return (
    <>
      {isDesktop ? (
        <Curtain TimelineFinish={EnableScollHandling}></Curtain>
      ): (
        <PhoneCurtain TimelineFinish={EnableScollHandling}></PhoneCurtain>
      )}
      <main>
        <ContentSection>
          <h1>hello world</h1>
        </ContentSection>
        <ContentSection>
          <h2>hello world 2</h2>
        </ContentSection>
        <ContentSection>
          <h2>hello world 3</h2>
        </ContentSection>
        <ContentSection>
          <h2>hello world 4</h2>
        </ContentSection>
      </main>
    </>
  )
}

export default App
