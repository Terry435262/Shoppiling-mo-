function smoothScrollTo(target, duration) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
   
    function animation(currentTime) {
       if (startTime === null) startTime = currentTime;
       const timeElapsed = currentTime - startTime;
       const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
       window.scrollTo(0, run);
       if (timeElapsed < duration) requestAnimationFrame(animation);
    }
   
    function easeInOutQuad(t, b, c, d) {
       t /= d / 2;
       if (t < 1) return (c / 2) * t * t + b;
       t--;
       return (-c / 2) * (t * (t - 2) - 1) + b;
    }
   
    requestAnimationFrame(animation);
   }

   const targetElement = document.getElementById('navbar');
const duration = 500; // milliseconds
smoothScrollTo(targetElement, duration);

function scrollToAbout() {
   const aboutSection = document.getElementById('product1');
   const windowHeight = window.innerHeight;
   const sectionHeight = aboutSection.offsetHeight;

 
   const scrollToY = aboutSection.offsetTop - (windowHeight - sectionHeight) / 2;

   
   window.scroll({ top: scrollToY, behavior: 'smooth' });
}


const aboutLink = document.querySelector('a[href="#Shop"]');
aboutLink.addEventListener('click', function (event) {
   event.preventDefault();
   scrollToAbout();
});
