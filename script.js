function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h3 , nav button",{
        y:-30,
        duration:.6,
        delay:.5,
        opacity:0,
        stagger:0.2
        
})


tl.from("#left h1,#left p,#left button ",{
        x:-200,
        duration:.6,
        delay:.5,
        opacity:0,
        stagger:0.2
})

tl.from("#right img",{
    x:300,
    duration:.6,
    delay:-0.3,
    opacity:0,
    stagger:0.2
},"-=0.6")


tl.from(".sectionpart1bottom img",{
    opacity:0,
    stagger:0.2,
    duration:0.5,
    ease: "power4.out",
    y: -50
    
    
})
}

function page2animation(){

    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 100%",
        end:"top -50%",
        scrub:2
    }
})

tl2.from(".section2 .services",{
    y:-30,
    duration:0.4,
    opacity:0,
    
},"-=1.5")

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.8,
    stagger:0.4 
},"anim")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.8,
    stagger:0.4 
},"anim")


tl2.from("#services",{
    y:-30,
    duration:0.4,
    opacity:0,   
})
}

function page3animation(){
    
    var tl3 = gsap.timeline()
    
    tl3.from("#leftside h1,#leftside p,#leftside button",{
        x:-100,
        duration:.6,
        opacity:0,
        ease:"power1",
        stagger:0.3,
        scrollTrigger:{
            trigger:"#section3",
            scroller:"body",
            
            start:"top 100%",
            end:"top -30%",
            scrub:2
            
        }
    
    })
    
    
    tl3.from("#rightside img",{
        x:200,
        duration:.4,
        opacity:0,
        ease:"power1",
        stagger:0.1,
        scrollTrigger:{
            trigger:"#section3",
            scroller:"body",
            
            start:"top 100%",
            end:"top -30%",
            scrub:2
            
        }
    
    })
    
    
    tl3.from("#services",{
        y:30,
        duration:0.2,
        opacity:0,
        scrollTrigger:{
            trigger:"#services",
            scroller:"body",
            
            start:"top 100%",
            end:"top 0%",
            scrub:1
            
        }
    
    })
    
    tl3.from(".card p,#text h2",{
        opacity:0,
        duration:.6,
        stagger:.3,
        ease:"circ.in",
        scrollTrigger:{
            trigger:"#services",
            scroller:"body",
          
            start:"top 50%",
            end:"top 50%",
            scrub:1
            
        }
    })
    }
    
    
page1animation();
page2animation();
page3animation();


