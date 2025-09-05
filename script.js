const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `- ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Something went wrong. Try again.";
    console.error(error);
  }
}

newQuoteBtn.addEventListener("click", getQuote);
