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
        message:
          "What would you like to do?",
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


function viewSelect(){
    console.log("View which category?");
    inquirer
    .prompt([
        {
        type: "list",
        message:
          "What category do you want to view?",
          name: "viewPick",
        choices: ["Departments", "Roles", "Employees"],
      },
    ])
    .then((response) => {
        switch (response.viewPick) {
        case "Departments":
            console.log("viewing Departments...");
          break;
        case "Roles":
            console.log("viewing Roles...");
        break;
        case "Employees":
            console.log("viewing Employees...");
        break;
        default:
            console.log("Broke!");
        break;
                }
            });
        }
        

function updateRole(){
    console.log("Update who?");
}
        

function addSelect(){
    console.log("Adding an entry...");
    inquirer
    .prompt([
        {
        type: "list",
        message:
        "What would you like to add?",
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

function addDepartment(){
    console.log("Adding department...");
}

function addRole(){
    console.log("Adding role...");
}

function addEmployee(){
    console.log("Adding employee...");
}