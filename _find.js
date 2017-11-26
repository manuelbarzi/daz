const fs = require('fs')
const path = require('path')

function _find(args, terminal) {
    const what = args[0]

    const options = {}

    const _options = args.slice(1)

    for (let i = 0; i < _options.length; i++) {
        const option = _options[i]

        if (option === '--ignore-case') {
            options.ignoreCase = true
        } else if (option.startsWith('--tags')) {
            const length = '--tags'.length
            const key = option.substring(0, length)
            const symbol = option.substring(length, length + 1)
            const value = option.substring(length + 1)

            if (key !== '--tags' || symbol !== '=' || !_trim(value)) throw new Error('invalid option for --tags')

            options.tags = _split(value)
        } else if (option.startsWith('--exclude')) {
            const length = '--exclude'.length
            const key = option.substring(0, length)
            const symbol = option.substring(length, length + 1)
            const value = option.substring(length + 1)

            if (key !== '--exclude' || symbol !== '=' || !_trim(value)) throw new Error('invalid option for --exclude')

            options.exclude = _split(value)
        } else if (option.startsWith('--path')) {
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
        } else if (option === '--show-tags') {
            options.showTags = true
        } else if (option === '--show-json') {
            options.showJson = true
        } else throw new Error(`invalid option ${option}`)
    }

    const _basePath = path.resolve('.')
    const _path = options.path ? path.resolve(options.path) : _basePath

    const matches = []

    _search(_basePath, _path, what, options, terminal)
}

function _trim(text) {
    return text ? text.trim() : text
}

function _split(text) {
    if (text.includes(' ')) return text.split(' ')
    if (text.includes(',')) return text.split(',')
    return [text]
}

Array.prototype.contains = function (array) {
    for (let i = 0; i < array.length; i++)
        if (!this.includes(array[i])) return false
    return true
}

function _search(_basePath, _path, what, options, terminal) {
    const files = fs.readdirSync(_path)

    files.forEach(file => {
        const _file = path.join(_path, file)
        const lstat = fs.lstatSync(_file)

        if (lstat.isFile() && file === '.this') {
            const info = JSON.parse(fs.readFileSync(_file, 'utf-8'))

            let matches = options.ignoreCase ? info.title.toLowerCase().includes(what.toLowerCase()) : info.title.includes(what)

            if (options.tags) {
                if (!info.tags) {
                    matches &= false
                } else {
                    matches &= info.tags.contains(options.tags)
                }
            }

            if (matches) {
                let out = ''

                if (!options.hidePath) {
                    out += options.showFullPath? `${_path} -> ` : `${path.relative(_basePath, _path)} -> `
                }

                if (options.showJson) {
                    out += JSON.stringify(info)
                } else {
                    out += `${info.title}`

                    if (options.showTags) out += ` [${info.tags || ''}]`
                }


                terminal.log(out)
            }
        } else if (lstat.isDirectory() && (!options.exclude || !options.exclude.includes(file))) {
            _search(_basePath, _file, what, options, terminal)
        }
    })
}

module.exports = _find