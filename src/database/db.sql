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
    copies decimal(4),
    genre smallint references genres(id)

);

create table users (
    id serial Primary Key,
    first_name varchar(25),
    last_name varchar (50),
    email varchar(50),
    role smallint references roles(id)
   

);

create table usersxbooks(
    id serial Primary Key,
    returned boolean,
    user smallint references users(id),
    book smallint references books(id)
)

/*Json values
//books
{
    "id": 1,
    "title": "Romance",
    "author": "edd",
    "published_year": "1999",
    "genre": "Comedy"
  },
  {
    "id": 2,
    "title": "nada",
    "author": "tro.",
    "published_year": "1923",
    "genre": "Romance"
  },

  //genre
  [
  {
    "id": 1,
    "genre": "Comedy"
  },
  {
    "id": 2,
    "genre": "Romance"
  }
]