import { type BasePhrase } from '../phrase'

export interface NounPhrase extends BasePhrase {
    category: 'noun'
    function: 'subject' | 'objectOfPreposition' | 'directObject' | ''
    // TODO: restrict what children can be
}
