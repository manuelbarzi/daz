const fs = require('fs')
const path = require('path')

const _set = require('./_set')
const _get = require('./_get')
const _find = require('./_find')

function daz(args, input, output, terminal) {
    try {
        _daz(args, input, output, terminal)
    } catch (err) {
        terminal.error(err.message)
    }
}

function _daz(args, input, output, terminal) {
    if (args.length >= 3) {
        const command = args[2]

        if (command === '--help') {
            output.write(`${fs.readFileSync('./help.txt')}\n`)
        } else if (command === '--version') {
            terminal.log(require('./package.json').version)
        } else if (command === 'set') {
            _set(args.slice(3), input, output, terminal)
        } else if (command === 'get') {
            _get(args.slice(3), terminal)
        } else if (command === 'find') {
            _find(args.slice(3), terminal)
        } else {
            throw new Error(`unknown command ${command}`)
        }
    } else {
        throw new Error(`not enough arguments, run 'daz --help' for more help`)
    }
}

module.exports = daz