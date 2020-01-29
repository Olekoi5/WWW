create database s147334;
use s147334;

create table people (
  id  int(11) auto_increment primary key,
  name varchar(30) not null,
  email varchar(30) not null
);
