import React from 'react';

interface CardContent {
  title: string;
  subtitle: string;
  description: string;
  span: number;
  icon?: React.ReactNode;
}

interface CardGridProps {
  cards: CardContent[];
  iconColor?: string;
  color?: string;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, color = '#f5f5f5', iconColor='#ffffff' }) => {
  const renderDescriptionWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="mt-md grid grid-cols-12 gap-[24px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-[30px] flex flex-col p-8 pt-10"
          style={{ gridColumn: `span ${card.span}`, backgroundColor: color,  }}
        >
          {card.icon && <div className="mb-4 text-[80px] flex justify-end" style={{color: iconColor}}>{card.icon}</div>}
          <p className="text-[32px] font-semibold">
            {card.title}
            <br />
            {card.subtitle}
          </p>
          <div className="h-[1px] w-[60%] bg-black my-6"></div>
          <p className="text-[14px] font-light tracking-wider">
            {renderDescriptionWithLineBreaks(card.description)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
