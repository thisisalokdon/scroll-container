const scrollContainer = document.querySelector('.scroll-content');

// Clone the icons to create a continuous scroll effect
const clone = scrollContainer.cloneNode(true);
scrollContainer.parentNode.appendChild(clone);
