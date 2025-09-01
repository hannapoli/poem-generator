let jokeBtnElement = document.querySelector("#joke-btn");

const displayAnswer = (response) => {

    new Typewriter("#joke-text", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 20,
    });
};

const makeApiCall = (event) => {
    event.preventDefault();

    let jokeText = document.querySelector("#joke-text");
    jokeText.innerHTML = "Generating a joke...";
    
    axios
        .get("/.netlify/functions/get-poem")
        .then(displayAnswer)
        .catch((error) => {
            console.error(`Error fetching data:`, error);
        });
};

jokeBtnElement.addEventListener("click", makeApiCall);