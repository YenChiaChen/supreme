import React from 'react'
import { List } from './List'
import { CardProps, CardGridProps } from '../type'



const Card: React.FC<CardProps> = ({ title, description, icon, iconColor, list }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden relative group">
        <div className='z-10 absolute w-[30px] h-[10px] right-0 top-8 ' style={{ backgroundColor: iconColor }}></div>
        <div className='z-0 absolute w-[0px] h-[0px] rounded-full right-0 bottom-0 translate-x-1/2 translate-y-1/2 duration-500 group-hover:w-[1500px] group-hover:h-[1500px]' style={{ backgroundColor: iconColor }}></div>
      <div className="py-12 px-12 z-10 relative">
      {icon && (
        <div className={`text-[80px] mt-4 flex justify-center duration-500 group-hover:text-white text-pink`} >
          {icon}
        </div>
      )}
        <h3 className="text-xl text-center font-semibold mt-8 text-[#555555] duration-500 group-hover:text-white">{title}</h3>
        {description && (<p className="text-[#555555] duration-500 group-hover:text-white">{description}</p>)}
        {list && <List items={list.items} listType={list.listType} className='group-hover:text-white duration-500' />}
        
      </div>
      
    </div>
  )
}

export const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}
