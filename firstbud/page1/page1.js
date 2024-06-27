gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");
    pinnedSections.forEach((section, index, sections) => {
        let img = section.querySelector(".img");
        let nextSection = sections[index + 1] || lastCard;
        let endScalePoint = `top+=${
            nextSection.offsetTop - section.offsetTop
        } top`;

        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end:
                    index === sections.length
                        ? `+=${lastCard.offsetHeight / 2}`
                        : footer.offsetTop - window.innerHeight,
                pin: true,
                pinSpacing: false,
                scrub: 1,
            },
        });
        gsap.fromTo(
            img,
            { scale: 1 },
            {
                scale: 0.5,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: endScalePoint,
                    scrub: 1,
                },
            }
        );
    });
    const heroH1 = document.querySelector(".hero h1");
    ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "+=500vh",
        scrub: 1,
        onUpdate: (self) => {
            let opacityProgress = self.progress;
            heroH1.computedStyleMap.opacity = 1 - opacityProgress;
        },
    });
});
