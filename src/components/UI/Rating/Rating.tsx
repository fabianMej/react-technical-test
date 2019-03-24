import React from 'react';
import Rating from 'react-rating';

interface Props {
    totalRating: number
}

const rating: React.SFC<Props> = (props) => {
    return (
        <div>
            <Rating initialRating={props.totalRating}
            emptySymbol={['far fa-heart']}
            fullSymbol={['fas fa-heart fill-heart']}></Rating>
        </div>
    );
}

export default rating;