### Schema
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employees
(
	id int NOT NULL AUTO_INCREMENT,
	employee_name varchar(50) NOT NULL,
	inactive BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


