import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { configDotenv } from "dotenv";
configDotenv();
const token = process.env.GITHUB_TOKEN;

const endpoint = "https://models.github.ai/inference";
const model = "gpt-4o-mini";

export async function askAI(question) {
  try {
    const client = ModelClient(
      endpoint,
      new AzureKeyCredential(token)
    );

    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: "You are a helpful assistant. Answer in only one word no punctuation." },
          { role: "user", content: question }
        ],
        temperature: 1.0,
        top_p: 1.0,
        model: model
      }
    });

    if (isUnexpected(response)) {
      console.error("API Error:", response.body.error);
      throw response.body.error;
    }

    const text = response.body.choices[0].message.content;
    return text.split(" ")[0];
  } catch (error) {
    console.error("AI API Error:", error.message);
    throw error;
  }
}

