const verifyPassword = require('./index')

test("return false when empty string", () => {
    expect(verifyPassword("")).toBe(false)
})