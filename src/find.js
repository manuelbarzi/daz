require('./array-polyfills')

const fs = require('fs')
const path = require('path')

function find(what, options, terminal, basePath) {
    const _basePath = options.path ? path.resolve(options.path) : process.cwd()

    const targetPath = basePath ? basePath : _basePath

    const subPaths = fs.readdirSync(targetPath)

    subPaths.forEach(subPath => {
        const subPathFull = path.join(targetPath, subPath)
        const lstat = fs.lstatSync(subPathFull)

        if (lstat.isFile()) {
            if (subPath === '.this') {
                const info = JSON.parse(fs.readFileSync(subPathFull, 'utf-8'))

                let matches = matchesText(info.title, what, options.caseSensitive)

                if (!options.excludeDescription)
                    matches |= matchesText(info.description, what, options.caseSensitive)

                if (options.tags) {
                    if (!info.tags) {
                        matches &= false
                    } else {
                        matches &= info.tags.contains(options.tags)
                    }
                }

                if (matches) {
                    let out = options.lineBreak ? '\n' : ''

                    if (!options.hidePath) {
                        out += options.showFullPath ? `${targetPath} -> ` : `${options.path ? options.path : './'}${path.relative(_basePath, targetPath)} -> `
                    }

                    if (options.showJson) {
                        out += JSON.stringify(info)
                    } else {
                        out += `${info.title}`

                        if (!options.hideDescription) out += info.description ? ` [${info.description}]` : ' [NO DESCRIPTION]'

                        if (options.showTags) out += info.tags ? ` [${info.tags}]` : ' [NO TAGS]'
                    }


                    terminal.log(out)
                }
            } else if (options.includePackageJson && subPath === 'package.json') {
                const info = JSON.parse(fs.readFileSync(subPathFull, 'utf-8'))

                let matches = matchesText(info.name, what, options.caseSensitive)

                if (!options.excludeDescription && info.description)
                    matches |= matchesText(info.description, what, options.caseSensitive)

                if (options.tags) {
                    if (!info.keywords) {
                        matches &= false
                    } else {
                        matches &= info.keywords.contains(options.tags)
                    }
                }

                if (matches) {
                    let out = options.lineBreak ? '\n' : ''

                    if (!options.hidePath) {
                        out += options.showFullPath ? `${targetPath} -> ` : `${options.path ? options.path : './'}${path.relative(_basePath, targetPath)} -> `
                    }

                    if (options.showJson) {
                        out += JSON.stringify(info)
                    } else {
                        out += `${info.name}`

                        if (!options.hideDescription) out += info.description ? ` [${info.description}]` : ' [NO DESCRIPTION]'

                        if (options.showTags) out += info.keywords ? ` [${info.keywords}]` : ' [NO TAGS]'
                    }


                    terminal.log(out)
                }
            }
        } else if (lstat.isDirectory() && (!options.excludePaths || !options.excludePaths.includes(subPath))) {
            find(what, options, terminal, subPathFull)
        }
    })
}

function matchesText(text, what, caseSensitive) {
    if (!text) return false

    return caseSensitive? text.includes(what) : text.toLowerCase().includes(what.toLowerCase())
}

module.exports = find