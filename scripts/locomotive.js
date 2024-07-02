window.addEventListener("load",
    ()=>{
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            lerp: 0.02,
        });
    }
)

