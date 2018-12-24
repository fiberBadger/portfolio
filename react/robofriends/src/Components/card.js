import React from 'react';
const Card = (props)=>{
    const id = props.id;

    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
            <img src={"https://robohash.org/"+props.name} alt='RoboFriend' />
            <h2>{props.name}</h2>
            <p>{props.username}</p>
            <p>{props.email}</p>
            <p>{id}</p>
        </div>
    );
}

export default Card;