let poemBtnElement = document.querySelector("#poem-btn");

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
    poemText.innerHTML = "Generating a poem...";
    
    axios
        .get("/.netlify/functions/get-poem")
        .then(displayAnswer)
        .catch((error) => {
            console.error(`Error fetching data:`, error);
        });
};

poemBtnElement.addEventListener("click", makeApiCall);