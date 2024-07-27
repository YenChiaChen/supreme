import { useRef, useState, useEffect } from "react";

import SupremeLogo from "../../assets/img/logo/supreme.png";
import classNames from "classnames";
import { Link } from "react-router-dom";
export function Nav() {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const onMouseEnter = (index: number, el: HTMLElement) => {
    setHovering(index);
    setPopoverLeft(el.getBoundingClientRect().left);
    setVisible(true);
  };

  useEffect(() => {
    if (hovering !== null) {
      const menuElement = refs.current[hovering];
      if (menuElement) {
        setTimeout(() => {
          setPopoverHeight(menuElement.offsetHeight);
        }, 0);
      }
    }
  }, [hovering]);

  const onMouseLeave = () => {
    setVisible(false);
    setTimeout(() => setHovering(null), 300);
  };

  return (
    <div className="flex justify-between w-full">

      
      
      <div className="flex gap-6 items-center">
            <a
              href="http://www.supreme.com.tw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ SupremeLogo}
                alt="Supreme"
                className={classNames("w-[160px]", {
                })}
              />
            </a>
            <Link
              to="/"
              className={classNames("text-[18px] border-l-[1px] pl-4", {
              })}
            >
              企業永續
            </Link>
          </div>

      <nav
        onMouseLeave={onMouseLeave}
        className="bg-white h-[50px] shadow-xl w-[50%] text-black items-start self-center flex max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center"
      >
        <a
          onMouseEnter={(event) => onMouseEnter(0, event.currentTarget)}
          href="/products"
          className="text-center text-base font-medium leading-6 tracking-wide self-stretch"
        >
          Products
        </a>
        <a
          onMouseEnter={(event) => onMouseEnter(1, event.currentTarget)}
          href="/solutions"
          className="text-center text-base font-medium leading-6 tracking-wide self-stretch"
        >
          Solutions
        </a>
        {typeof hovering === "number" && (
          <div
            style={{
              left: popoverLeft ?? "0",
              height: popoverHeight ?? "auto",
              opacity: visible ? 1 : 0,
              transition: "left 0.3s ease-in-out, opacity 0.3s ease-in-out",
              transform: "translateX(-30%)",
            }}
            className="transition-all absolute shadow bg-white p-5 rounded w-[600px] mt-6"
          >
            <div
              ref={(el) => (refs.current[0] = el)}
              style={{ display: hovering === 0 ? "block" : "none" }}
            >
              <p className="h-[200px]">Products Menu Content</p>
            </div>
            <div
              ref={(el) => (refs.current[1] = el)}
              style={{ display: hovering === 1 ? "block" : "none" }}
            >
              <p className="h-[400px]">Solutions Menu Content</p>
            </div>
          </div>
        )}
      </nav>
      <div>HH</div>
    </div>
  );
}
