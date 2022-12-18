import React from 'react';

const Hand = (props) => {

    return(
        <div className="hand">
            <h3>{props.hand[0] ? props.hand[0] : '_'}</h3>
            <h3>{props.hand[1] ? props.hand[1] : '_'}</h3>
            <h3>{props.hand[2] ? props.hand[2] : '_'}</h3>
            <h3>{props.hand[3] ? props.hand[3] : '_'}</h3>
            <h3>{props.hand[4] ? props.hand[4] : '_'}</h3>
            <h3>{props.hand[5] ? props.hand[5] : '_'}</h3>
            <h3>{props.hand[6] ? props.hand[6] : '_'}</h3>
        </div>
    )
}

export default Hand;