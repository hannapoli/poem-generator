//This function runs when API is called 
exports.handler = async function (event, context) {

    const API_KEY = process.env.key;

    const contextText =
        "You are knowledgeable about all kinds of poems.";
    const prompt = "Generate a poem on the proposed topic";
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