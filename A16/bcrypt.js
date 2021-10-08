const bcrypt = require('bcrypt')

var hashPassword = async(pwd) => {
    const salt = await bcrypt.genSalt(8)
    const hash = await bcrypt.hash(pwd,salt)
    console.log(`salt = ${salt}\nhash = ${hash}`)
}

hashPassword('123')