const color = require("./colors")

function titleParam(attribute) {

    return `${color.Color_Off}${color.Blue}# ${color.Color_Off}${color.Red}${attribute}${color.Color_Off}`
}

function infoParam(info) {

    return `${color.Yellow}${info}${color.Color_Off}`
}

function requireParam(req)  {

    return `${color.Color_Off}${color.Blue}# ${color.Color_Off}${color.Red}${req}${color.Color_Off}`
}

function outPutTermianl(file, info) {

    return `${color.Color_Off}${color.Blue}# ${color.Color_Off}${color.Red}written file ${color.Color_Off}${color.Cyan}${file} ${color.Bold}-> ${color.Color_Off}${info}`
}

module.exports = {
    titleParam,
    infoParam,
    requireParam,
    outPutTermianl
}