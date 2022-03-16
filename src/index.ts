//  Library
import * as core from '@actions/core'

//  ====
//  MAIN
//  ====

/** Main entrypoint to the GitHub Action */
async function run() {
    try {
        // await action()
        core.notice('Hello World!')
    } catch (err) {
        const error = err as Error
        core.error(error)
    }
}

run()