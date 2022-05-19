import './mainpage.scss';
import { Outlet } from 'react-router-dom';
import Navbar from '../../features/Navbar/Navbar';

const Mainpage = () => {
    return (
        <div className="mainpage">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Mainpage;
