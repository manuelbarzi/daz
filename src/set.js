const fs = require('fs')
const path = require('path')
const theme = require("./theme")

function set(basePath, input, output, terminal) {
    const _basePath = basePath ? path.resolve(basePath) : process.cwd()

    if (!fs.existsSync(_basePath)) throw new Error(`folder does not exist ${_basePath}`)
    if (fs.lstatSync(_basePath).isFile()) throw new Error(`${_basePath} is not a folder`)

    const folder = path.basename(_basePath)
    const file = path.join(_basePath, '.this')

    const info = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : {
        title: folder
    }

    let step = 1

    output.write(`\n${theme.set.titleParam("title")} [${theme.set.infoParam(info.title)}] ~$ `)

    input.setEncoding('utf8')

    input.on('data', function (text) {
        text = text.trim()

        switch (step) {
            case 1:
                if (text) info.title = text

                output.write(info.description ? `\n${theme.set.titleParam("description")} [${theme.set.infoParam(info.description)}] ~$ ` : `\n${theme.set.requireParam("description")} ~$ `)

                break
            case 2:
                if (text) info.description = text

                output.write(info.tags ? `\n${theme.set.titleParam("tags")} [${theme.set.infoParam(info.tags)}] (comma or space separated) ~$  ` : `\n${theme.set.requireParam("tags")} (comma or space separated) ~$ `)

                break
            case 3:
                if (text) info.tags = text.replace(/,/g, ' ').replace(/\s+/g, ' ').split(' ').filter(item => !!item.trim())
        }

        step++

        if (step > 3) {
            if (!info.created)
                info.created = new Date()
            else
                info.modified = new Date()

            let _info = {}

            if (info.title) _info.title = info.title
            if (info.description) _info.description = info.description
            if (info.tags) _info.tags = info.tags
            if (info.created) _info.created = info.created
            if (info.modified) _info.modified = info.modified

            _info = _pretty(_info)

            fs.writeFileSync(file, _info)

            terminal.log(`\n${theme.set.outPutTermianl(file, _info)}`)

            process.exit()
        }
    })
}

function _pretty(json) {
    return JSON.stringify(json, null, 2)
}

module.exports = set