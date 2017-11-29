const get = require('../src/get')

const terminal = {
    log: message => {}
}

describe('get', () => {
    it('should get the info from an existing specified path', () => {
        spyOn(terminal, 'log')

        get('my-folder/projects/translator', terminal)

        expect(terminal.log).toHaveBeenCalled()
    })

    it('should throw an error when a specified path does not exist', () => {
        expect(() => get('a-non-existing-path', terminal)).toThrow()
    })
})