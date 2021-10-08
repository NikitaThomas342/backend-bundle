const db = require('../configs/db_config')
const mysql = require('mysql')

const connection = mysql.createConnection(db)

connection.connect((err)=>{
    if(err) throw err
    console.log(connection.threadId)
})

const create = (name,type,amount) => {
    connection.query('INSERT INTO devices (name,type,amount) values (?,?,?);',[name,type,amount],(err,results,fields)=>{
        //
    })
}

const findByPk = (id) => {

}

const findAll = () => {

}

const findBy = (condition) => {

}

const update = (id) => {

}

const destroy = (conditions) => {

}

const destroyAll = () => {

}

module.exports = {create, findByPk, findAll, findBy, update, destroy, destroyAll}

var name = 'usb adapter'
var item_type = 'accessories'
var amount = 10

connection.query('',(err,results,fields)=>{

})

connection.end()