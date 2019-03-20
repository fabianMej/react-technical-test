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
            <section className="card-header">
                <h4>{props.centerModel.name}</h4>
                <p>1 Miles from location * Kids from 2 to 11 years</p>
            </section>
            <section className="offers">
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
            </section>
            <section className="reserve row justify-content-between">
                <div className="col-md-4">
                    <p><strong>$15.50</strong> PER HOUR FIRST CHILD</p>
                </div>
                <div className="col-md-4 align-self-center">
                    <Button clicked={() => {}} text="Reserve Now"></Button>
                </div>
            </section>
            
        </div>
    );
}

export default center;