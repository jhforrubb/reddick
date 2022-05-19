import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Homepage from './pages/Homepage';

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
