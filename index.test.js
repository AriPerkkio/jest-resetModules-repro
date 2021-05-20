const fs = require('fs');
const method = require('./index');

describe('repros', () => {
    beforeEach(() => {
        jest.resetModules();

        if(fs.existsSync('./dynamically-generated-file.js')) {
            fs.unlinkSync('./dynamically-generated-file.js');
        }
    })

    test('First', () => {
        expect(method('First')).toBe('First');
    });

    test('Second', () => {
        expect(method('Second')).toBe('Second');
    });
});
