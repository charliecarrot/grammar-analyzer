import { type BasePhrase } from '../phrase'

export interface LongVerbPhrase extends BasePhrase {
    category: 'verb'
    type: 'long'
    function: 'predicate'
    // TODO: restrict what children can be
}
