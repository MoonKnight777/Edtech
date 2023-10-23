let loginbtnhome = document.querySelectorAll('.loginbtnhome');
let body2 = document.querySelector('.body2');
let backbtn = document.querySelectorAll('.loginbackbtn')


function loginbtnclick() {

    console.log('Click done')
    var tl = gsap.timeline()

    tl.to(".courses, .aboutus", {
        display: "none",
        duration: 0.2
    })

    tl.to(".landingpage", {
        display: "none",
        opacity: 0,
        duration: 0.2,
        delay: - 0.2
    })
    tl.to(".body2", {
        display: "flex",
        duration: 0.2,
        scale: 1
    })

    console.log("Process done")
}

function backbtnclick() {

    console.log('Click done')
    var tl = gsap.timeline()

    tl.to(".body2", {
        display: "none",
        duration: 0.2,
        scale: 0
    })

    tl.to(".landingpage", {
        display: "flex",
        opacity: 1,
        duration: 0.3,
    })

    tl.to(".aboutus", {
        display: "block",
        duration: 0.1,
    })

    tl.to(".courses", {
        display: "grid",
        duration: 0.1,
    })

    console.log("Process done")
}
let w = window.innerWidth;
console.log(w);
console.log(window.innerWidth);
if (w > 600) {
    gsap.to("#nav", {
        opacity: 1,
        duration: 0.3,
        backgroundColor: "rgba(0,0,0, 0.95)",
        height: "6.5vw",
        padding: 0,
        scrollTrigger: {
            trigger: "#nav",
            scroller: "body",
            start: "top -5 %",
            scrub: true
        }
    })
    console.log("more than 600");
}
else if (w < 600) {
    gsap.to("#nav", {
        opacity: 1,
        duration: 0.3,
        backgroundColor: "rgba(0,0,0, 0.95)",
        height: "20vw",
        scrollTrigger: {
            trigger: "#nav",
            scroller: "body",
            start: "top -5 %",
            scrub: true}
        })
        console.log("less than 600");

    }


gsap.from(".landingpage", {
    opacity: 0,
    duration: 1,
    delay: 0.5
})

function sidebarin() {

    gsap.to(".sidebar", {
        display: "flex",
        right: 0,
        duration: 0.2
    })
    gsap.to(".hamburger", {
        display: 'none',
        rotate: 180,
        duration: "10ms"
    })
    gsap.to(".hamburgerclose", {
        display: 'block',
        duration: "10ms",
        delay: "1ms"
    })

}

function sidebarout() {

    gsap.to(".hamburgerclose", {
        display: 'none',
        duration: "10ms"
    })
    gsap.to(".sidebar", {
        right: "-300px",
        display: "none",
        duration: 0.1
    })
    gsap.to(".hamburger", {
        display: 'block',
        duration: "10ms",
        delay: "10ms"
    })

}



console.log("Soomthy done");


