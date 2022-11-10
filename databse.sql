CREATE DATABASE IF NOT EXISTS apifazt;

USE apifazt;

CREATE TABLE empleados(
      id INT(11) NOT NULL AUTO_INCREMENT,
      name VARCHAR(45) DEFAULT NULL,
      salary INT(11) DEFAULT NULL, 
      PRIMARY KEY(id)
)

INSERT INTO empleados values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000);