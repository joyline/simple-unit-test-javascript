const addStrings = require('../buggy-function');

describe('buggy-function.js', () => {
    // this will show failed test
    it('should return "loremipsum"', () => {
        expect(addStrings('lorem', 'ipsum')).toBe('loremipsum') // received: NaN
    })

    // this will show failed test
    it('should return "123456"', () => {
        expect(addStrings('123', '456')).toBe('123456') // received: 579
    })

    // this will success/ pass the test
    it('should return "Input must be strings."', () => {
        expect(addStrings(444, 456)).toBe('Input must be strings.')
    })

    // this will success/ pass the test
    it('should return "Input must be strings."', () => {
        expect(addStrings(123, 'asd')).toBe('Input must be strings.')
    })
})
