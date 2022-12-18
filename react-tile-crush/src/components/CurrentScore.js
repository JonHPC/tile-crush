import React from 'react';

const CurrentScore = (props) => {

    return(
        <div className="current-score">
            <h3>Current score: {props.score}</h3>
        </div>
    )
}

export default CurrentScore;