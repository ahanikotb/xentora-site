"use server";

import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

export async function sendToGPT(data: any) {
  let prompt = fillPromptWithSettings();
  prompt = prompt.replace("[AI Main Conversation]", formatChat(data));

  const chatCompletion = await openai.createChatCompletion({
    model: "openai/gpt-3.5-turbo",
    temperature: 0.3,
    messages: [{ role: "system", content: prompt }],
  });

  return chatCompletion.data.choices[0].message?.content;
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: "https://openrouter.ai/api/v1",
  baseOptions: {
    headers: {
      "HTTP-Referer": "https://xentora.com",
      "X-Title": "CHATBOTTEST",
    },
  },
});

const openai = new OpenAIApi(configuration);
const AINAME = "Jerry";
const systemPrompt = `I want you to act as an AI called [ENTER NAME] who is trained in qualifying our US clients for our [OFFER] over SMS. I will provide you with a list of questions you must ask to qualify these clients with. You will only ask one question at a time and you will only move on to the next question after you have received a satisfactory answer. A satisfactory answer is defined as an answer which would indicate they are interested in our [OFFER]. Question 1: Have you signed up a buyers representation agreement with realtor? Question 2: Have you spoken to a lender already about getting pre-approved? Question 3: What is your pre-approved mortgage amount? Question 4: When would you be free to talk to one of our advisers between Monday - Friday 9 am to 5 pm? Here is the conversation you're responding to: [AI Main Conversation]. [ENTER NAME]:`;

function fillPromptWithSettings() {
  let p = systemPrompt;
  p = p.replaceAll("[ENTER NAME]", AINAME);
  p = p.replaceAll("[OFFER]", "Real Estate Buyer Agents");
  return p;
}
function formatChat(m: any) {
  let f = "";
  for (let t of m) {
    if (t.role == "user") {
      f = f.concat(`User: ${t.content} `);
    } else {
      f = f.concat(`${AINAME}: ${t.content} `);
    }
  }
  return f;
}
