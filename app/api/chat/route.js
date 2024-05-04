import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: "sk-proj-xboR40J5AGKvsutvLsO4T3BlbkFJgT1GbnopoMEl3M2Nzt2j",
});

const openai = new OpenAIApi(apiConfig);

export async function POST(req) {
  const { messages } = await req.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}