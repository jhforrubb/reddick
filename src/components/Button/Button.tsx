import './button.scss';

interface IButton {
    label: string;
    variant: "filled" | "outlined";
    size: 'small' | 'medium' | 'large';
    style?: object;
    onClick?: React.MouseEventHandler
}

const Button = (props: IButton) => {
    const { label, variant, size, style, onClick } = props;

    return (
        <div onClick={onClick} style={style} className={`button ${variant} ${size} `}>
            <span>{label}</span>
        </div>
    )
}

Button.defaultProps = {
    variant: "filled",
    size: "medium",
}

export default Button;