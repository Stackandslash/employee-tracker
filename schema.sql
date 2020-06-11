-- Drops the db if it already exists
-- DROP DATABASE IF EXISTS employees_db; --

-- Create the database and specified it for use.
CREATE DATABASE employees_db;

USE employees_db;

-- Create the table.
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
-- INSERT INTO department (name) VALUES ('Ninja Squad');
