import { type Clause } from './clause'
import { type LexicalItem } from './lexicalItem'
import { type Phrase } from './phrase'

type ConstituentLevel = 'clause' | 'phrase' | 'lexical'

export interface BaseConstituent {
    level: ConstituentLevel
    category: string
}

// Union type to represent possible constituent levels
export type Constituent = Phrase | Clause | LexicalItem
