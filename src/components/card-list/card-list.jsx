import React from 'react';
import { Card } from '../cards/cards'

export const CardList = ({collection}) => {
return collection.map(item => <Card card = {item} />)
}