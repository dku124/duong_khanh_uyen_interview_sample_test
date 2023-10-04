// CHANGE BACKGROUND HEADE
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 10 ? header.classList.add('active_header') 
                     : header.classList.remove('active_header')
}
window.addEventListener('scroll', scrollHeader)


// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_item a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active_link')
		}else{
			sectionsClass.classList.remove('active_link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)