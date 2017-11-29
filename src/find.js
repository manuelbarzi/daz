require('./array-polyfills')

const fs = require('fs')
const path = require('path')

function find(what, options, terminal, basePath) {
    const _basePath =  options.path ? path.resolve(options.path) : process.cwd()

    const targetPath = basePath ? basePath : _basePath

    const subPaths = fs.readdirSync(targetPath)

    subPaths.forEach(subPath => {
        const subPathFull = path.join(targetPath, subPath)
        const lstat = fs.lstatSync(subPathFull)

        if (lstat.isFile() && subPath === '.this') {
            const info = JSON.parse(fs.readFileSync(subPathFull, 'utf-8'))

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
                    out += options.showFullPath? `${targetPath} -> ` : `${path.relative(_basePath, targetPath)} -> `
                }

                if (options.showJson) {
                    out += JSON.stringify(info)
                } else {
                    out += `${info.title}`

                    if (options.showTags) out += ` [${info.tags || ''}]`
                }


                terminal.log(out)
            }
        } else if (lstat.isDirectory() && (!options.exclude || !options.exclude.includes(subPath))) {
            find(what, options, terminal, subPathFull)
        }
    })
}

module.exports = find