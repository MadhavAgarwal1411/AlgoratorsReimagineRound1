// const { selector } = require("gsap");

// gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const page1 = document.querySelector(".page1");
    const page2 = document.querySelector(".page2");

    const body = document.querySelector("body");

    let currentSlideIndex = 0;
    let isAnimating = false;
    let currentTopValue = 0;

    const elements = [
        { selector: ".prefix", delay: 0 },
        { selector: ".names", delay: 0.15 },
        { selector: ".years", delay: 0.3 },
    ];

    slides.forEach((slide, idx) => {
        if (idx !== 0) {
            const img = slide.querySelector("img");
            gsap.set(img, { scale: 2, top: "4em" });
        }
    });
    function showSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        const slide = slides[index];
        const img = slide.querySelector("img");
        currentTopValue -= 30;

        elements.forEach((elem) => {
            gsap.to(document.querySelector(elem.selector), {
                y: `${currentTopValue}px`,
                duration: 2,
                ease: "power4.inOut",
                delay: elem.delay,
            });
        });
        // console.log("Error");
        gsap.to(img, {
            scale: 1,
            top: "0%",
            duration: 2,
            ease: "power3.inOut",
        });
        gsap.to(
            slide,
            {
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 2,
                ease: "power4.inOut",
                onComplete: () => {
                    isAnimating = false;
                },
            },
            "<"
        );
    }

    function hideSlide(index) {
        if (isAnimating) return;
        isAnimating = true;
        const slide = slides[index];
        const img = slide.querySelector(".img");

        currentTopValue += 30;
        elements.forEach((elem) => {
            gsap.to(document.querySelector(elem.selector), {
                y: `${currentTopValue}px`,
                duration: 2,
                ease: "power4.inOut",
                delay: elem.delay,
            });
        });
        gsap.to(slide, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4.inOut",
        });

        gsap.to(img, {
            scale: 2,
            top: "4em",
            duration: 2,
            ease: "power3.inOut",
        });

        gsap.to(
            slide,
            {
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                duration: 2,
                ease: "power4.inOut",
                onComplete: () => {
                    isAnimating = false;
                },
            },
            "<"
        );
    }
    console.log(page1.offsetHeight);
    if (page1.offsetHeight !== 0) {
        page1.addEventListener("wheel", (e) => {
            if (isAnimating) return;

            if (e.deltaY > 0 && currentSlideIndex === slides.length - 1) {
                body.classList.remove("stop-scrolling");
            } else {
                body.classList.add("stop-scrolling");

                if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
                    showSlide(currentSlideIndex + 1);
                    currentSlideIndex++;
                } else if (e.deltaY < 0 && currentSlideIndex > 0) {
                    hideSlide(currentSlideIndex);
                    currentSlideIndex--;
                }
            }
        });
        page2.addEventListener("wheel", (e) => {
            body.classList.remove("stop-scrolling");
        });
    }
});
