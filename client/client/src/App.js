import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Components
import Land from './Components/Land';

//Forms
import BooksList from './Forms/Books';
import UsersList from './Forms/Users';
import GenresList from './Forms/Genres';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Land/>}/>
        <Route path='/books' element={<Land/>}/>
        <Route path='/books/new' element={<Land/>}/>
        <Route path='/books/edit/:id' element={<Land/>}/>
        <Route path='/users' element={<Land/>}/>
        <Route path='/users/new' element={<Land/>}/>
        <Route path='/users/edit/:id' element={<Land/>}/>
        <Route path='/genres' element={<Land/>}/>
        <Route path='/genres/new' element={<Land/>}/>
        <Route path='/genres/edit/:id' element={<Land/>}/>
      </Routes>
    </BrowserRouter>
  )
}

