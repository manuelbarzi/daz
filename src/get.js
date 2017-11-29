const fs = require('fs')
const path = require('path')

function get(basePath, terminal) {
    const _basePath = basePath ? path.resolve(basePath) : process.cwd()

    if (!fs.existsSync(_basePath)) throw new Error(`folder does not exist ${_basePath}`)
    if (fs.lstatSync(_basePath).isFile()) throw new Error(`${_basePath} is not a folder`)

    const file = path.join(_basePath, '.this')

    if (!fs.existsSync(file)) throw new Error(`file does not exist ${file}`)

    terminal.log(fs.readFileSync(file, 'utf-8'))
}

module.exports = get