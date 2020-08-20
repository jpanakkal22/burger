CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT auto_increment primary key,
    burger_name varchar(30),
    devoured Boolean default false
)