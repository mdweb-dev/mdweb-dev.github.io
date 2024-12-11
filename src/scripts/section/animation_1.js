import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

window.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let splitTitleIntro = new SplitText(".js-title-intro", {type: "lines,chars"});
    let splitTitleSection = new SplitText(".js-title-section", {
        type: 'lines,chars',
        linesClass: 'line'
    });

    let chars = splitTitleSection.chars;

    let correctText = document.querySelector(".js-title-section").textContent;
    //chars.forEach((char) => (char.textContent = ""));

    function animateLetters(chars, index = 0) {
        if (index >= chars.length) return;

        let charElement = chars[index];
        let targetChar = correctText[index];
        let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let counter = 0;

        let interval = setInterval(() => {
            charElement.textContent = possibleChars[Math.floor(Math.random() * possibleChars.length)];
            counter++;

            if (counter > 10) {
                clearInterval(interval);
                charElement.textContent = targetChar;

                animateLetters(chars, index + 1);
            }
        }, 1);
    }

    const heroIntro = document.querySelector('.hero-intro');

    const timeLine = gsap.timeline();
    timeLine.fromTo(heroIntro, {
        delay: 3,
        clipPath: 'polygon(40% 29%, 65% 30%, 74% 38%, 74% 54%, 63% 60%, 40% 60%, 31% 51%, 31% 38%)'
    }, {
        duration: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)'
    }).fromTo(splitTitleIntro.lines, {
        opacity: 0,
        xPercent: -100,
    }, {
        duration: 1,
        stagger: 0.3,
        opacity: 1,
        xPercent: 0
    });

    const jsAboutCompany = document.querySelector('.js-about-company');
    if (jsAboutCompany) {
        gsap.timeline({
            scrollTrigger: {
                trigger: jsAboutCompany,
                //scrub: 3,
                start: "top center",
                //toggleActions: "play reset play reset",
            }
        }).fromTo('.js-title-section .line', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            yPercent: 100
        }, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            yPercent: 0
        }).fromTo('.js-company-picture img', {
            opacity: 0,
            scale: 1.25
        }, {
            opacity: 1,
            scale: 1
        }, '<').from('.js-company-count', {
            opacity: 0
        }).from('.js-company-count span', {
            textContent: "0",
            duration: 1,
            modifiers: {
                textContent: value => formatNumber(value, 0)
            },
        }).from('.js-company-about', {
            opacity: 0
        }, '<');
    }

    function formatNumber(value, decimals) {
        let s = (+value).toLocaleString('en-US').split(".");
        return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
    }

    const jsTrigger = document.querySelector('.js-trigger');
    if (jsTrigger) {
        gsap.timeline({
            scrollTrigger: {
                trigger: jsTrigger,
                scrub: 3,
                start: "top top",
            }
        }).to(heroIntro, {
            duration: 3,
            scale: 0
        }).to('.about-company', {
            yPercent: -15
        }, '<');
    }



});