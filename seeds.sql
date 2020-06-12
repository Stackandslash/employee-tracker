USE employees_db;

INSERT INTO department (name) VALUES ("engineering"), ("management"), ("customerservice");

INSERT INTO role (title, salary, department_id) VALUES ("engineer", 60000.00, 1), ("executive", 120000.00, 2), ("CSR", 40000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Paul", "Daves", 2, 1),
("Jeff", "Dahmson", 1, 2),
("John", "Boots", 3, 1);


-- Executive at the top has no manager, and as such, needs an insert without a manager_id
INSERT INTO employee (first_name, last_name, role_id) VALUES
("Jim", "Jones", 2),