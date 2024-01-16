const { v4 } = require('uuid')
const fs = require('fs')
FILE_PATH = require('path').join(__dirname, '..', 'data', 'keys.json')

findKeys = () => {
    try{
        const keys = fs.readFileSync(FILE_PATH)
        return JSON.parse(keys)
    }catch(error){
        fs.writeFileSync(FILE_PATH, '[]')
        const keys = fs.readFileSync(FILE_PATH)
        return JSON.parse(keys)
    }
}

createKey = () => {
    const keys = findKeys()
    const newKey = {
        key: v4(),
        enabled: true
    }
    keys.push(newKey)
    fs.writeFileSync(FILE_PATH, JSON.stringify(keys))
    return newKey.key
}

findKey = (key) => {
    if(key)
        return findKeys().find(k => k.key === key)
    else
        return false
    
}

module.exports = {
    findKeys,
    createKey,
    findKey
}
