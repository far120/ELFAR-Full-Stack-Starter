import GeminiProvider from "../../providers/gemini/geminiProvider";
import OllamaProvider from "../../providers/ollama/OllamaProvider";
import OpenAIProvider from "../../providers/openai/OpenAIProvider";
import AIService from "../../ai.service";
import User from "../../../../modules/users/user.model";

export const analyzeUser = async (userId: string) => {

    const user = await User.findById(userId);

    if (!user) {
        throw new Error("User not found");
    }

const prompt = `
You are an intelligent user profile analyzer for an enterprise application.

### USER CONTEXT:
- Full Name: ${user.firstName} ${user.lastName}
- Email: ${user.email}
- Phone: ${user.phone || "Not provided"}
- Address: ${user.address || "Not provided"}
- System Role: ${user.role}
- Account Status: ${user.isLocked ? "Locked" : "Active"}
- Verification Status: ${user.isVerified ? "Verified" : "Unverified"}
- Profile Avatar: ${user.avatar ? "Uploaded" : "Not set"}
- Member Since: ${
  user.createdAt
    ? new Date(user.createdAt).toISOString().split("T")[0]
    : "Unknown"
}

### INSTRUCTIONS:
1. Provide a professional, concise executive summary in 2-3 sentences.
2. Clearly state the user's name, role tier, verification status, and current access status.
3. Mention profile completeness based on the provided contact information and avatar status.
4. Calculate a profile completeness score from 0 to 100.


### OUTPUT FORMAT:
Return ONLY valid JSON.
Do not return markdown.
Do not return code blocks.
Do not return any text outside the JSON object.

{
  "summary": "Summary text here",
  "analysis": {
    "Summary": "Concise profile summary here",
    "Score": 90,
  }
}
`;
    //// Make sure to choose the provider you want to use for generating the summary. You can switch between GeminiProvider, OpenAIProvider, and OllamaProvider as needed.
    const geminiProvider = new GeminiProvider(); // Create an instance of the GeminiProvider
    const openAIProvider = new OpenAIProvider(); // Create an instance of the OpenAIProvider
    const ollamaProvider = new OllamaProvider(); // Create an instance of the OllamaProvider
    const aiserviceInstance = new AIService(geminiProvider); // Create an instance of the AIService with the GeminiProvider
    // return await aiserviceInstance.generate(prompt);
    const result = await aiserviceInstance.generate(prompt);
    try {
        return JSON.parse(result);
    } catch (error) {
        console.error("JSON Parse Error:", error);
        throw new Error("Failed to parse AI response");
    }

};


export default {
    analyzeUser
};