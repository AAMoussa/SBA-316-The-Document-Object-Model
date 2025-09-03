// script.js - Daily Motivation App
// Covers all SBA 316 DOM requirements

// 1- Cache elements (getElementById + querySelector)

const quoteBox = document.getElementById("quote-box");
const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");
const form = document.getElementById("quote-form");
const userQuoteInput = document.getElementById("user-quote");
const formMessage = document.getElementById("form-message");
const quoteList = document.getElementById("quote-list");


// 2- Quote Collection.

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Keep going. Everything you need will come to you at the perfect time.",
  "Happiness is not by chance, but by choice.",
  "Do what you can with what you have where you are."
];

// 3- Function to show random quote

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];

    // Style change to show interaction
    quoteBox.style.background = "#333";
    setTimeout(() => {
        quoteBox.style.background = "#222"; // Revert after short delay
    }, 3000);
}

// 4- Event listener: when Button is clicked.

newQuoteBtn.addEventListener("click", showRandomQuote);

// 5- Form validation + add Quote

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userQuote = userQuoteInput.value.trim();

    if (userQuote.length < 5) {
        formMessage.textContent = "Quote must be at least 5 characters.";
        return;
    }

    formMessage.textContent = ""; //Clear error message.

    //Create and append new quote (CreateElement + appendChild)
    const li = document.createElement("li");
    li.textContent = userQuote;
    quoteList.appendChild(li);

    //Now reset the input element
    userQuoteInput.value = "";
    });

// 6- Iterate over a collection (just for requirement)

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.opacity = "0.8";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.opacity = "1";
  });
});

// 7-  Use parent/child/sibling navigation (demo just for testing purpose)

console.log("First child of quote-list:", quoteList.firstChild);

// 8️- Modify attribute dynamically

newQuoteBtn.addEventListener("dblclick", () => {
  document.body.setAttribute("style", "background: linear-gradient(to right, #ff9966, #ff5e62);");
});

// 9️- DocumentFragment usage (preload some custom quotes)

const fragment = document.createDocumentFragment();
["Stay positive.", "Dream big.", "Be kind to yourself."].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    fragment.appendChild(li);
});
quoteList.appendChild(fragment);

// 10- BOM Usage (Log the window size + greet user)

console.log(`Window width: ${window.innerWidth}px`);
if (window.confirm("Welcome! Would you like to start with a random quote?")) {
    showRandomQuote();
}

