// utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAOSISjcMYetsauF9vWRMO8yglryMc29TA";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 64,
	maxOutputTokens: 8192,
};

export const getGeminiResponse = async (prompt) => {
	try {
		const chatSession = model.startChat({
			generationConfig,
		});

		const result = await chatSession.sendMessage(prompt);
		return result.response.text();
	} catch (error) {
		console.error("Error in Gemini API call:", error);
		throw error;
	}
};
