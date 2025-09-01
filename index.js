let jokeBtnElement = document.querySelector("#joke-btn");
let key;

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
    let context =
        "You are a comedian who tells funny jokes. Don't repeat your answers.";
    let prompt = "Generate a unique funny joke about animals.";
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${key}`;

    axios
        .get(url)
        .then(displayAnswer)
        .catch((error) => {
            console.error(`Error fetching data:`, error);
        });
};

jokeBtnElement.addEventListener("click", makeApiCall);