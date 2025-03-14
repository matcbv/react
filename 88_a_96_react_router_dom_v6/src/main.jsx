import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Posts } from './components/Posts';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';
import { Post } from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />}>
          <Route path=':index' element={<Post />} />
        </Route>
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
