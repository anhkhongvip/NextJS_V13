import React from 'react'
import CardProgress from './CardProgress';
import { ICardTotal } from '@/types/Card';
type Props = {
  item: ICardTotal;
}
const CardTotalItem = ({ item }: Props) => {
  return (
    <div className="card-total__item flex justify-between items-center bg-white-color px-[1.375rem] py-[1.5rem] rounded-2xl">
        <div className="flex flex-col card-info gap-3">
          <div className="card-info__title text-sm text-text-second-color">
            {item.title}
          </div>
          <div className="card-info__count text-2xl font-bold">
            {item.total}
          </div>
        </div>
        <CardProgress total={item.total} target={item.target} bgColorProgress={item.color}/>
    </div>
  )
}

export default CardTotalItem;