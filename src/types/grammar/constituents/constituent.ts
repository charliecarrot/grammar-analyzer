import { LexicalConstituent } from './lexicalConstituent'

export type Constituent = {
    // Common properties across all constituents
    text?: string
    role: 'content' | 'function'
} & LexicalConstituent

export const exampleConstituents: Constituent[] = [
    {
        text: 'mom',
        role: 'content',
        category: { categoryName: 'Noun', type: 'proper' },
        level: 'lexical',
    },
    {
        text: 'always',
        role: 'content',
        category: { categoryName: 'Adverb', type: '' },
        level: 'lexical',
    },
    {
        text: 'said',
        role: 'content',
        category: { categoryName: 'Verb', type: 'monotransitive' },
        level: 'lexical',
    },
    {
        text: 'her',
        role: 'function',
        category: { categoryName: 'Determiner', type: 'possessive' },
        level: 'lexical',
    },
    {
        text: 'big',
        role: 'function',
        category: { categoryName: 'Adjective', type: '' },
        level: 'lexical',
    },
    {
        text: 'break',
        role: 'content',
        category: { categoryName: 'Noun', type: 'countable' },
        level: 'lexical',
    },
    {
        text: 'was',
        role: 'content',
        category: { categoryName: 'Verb', type: 'copular' },
        level: 'lexical',
    },
    {
        text: 'right',
        role: 'content',
        category: { categoryName: 'Adverb', type: '' },
        level: 'lexical',
    },
    {
        text: 'around',
        role: 'function',
        category: { categoryName: 'Preposition', type: '' },
        level: 'lexical',
    },
    {
        text: 'the',
        role: 'function',
        category: { categoryName: 'Determiner', type: 'article' },
        level: 'lexical',
    },
    {
        text: 'corner',
        role: 'content',
        category: { categoryName: 'Noun', type: 'countable' },
        level: 'lexical',
    },
]

export default Constituent
