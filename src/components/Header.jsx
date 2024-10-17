import PropTypes from 'prop-types';
import React from 'react';

const TourCard = ({ title, description, price }) => {
    return (
        <div className="tour-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price} UAH</p>
        </div>
    );
};

TourCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default TourCard;
