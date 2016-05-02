let navigation = document.querySelector('nav[role="navigation"]')
let navigationHeight = navigation.clientHeight

const ACTIVE_FIXED_SCROLL = navigationHeight / 2

let currentScrollTop

document.addEventListener("scroll", () => {
	currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

	if(currentScrollTop > ACTIVE_FIXED_SCROLL) {
		if(!document.getElementsByClassName('scrolled').length) {
			navigation.className = 'scrolled'
		}
	} else {
		if(document.getElementsByClassName('scrolled').length) {
			navigation.className = ''
		}
	}
})
