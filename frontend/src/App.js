import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoContextProvider } from "./Contexts/TodoContext";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import NotFound404 from './Pages/NotFound404';
import EditTodo from './Pages/EditTodo';
import AddTodo from './Pages/AddTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <TodoContextProvider>
      <Router>
        <Nav/>
          <ToastContainer theme='dark' />
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/todos/add" element={<AddTodo/>} />
            <Route path="/todos/edit/:id" element={<EditTodo/>} />
            <Route path="/*" element={<NotFound404/>} />
            <Route path="/not-found" element={<NotFound404/>} />
          </Routes>
        </main>
      </Router>
    </TodoContextProvider>
  );
}

export default App;
