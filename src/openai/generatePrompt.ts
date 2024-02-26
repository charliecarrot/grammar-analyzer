import {
    exampleConstituents,
    exampleConstituents2,
    exampleSentence,
    exampleSentence2,
} from '../types/grammar/constituents_OLD/constituent'
import { importAsString } from '../lib/utility/importAsString'

export const generatePrompt = (sentence: string) => {
    const lexcialTypes = importAsString('../types/grammar/constituents/lexicalConstituent.ts')
    const exampleResponse = JSON.stringify(exampleConstituents).replace(/\\n/g, '')
    const exampleResponse2 = JSON.stringify(exampleConstituents2).replace(/\\n/g, '')
    const prompt = `Look at the following type definitions that represent lexical categories for English words (and use the comments for hints):
## BEGIN TYPE DEFINITIONS ##
${lexcialTypes}
## END TYPE DEFINITIONS

Now, using only those types and the possible values they can have as defined above, convert the following sentence into JSON (ignoring any punctuation).

Sentence: ${exampleSentence}

${exampleResponse}

Sentence: ${exampleSentence2}

${exampleResponse2}

Sentence: ${sentence}

`

    console.debug('prompt: ' + prompt.replace(/\\n/g, ''))

    return prompt
}

export default generatePrompt
