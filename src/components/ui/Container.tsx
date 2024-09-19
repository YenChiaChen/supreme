interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
    return (
      <div className={`container mx-auto mt-8 px-12 pt-18 ${className}`}>
        {children}
      </div>
    );
  };

  interface SectionProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
  }
  
  export const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
    return (
      <div className={`py-8 ${className}`}>
        {children}
      </div>
    );
  };
  
  
  export const BgSection:  React.FC<SectionProps> = ({ children, className = "", color= "#ffffff" }) => {
    return (
      <div className={`py-8 w-full ${className}`} style={{backgroundColor: color}}>
        {children}
      </div>
    );
  };
  