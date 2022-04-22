import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//material 
import {Container} from '@mui/material';

//Components
import Land from './Components/Land';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import NewAccount from './Components/NewAccount';

//Forms
import BooksList from './Forms/Books/BooksList';
import UsersList from './Forms/Users/UsersList';
import GenresList from './Forms/Genres/GenresList';
import CreateGenre from './Forms/Genres/CreateGenre';



export default function App(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Land/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/newaccount' element={<NewAccount/>}/>
          <Route path='/books' element={<Land/>}/>
          <Route path='/books/new' element={<Land/>}/>
          <Route path='/books/edit/:id' element={<Land/>}/>
          <Route path='/users' element={<Land/>}/>
          <Route path='/users/new' element={<Land/>}/>
          <Route path='/users/edit/:id' element={<Land/>}/>
          <Route path='/genres' element={<Land/>}/>
          <Route path='/genres/new' element={<CreateGenre/>}/>
          <Route path='/genres/edit/:id' element={<Land/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

