import React from 'react';

const scroll = (props) =>{
    const styles = {
        overflowY: 'scroll',
        border: '1px solid black',
        height: '500px'
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
};

export default scroll;