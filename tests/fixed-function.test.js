const addStrings = require('../fixed-function');

describe('fixed-function.js', () => {
    it('should return "loremipsum"', () => {
        expect(addStrings('lorem', 'ipsum')).toBe('loremipsum')
    })

    it('should return "123456"', () => {
        expect(addStrings('123', '456')).toBe('123456')
    })

    it('should return "Input must be strings."', () => {
        expect(addStrings(444, 456)).toBe('Input must be strings.')
    })

    it('should return "Input must be strings."', () => {
        expect(addStrings(123, 'asd')).toBe('Input must be strings.')
    })

    it('should return "Input must be strings."', () => {
        expect(addStrings({}, 1234)).toBe('Input must be strings.')
    })

    it('should return "Input must be strings."', () => {
        expect(addStrings('', 1234)).toBe('Input must be strings.')
    })
})
