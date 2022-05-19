import { Outlet } from 'react-router-dom';

const Mainpage = () => {
    return (
        <div>
            <nav>NAV BAR HERE</nav>
            <Outlet />
        </div>
    );
};

export default Mainpage;
