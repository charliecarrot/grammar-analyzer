import { type Constituent } from './constituent'

// A complete sentence is an array of sentence constituents
export type Sentence = Constituent[]

// An example of the data structure for a parsed sentence
export const sentence = 'Even so, Mom always said her big break was right around the corner.'
export const analyzedSentence: Sentence = [
    // array of phrases and clauses that make up a full sentence
    {
        level: 'clause',
        category: 'independent',
        type: 'complex',
        children: [
            {
                level: 'phrase',
                category: 'adverb',
                function: 'discourseMarker',
                children: [
                    // a phrase or clause can contain other phrases or clauses, or lexical items
                    {
                        text: 'even so',
                        level: 'lexical',
                        category: 'adverb',
                    },
                ],
            },
            {
                level: 'phrase',
                category: 'noun',
                function: 'subject',
                children: [
                    {
                        text: 'Mom',
                        level: 'lexical',
                        category: 'noun',
                        type: 'proper',
                    },
                ],
            },
            {
                level: 'phrase',
                category: 'verb',
                type: 'long',
                function: 'predicate',
                children: [
                    {
                        level: 'phrase',
                        category: 'adverb',
                        function: 'adverbial',
                        children: [
                            {
                                text: 'always',
                                level: 'lexical',
                                category: 'adverb',
                            },
                        ],
                    },
                    {
                        level: 'phrase',
                        category: 'verb',
                        type: 'short',
                        function: 'head',
                        tmav: {
                            tense: 'past',
                        },
                        children: [
                            {
                                text: 'said',
                                level: 'lexical',
                                category: 'verb',
                                type: 'monotransitive',
                            },
                        ],
                    },
                    {
                        level: 'clause',
                        category: 'nominal',
                        function: 'directObject',
                        children: [
                            {
                                level: 'phrase',
                                category: 'noun',
                                function: 'subject',
                                children: [
                                    {
                                        text: 'her',
                                        level: 'lexical',
                                        category: 'determiner',
                                        type: 'possessive',
                                    },
                                    {
                                        level: 'phrase',
                                        category: 'adjective',
                                        function: 'attributive',
                                        children: [
                                            {
                                                text: 'big',
                                                level: 'lexical',
                                                category: 'adjective',
                                            },
                                        ],
                                    },
                                    {
                                        text: 'break',
                                        level: 'lexical',
                                        category: 'noun',
                                        type: 'commonCount',
                                    },
                                ],
                            },
                            {
                                level: 'phrase',
                                category: 'verb',
                                type: 'long',
                                function: 'predicate',
                                children: [
                                    {
                                        level: 'phrase',
                                        category: 'verb',
                                        type: 'short',
                                        function: 'head',
                                        tmav: {
                                            tense: 'past',
                                        },
                                        children: [
                                            {
                                                text: 'was',
                                                level: 'lexical',
                                                category: 'verb',
                                                type: 'copular',
                                            },
                                        ],
                                    },
                                    {
                                        level: 'phrase',
                                        category: 'preposition',
                                        function: 'subjectAdverbial',
                                        children: [
                                            {
                                                level: 'phrase',
                                                category: 'adverb',
                                                function: 'adverbial',
                                                children: [
                                                    {
                                                        text: 'right',
                                                        level: 'lexical',
                                                        category: 'adverb',
                                                    },
                                                ],
                                            },
                                            {
                                                text: 'around',
                                                level: 'lexical',
                                                category: 'preposition',
                                            },
                                            {
                                                level: 'phrase',
                                                category: 'noun',
                                                function: 'objectOfPreposition',
                                                children: [
                                                    {
                                                        text: 'the',
                                                        level: 'lexical',
                                                        category: 'determiner',
                                                        type: 'article',
                                                    },
                                                    {
                                                        text: 'corner',
                                                        level: 'lexical',
                                                        category: 'noun',
                                                        type: 'commonCount',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]
