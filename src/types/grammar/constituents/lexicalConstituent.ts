// Lexical Level Constituents
export type LexicalConstituent = {
    category: LexicalCategory
    level: 'lexical'
}

type LexicalCategory =
    | Noun
    | Pronoun
    | Determiner
    | Preposition
    | Adjective
    | Verb
    | Auxiliary
    | Infinitive
    | Negator
    | Adverb
    | Coordinator
    | Subordinator
    | Insert
    | Existential

// Nouns
type Noun = {
    categoryName: 'Noun'
    type: NounType
    role: 'content'
}
type NounType =
    | 'countable' // ex: car, potato, letter, idea, rainbow, student
    | 'non-countable' // ex: help, magic, furniture, water, corn
    | 'collective' // ex: pack, group, team, faculty, government
    | 'proper' // ex: Lucy, Alice in Wonderland, the Rocky Mountains

// Pronouns
type Pronoun = {
    categoryName: 'Pronoun'
    type: PronounType
    role: 'content'
}
type PronounType =
    | 'personal' // inflect for person and subject/object (ex: me, they, her)
    | 'possessive' // (ex: mine, theirs, ours)
    | 'reflexive' // -self (ex: myself, hisself, themselves, theirself)
    | 'demonstrative' // indicate spacial proximity (ex: this, that, these, those)
    | 'indefinite' // unknown referent (ex: one, some, someone, anything, nobody, it, everywhere)
    | 'reciprocal' // indicate two or more referents share similar actions or feelings (ex: each other, one another)
    | 'relative' // (ex: that, which, who) as in "the person who I talked to yesterday"
    | 'interrogative' // begin interrogative phrases, may contain coindexes (ex: who, what, which)

// Other noun-related Categories
// Determiners always appear before nouns within noun phrases (usually not proper nouns, and never before pronouns)
type Determiner = {
    categoryName: 'Determiner'
    type: DeterminerType
    role: 'function'
}
type DeterminerType =
    | 'article' // central determiner (ex: the, a, an)
    | 'demonstrative' // central determiner; point to the nouns they support (ex: this/these, that/those)
    | 'possessive' // central determiner; specify nouns by indicating ownership or relationship (ex: my, their, her, his, Derek's)
    | 'quantifier' // pre-determiner; quantity out of a whole (ex: all, some, no, any, twice, double, all of, a lot of, none of,)
    | 'ordinal' // post-determiner; placement (ex: first, third, last)
    | 'cardinal' // post-determiner; number (ex: one, eight, three hundred, few, many, every, couple, several)
    | 'interrogative' // begin noun phrases within a question, may contain coindexes (ex: whose, what, which)
    | 'relative' // (ex: whose) as in "the same person whose record has never been beaten"

type Preposition = {
    categoryName: 'Preposition'
    type: ''
    role: 'function'
}

type Adjective = {
    categoryName: 'Adjective'
    type: ''
    role: 'content'
}

// Verbs
type Verb = {
    categoryName: 'Verb'
    type: VerbType
    role: 'content' | 'function' // function is really only for copular verbs
}
type VerbType =
    | 'intransitive' // requires no arguments (no objects, stands alone) (ex: lives, falls, run)
    | 'copular' // linking verbs, connect subject to a subject predicative or subject adverbial (ex: are, become)
    | 'monotransitive' // requires a direct object (ex: drink, feel, carried)
    | 'ditransitive' // requires a direct object and an indirect object (ex: give, owe, ask, offer, call)
    | 'complex-transitive' // requires a direct object and an object predicative or object adverbial (ex: named, send, keep, call)
    | 'pro-form' // stand in for an entire understood verb phrase (ex: be, do, is) as in, "is she writing? she is"

// Auxiliaries
// An auxiliary is always found next to a verb (unless it's a pro-form) and helps indicate tense, aspect, mood, and voice
type Auxiliary = {
    categoryName: 'Auxiliary'
    type: AuxType
    role: 'function'
}
type AuxType =
    | 'primary' // able to inflect for tense and show subject-verb agreement (ex: be, have, get, do)
    | 'modal' // provide interpretation of condition, certainty, possibility (ex: can, could, would, must, should)
    | 'semi-modal' // function like modals, but can inflect for tense and person (ex: be going to, have to, be supposed to, wanna, used to)
    | 'pro-form' // stand in for an entire understood verb phrase (ex: did, can, has) as in "some people like the movie. others didn't"

// Other verb-related categories
type Infinitive = {
    categoryName: 'Infinitive' // (ex: to walk, to eat, to be)
    type: ''
    role: 'content'
}

type Negator = {
    categoryName: 'Negator'
    type: ''
    role: 'content'
}

type Adverb = {
    categoryName: 'Adverb'
    type: AdverbType
    role: 'content'
}
type AdverbType =
    | ''
    | 'interrogative' // elicit adverbial information, contain coindex (ex: where, when, why, how)
    | 'relative' // (ex: when, where) as in "the book where the phrase was" or "last year when I got hired"
    | 'pro-form' // stands in for the rest of the referenced predicate (ex: so, nor) as in "fear is in the air but so is magic"

// Conjunctions
type Coordinator = {
    categoryName: 'Coordinator' // connects two equal constituents (ex: and, but, yet, so)
    type: ''
    role: 'function'
}

type Subordinator = {
    categoryName: 'Subordinator' // connects subordinate phrase (ex: although, because, even if, though, until)
    type: ''
    role: 'function'
}

// Others
type Insert = {
    categoryName: 'Insert' // function as discourse markers (ex: oh, um, hello, sorry, damn, okay, well, thank you, you know)
    type: ''
    role: 'content'
}

type Existential = {
    categoryName: 'Existential' // "there" as in "there is one movie I like"
    type: ''
    role: 'function'
}
