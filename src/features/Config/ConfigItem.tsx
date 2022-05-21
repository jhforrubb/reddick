import './config.scss';

interface IConfigItem {
    icon: JSX.Element;
    label: string;
    onClick?: () => void;
}

const ConfigItem = (props: IConfigItem) => {
    const { icon, label, onClick } = props;

    return (
        <li className="dropdown-item" onClick={onClick}>
            {icon}
            <span className="dropdown-item-text">{label}</span>
        </li>
    )
}

export default ConfigItem;