class Daz {
    constructor(input, output, terminal) {
        this.input = input
        this.output = output
        this.terminal = terminal
    }

    set(path) {
        require('./set')(path, this.input, this.output, this.terminal)
    }

    get(path) {
        require('./get')(path, this.terminal)
    }

    find(what, options) {
        require('./find')(what, options, this.terminal)
    }
}

module.exports = Daz