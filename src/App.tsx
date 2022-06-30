import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';
import Homepage from './pages/Homepage/Homepage';
import CreatePost from './pages/CreatePost/CreatePost';
import { ModalContextProvider } from './contexts/ModalContext';

function App() {
    return (
        <BrowserRouter>
            <ModalContextProvider>
                <Routes>
                    <Route path="/" element={<Mainpage />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/create-post" element={<CreatePost />} />
                    </Route>
                </Routes>
            </ModalContextProvider>
        </BrowserRouter>
    );
}

export default App;
