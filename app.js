const mysql = require('mysql')

const config = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'codo_a_codo'
}

const connection = mysql.createConnection(config)

connection.connect((error) => {
    if (error) throw error

    console.log(connection.threadId)
})

// CRUD 

// READ
// connection.query('SELECT * FROM usuarios', (error, results, fields) => {
//     if (error) throw error

//     console.log(error, results, fields)
// })

// CREATE

// const sql = `
//     INSERT INTO usuarios 
//         (nombre, email, password) 
//     VALUES 
//         ('Juan', 'juan@example.com', MD5('1234'))
// `;

// connection.query(sql, (error, results) => {
//     if (error) throw error

//     console.log(results)
// })

// UPDATE

// const sql = `
//     UPDATE usuarios 
//     SET nombre = 'Pedro', password = MD5('admin') 
//     WHERE id = 2
// `;

// connection.query(sql, (error, results) => {
//     if (error) throw error

//     console.log(results)
// })

// DELETE


let sql = `
    DELETE FROM usuarios 
    WHERE id = 2
`;

connection.query(sql, (error, results) => {
    if (error) throw error

    console.log(results)
})

connection.end()