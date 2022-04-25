import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//material 
import {Container} from '@mui/material';

//Components
import Land from './Components/Land';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import NewLibrarian from './Components/NewLibrarian';

//Forms
import BooksList from './Forms/Books/BooksList';
import CreateBook from './Forms/Books/CreateBook';

import CreateStudent from './Forms/Users/CreateStudent';
import UserList from './Forms/Users/UsersList';

import GenresList from './Forms/Genres/GenresList';
import CreateGenre from './Forms/Genres/CreateGenre';

import UserxBookList from "./Forms/UserxBooks/UserxBookList";
import CreateUserxBook from "./Forms/UserxBooks/CreateUserxBook";



export default function App(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Land/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/newaccount' element={<NewLibrarian/>}/>
          <Route path='/books' element={<BooksList/>}/>
          <Route path='/books/new' element={<CreateBook/>}/>
          <Route path='/books/edit/:id' element={<CreateBook/>}/>
          <Route path='/users' element={<UserList/>}/>
          <Route path='/users/new' element={<CreateStudent/>}/>
          <Route path='/users/edit/:id' element={<CreateStudent/>}/>
          <Route path='/genres' element={<GenresList/>}/>
          <Route path='/genres/new' element={<CreateGenre/>}/>
          <Route path='/genres/edit/:id' element={<CreateGenre/>}/>
          <Route path='/usersxbooks' element={<UserxBookList/>}/>
          <Route path='/usersxbooks/new' element={<CreateUserxBook/>}/>
          <Route path='/usersxbooks/edit/:id' element={<CreateUserxBook/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

