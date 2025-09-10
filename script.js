let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');    
} 



const titles = ["Web Developer", "UI Designer", "Frontend Developer", "Backend Developer"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.querySelector(".multiple-text");

function typeEffect() {
    const currentTitle = titles[currentIndex];
    const displayedText = currentTitle.substring(0, charIndex);
    textElement.innerHTML = displayedText + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex < currentTitle.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentIndex = (currentIndex + 1) % titles.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();




// Initialize EmailJS
(function () {
  emailjs.init("fxfJB68oHzmW-zLyI"); // 👉 Your Public Key
})();

// Form submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_wene2ar", "template_l6olly1", this)
        .then(() => {
          alert("✅ Message sent successfully!");
          this.reset();
        })
        .catch((error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        });
    });
  }
});


