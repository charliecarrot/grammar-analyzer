import { LexicalConstituent } from './lexicalConstituent'

export type Constituent = {
    // Common properties across all constituents
    text?: string
} & LexicalConstituent

export const exampleSentence = 'Mom always said her big break was right around the corner'

export const exampleConstituents: Constituent[] = [
    {
        text: 'mom',
        category: { categoryName: 'Noun', type: 'proper', role: 'content' },
        level: 'lexical',
    },
    {
        text: 'always',
        category: { categoryName: 'Adverb', type: '', role: 'content' },
        level: 'lexical',
    },
    {
        text: 'said',
        category: { categoryName: 'Verb', type: 'monotransitive', role: 'content' },
        level: 'lexical',
    },
    {
        text: 'her',
        category: { categoryName: 'Determiner', type: 'possessive', role: 'function' },
        level: 'lexical',
    },
    {
        text: 'big',
        category: { categoryName: 'Adjective', type: '', role: 'content' },
        level: 'lexical',
    },
    {
        text: 'break',
        category: { categoryName: 'Noun', type: 'countable', role: 'content' },
        level: 'lexical',
    },
    {
        text: 'was',
        category: { categoryName: 'Verb', type: 'copular', role: 'function' },
        level: 'lexical',
    },
    {
        text: 'right',
        category: { categoryName: 'Adverb', type: '', role: 'content' },
        level: 'lexical',
    },
    {
        text: 'around',
        category: { categoryName: 'Preposition', type: '', role: 'function' },
        level: 'lexical',
    },
    {
        text: 'the',
        category: { categoryName: 'Determiner', type: 'article', role: 'function' },
        level: 'lexical',
    },
    {
        text: 'corner',
        category: { categoryName: 'Noun', type: 'countable', role: 'content' },
        level: 'lexical',
    },
]

export const exampleSentence2 = 'This tool is simplistic now, but it will improve'

export const exampleConstituents2: Constituent[] = [
    {
        text: 'this',
        category: {
            categoryName: 'Determiner',
            type: 'demonstrative',
            role: 'function',
        },
        level: 'lexical',
    },
    {
        text: 'tool',
        category: {
            categoryName: 'Noun',
            type: 'countable',
            role: 'content',
        },
        level: 'lexical',
    },
    {
        text: 'is',
        category: {
            categoryName: 'Verb',
            type: 'copular',
            role: 'function',
        },
        level: 'lexical',
    },
    {
        text: 'simplistic',
        category: {
            categoryName: 'Adjective',
            type: '',
            role: 'content',
        },
        level: 'lexical',
    },
    {
        text: 'now',
        category: {
            categoryName: 'Adverb',
            type: '',
            role: 'content',
        },
        level: 'lexical',
    },
    {
        text: 'but',
        category: {
            categoryName: 'Coordinator',
            type: '',
            role: 'function',
        },
        level: 'lexical',
    },
    {
        text: 'it',
        category: {
            categoryName: 'Pronoun',
            type: 'personal',
            role: 'content',
        },
        level: 'lexical',
    },
    {
        text: 'will',
        category: {
            categoryName: 'Auxiliary',
            type: 'modal',
            role: 'function',
        },
        level: 'lexical',
    },
    {
        text: 'improve',
        category: {
            categoryName: 'Verb',
            type: 'monotransitive',
            role: 'content',
        },
        level: 'lexical',
    },
]

export default Constituent
