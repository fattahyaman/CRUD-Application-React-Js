import React from 'react';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Navbar from "./Components/NavBar";
import CodeForInterview from "./Components/CodeForInterview";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import EditUser from './Components/EditUser';

import NotFound from "./Components/NotFound";


function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<CodeForInterview />} />
        <Route exact path='/all' element={<AllUsers />} />
        <Route exact path='/add' element={<AddUser />} />
        <Route exact path= '*' element={<NotFound />} />
        <Route exact path='/edit/:id' element={<EditUser />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
