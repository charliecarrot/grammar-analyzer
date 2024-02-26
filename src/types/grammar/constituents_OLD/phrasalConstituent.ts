import { Constituent } from './constituent'

// Phrasal Level Constituents
export type PhrasalConstituent = {
    category: PhrasalCategory
    level: 'phrasal'
} & Constituent

// TODO: define these as containers that hold all possibilities of constituents?
type PhrasalCategory =
    | 'noun' // can function as subject, direct object, indirect object, object of a preposition
    | 'preposition' // can function as adverbial, subject adverbial, object adverbial, post modifier, or complement
    | 'adjective' // can function as subject predicative, object predicative, attributive, or post modifier
    | 'adverb' // can function as adverbial, subject adverbial, object adverbial, degree, or discourse marker
    | 'verb' // functions as predicate - can take tense/mood/aspect/voice modifiers
