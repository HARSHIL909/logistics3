// Background Slideshow Logic
const slides = document.querySelectorAll('.background-slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('show');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('show');
}

setInterval(changeSlide, 3000);

// Modal Logic for Login
const modal = document.getElementById('login');
const closeModalBtn = document.querySelector('.close-btn');

document.querySelector('a[href="#login"]').addEventListener('click', () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

// Placeholder for form submission and authentication logic
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // API call to authenticate user would go here
    alert('Logged in successfully!');
});
