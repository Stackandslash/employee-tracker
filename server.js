const inquirer = require("inquirer");
const mysql = require("mysql");


var PORT = 8080;


//This pops open our connection to our mysql server. Not to other stuff. Don't treat it like other stuff.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startPrompts();
  });

function startPrompts(){
    console.log("It Begins");
}