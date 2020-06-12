const inquirer = require("inquirer");
const mysql = require("mysql");

var PORT = 8080;

//This pops open our connection to our mysql server. Not to other stuff. Don't treat it like other stuff.
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startPrompts();
});

function startPrompts() {
  console.log("It Begins");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "start",
        choices: ["Add", "Update", "View", "Exit"],
      },
    ])
    .then((response) => {
      switch (response.start) {
        case "Add":
          addSelect();
          break;
        case "Update":
          updateRole();
          break;
        case "View":
          viewSelect();
          break;
        default:
          console.log("Bye!");
          break;
      }
    });
}

function viewSelect() {
  console.log("View which category?");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What category do you want to view?",
        name: "viewPick",
        choices: ["Departments", "Roles", "Employees"],
      },
    ])
    .then((response) => {
      switch (response.viewPick) {
        case "Departments":
          console.log("viewing Departments...");
          connection.query("SELECT * FROM department", function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
          });
          break;
        case "Roles":
          console.log("viewing Roles...");
          connection.query("SELECT * FROM role", function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
        });
          break;
        case "Employees":
          console.log("viewing Employees...");
          connection.query("SELECT * FROM employee", function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.table(res);
        });
          break;
        default:
          console.log("Broke!");
          break;
      }
    });
}

function updateRole() {
  console.log("Update who?");
}

function addSelect() {
  console.log("Adding an entry...");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to add?",
        name: "addPick",
        choices: ["Department", "Role", "Employee"],
      },
    ])
    .then((response) => {
      switch (response.addPick) {
        case "Department":
          addDepartment();
          break;
        case "Role":
          addRole();
          break;
        case "Employee":
          addEmployee();
          break;
        default:
          console.log("Broke!");
          break;
      }
    });
}

function addDepartment() {
  console.log("Adding department...");
  //Inquierer prompt for input
  inquirer
    .prompt([
      {
        type: "input",
        message: "Department name?",
        name: "depname"
      }
    ])
    //promise follow-through
    .then((response) => {
      //Insert entered info into the table in question.
      connection.query("INSERT INTO department (name) VALUES (?)", response.depname, function(err, result) {
        if (err) {
         throw err;
        }
        //Prompt and loop back to the main menu.
        console.log("Department added!");
        startPrompts();
      });
    })
}

function addRole() {
  console.log("Adding role...");
  //Get the Departments available for the list.
  let departmentList = []; //Set up array of departments for final question.
  connection.query("SELECT name FROM department", function(err, res) {
    if (err) throw err;
    // Push the results into the array
    for (let i = 0; i < res.length; i++) {
       departmentList.push(res[i].name);
    }
  });
  
  //Inquierer prompt for input
  inquirer
    .prompt([
      {
        type: "input",
        message: "Role title?",
        name: "roleTitle"
      },
      {
        type: "number",
        message: "Salary?",
        name: "roleSalary"
      },
      {
        type: "list",
        message: "Department?",
        name: "roleDepartment",
        choices: departmentList
      },
    ])
    //promise follow-through
    .then((response) => {
      let roleId
      connection.query("SELECT id FROM department WHERE name = ?", response.roleDepartment , function(err, res) {
        if (err) throw err;
        roleId = res[0].id;
        console.log(response.roleTitle, response.roleSalary, roleId);
        //Insert entered info into the table in question.
         connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [response.roleTitle, response.roleSalary, roleId], function(err, result) {
          if (err) {
           throw err;
          }
  
          //Prompt and loop back to the main menu.
          console.log("Role added!");
          startPrompts();
      });
      
      
      });
  })
}

function addEmployee() {
  console.log("Adding employee...");
  
}


// let idPrompt = 
// {
//   type: "input",
//   message: "ID?",
//   name: "id"
// };
// let emailPrompt = 
// {
//   type: "input",
//   message: "Work email?",
//   name: "email"
// };