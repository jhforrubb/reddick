import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';
import Homepage from './pages/Homepage/Homepage';
import Submit from './pages/Submit/Submit';
import ViewPost from './pages/ViewPost/ViewPost';
import { ModalContextProvider } from './contexts/ModalContext';
// import { postJson } from '../../sample/sample';

function App() {
    return (
        <BrowserRouter>
            <ModalContextProvider>
                <Routes>
                    <Route path="/" element={<Mainpage />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/submit" element={<Submit />} />
                        <Route path="/post/:id" element={<ViewPost />} />
                    </Route>
                </Routes>
            </ModalContextProvider>
        </BrowserRouter>
    );
}

export default App;
