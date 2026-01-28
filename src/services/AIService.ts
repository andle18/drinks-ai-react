import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter("meta-llama/llama-3.3-70b-instruct:free"),
      //model: openrouter('google/gemini-2.5-pro-exp-03-25:free'),
      // model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
      // model: openrouter('google/gemma-3-4b-it:free'),
      system: `
              You are a professional bartender and cocktail expert.
              Generate clear, well-structured cocktail recipes focused on balance, flavor, and practical preparation.
              Use a neutral and professional tone.
              Avoid romantic, seductive, or suggestive language.`,
      prompt,
      temperature: 0.7,
    });

    return result.textStream;
  },
};
