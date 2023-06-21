

// HEADER logo
const spanGet = document.querySelector(".multiple-text");
const typingText = ["Algogence"];
console.log(typingText.length);
const typed_string = new Typed(".multiple-text",{strings:typingText,
typeSpeed: 140,
loop: true,
backDelay: 3000,
backSpeed: 80,
});
console.log(typed_string)