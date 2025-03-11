/* Animation view scroll home page bubble following */
var controller = new ScrollMagic.Controller();

var timeline1 = new TimelineMax();
var timeline2 = new TimelineMax();


//do start style transform

timeline1
    .to(".title-wiewasser__tofrom1", 4, {
            //duration: 1,
            y: "-100vh",
            autoAlpha: 1,
            //stagger: 1,
            ease: Linear.easeOut
        }
    )
    .to(".title-wiewasser__tofrom2", 4, {
            //duration: 1,
            y: "0",
            //stagger: 1,
            ease: Linear.easeOut
        }
    )
    .to(".title-wiewasser__tofrom2", 4, {
            //duration: 1,
            y: "-100vh",
            //stagger: 2,
            ease: Linear.easeOut
        }
    )


var scene1 = new ScrollMagic.Scene({
    triggerElement: '.section-vs',
    duration: '400%',
    triggerHook: "onLeave",
    offset: '0'
})
    .setTween(timeline1)
    .setPin('.section-vs')
    .addTo(controller)
    .on("enter leave", function (e) {
        $(".wiewasser-cursor").addClass("absolute transition");
    })
    .on("start end", function (e) {
        $(".wiewasser-cursor").removeClass("absolute transition");
    })


//scene.on("change update progress start end enter leave", callback);

timeline2
    .to('.bublle-cir__1', {
        //bottom: '45%',
        //left: '6%'
        left: '1287px',
        bottom: '-283px',
    })
    .to('.bublle-cir__2', {
        //top: '20%',
        //right: '10%'
        right: '0%',
        top: '1100px',
    })
    .to('.bublle-cir__3', {
        //right: '53%',
        //bottom: '22%'
        bottom: '-130px',
        right: '95%',
    })
    .to('.bublle-cir__4', {
        //right: '-8%',
        //bottom: '8%'
        bottom: '-800px',
        right: '76%',
    })
    .to('.bublle-cir__1', {
        bottom: '-45%',
        left: '94%'
    })
    .to('.bublle-cir__2', {
        top: '163%',
        right: '0%'
    })
    .to('.bublle-cir__3', {
        right: '95%',
        bottom: '-22%'
    })
    .to('.bublle-cir__4', {
        right: '76%',
        bottom: '-127%'
    });
var scene1 = new ScrollMagic.Scene({
    triggerElement: ".section-vs",
    triggerHook: "onLeave",
    duration: "500%"
})
    .setPin("#pinMaster")
    .setTween(timeline2)
    .addTo(controller);