import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string,
    clicked(): void
}

const Button: React.SFC<ButtonProps> = (props) => {
    return (
        <button className="Button btn" onClick={props.clicked}>{props.text}</button>
    );
}

export default Button;