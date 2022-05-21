import './navbar.scss';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../../components/Button/Button';
import Config from '../Config/Config';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                <Logo />
                <Searchbar />

                <div className="navbar-btns">
                    <Button label="Log In" variant="outlined" size="medium" onClick={() => console.log("open login dialog")} />
                    <Button style={{ marginLeft: 15 }} label="Sign Up" variant="filled" size="medium" onClick={() => console.log("open register dialog")} />
                    <Config />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
