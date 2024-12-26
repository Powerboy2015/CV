import gsap from "gsap";

export default class GsapTimelines {
    static AnimatePanel(sections, current, length) {
        let tl = gsap.timeline("panelAnim");
        for (let i = 0; i < length; i++) {
            let increase = -100 * current + "%";
            console.log(increase);
            gsap.to(sections[i], { y: increase, ease: "sine.inOut" });
        }
        return tl;
    }
}
