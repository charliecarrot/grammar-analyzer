import fs from 'fs'
import stack from 'callsite'
import { createRequire } from 'module'

export const importAsString = (specifier: string) => {
    const caller = stack()[1]
    const callerFileName = caller.getFileName()
    const require = createRequire(callerFileName)

    return fs.readFileSync(require.resolve(specifier), { encoding: 'utf-8' })
}
