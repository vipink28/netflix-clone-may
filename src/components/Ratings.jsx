import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Ratings(props) {
    const { voteAverage, voteCount } = props;
    let votes = voteAverage / 2;
    let votesNumber = Math.floor(votes);
    let totalStars = [...Array(5)];

    return (
        <div className='py-1 d-flex align-items-center'>
            <div className="stars">
            {
                totalStars?.map((item, index)=>{
                    return(
                        index < votesNumber? 
                        <FontAwesomeIcon key={index} icon={faStarSolid}/>  :
                        <FontAwesomeIcon key={index} icon={faStar}/>                      
                    )
                })
            }
            </div>
            <p className='ms-2 mb-0'>({voteCount})</p>
        </div>
    );
}

export default Ratings;