import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

export const runtime = 'edge'

const apiConfig = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(apiConfig)

export async function POST(req: Request) {
    const { messages } = await req.json()
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: messages
    })
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
}