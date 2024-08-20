import React from 'react'

interface TextProps {
    text: string
    color?: string
    subItems?: TextProps[]
}

interface ListProps {
    items: TextProps[]
    listType?: 'decimal' | 'disc' | 'none'
}

export const H3: React.FC<TextProps> = ({ text, color = '#555555' }) => { 
    return (
      <p className={`font-semibold text-xl tracking-wide`} style={{ color }}>{ text }</p>
    )
  }

export const H2: React.FC<TextProps> = ({ text, color = '#555555' }) => { 
  return (
    <p className={`text-center font-semibold mt-36 text-3xl tracking-wide`} style={{ color }}>{ text }</p>
  )
}

export const P: React.FC<TextProps> = ({ text, color = '#555555' }) => {
  return (
    <p className="whitespace-pre-wrap mt-16 tracking-wide text-md leading-7" style={{ color }}>{ text }</p>
  )
}


export const Sup: React.FC<TextProps> = ({ text, color = '#b3b3b3' }) => {
    return (
      <p className="whitespace-pre-wrap text-right tracking-wide text-md leading-7" style={{ color }}>{ text }</p>
    )
  }




export const List: React.FC<ListProps> = ({ items, listType = 'decimal' }) => {
    return (
      <ul className={`tracking-wide text-md leading-8 space-y-2 list-${listType} list-outside pl-8 mt-8`}>
        {items.map((item, index) => (
          <li key={index} style={{ color: item.color || '#555555' }}>
            {item.text}
            {item.subItems && item.subItems.length > 0 && (
              <ul className={`ml-6 list-outside`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} style={{ color: subItem.color || '#555555' }}>
                    - &nbsp;{subItem.text}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )
}
