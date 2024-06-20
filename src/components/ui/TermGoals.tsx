import React from 'react';

interface CardContent {
  title: string;
  subtitle: string;
  description: string;
  span: number;
}

interface CardGridProps {
  cards: CardContent[];
}

const TermGoals: React.FC<CardGridProps> = ({ cards }) => {


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
          className="bg-[#f5f5f5] rounded-[30px] flex flex-col p-8 pt-24 hover:bg-blue duration-500 hover:scale-[1.1] hover:shadow-xl"
          style={{ gridColumn: `span ${card.span}` }}
        >
          <p className="text-[32px] font-semibold">
            {card.title}
            <br />
            {card.subtitle}
          </p>
          <div className="h-[1px] w-[60%] bg-black my-6"></div>
          <p className="text-[14px] font-light tracking-wider">{renderDescriptionWithLineBreaks(card.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default TermGoals;
