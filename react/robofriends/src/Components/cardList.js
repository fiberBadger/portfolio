import React from 'react';
import Card from './card';
const CardList= ({ robots }) =>{
    const card = robots.map((user, i)=>{
        return <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} key={i} />
    });

    return(
        <div>
            {card}
        </div>
    );
} 


export default CardList;