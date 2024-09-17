/*
function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0; 

  function updateCounter(){
    if(currentValue === 100){
      return; 
    }

    currentValue += Math.floor(Math.random() * 10) + 1; 

    if(currentValue > 100){
      currentValue = 100; 
    }

    counterElement.textContent = currentValue;  
    let delay = Math.floor(Math.random() * 200) + 50; 
    setTimeout(updateCounter, delay); 
  }

  updateCounter();
} 

startLoader(); 
gsap.to(".counter", .25, {
  delay: 3.5, 
  opacity: 0,
})*/

gsap.to(".bar", 1.5, {
  delay: 0, 
  height: 0, 
  stagger: {
    amount:0.5,
  }, 
  ease: "power4.inOut",
});


function init(){ 

const split = new SplitType('#stagger-text', { types: 'char' });
const lineStagger = new SplitType('.line-stagger', { types: 'lines' });

// GSAP animations for characters
gsap.timeline()
    .from('.hero-wrapper', {
      autoAlpha: 0
    })

    .to('.char', {
    y: 0,
    stagger: 0.1,
    delay: 0.5,
    duration: 1,
    ease: "back.out",
    willChange: 'transform',
    })

    .to('.line', {
      y: 0,
      stagger: 0.1,
      delay: 0,
      duration: 1,
      willChange: 'transform',
  });
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  init(); 
});






/*
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
  
    // Get the click position and adjust ripple position
    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - size / 2}px`;
    ripple.style.top = `${e.clientY - size / 2}px`;
  
    document.body.appendChild(ripple);
  
    // Remove the ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600); // Match with animation duration
  }); */