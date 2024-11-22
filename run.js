import { GoogleGenerativeAI } from "@google/generative-ai";
import {filter,filter2} from "./filter.js";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.gemini_api);

async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return await filter2(filter(text))
}

export default run;
