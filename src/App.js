import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import Layout from "./pages/Layout"
import { About } from './pages/About';
import Contact from './pages/Contact';
import { Post } from './pages/Post';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/post' element={<Post />} />
            <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
