import React from 'react';
import Button from '../../UI/Button/Button';
import { CenterModel } from '../../../models/CenterModel';
import './Center.css';

interface Props {
    centerModel: CenterModel
}

const center: React.SFC<Props> = (props) => {
    return (
        <div className="card-center">
            <div className="header">
                <h4>{props.centerModel.name}</h4>
                <p>1 Miles from location * Kids from 2 to 11 years</p>
            </div>
            <div className="circle-div">
                <img src={props.centerModel.profilePicture.url} className="circle-avatar" width="120" height="120"/>
            </div>
            <div className="offers">
                <div className="row">
                    <div className="col-md-4">
                        <p className="freeOffer">First Hour Free</p>
                    </div>
                    <div className="col-md-4">
                        <p>Special Offers</p>
                    </div>
                    <div className="col-md-4">
                        <p>Camps</p>
                    </div>
                </div>
            </div>
            <section className="reserve row justify-content-between">
                <div className="col-md-6 align-self-center">
                    <p><strong>$15.50</strong> PER HOUR FIRST CHILD</p>
                </div>
                <div className="col-md-4 align-self-center">
                    <Button clicked={() => alert(`${props.centerModel.name} RESERVED`)} text="RESERVE NOW"></Button>
                </div>
            </section>
        </div>
    );
}

export default center;