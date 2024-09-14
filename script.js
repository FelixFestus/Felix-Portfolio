function toggleNav(){
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
const span = document.querySelectorAll('.progress-bar span');

span.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
} )