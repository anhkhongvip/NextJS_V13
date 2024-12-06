import React from 'react'
import CardTotalItem from './CardTotalItem';
import { cardTotal } from '@/constants/cardTotal.const';

const CardTotal = () => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {cardTotal.map((item) => (<CardTotalItem item={item} key={item.title} />))}
    </div>
  )
}

export default CardTotal; 