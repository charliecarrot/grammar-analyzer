import {
    exampleConstituents,
    exampleConstituents2,
    exampleSentence,
    exampleSentence2,
} from '../types/grammar/constituents/constituent'
import { importAsString } from '../utility/importAsString'

export const generatePrompt = (sentence: string) => {
    const lexcialTypes = importAsString('../types/grammar/constituents/lexicalConstituent.ts')
    const exampleResponse = JSON.stringify(exampleConstituents).replace(/\\n/g, '')
    const exampleResponse2 = JSON.stringify(exampleConstituents2).replace(/\\n/g, '')
    const prompt = `Look at the following type definitions that represent lexical categories for English words (and use the comments for hints, but consider each lexical category in the context of how it fits in the whole sentence):
${lexcialTypes}

Now, using only those types and the possible values they can have as defined above, convert the following sentence into JSON (ignoring any punctuation): ${exampleSentence}

${exampleResponse}

Good, and again with this sentence: ${exampleSentence2}

${exampleResponse2}

Now do this sentence: ${sentence}

`

    console.debug('prompt: ' + prompt.replace(/\\n/g, ''))

    return prompt
}

export default generatePrompt
