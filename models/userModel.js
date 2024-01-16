const { v4 } = require('uuid')
const fs = require('fs')
const FILE_PATH = require('path').join(__dirname, '..', 'data','users.json')

findUsers = () => {
    try{
        const users = fs.readFileSync(FILE_PATH)
        return JSON.parse(users)
    }catch(error){
        fs.writeFileSync(FILE_PATH, '[]')
        const users = fs.readFileSync(FILE_PATH)
        return JSON.parse(users)
    }
    // try{
    //     return require('./users.json')
    // } catch(error){
    //     fs.writeFileSync(FILE_PATH, '[]')
    //     return require('./users.json')
    // }
}

findUser = (id) => { 
    return findUsers().find(item => item.id === id)
}

insertUser = (user) => {
    const users = findUsers()
    user.id = v4()
    users.push(user)
    fs.writeFileSync(FILE_PATH, JSON.stringify(users))
    return user
}

updateUser = (id, user) => {
    const users = findUsers()
    const index = users.findIndex(item => item.id === id)

    if(index === -1) return []

    user.id = id
    users[index] = user
    fs.writeFileSync(FILE_PATH, JSON.stringify(users))
    return user
}

// updateUser = (id, user) => {
//     const users = findUsers()
//     users.forEach((item, index, array) => {
//         if(item.id === id){
//             user.id = id
//             array[index] = user
//         }
//     })
// }

deleteUser = (id) => {
    const users = findUsers()
    const index = users.findIndex(item => item.id === id)
    
    if(index === -1) return []

    users.splice(index, 1)
    fs.writeFileSync(FILE_PATH, JSON.stringify(users))
    
    return id
}

// deleteUser = (id) => {
//     const users = findUsers()
//     users.forEach((item, index, array) => {
//         if(item.id === id){
//             users.splice(index, 1)
            
//         }
//         fs.writeFileSync(FILE_PATH, JSON.stringify(users))
//     })
// }


module.exports = {
    findUser,
    findUsers,
    deleteUser,
    updateUser,
    insertUser
}