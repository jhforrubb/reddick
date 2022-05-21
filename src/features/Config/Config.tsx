import './config.scss';
import { useState } from 'react';
import ConfigItem from './ConfigItem';
import ConfigCopyright from './ConfigCopyright';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Config = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    return (
        <div className={`config-container ${isDropdownOpen ? "open" : ""}`} onClick={() => setIsDropdownOpen(prevState => !prevState)}>
            <PersonOutlineOutlinedIcon className="config-container-icon" />
            <KeyboardArrowDownIcon className="config-container-icon" />

            {isDropdownOpen ?
                <menu className='dropdown'>
                    <ConfigItem icon={<PersonOutlineOutlinedIcon />} label={"Sign Up or LogIn"} />
                    <ConfigCopyright />
                </menu> : null
            }
        </div >
    )
}

export default Config;

