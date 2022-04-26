const counters = document.querySelectorAll('.counter');

// Multiple Counters
counters.forEach(counter => {
	// Mulai dari 0 
	counter.innerText = '0';
	
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerText;
		
		// Speed Up
		const increment = target / 1000;
		
		if(c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target;
		}
	};
	
	updateCounter();
});

// dont be silly
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});