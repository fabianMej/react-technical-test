import React from 'react';
import './Error.css';
import sadFace from '../../../assets/img/sad-face.png';

interface Props {
    errorMessage: string
}

const error: React.SFC<Props> = (props) => {
    return (
        <div>
            <div className="content-sad-face">
                <img src={sadFace} width="200" height="200"/>
            </div>
            <p className="error-message h5">{props.errorMessage}</p>
        </div>
    );
}

export default error;