const fs = require('fs')
const path = require('path')

function set(path_, input, output, terminal) {
    const _path = path_ ? path.resolve(path_) : process.cwd()

    if (!fs.existsSync(_path)) throw new Error(`folder does not exist ${_path}`)
    if (fs.lstatSync(_path).isFile()) throw new Error(`${_path} is not a folder`)

    const folder = path.basename(_path)
    const file = path.join(_path, '.this')

    let info = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : { title: folder }

    let step = 1

    output.write(`title [${info.title}]: `)

    input.setEncoding('utf8')

    input.on('data', function (text) {
        text = text.trim()

        switch (step) {
            case 1:
                if (text) info.title = text

                output.write(info.tags ? `tags [${info.tags}] (comma or space separated): ` : 'tags (comma or space separated): ')

                break
            case 2:
                if (text) info.tags = text.replace(/,/g, ' ').replace(/\s+/g, ' ').split(' ').filter(item => !!item.trim())
        }

        step++

        if (step > 2) {
            if (!info.created)
                info.created = new Date()
            else
                info.modified = new Date()

            info = _pretty(info)

            fs.writeFileSync(file, info)

            terminal.log(`written file ${file} -> ${info}`)

            process.exit()
        }
    })
}

function _pretty(json) {
    return JSON.stringify(json, null, 2)
}

module.exports = set