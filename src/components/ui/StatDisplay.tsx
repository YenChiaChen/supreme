import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatProps {
  num: number;
  suffix: string;
  decimals?: number;
}

export const Stat: React.FC<StatProps> = ({ num, suffix, decimals = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    animate(0, num, {
      duration: 1.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView, hasAnimated]);
  return (
    <>
      <span ref={ref} className="mr-1"></span>
      {suffix}
    </>
  );
};

interface StatDisplayProps {
  stats: Array<{
    label: string;
    num: number;
    suffix: string;
    staticString?: string;
  }>;
}

const StatDisplay: React.FC<StatDisplayProps> = ({ stats }) => {
  return (
    <div className="bg-gray rounded-[30px] flex justify-between px-12 py-8 items-center">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="flex-1 flex justify-center">
            <div className="text-left text-[16px] text-[#5b5b5b] font-light">
              <p className="tracking-wide">{stat.label}</p>
              <p className="text-[32px] font-semibold text-orange pt-1">
                {stat.staticString ? (
                  stat.staticString
                ) : (
                  <Stat
                    num={stat.num}
                    suffix={stat.suffix}
                    decimals={stat.num % 1 !== 0 ? 1 : 0}
                  />
                )}
              </p>
            </div>
          </div>
          {index < stats.length - 1 && (
            <div className="bg-[#d9d9d9] w-[1px] h-[80px]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatDisplay;


