import { type BasePhrase } from '../phrase'

export interface AdverbPhrase extends BasePhrase {
    category: 'adverb'
    type: 'long'
    function: 'adverbial' | 'degree' | 'discourseMarker'
    // TODO: restrict what children can be
}
