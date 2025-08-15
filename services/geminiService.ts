
import { GoogleGenAI, Type } from "@google/genai";
import type { CommandTutorial } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const schema = {
  type: Type.OBJECT,
  properties: {
    commandName: {
      type: Type.STRING,
      description: "The name of the command.",
    },
    summary: {
      type: Type.STRING,
      description: "A single-sentence summary of what the command does.",
    },
    description: {
      type: Type.STRING,
      description: "A detailed paragraph explaining the command's purpose and functionality, using markdown for formatting if necessary.",
    },
    examples: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          command: {
            type: Type.STRING,
            description: "The example command to run.",
          },
          explanation: {
            type: Type.STRING,
            description: "A brief explanation of what this specific example does.",
          },
        },
        required: ["command", "explanation"],
      },
    },
  },
  required: ["commandName", "summary", "description", "examples"],
};

export const fetchCommandTutorial = async (command: string): Promise<CommandTutorial> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide a tutorial for the Linux command: \`${command}\`.`,
      config: {
        systemInstruction: "You are an expert on Linux command-line tools. Your task is to provide a clear, concise, and accurate tutorial for a given command. The output must be in JSON format matching the provided schema.",
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonText = response.text.trim();
    const tutorialData = JSON.parse(jsonText);
    
    // Basic validation to ensure the parsed object matches the expected structure
    if (
      !tutorialData.commandName ||
      !tutorialData.summary ||
      !tutorialData.description ||
      !Array.isArray(tutorialData.examples)
    ) {
      throw new Error("Invalid data structure received from API");
    }

    return tutorialData as CommandTutorial;
  } catch (error) {
    console.error(`Error fetching tutorial for command "${command}":`, error);
    throw new Error(`Failed to fetch tutorial for ${command}. Please check the console for more details.`);
  }
};
