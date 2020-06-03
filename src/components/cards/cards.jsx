import React from 'react';

export const Card = ({card}) => {
    return(
    <div style={{backgroundColor:'grey', borderBottom: '1px solid green'}}>{card.title}</div>
    )
}