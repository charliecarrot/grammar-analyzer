import { type BasePhrase } from '../phrase'

export interface TenseMoodAspectVoice {
    tense?: 'present' | 'past'
    mood?: 'modal' // modal auxiliary is present - indicates volition, prediction, future, advice, oblication, necessity, ability, permission, or possibility
    aspect?:
        | 'perfect' // form: HAVE + past participle (-ed/en) - indicates action/state was completed by time of some specified or understood point of reference
        | 'progressive' // form: BE + present participle (-ing) - indicates continuing action/state through some specified or understood point of reference
        | 'perfectProgressive' // form: HAVE + been + present participle (-ing) - indicates action/state that continued for some time but was completed before a specified or understood point of reference
    voice?:
        | 'active' // most frequent and common voice
        | 'passive' // form: BE + past participle (-ed/en) or GET + past participle (-ed/en)
}

export interface ShortVerbPhrase extends BasePhrase {
    category: 'verb'
    type: 'short'
    tmav: TenseMoodAspectVoice
    // TODO: narrow what children can be (auxiliary, negator, verb)
}
