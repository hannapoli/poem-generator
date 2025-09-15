//This function runs when API is called 
exports.handler = async function (event, context) {

  const API_KEY = process.env.key;

  const { promptInstructions } = JSON.parse(event.body);
  const contextText = "You are an expert in writing short poems. You must generate a 4-line poem using HTML line breaks (<br />) to separate lines. Do not include a title. At the end of the poem (not at the beginning), sign it with 'SheCodes AI' inside a <strong> element. Return only the HTML-formatted poem — not inside a code block and not labeled as HTML. Just the content.";
  const prompt = `User instructions: generate a poem about: ${promptInstructions}`;
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