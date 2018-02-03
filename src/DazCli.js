const Daz = require('./Daz')

const fs = require('fs')
const path = require('path')
const help = require('./help')



class DazCli extends Daz {
    constructor(input, output, terminal) {
        super(input, output, terminal)
    }

    _run(args, input, output, terminal) {
        if (args.length >= 3) {
            const command = args[2]

            if (command === '--help') {
                this.terminal.log(help())
            } else if (command === '--version') {
                this.terminal.log(require(path.join(__dirname, '../package.json')).version)
            } else if (command === 'set') {
                this.set(args.slice(3))
            } else if (command === 'get') {
                this.get(args.slice(3))
            } else if (command === 'find') {
                this.find(args.slice(3))
            } else {
                throw new Error(`unknown command ${command}`)
            }
        } else {
            throw new Error(`not enough arguments, run 'daz --help' for more help`)
        }
    }

    run(args) {
        try {
            this._run(args)
        } catch (err) {
            this.terminal.error(err.message)
        }
    }

    set(args) {
        super.set(args[0])
    }

    get(args) {
        super.get(args[0])
    }

    find(args) {
        const what = args[0]

        const options = {}

        const optionArgs = args.slice(1)

        for (let i = 0; i < optionArgs.length; i++) {
            const option = optionArgs[i]

            if (option === '--case-sensitive') {
                options.caseSensitive = true
            } else if (option === '--exclude-description') {
                options.excludeDescription = true
            } else if (option === '--hide-description') {
                options.hideDescription = true
            } else if (option.startsWith('--tags=')) {
                const length = '--tags'.length
                const key = option.substring(0, length)
                const symbol = option.substring(length, length + 1)
                const value = option.substring(length + 1)

                if (key !== '--tags' || symbol !== '=' || !_trim(value)) throw new Error('invalid option for --tags')

                options.tags = _split(value)
            } else if (option === '--show-tags') {
                options.showTags = true
            } else if (option.startsWith('--exclude-paths=')) {
                const length = '--exclude-paths'.length
                const key = option.substring(0, length)
                const symbol = option.substring(length, length + 1)
                const value = option.substring(length + 1)

                if (key !== '--exclude-paths' || symbol !== '=' || !_trim(value)) throw new Error('invalid option for --exclude-paths')

                options.excludePaths = _split(value)
            } else if (option.startsWith('--path=')) {
                const length = '--path'.length
                const key = option.substring(0, length)
                const symbol = option.substring(length, length + 1)
                const value = option.substring(length + 1)

                if (key !== '--path' || symbol !== '=' || !_trim(value)) throw new Error('invalid option for --path')

                options.path = value
            } else if (option === '--show-full-path') {
                options.showFullPath = true
            } else if (option === '--hide-path') {
                options.hidePath = true
            } else if (option === '--show-json') {
                options.showJson = true
            } else if (option === '--line-break') {
                options.lineBreak = true
            } else if (option === '--include-package-json') {
                options.includePackageJson = true
            }
        }

        super.find(what, options)
    }
}

function _trim(text) {
    return text ? text.trim() : text
}

function _split(text) {
    if (text.includes(' ')) return text.split(' ')
    if (text.includes(',')) return text.split(',')
    return [text]
}

module.exports = DazCli
