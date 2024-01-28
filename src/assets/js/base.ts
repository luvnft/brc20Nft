import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gsapInit = () => {
    // side
    gsap.set('#side', { x: '-100% + -3.2rem', opacity: 0 });

    // page1
    gsap.set('#page1 .bg1', { y: '12.4rem', opacity: 0 });
    gsap.set('#page1 .bg2', { y: '-11.6rem', opacity: 0 });
    gsap.set('#page1 .bg3', { y: '12.4rem', opacity: 0 });
    gsap.set('#page1 .user', { x: '20rem', opacity: 0 });
    gsap.set('#page1 .title', { y: '2.4rem', opacity: 0 });
    gsap.set('#page1 .doc', { y: '2.4rem', opacity: 0 });

    // page2
    gsap.set('#page2 .sideBox', { y: '4.4rem', opacity: 0 });
    gsap.set('#page2 .title', { y: '4.8rem', opacity: 0 });

    gsap.set('#page2 .item1', { y: '2.8rem', opacity: 0 });
    gsap.set('#page2 .item2', { y: '2.4rem', opacity: 0 });
    gsap.set('#page2 .item3', { y: '2.8rem', opacity: 0 });

    gsap.set('#page2 .card', { y: '6.4rem', opacity: 0 });
    gsap.set('#page2 .bg1', { x: '-10.8rem', opacity: 0 });
    gsap.set('#page2 .bg2', { x: '-9.2rem', opacity: 0 });
    gsap.set('#page2 .bg3', { opacity: 0 });

    // page3
    gsap.set('#page3 .bg1', { x: '-8.3rem', opacity: 0 });
    gsap.set('#page3 .side', { y: '8.8rem', opacity: 0 });
    gsap.set('#page3 .videoBox', { y: '4.4rem', opacity: 0 });
    gsap.set('#page3 .title', { y: '3.6rem', opacity: 0 });
    gsap.set('#page3 .doc', { y: '3.6rem', opacity: 0 });

    // page4
    gsap.set('#page4 .line', { opacity: 0 });
    gsap.set('#page4 .bg1', { x: '5.2rem', opacity: 0 });
    gsap.set('#page4 .bg2', { y: '6.8rem', opacity: 0 });
    gsap.set('#page4 .itemBoxB', { y: '4.4rem', opacity: 0 });
    gsap.set('#page4 .itemBoxT', { y: '2.8rem', opacity: 0 });
    gsap.set('#page4 .rows', { y: '4.8rem', opacity: 0 });
    gsap.set('#page4 .name2', { y: '4.8rem', opacity: 0 });
    gsap.set('#page4 .logo2', { y: '6rem', opacity: 0 });
    gsap.set('#page4 .name1', { y: '4.8rem', opacity: 0 });
    gsap.set('#page4 .logo1', { y: '6rem', opacity: 0 });
    gsap.set('#page4 .doc', { y: '6rem', opacity: 0 });
    gsap.set('#page4 .subtitle', { y: '2.4rem', opacity: 0 });
    gsap.set('#page4 .title', { y: '3.2rem', opacity: 0 });


    // page5
    gsap.set('#page5 .bg1', { x: '9.6rem', opacity: 0 });
    gsap.set('#page5 .bg2', { x: '10.4rem', opacity: 0 });
    gsap.set('#page5 .bg3', { y: '8rem', opacity: 0 });
    gsap.set('#page5 .bg4', { y: '8rem', opacity: 0 });
    gsap.set('#page5 .card1', { y: '8.8rem', opacity: 0 });
    gsap.set('#page5 .card2', { y: '8.8rem', opacity: 0 });
    gsap.set('#page5 .card3', { y: '8.8rem', opacity: 0 });
    gsap.set('#page5 .title', { y: '4.4rem', opacity: 0 });
    gsap.set('#page5 .subtitle', { y: '5.2rem', opacity: 0 });
    gsap.set('#page5 .doc', { y: '5.2rem', opacity: 0 });

    // page6
    gsap.set('#page6 .title', { y: '6.4rem', opacity: 0 });
    gsap.set('#page6 .item1', { y: '9.2rem', opacity: 0 });
    gsap.set('#page6 .item2', { y: '7.2rem', opacity: 0 });
    gsap.set('#page6 .item3', { y: '7.2rem', opacity: 0 });
    gsap.set('#page6 .item4', { y: '9.2rem', opacity: 0 });

}

const gsapPage1 = () => {
    const tween = gsap.timeline({
        defaults: { duration: .8, ease: "ease" },
    });

    tween.to('#side', { x: 0, opacity: 1 })
        .to('#page1 .bg1', { y: 0, opacity: 1 })
        .to('#page1 .bg2', { y: 0, opacity: 1 }, '<')
        .to('#page1 .bg3', { y: 0, opacity: 1 }, '<')
        .to('#page1 .user', { x: 0, opacity: 1 }, '<')
        .to('#page1 .title', { y: 0, opacity: 1 }, '<')
        .to('#page1 .doc', { y: 0, opacity: 1 }, '<')
}

const gsapPage2 = () => {
    const tween = gsap.timeline({
        defaults: { duration: .8, ease: "ease" },
        scrollTrigger: {
            trigger: "#page2",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            // markers: true
        }
    });

    tween.to('#page2 .sideBox', { y: 0, opacity: 1 }, '<')
        .to('#page2 .title', { y: 0, opacity: 1 }, '<')
        .to('#page2 .item1', { y: 0, opacity: 1 }, '<')
        .to('#page2 .item2', { y: 0, opacity: 1 }, '<')
        .to('#page2 .item3', { y: 0, opacity: 1 }, '<')
        .to('#page2 .card', { y: 0, opacity: 1 }, '<')
        .to('#page2 .bg1', { x: 0, opacity: 1 }, '<')
        .to('#page2 .bg2', { x: 0, opacity: 1 }, '<')
        .to('#page2 .bg3', { opacity: 1 }, '<')
}

const gsapPage3 = () => {
    const tween = gsap.timeline({
        defaults: { duration: .8, ease: "ease" },
        scrollTrigger: {
            trigger: "#page3",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            // markers: true
        }
    });

    tween.to('#page3 .bg1', { x: 0, opacity: 1 }, '<')
        .to('#page3 .side', { y: 0, opacity: 1 }, '<')
        .to('#page3 .videoBox', { y: 0, opacity: 1 }, '<')
        .to('#page3 .title', { y: 0, opacity: 1 }, '<')
        .to('#page3 .doc', { y: 0, opacity: 1 }, '<')
}

const gsapPage4 = () => {
    const tween = gsap.timeline({
        defaults: { duration: .8, ease: "ease" },
        scrollTrigger: {
            trigger: "#page4",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            // markers: true
        }
    });

    tween.to('#page4 .line', { opacity: 1 }, '<')
        .to('#page4 .bg1', { x: 0, opacity: 1 }, '<')
        .to('#page4 .bg2', { y: 0, opacity: 1 }, '<')
        .to('#page4 .itemBoxB', { y: 0, opacity: 1 }, '<')
        .to('#page4 .itemBoxT', { y: 0, opacity: 1 }, '<')
        .to('#page4 .rows', { y: 0, opacity: 1 }, '<')
        .to('#page4 .name2', { y: 0, opacity: 1 }, '<')
        .to('#page4 .logo2', { y: 0, opacity: 1 }, '<')
        .to('#page4 .name1', { y: 0, opacity: 1 }, '<')
        .to('#page4 .logo1', { y: 0, opacity: 1 }, '<')
        .to('#page4 .doc', { y: 0, opacity: 1 }, '<')
        .to('#page4 .subtitle', { y: 0, opacity: 1 }, '<')
        .to('#page4 .title', { y: 0, opacity: 1 }, '<')
}

const gsapPage5 = () => {
    const tween = gsap.timeline({
        defaults: { duration: .8, ease: "ease" },
        scrollTrigger: {
            trigger: "#page5",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            // markers: true
        }
    });

    tween.to('#page5 .bg1', { x: 0, opacity: 1 }, '<')
        .to('#page5 .bg2', { x: 0, opacity: 1 }, '<')
        .to('#page5 .bg3', { y: 0, opacity: 1 }, '<')
        .to('#page5 .bg4', { y: 0, opacity: 1 }, '<')
        .to('#page5 .card1', { y: 0, opacity: 1 }, '<')
        .to('#page5 .card2', { y: 0, opacity: 1 }, '<')
        .to('#page5 .card3', { y: 0, opacity: 1 }, '<')
        .to('#page5 .title', { y: 0, opacity: 1 }, '<')
        .to('#page5 .subtitle', { y: 0, opacity: 1 }, '<')
        .to('#page5 .doc', { y: 0, opacity: 1 }, '<')
}

const gsapPage6 = () => {
    const tween = gsap.timeline({
        defaults: { duration: .8, ease: "ease" },
        scrollTrigger: {
            trigger: "#page6",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            // markers: true
        }
    });

    tween.to('#page6 .title', { y: 0, opacity: 1 }, '<')
        .to('#page6 .item1', { y: 0, opacity: 1 }, '<')
        .to('#page6 .item2', { y: 0, opacity: 1 }, '<')
        .to('#page6 .item3', { y: 0, opacity: 1 }, '<')
        .to('#page6 .item4', { y: 0, opacity: 1 }, '<')
}

export const init = () => {
    
    gsapInit();
    gsapPage1();
    gsapPage2();
    gsapPage3();
    gsapPage4();
    gsapPage5();
    gsapPage6();
}