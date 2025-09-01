//This function runs when API is called 
exports.handler = async function (event, context) {

    const API_KEY = process.env.key;

    const contextText =
        "You are a comedian who tells funny jokes. Don't repeat your answers.";
    const prompt = "Generate a unique funny joke about animals.";
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
      body: JSON.stringify({ error: "Failed to fetch joke", details: error.message }),
    };
  }
}