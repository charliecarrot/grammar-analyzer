import OpenAI from 'openai'

type CompletionResponse = {
    success: boolean
    message?: string
    data?: string | null
}

export const complete = async (openai: OpenAI, sentence: string): Promise<CompletionResponse> => {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: sentence }],
        model: 'gpt-3.5-turbo',
    }
    try {
        const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params)
        console.debug(chatCompletion.choices[0])
        return {
            success: true,
            data: chatCompletion.choices[0].message.content,
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
