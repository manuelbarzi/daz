const fs = require('fs')
const path = require('path')

function get(path_, terminal) {
    const _path = path_ ? path.resolve(path_) : process.cwd()

    if (!fs.existsSync(_path)) throw new Error(`folder does not exist ${_path}`)
    if (fs.lstatSync(_path).isFile()) throw new Error(`${_path} is not a folder`)

    const file = path.join(_path, '.this')

    if (!fs.existsSync(file)) throw new Error(`file does not exist ${file}`)

    terminal.log(fs.readFileSync(file, 'utf-8'))
}

module.exports = get