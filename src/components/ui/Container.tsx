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