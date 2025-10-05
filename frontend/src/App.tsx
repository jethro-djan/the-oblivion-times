import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useLocation } from 'react-router';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EssaysPage from './pages/EssaysPage';
// import AuthorsPage from './pages/AuthorsPage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import ModalPage from './pages/ModalPage';

function AppContent() {
    const location = useLocation();
    const state = location.state as { background?: Location };
    const background = state?.background;

    return (
        <>
            <NavigationBar />
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/essays" element={<EssaysPage />} />
                <Route path="/essays/:slug" element={<PostPage />} />
                {/* <Route path="/authors" element={<AuthorsPage />} /> */}
                <Route path="/about" element={<AboutPage />} />
            </Routes>

            {background && (
                <Routes>
                    <Route path="/join-dispatch" element={<ModalPage />} />
                </Routes>
            )}

            <Footer />
        </>
    );
}

export default function App() {
    return(
        <Router>
            <AppContent />
        </Router>
    );
}
