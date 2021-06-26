const heading = document.querySelector('.heading');
const mallusrgreat = document.querySelector('.mallusrgreat');
mallusrgreat.addEventListener('dblclick', () => {
	heading.innerHTML = "I don't know what the point of this website is anymore.";
	heading.classList.remove('fs-56');
	heading.classList.add('fs-25');
	mallusrgreat.addEventListener('dblclick', () => {
		heading.innerHTML = "Hey!";
		heading.classList.add('fs-56');
		heading.classList.remove('fs-25')
	})
})