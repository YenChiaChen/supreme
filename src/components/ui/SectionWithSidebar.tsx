import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bg01 from "../../assets/img/bg/subPage/幸福企業/人力資源分佈.jpg";
import bg02 from "../../assets/img/bg/subPage/幸福企業/員工權益保障.jpg";
import bg03 from "../../assets/img/bg/subPage/幸福企業/健康職場.jpg";
import bg04 from "../../assets/img/bg/subPage/幸福企業/多元化成長.jpg";
import { Container } from "./Layout";

interface Content {
  title: string;
  description: string;
  backgroundImage: string;
}

const contents: Content[] = [
  { title: "治理", description: "這是治理的內容", backgroundImage: bg01 },
  { title: "環境", description: "這是環境的內容", backgroundImage: bg02 },
  { title: "社會", description: "這是社會的內容", backgroundImage: bg03 },
  { title: "產品", description: "這是產品的內容", backgroundImage: bg04 },
];

const SectionWithSidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    contents.forEach((content) => {
      const img = new Image();
      img.src = content.backgroundImage;
    });
  }, []);

  return (
    <section
      className="w-full h-screen flex section-container"
      style={{
        backgroundImage: `url(${contents[selectedIndex].backgroundImage})`,
      }}
    >
      <Container>
        <div className="flex items-center h-full">
          <div className="w-1/4 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-8 space-y-6">
            {contents.map((content, index) => (
              <button
                key={index}
                className={`w-full py-4 px-6 text-white text-lg font-semibold rounded ${
                  index === selectedIndex
                    ? "bg-orange text-gray-900"
                    : "bg-gray-800"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {content.title}
              </button>
            ))}
          </div>

          <div className="w-3/4 flex items-center justify-center">
            <div
              className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 slide-in"
              key={selectedIndex}
            >
              <h2 className="text-3xl font-bold mb-4 text-center">
                {contents[selectedIndex].title}
              </h2>
              <p className="text-lg text-gray-700 text-center">
                {contents[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionWithSidebar;
