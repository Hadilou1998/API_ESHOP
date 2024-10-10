const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const express = require("express");
const morgan = require("morgan");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = 8080;
const accessTokenSecret = "mykey";

// Démarrer Express
const app = express();

// Activation de CORS
app.use(cors());
// Activation de Morgan
app.use(morgan('tiny'));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connection à la BDD
const conn = mysql.createConnection({
    host:       "localhost",
    user:       "root",
    password:   "supersaiyan",
    database:   "Base_API"
});

// Ouvrir la connection à mysql
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// Récupération du header bearer
const extractBearerToken = headerValue =>
{
    if (typeof headerValue !== "string") 
    {
        return false;       
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}

// Vérification du token user
const checkTokenMiddleware = (req, res, next) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);

    // Présence du token
    if (!accessToken) 
    {
        return res.status(401).json
        ({
            message: "Error. Need a token"
        });    
    }

    // Véracité du token
    jsonwebtoken.verify(accessToken, accessTokenSecret, (err, decoded) =>
    {
        if (err) 
        {
            res.status(401).json
            ({
                message: "Invalid Token..."
            });    
        }
        else 
        {
            return next();   
        }
    });
};

// Vérification du token admin
const checkAdminMiddleware = (req, res, next) =>
{
    const authHeader = req.headers.authorization;
    if (authHeader) 
    {
        const accessToken = authHeader.split(' ')[1];
        
        jsonwebtoken.verify(accessToken, accessTokenSecret, (err, user) => 
        {
            if (err) 
            {
                return res.sendStatus(403);    
            }

            req.user = user;
            next();
        });
    }
    else
    {
        res.sendStatus(401);
    }
};

/* Partie User */

// add new User
app.post("/register", (req, res) => 
{
    const data  = {username: req.body.username, password: req.body.password, role: req.body.role, email: req.body.email, adresse: req.body.adresse}
    const query = conn.query("INSERT INTO Users SET ?", data, (err, results) => 
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// Returns a jwt token
app.post("/login", async (req, res) => 
{   
    if (!req.body.username || !req.body.password) 
    {
        return res.status(400).json
        ({
            message: "Please enter the correct username and password"
        });    
    }
    
    // Checking
    const user = await conn.query("SELECT id, username, role, email, adresse FROM Users WHERE username='"+req.body.username+"' AND password='"+req.body.password+"'", (err, value) =>
    {
        // Not good
        if (!value) 
        {
            return res.status(400).json
            ({
                message: "Invalid username or password"
            });    
        } 
        // Generate an access token
        const accessToken = jsonwebtoken.sign
        ({
            id: value[0].id, 
            username: value[0].username,
            role: value[0].role,
            email: value[0].email,
            adresse: value[0].adresse
        }, accessTokenSecret, { expiresIn: "2 hours" });
            
        return res.json
        ({ 
            access_token: accessToken
        });
    });       
});

// Retrieve current user info
app.get("/me", checkTokenMiddleware, async (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const decoded = jsonwebtoken.decode(accessToken, { complete: false });

    return res.json( decoded );
});

// Retrieve all Users
app.get("/users", (req, res) => 
{
    // Requête d'execution
    const sql = "SELECT * FROM Users";
    const query = conn.query(sql, (err, results) => 
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));        
    });
});

// Update a User with userId
app.put("/user/:id", checkAdminMiddleware, async (req, res) => 
{   
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const user = jsonwebtoken.decode(accessToken, { complete: false });

    // Verify admin
    const { role, id } = req.body;

    if (role && id) 
    {
        if (role === "admin") 
        {
            const id = req.params.id;
            const sql = "UPDATE Users SET username = '"+req.body.username+"', password = '"+req.body.password+"', role = '"+req.body.role+"', email = '"+req.body.email+"', adresse = '"+req.body.adresse+"' WHERE id = "+req.params.id;
            const query = await conn.query(sql, (err, results) =>
            {
                if (!err)
                {
                    console.log("User Updated Successfully");                
                }
                else
                {
                    console.log(err);
                } 
            });
       
        }
        else
        {
            return res.status(400).json
            ({
                error: true,
                message: "Access Denied"
            });
        }        
    }
    else
    {
        return res.status(400).json
        ({
            message: "Role and Id doesn't exist"
        });
    }
});

// Retrieve user info
app.get("/user/:id", checkAdminMiddleware, async (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const user = jsonwebtoken.decode(accessToken, { complete: false });

    // Verify admin
    const { role, id } = req.body;

    if (role && id) 
    {
        if (role === "admin") 
        {
            const id = req.params.id;
            const sql = "SELECT * FROM Users WHERE id = "+req.params.id;
            const query = await conn.query(sql, (err, results) =>
            {
                if (!err)
                {
                    console.log("Infos of user retrieved");                
                }
                else
                {
                    console.log(err);
                } 
            });
       
        }
        else
        {
            return res.status(400).json
            ({
                error: true,
                message: "Access Denied"
            });
        }        
    }
    else
    {
        return res.status(400).json
        ({
            message: "Role and Id doesn't exist"
        });
    }    
});

// Delete a User with userId
app.delete("/user/:id", checkAdminMiddleware, async (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const user = jsonwebtoken.decode(accessToken, { complete: false });

    // Verify admin
    user.role, user.id;

    if (user.id === req.params.id && user.role === "user") 
    {
        const id = req.params.id;
        const sql = "DELETE FROM Users WHERE id = "+req.params.id;
        const query = await conn.query(sql, (err, results) =>
        {
            if (err)
            {
                console.log("User Deleted Failed");                
            }
            else
            {
                console.log("User Deleted Successfully");
            }
        });
    }
    else
    {
        if (user.role === "admin") 
        {
            const id = req.params.id;
            const sql = "DELETE FROM Users WHERE id = "+req.params.id;
            const query = await conn.query(sql, (err, results) =>
            {
                if (err)
                {
                    console.log("User Deleted Failed");                
                }
                else
                {
                    console.log("User Deleted Successfully");
                } 
            });
        }   
    }         
});  

// Delete all Users
app.delete("/users", (req, res) => 
{
    // Requête d'execution
    const sql = "DELETE FROM Users";
    const query = conn.query(sql, (err, results) => 
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));        
    });
});

/* Fin partie User */

/* Partie Product */

// add new Product
app.post("/product/create", checkTokenMiddleware, async (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const decoded = jsonwebtoken.decode(accessToken, { complete: false });

    // Requête d'execution
    const data  = {name: req.body.name, price: req.body.price, link: req.body.link, currency: req.body.currency, id_user: req.params.id}
    const sql = "INSERT INTO Products SET ?";
    const query = conn.query(sql, data, (err, results) => 
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// Retrieve product info
app.get("/product/:id", checkTokenMiddleware, async (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const decoded = jsonwebtoken.decode(accessToken, { complete: false });

    // Requête d'execution
    const id = req.params.id;
    const sql = "SELECT * FROM Products WHERE id = "+req.params.id;
    const query = conn.query(sql, (err, rows, fields) => 
    {
        if (!err) 
        {
            res.send(rows);    
        }
        else
        {
            console.log(err);
        }         
    });
});

// Update a Product with productId
app.put("/product/:id", checkTokenMiddleware, (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const decoded = jsonwebtoken.decode(accessToken, { complete: false });

    // Requête d'execution
    const id = req.params.id;
    const sql = "UPDATE Products SET name = '"+req.body.name+"', price = '"+req.body.price+"', link = '"+req.body.link+"', currency = '"+req.body.currency+"', id_user = "+req.params.id+" WHERE id = "+req.params.id;
    const query = conn.query(sql, (err, results) => 
    {
        if (!err) 
        {
            console.log("Product updated successfully");
        }
        else
        {
            console.log(err);
        }        
    });
});

// Delete a Product with productId
app.delete("/product/:id", checkTokenMiddleware, (req, res) => 
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const decoded = jsonwebtoken.decode(accessToken, { complete: false });
    
    // Requête d'execution
    const id = req.params.id;
    const sql = "DELETE FROM Products WHERE id = "+req.params.id;
    const query = conn.query(sql, (err, results) => 
    {
        if (!err) 
        {
            console.log("Product deleted successfully");
        }
        else
        {
            console.log(err);
        }         
    });
});

// Retrieve all Products
app.get("/products", (req, res) => 
{
    // Requête d'execution
    const sql = "SELECT * FROM Products";
    const query = conn.query(sql, (err, results) => 
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));        
    });
});

// Delete all Products with userId
app.get("/products/:userId", (req, res) => 
{
    // Requête d'execution
    const id_user = req.params.id;
    const sql = "DELETE FROM Products WHERE id_user = "+req.params.id;
    const query = conn.query(sql, (err, results) => 
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));        
    });    
});

/* Fin partie Product */

// listen for requests
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`);
});