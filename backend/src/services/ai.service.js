import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Robustly parses JSON from AI response.
 * Handles markdown blocks and common syntax errors.
 */
const parseJSON = (text) => {
    // 1. Try to find content within markdown code blocks (```json ... ``` or ``` ... ```)
    const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    let jsonString = codeBlockMatch ? codeBlockMatch[1] : text;

    // 2. If no code block, try to find the first '{' and last '}'
    if (!codeBlockMatch) {
        const firstBrace = jsonString.indexOf('{');
        const lastBrace = jsonString.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) {
            jsonString = jsonString.substring(firstBrace, lastBrace + 1);
        }
    }

    // 3. Clean common AI artifacts
    jsonString = jsonString
        .replace(/\/\/.*$/gm, '') // Remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
        .replace(/,\s*([}\]])/g, '$1'); // Remove trailing commas

    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Manual JSON Parse failed, full text was:", text);
        throw new Error("AI returned invalid JSON: " + e.message);
    }
};

/**
 * Generates a campaign blueprint based on event details.
 */
export const generateCampaignBlueprint = async (campaignData) => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
        You are an expert marketing strategist. Generate a campaign blueprint for an event with the following details:
        - Event Name: ${campaignData.eventName}
        - Event Type: ${campaignData.eventType}
        - Event Date: ${campaignData.eventDate}
        - Target Audience: ${campaignData.targetAudience}
        - Campaign Goal: ${campaignData.goal}
        - Tone & Style: ${campaignData.tone}
        - Channels Selected: ${campaignData.channels?.join(", ") || "All Channels"}

        Provide a structured JSON response with the following keys. 
        ENSURE IT IS VALID JSON. DO NOT INCLUDE COMMENTS.
        
        - "strategyName": A catchy name for the strategy.
        - "overview": A 2-3 sentence summary of the campaign strategy.
        - "keyMessages": An array of 3 key messages for the campaign.
        - "phasedTimeline": An array of objects, each with "phase" (e.g., Pre-Event) and "activities" (array of activity strings).
        - "channelBreakdown": An object where each selected channel has a "purpose" and "recommendedContent" string.

        Return ONLY the JSON object inside a markdown code block starting with \`\`\`json.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return parseJSON(text);
    } catch (error) {
        console.error("Error generating campaign blueprint from AI: ", error);
        throw new Error("Failed to generate campaign blueprint: " + error.message);
    }
};

export const generateContentBlock = async (campaignData, blockType) => {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
        Generate a ${blockType} content block for the following campaign:
        - Event Name: ${campaignData.eventName}
        - Goal: ${campaignData.goal}
        - Tone: ${campaignData.tone}

        Provide a structured JSON response with:
        - "blockType": "${blockType}"
        - "title": A subject line or headline.
        - "content": The main body text.
        - "callToAction": A specific action for the audience to take.
        - "recommendedImagePrompt": A description for an AI image generator to match this content.

        Return ONLY the JSON object inside a markdown code block starting with \`\`\`json.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return parseJSON(text);
    } catch (error) {
        console.error("Error generating content block from AI: ", error);
        throw new Error("Failed to generate content block: " + error.message);
    }
};
