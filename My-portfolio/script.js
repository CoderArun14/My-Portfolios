// function handlemenu(){
//   console.log("Hello")
// }

const words = [
  "Full Stack Web Developer",
  "Front-End Developer",
  "Backend Developer",
  "Mern Stack Developer",
  "UI/UX Developer"
];

let wordIndex = 0;
let charIndex = 0;
const typeBox = document.getElementById("type-box");

function type() {
  const currentWord = words[wordIndex];
  if (charIndex < currentWord.length) {
    typeBox.textContent += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500); 
  }
}

function erase() {
  if (charIndex > 0) {
    typeBox.textContent = typeBox.textContent.slice(0, -1);
    charIndex--;
    setTimeout(erase, 50); // erase speed
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}


type();

function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('bar-html').classList.replace('w-0', 'w-[90%]');
  }, 100);

  setTimeout(() => {
    document.getElementById('bar-css').classList.replace('w-0', 'w-[80%]');
  }, 300);

  setTimeout(() => {
    document.getElementById('bar-js').classList.replace('w-0', 'w-[75%]');
  }, 500);

  setTimeout(() => {
    document.getElementById('bar-tailwindcss').classList.replace('w-0', 'w-[80%]');
  }, 700);

  setTimeout(() => {
    document.getElementById('bar-bootstrap').classList.replace('w-0', 'w-[80%]');
  }, 900);

  setTimeout(() => {
    document.getElementById('bar-react').classList.replace('w-0', 'w-[75%]');
  }, 1100);

  setTimeout(() => {
    document.getElementById('bar-mui').classList.replace('w-0', 'w-[60%]');
  }, 1300);

  setTimeout(() => {
    document.getElementById('bar-node').classList.replace('w-0', 'w-[70%]');
  }, 1500);

  setTimeout(() => {
    document.getElementById('bar-express').classList.replace('w-0', 'w-[60%]');
  }, 1700);

  setTimeout(() => {
    document.getElementById('bar-mongo').classList.replace('w-0', 'w-[65%]');
  }, 1900);
});

// form Data Store

const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, clear form after submission
    form.reset();
  });