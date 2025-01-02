import gsap from "gsap";

export default class GsapTimelines {
    static AnimatePanel(sections, current, length) {
        let tl = gsap.timeline("panelAnim");
        for (let i = 0; i < length; i++) {
            let increase = -100 * current + "%";
            gsap.to(sections[i], { y: increase, ease: "sine.inOut" });
        }
        return tl;
    }
    static MobileNavIn(element, isrevese) {
        let tl = gsap.timeline();
        if (!isrevese) {
            tl.to(element, { left: 0, duration: 0.25, ease: "sine.inOut" });
            return tl;
        } else {
            tl.to(element, {
                left: "-100%",
                duration: 0.25,
                ease: "sine.inOut",
            });
            return tl;
        }
    }
}
