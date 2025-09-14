let poemFormElement = document.querySelector("#poem-form");

const displayAnswer = (response) => {

    new Typewriter("#poem-text", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 20,
    });
};

const makeApiCall = (event) => {
    event.preventDefault();

    let poemText = document.querySelector("#poem-text");
    poemText.classList.remove("hidden");
    poemText.innerHTML = `<div class="pending">Generating a poem... ⏳</div>`;

    axios
        .get("/.netlify/functions/get-poem")
        .then(displayAnswer)
        .catch((error) => {
            console.error(`Error fetching data:`, error);
        });
};

poemFormElement.addEventListener("submit", makeApiCall);