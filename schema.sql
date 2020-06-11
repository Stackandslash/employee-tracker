-- Drops the db if it already exists
-- DROP DATABASE IF EXISTS employees_db; --

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

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);


-- Insert a set of records.
-- INSERT INTO department (name) VALUES ('Ninja Squad');
