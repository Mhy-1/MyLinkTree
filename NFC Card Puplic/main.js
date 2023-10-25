/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
    element.addEventListener('click', () => {
        var target = document.querySelector(element.dataset.target)
        targets.forEach(element2 => {
            var target2 = document.querySelector(element2.dataset.target)
            element2.style.color = 'var(--menu_text_color)'
            target2.style.display = 'none'
        });
        element.style.color = 'var(--menu_active_text_color)'
        target.style.display = 'flex'
    })
})

const dynamicText = document.querySelector("h1 span");
const words = ["Love", "like Art", "the Future", "Everything"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 400);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();