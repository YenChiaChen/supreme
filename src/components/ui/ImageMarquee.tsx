import React from 'react';

interface ImageMarqueeProps {
  images: string[];
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({ images }) => {
  const splitImages = (images: string[]) => {
    const half = Math.ceil(images.length / 2);
    return [images.slice(0, half), images.slice(half)];
  };

  const getRandomRotation = () => {
    const min = -6;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const renderImages = (imageArray: string[]) =>
    imageArray.map((image, index) => {
      const rotation = getRandomRotation();
      const rotateClass = `rotate-[${rotation}deg]`;
      return (
        <div
          key={index}
          className={`bg-white shadow-xl rounded-md px-4 pt-4 pb-12  hover:rotate-0 duration-300 hover:scale-[1.4] hover:shadow-2xl w-[450px]`}
        >
          <img
            src={image}
            alt={`image-${index}`}
            className="w-[400px] h-[250px] object-cover"
          />
        </div>
      );
    });

  const [firstHalf, secondHalf] = splitImages(images);

  return (
    <div className="overflow-auto w-full mb-4 pt-12 pb-36">
      <div className="flex gap-4 pr-4 w-[200%] h-full animate-marquee">
        <div className="flex flex-1 gap-4 h-full">
          {renderImages(firstHalf)}
        </div>
        <div className="flex flex-1 gap-4 h-full">
          {renderImages(secondHalf)}
        </div>
      </div>
    </div>
  );
};

export default ImageMarquee;
