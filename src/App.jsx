// IMPORTO ELEENTI DELLA LIBRERIA DI GESTIONE DELLE ROTTE
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGINE
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";
// GESTIONE POSTS
import { useState, useEffect } from 'react';
import axios from "axios";
// CONTEXT
import CountContext from './contexts/CountContext';


function App() {
  // UTILIZZO USESTATE PER LA GESTIONE DEI DATA 
  const [post, setPost] = useState([]);
  // FUNZIONE DI GESTIONE CHIAMATA API
  function fetchPost() {
    axios.get("http://localhost:3000/posts")
      .then((res) =>
        setPost(res.data)
      )
  }
  // CHIAMATA SOLO AL PRIMO RENDERING
  useEffect(fetchPost, []);
  return (
    <>
      <CountContext.Provider value={{ post }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostsPage />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </CountContext.Provider>
    </>
  )
}

export default App
