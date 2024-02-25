import OpenAI from 'openai'
import generatePrompt from './generatePrompt'

type CompletionResponse = {
    success: boolean
    message?: string
    data?: JSON
}

export const complete = async (openai: OpenAI, sentence: string): Promise<CompletionResponse> => {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: generatePrompt(sentence) }],
        model: 'gpt-3.5-turbo',
    }
    try {
        const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params)
        console.debug(chatCompletion.choices[0])
        return {
            success: true,
            data: JSON.parse((chatCompletion.choices[0].message.content ?? '').replace(/\\n/g, '')),
        }
    } catch (error) {
        let message = 'OpenAI Error.'
        if (error instanceof Error) {
            message = error.message
        }
        return {
            success: false,
            message,
        }
    }
}
