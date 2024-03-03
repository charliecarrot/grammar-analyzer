import { type BaseConstituent, type Constituent } from './constituent'
import { AdverbPhrase } from './phrases/adverbPhrase'
import { type LongVerbPhrase } from './phrases/longVerbPhrase'
import { type ShortVerbPhrase } from './phrases/shortVerbPhrase'

export interface BasePhrase extends BaseConstituent {
    level: 'phrase'
    function: string
    type?: string // Optional because not all phrase categories have a specified type
    children: Constituent[]
}

// TODO: replace BasePhrase with phrase interfaces as they're defined
export type Phrase = ShortVerbPhrase | LongVerbPhrase | AdverbPhrase | BasePhrase
