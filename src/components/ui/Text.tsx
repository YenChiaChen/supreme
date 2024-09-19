import React from "react";
interface TextProps {
  text: string;
  color?: string;
  subItems?: TextProps[];
}

interface ListProps {
  items: TextProps[];
  listType?: "decimal" | "disc" | "none";
  className?: string;
}

interface InfoListProps {
  title?: string;
  content: string;
}

interface CollapseListProps {
  title: string;
  color?: string;
  content: TextProps[];
  icon?: any;
}

export const H1: React.FC<TextProps> = ({ text, color = "#555555" }) => {
  return (
    <p className={`font-bold text-5xl tracking-wide`} style={{ color }}>
      {text}
    </p>
  );
};

export const H3: React.FC<TextProps> = ({ text, color = "#555555" }) => {
  return (
    <p
      className={`font-semibold text-xl tracking-wide mt-24`}
      style={{ color }}
    >
      {text}
    </p>
  );
};

export const H2: React.FC<TextProps> = ({ text, color = "#555555" }) => {
  return (
    <p
      className={`text-center font-semibold mt-36 text-3xl tracking-wide`}
      style={{ color }}
    >
      {text}
    </p>
  );
};

export const P: React.FC<TextProps> = ({ text, color = "#555555" }) => {
  return (
    <p
      className="whitespace-pre-wrap mt-16 tracking-wide text-md leading-7"
      style={{ color }}
    >
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export const Desc: React.FC<TextProps> = ({ text, color = "#555555" }) => {
  return (
    <p
      className="whitespace-pre-wrap tracking-wide text-md leading-7"
      style={{ color }}
    >
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
};

export const Sup: React.FC<TextProps> = ({ text, color = "#b3b3b3" }) => {
  return (
    <p
      className="whitespace-pre-wrap text-right tracking-wide text-md leading-7"
      style={{ color }}
    >
      {text}
    </p>
  );
};
