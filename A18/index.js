const mysql = require("mysql")
const bcrypt = require('bcrypt')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'test_db'
})

connection.connect((err)=>{
    if(err) throw err
})

const createUser = async() => {
    var username = 'Tithonus'
    var password = 'niki1234'
    var display_name = 'Nikita Thomas'
    var email = 'nikita_tho@cmu.ac.th'
    var timestamp = new Date()
    timestamp.toISOString().slice(0, 19).replace('T', ' ')
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 1, function(err, hash) {
          if (err) reject(err)
          console.log(hash.length)
          resolve(hash)
        });
    }).then((hash)=>{
        connection.query('INSERT INTO users2 (username,password,display_name,email,created,updated) values (?,?,?,?,?,?);',[username,hash,display_name,email,timestamp,timestamp],(err,results,fields)=>{
            if(err) throw err
            console.log(results)
        })
    })
}

const loginUser = async(username, password) => {
    connection.query('SELECT password FROM users2 WHERE username=?;',[username],(err,results,fields)=>{
        if(err) throw err
        if(results[0].password===password){
            var timestamp = new Date()
            timestamp.toISOString().slice(0, 19).replace('T', ' ')
            connection.query('UPDATE users SET last_login = ? WHERE id = ?',[timestamp,results[0].id],(err,results,field)=>{
                if(err) throw err
            })
            console.log('Login Success!')
        }else{
            console.log('Incorrect Password')
        }
    })
}

createUser()
loginUser('Tithonus','$2b$04$98kceX/U1UB/m4lO/nTZTOypMljsadkUyPdySCozVmUV5/oAuxq6i')

connection.query("SELECT * FROM users2;",(err,results,fields)=>{
    if(err) throw err
    console.table(results)
})
