import { Sentence } from 'src/types/grammar/sentence'

export const example1Sentence =
    'On the morning of the climb, the second platform was covered, edge to edge, with stout two-wheeled carts arranged in rows.'
export const example1Output: Sentence = [
    {
        level: 'clause',
        category: 'independent',
        children: [
            {
                level: 'phrase',
                category: 'preposition',
                function: 'adverbial',
                children: [
                    {
                        text: 'on',
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
                                text: 'second',
                                level: 'lexical',
                                category: 'determiner',
                                type: 'ordinal',
                            },
                        ],
                    },
                ],
            },
        ],
    },
]
