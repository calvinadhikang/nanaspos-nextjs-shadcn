export default async function DB(){
    const mysql = await require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'nanaspos'
    });
    return connection;
} 