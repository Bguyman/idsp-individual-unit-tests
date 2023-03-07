const verifyPassword = (password) => {
    const goodLength = password.length >= 8
    const hasLetter = /[a-z]/g.test(password)
    return goodLength && hasLetter
}
module.exports = verifyPassword