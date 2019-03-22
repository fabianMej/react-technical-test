import React from 'react';

interface Props {
    totalRating: number
}

const rating: React.SFC<Props> = (props) => {
    return (
        <div>
            <i className="fas fa-heart fill-heart" />
            <i className="fas fa-heart fill-heart" />
            <i className="fas fa-heart fill-heart" />
            <i className="far fa-heart" />
            <i className="far fa-heart" />
        </div>
    );
}

export default rating;