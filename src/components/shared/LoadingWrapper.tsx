import React, { ReactNode, useEffect, useState } from "react";

interface LoadingWrapperProps {
  children: ReactNode;
  delay?: number;
}

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#FF8D50] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-2xl font-bold">Supreme</div>
    </div>
  );
};

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  delay = 3000,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default LoadingWrapper;
