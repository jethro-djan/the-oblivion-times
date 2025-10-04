import { BrowserRouter as Router, Routes, Route } from 'react-router';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EssaysPage from './pages/EssaysPage';
import AuthorsPage from './pages/AuthorsPage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';

function App() {
  return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/essays" element={<EssaysPage />} />
                <Route path="/essays/:slug" element={<PostPage />} />
                {/* <Route path="/authors" element={<AuthorsPage />} /> */}
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </Router>
  );
}
export default App;
