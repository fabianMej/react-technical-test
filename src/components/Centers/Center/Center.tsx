import React from 'react';
import Button from '../../UI/Button/Button';
import Rating from './../../UI/Rating/Rating';
import { CenterModel } from '../../../models/CenterModel';
import './Center.css';

interface Props {
    centerModel: CenterModel
}

const center: React.SFC<Props> = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="card-center col-lg-6 col-md-10">
            <div className="row">
                <div className="col-3">
                    <img src={props.centerModel.profilePicture.url} className="image-profile img-fluid"/>
                </div>  
                <div className="header col-9">
                    <h4>{props.centerModel.name}</h4>
                    <p>{props.centerModel.description}</p>
                </div>
            </div>
            <div className="offers">
                <div className="row">
                    <div className="col-4">
                        { (props.centerModel.firstFreeHour) ? <p className="freeOffer">First Hour Free</p> : null }
                    </div>
                    <div className="col-4">
                        <p> <i className="far fa-check-circle" /> Special Offers</p>
                    </div>
                    <div className="col-4">
                        <p> <i className="far fa-check-circle" /> Camps</p>
                    </div>
                </div>
                <div className="text-center">
                    { props.centerModel.paymentTypes.map((payment, index) => {
                        return <span className="mr-4" key={index}>&#9679; {payment}</span>
                    }) }
                </div>
                    <div className="row justify-content-center">
                        <p>{props.centerModel.totalReviews} REVIEWS</p>
                        <Rating totalRating={props.centerModel.rating}/>
                    </div>
                </div>
                <section className="reserve row justify-content-between align-items-center">
                    <div>
                        <p className="price"><strong>$ {props.centerModel.price}</strong> PER HOUR FIRST CHILD</p>
                    </div>
                    <div>
                        <Button clicked={() => alert(`${props.centerModel.name} RESERVED`)} text="RESERVE NOW"></Button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default center;