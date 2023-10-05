// CHANGE BACKGROUND HEADER
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 10 ? header.classList.add('active_header') 
                     : header.classList.remove('active_header')
}
window.addEventListener('scroll', scrollHeader)

const scrollBar = () =>{
  const scrollNav = document.getElementById('scroll-nav')
  this.scrollY >= 10 ? scrollNav.classList.add('scroll') 
                     : scrollNav.classList.remove('scroll')
}
window.addEventListener('scroll', scrollBar)

// SCROLL UP/DOWN BUTTON
const btnUp = document.querySelector('.btn_up');
const btnDown = document.querySelector('.btn_down');
const interval = 3000;
const animationDuration = 400;

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 10,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_item a[href*=' + sectionId + ']')
        scrollClass = document.querySelector('.scroll_item a[href*=' + sectionId + ']')
		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active_link')
      scrollClass.classList.add('active')
		}else{
			sectionsClass.classList.remove('active_link')
			scrollClass.classList.remove('active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)