const mysql = require('mysql');

// Connection à la BDD
const dbConn = async() => {
    try 
    {
        const conn = mysql.createConnection({
            host:       "localhost",
            user:       "root",
            password:   "hadil",
            database:   "Base_API"
        });

        console.log("Successfully connected to the database.");
    } 
    catch (error) 
    {
        console.log(error);    
    }
};

dbConn();