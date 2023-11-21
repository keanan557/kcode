const spans = document.querySelectorAll('.skills-bar span');

spans.forEach((span) => {
	span.style.width = span.dataset.width;
	span.innerHTML = span.dataset.width;
})