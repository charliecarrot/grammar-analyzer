import { BaseLexicalItem } from '../lexicalItem'

type DeterminerType =
    | 'article'
    | 'demonstrative'
    | 'possessive'
    | 'quantifier'
    | 'ordinal'
    | 'cardinal'
    | 'interrogative'
    | 'relative'

export interface Determiner extends BaseLexicalItem {
    category: 'determiner'
    type: DeterminerType
}
