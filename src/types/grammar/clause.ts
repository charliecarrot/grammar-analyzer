import { type BaseConstituent, type Constituent } from './constituent'

export interface BaseClause extends BaseConstituent {
    level: 'clause'
    category: string
    type?: string
    function?: string
    children: Constituent[]
}

// TODO: replace this alias with union of possible clauses, which each extend from BaseClause
export type Clause = BaseClause
