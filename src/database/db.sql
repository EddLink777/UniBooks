create database UniBook

create table roles(
    id serial Primary Key,
    role varchar(15) unique
);

create table genres(
    id serial Primary Key,
    genre varchar(25) unique
);


create table books(
    id serial Primary Key,
    title varchar(250),
    author varchar (250),
    published_year decimal(4),
    genre smallint references genres(id)

);

create table users (
    id serial Primary Key,
    first_name varchar(25),
    last_name varchar (50),
    email varchar(50),
    role smallint references roles(id),
    book smallint references books(id)

);

