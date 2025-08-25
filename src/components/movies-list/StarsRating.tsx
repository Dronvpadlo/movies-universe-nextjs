'use client'
import React, {FC} from 'react';
import StarRatings from 'react-star-ratings';

type RatingProps = {
    rating: number
}
const StarsRating:FC<RatingProps> = ({rating}) => {
    return (
        <div>
            <StarRatings
                rating={rating / 2}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="2vw"
                starSpacing="0.3vw"
                name="movie-rating"
            />

        </div>
    );
};

export default StarsRating;