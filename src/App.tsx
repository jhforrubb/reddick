import './app.scss';
import './theme.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage/Mainpage';
import Homepage from './pages/Homepage/Homepage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />}>
                    <Route path="/" element={<Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
