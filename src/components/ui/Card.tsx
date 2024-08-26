import React from 'react'
import { List } from './List'
import { CardProps, CardGridProps } from '../type'



const Card: React.FC<CardProps> = ({ title, description, icon, iconColor='#555555', list, bgColor='#ffffff' }) => {
  return (
    <div className={`overflow-hidden relative group rounded-xl border`}  style={{backgroundColor: bgColor, borderColor: iconColor}} >
        
      <div className="py-12 px-12 z-10 relative">
      {icon && (
        <div className={`text-[80px] mt-4 flex justify-center duration-500`} style={{color: iconColor}}>
          {icon}
        </div>
      )}
        <h3 className="text-xl text-center font-semibold mt-8 text-[#555555] duration-500">{title}</h3>
        {description && (<p className="text-[#555555] duration-500">{description}</p>)}
        {list && <List items={list.items} listType={list.listType} className='' />}
        
      </div>
      
    </div>
  )
}

export const CardGrid: React.FC<CardGridProps> = ({ cards, bgColor='#ffffff', iconColor='#555555' }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4  mt-16">
      {cards.map((card, index) => (
        <Card key={index} {...card} bgColor={bgColor} iconColor={iconColor} />
      ))}
    </div>
  )
}
