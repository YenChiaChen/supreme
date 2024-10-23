interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
    return (
      <div className={`container mx-auto px-4 md:px-12 xl:px-24 pt-18 max-w-screen-xl ${className}`}>
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
      <div className={`py-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  
  export const BgSection:  React.FC<SectionProps> = ({ children, className = "", color= "#ffffff" }) => {
    return (
      <div className={`py-4 w-full ${className}`} style={{backgroundColor: color}}>
        {children}
      </div>
    );
  };
  