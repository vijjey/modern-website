
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnima(){
    let t1=gsap.timeline()
    t1.from('.nav',{
        y:-30,
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,

    })

    t1.to(".boundingelem",{
        y:0,
        duration:2,
        delay:-1,
        stagger:.2,
        ease:Expo.easeInOut,
    })

    t1.from('.herofooter',{
        y:-30,
        duration:1.5,
        opacity:0,
        delay:-1,
        stagger:.2,
        ease:Expo.easeInOut,
    })
}
 
firstPageAnima()

// add on to the project.

const timer = setInterval(function(){
    gsap.from('.mouse',{
        scale: 2,
        duration:0.2,
        opacity:0,
    })
},1000)



// mouse follower size change

function mousefollowersizeChange(){
    var timeout;
    var scaleY=0;
    var scaleX = 0;
    
    var prevScaleY=0;
    var prevScaleX =0;

    window.addEventListener('mousemove',function(dets){
        this.clearInterval(timer)
        this.clearTimeout(timeout)
        prevScaleX =dets.clientX;
        prevScaleY=dets.clientY;
        
        scaleX = gsap.utils.clamp(0.8,1.2,dets.clientX - prevScaleX)
        scaleY= gsap.utils.clamp(0.8,1.2,dets.clientY - prevScaleY)
        timeout=setTimeout(function(){
            document.querySelector('.mouse').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
            
        },100)

        mousefollower(scaleX,scaleX)
    
    })
}

 mousefollowersizeChange() 




function mousefollower(scaleX,scaleY){
    window.addEventListener('mousemove',function(dets){
        document.querySelector('.mouse').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${scaleX},${scaleY})`
    })
}

mousefollower();



document.querySelectorAll('.elem').forEach((elem)=>{
        
    var diffrotate=0;
    var rotate=0;

    elem.addEventListener('mouseleave',(dets)=>{
        
        gsap.to(elem.getElementsByTagName('img'),{
            opacity:0,
            duration:0.5,
            ease:Power3,
            
            
        });
        
    })

    elem.addEventListener('mousemove',(dets)=>{
        diffrotate=dets.clientX - rotate;
        rotate=dets.clientX;

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.getElementsByTagName('img'),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-15,15,diffrotate * 0.9),
            
        })
        
    })
})

