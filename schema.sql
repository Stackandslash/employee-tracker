-- Drops the db if it already exists
-- DROP DATABASE IF EXISTS employees_db;

-- Create the database and specified it for use.
CREATE DATABASE employees_db;

USE employees_db;

-- Create the table.
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);


-- Insert a set of records.
-- INSERT INTO department (name) VALUES ('Ninja Squad');
