const find = require('../src/find')

const terminal = {
    log: message => {}
}

describe('find', () => {
    it('should find the info from an existing specified path', () => {
        spyOn(terminal, 'log')

        find('Web', { path: 'my-folder/projects/translator' }, terminal)

        expect(terminal.log).toHaveBeenCalled()
    })
})