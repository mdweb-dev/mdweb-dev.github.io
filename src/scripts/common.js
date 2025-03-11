window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const splitHeading = new SplitText(".js-split-heading", {
        type: "chars,words",
    });
    const splitPlus = new SplitText(".js-split-plus", { type: "chars" });
    const splitChar = new SplitText(".js-split-char", { type: "chars" });

    const jsSplitPlus = document.querySelectorAll(".js-split-plus");
    if (jsSplitPlus.length) {
        jsSplitPlus.forEach((splitPlus) => {
            const splitPlusChar = splitPlus.querySelectorAll(
                ".button-plus__name div"
            );
            splitPlusChar.forEach((char, index) => {
                const delay = 0.05 + index * 0.05;
                //char.style.transitionDelay = `${delay}s`;
                char.style.setProperty("--tnDelay", `${delay}s`);
                char.setAttribute("data-letter", char.textContent);
            });
        });
    }

    gsap.from(splitHeading.chars, {
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: {
            amount: 1,
            from: "random",
        },
    });

    /** barba js */
    function barbaInit() {
        barba.init({
            transitions: [
                {
                    name: "opacity-transition",
                    leave(data) {
                        return gsap.to(data.current.container, {
                            opacity: 0,
                        });
                    },
                    enter(data) {
                        return gsap.from(data.next.container, {
                            opacity: 0,
                        });
                    },
                },
            ],
        });
    }
    //barbaInit();


    // --x, --y position
    let pos = document.documentElement;
    pos.addEventListener("mousemove", (event) => {
        gsap.to(pos, {
            duration: 0.5,
            "--x": event.clientX + "px",
            "--y": event.clientY + "px",
        });
    });

    let header = document.querySelector("header.header"),
        scrollPrev = 0;
    window.addEventListener("scroll", function () {
        let scrolled = document.documentElement.scrollTop;
        if (scrolled >= 50 && scrolled > scrollPrev) {
            header.classList.add("out");
            header.classList.add("fixed");
        } else if (scrolled < 50) {
            header.classList.remove("fixed");
            header.classList.remove("out");
        } else {
            header.classList.remove("out");
        }
        scrollPrev = scrolled;
    });

    /**
     * particle js libs
     */
    particlesJS.load(
        "particles-js",
        "assets/libs/particles/particles.json",
        function () {
            console.log("callback - particles.js config loaded");
        }
    );

    /* GSAP ====================================== */
    gsap.utils.toArray("section").forEach(function (item, index) {
        ScrollTrigger.create({
            trigger: item,
            start: "top center",
            //once: true,
            toggleActions: "play play play play",
            onToggle: function onToggle(self) {
                return item.classList.add("is-visible");
            },
        });
    });
});

//If you really need Jquery
/*
$(document).ready(function(){

})
 */
