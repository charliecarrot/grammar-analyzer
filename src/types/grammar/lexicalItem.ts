import { type BaseConstituent } from './constituent'

export interface BaseLexicalItem extends BaseConstituent {
    text: string
    level: 'lexical'
    type?: string // Optional because not all lexical items have a specified type
}

// TODO: replace this alias with union of possible lexical items, which each extend from BaseLexicalItem
export type LexicalItem = BaseLexicalItem
