const fs = require('fs')
const path = require('path')

function _get(args, terminal) {
    const target = args[0]

    const _path = target ? path.resolve(target) : process.cwd()

    if (!fs.existsSync(_path)) throw new Error(`folder does not exist ${_path}`)
    if (fs.lstatSync(_path).isFile()) throw new Error(`${_path} is not a folder`)

    const file = path.join(_path, '.this')

    if (!fs.existsSync(file)) throw new Error(`file does not exist ${file}`)

    terminal.log(fs.readFileSync(file, 'utf-8'))
}

module.exports = _get