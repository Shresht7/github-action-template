//  Library
import * as core from '@actions/core'
import { inputs, outputs } from './metadata'

// ======
// CONFIG
// ======

/** GITHUB_WORKSPACE */
const workspace = process.env.GITHUB_WORKSPACE || ''

if (!workspace) {
    throw new Error('Invalid GITHUB_WORKSPACE. You need to checkout this repository using the actions/checkout@v3 github-action for the GITHUB_WORKSPACE environment variable.')
}

/** Input Parameter */
// export const parameter = core.getInput(inputs.parameter)