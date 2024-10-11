import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { newsData } from "../../data/NewsData";
import {
  faChevronCircleLeft,
  faFacePensive,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/pro-solid-svg-icons";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width: string;
  desc?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  width,
  desc,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && (
        <div className="mt-4 object-cover h-[700px] w-full bg-gray-300 animate-pulse flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`mt-4 object-cover max-h-[700px] transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width }}
        onLoad={handleImageLoad}
      />

      {desc && (
        <p className="my-2 text-gray-400 tracking-wide flex items-center gap-2 ">
          <FontAwesomeIcon icon={faCaretUp} />
          {desc}
        </p>
      )}
    </>
  );
};

type NewsComponent =
  | { type: "title"; content: string }
  | { type: "subTitle"; content: string }
  | { type: "heading"; content: string }
  | { type: "paragraph"; content: string }
  | { type: "date"; content: string }
  | { type: "image"; src: string; alt: string; width?: string; desc?: string }
  | { type: "column"; left: NewsComponent[]; right: NewsComponent[] }
  | { type: "margin";}


  const renderComponent = (component: NewsComponent): JSX.Element | null => {
    switch (component.type) {
      case "title": {
        const { content } = component;
        return (
          <h1 className="text-3xl font-semibold tracking-wide">{content}</h1>
        );
      }
      case "margin": {
        return(
          <div className="my-6">&nbsp;</div>
        )
      }
      case "date": {
        const { content } = component;
        return (
          <>
            <h1 className="text-md tracking-wide mt-4 text-gray-500">
              {content}
            </h1>
            <div className="my-8 w-full h-[1px] bg-gray-300"></div>
          </>
        );
      }
      case "paragraph": {
        const { content } = component;
        return <p className="mt-4 tracking-wide leading-8">{content}</p>;
      }
      case "heading": {
        const { content } = component;
        return (
          <p className="mt-8 tracking-wide leading-8 text-lg font-semibold">
            {content}
          </p>
        );
      }
      case "subTitle": {
        const { content } = component;
        return (
          <p className="mt-16 tracking-wide leading-8 text-xl font-semibold">
            {content}
          </p>
        );
      }
      case "image": {
        const { src, alt, width = "100%", desc = "" } = component;
        return (
          <ImageWithSkeleton src={src} alt={alt} width={width} desc={desc} />
        );
      }
      case "column": {
        const { left, right } = component;
        return (
          <div className="grid grid-cols-2 gap-8">
            <div>
              {left.map((comp, index) => (
                <div key={index}>{renderComponent(comp)}</div>
              ))}
            </div>
            <div>
              {right.map((comp, index) => (
                <div key={index}>{renderComponent(comp)}</div>
              ))}
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };
  

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <p className="w-full flex text-white bg-orange h-[1000px] items-center justify-center font-en -mb-[150px] text-4xl font-bold tracking-widest">
        <FontAwesomeIcon icon={faFacePensive} className="mr-6 text-5xl" />
        404 NOT FOUND
      </p>
    );
  }

  return (
    <div className="bg-gray-100  text-[#555555]">
      <Container className="pt-48  -mb-[80px]">
        <Link to="/news">
          <div className="p-12 flex items-center group cursor-pointer w-fit">
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className="mr-4 text-3xl text-gray-300 duration-300 group-hover:mr-6 group-hover:scale-105 group-hover:text-orange"
            />
            返回列表
          </div>
        </Link>
        <div className="bg-white rounded-t-[2rem] shadow-2xl px-12 pt-20 pb-[300px]">
          {news.components.map((component, index) => (
            <div key={index}>{renderComponent(component)}</div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewsDetail;
