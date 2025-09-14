//This function runs when API is called 
exports.handler = async function (event, context) {

  const API_KEY = process.env.key;

  const promptInstructions = document.querySelector("#instructions");
  const contextText =
    "You are an expert in writing short poems. You must generate a 4-line poem using basic HTML, separating each line with a <br /> tag. Do not include a title to the poem. At the end of the poem (not at the beginning), sign it with 'SheCodes AI' inside a <strong> element. Be sure to follow the user instructions!";
  const prompt = `User instructions: generate a poem on the following topic: ${promptInstructions.value}`;
  const url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(contextText)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch the poem", details: error.message }),
    };
  }
}