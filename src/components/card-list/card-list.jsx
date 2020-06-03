import React from 'react';
import { Card } from '../cards/cards'

export const CardList = ({collection}) => {
return collection.map(item => <Card key={item.id} card = {item} />)
}