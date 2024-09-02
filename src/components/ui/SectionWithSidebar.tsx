import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Stat } from "./StatDisplay";

import bg01 from "../../assets/img/bg/bg01.png"
import bg02 from "../../assets/img/bg/bg02.png"
import bg03 from "../../assets/img/bg/bg03.png"
import bg04 from "../../assets/img/bg/bg04.png"
import { Container } from "./Layout";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Highlight {
  title: string;
  description: string;
  numbers?: number;
  unit?: string;
}

interface Content {
  title: string;
  highlights: Highlight[];
  backgroundImage: string;
}

const contents: Content[] = [
  {
    title: "治理 / 經濟",
    highlights: [
      {
        title: "公司營收新台幣",
        description: "",
        numbers: 787.9,
        unit: "億元",
      },
      {
        title: "第九屆公司治理評鑑上市公司排名",
        description: "前6~20%",
      },
      {
        title: "董事會内部自評平均達成率",
        description: "",
        numbers: 93.81,
        unit: "%",
      },
      {
        title: "董事自評平均達成率",
        description: "",
        numbers: 95.46,
        unit: "%",
      },
      {
        title: "全體董事出席董事會比率達",
        description: "",
        numbers: 100,
        unit: "%",
      },
      {
        title: "誠信經營教育訓練達",
        description: "",
        numbers: 61.5,
        unit: "小時",
      },
      {
        title: "董事會通過設置",
        description: "永續發展委員會",
      },
    ],
    backgroundImage: bg01,
  },
  {
    title: "環境",
    highlights: [
      {
        title: "執行無紙化政策",
        description: "e化簽核流程",
      },
      {
        title: "執行無紙化政策",
        description: "外部憑證電子化",
      },
      {
        title: "全集團減少用紙量約A4紙",
        description: "",
        numbers: 287231,
        unit: "張",
      },
      {
        title: "2022淨山活動清除垃圾",
        description: "",
        numbers: 32.70,
        unit: "公斤",
      },
      {
        title: "誠信經營教育訓練達",
        description: "",
        numbers: 61.5,
        unit: "小時",
      },
      {
        title: "董事會通過設置",
        description: "永續發展委員會",
      },
    ],
    backgroundImage: bg02,
  },
  {
    title: "社會 / 員工",
    highlights: [
      {
        title: "基層人員平均薪資較最低薪資標準高於",
        description: "",
        numbers: 200,
        unit: "％",
      },
      {
        title: "平均調薪",
        description: "",
        numbers: 5,
        unit: "%",
      },
      {
        title: "員工訓練總時數",
        description: "",
        numbers: 1583,
        unit: "小時",
      },
      {
        title: "女性員工占比",
        description: "",
        numbers: 32,
        unit: "%",
      },
      {
        title: "女性主管占比",
        description: "",
        numbers: 18,
        unit: "%",
      },
      {
        title: "舉辦「勞工健康保護-臨場醫護諮詢」",
        description: "",
        numbers: 24,
        unit: "次",
      },
      {
        title: "各項社會公益活動捐贈金額達",
        description: "",
        numbers: 1389000,
        unit: "元",
      },
    ],
    backgroundImage: bg03,
  },
  {
    title: "產品 / 服務",
    highlights: [
      {
        title: "研發費用支出達新台幣",
        description: "",
        numbers: 8879,
        unit: "萬元",
      },
      {
        title: "侵犯客戶隱私或遺失客戶資料",
        description: "0 件",
      },
      {
        title: "違反資訊安全",
        description: "0 件",
      },
    ],
    backgroundImage: bg04,
  },
];

const SectionWithSidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    contents.forEach((content) => {
      const img = new Image();
      img.src = content.backgroundImage;
    });
  }, []);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === contents.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="w-full min-h-screen flex section-container"
      style={{
        backgroundImage: `url(${contents[selectedIndex].backgroundImage})`,
      }}
    >
      <Container>
        <div className="flex items-start h-full">
          <div className="grid grid-cols-2 w-full mt-12">
            <div className="col-span-2 text-white">
              <p className="text-3xl font-bold tracking-wide mb-1">
                永續亮點績效
              </p>
              <p className="font-light">what we do</p>
            </div>
            <div>&nbsp;</div>
            <div className="flex mb-8 gap-4 ml-4">
              <button
                className="w-12 h-12 border border-white rounded-full duration-300 hover:scale-[1.05]"
                onClick={handlePrev}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-xl text-white"
                />
              </button>
              <button
                className="w-12 h-12 border border-white rounded-full duration-300 hover:scale-[1.05]"
                onClick={handleNext}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xl text-white"
                />
              </button>
            </div>
            <div className="w-full flex flex-col  space-y-6 mt-6">
              {contents.map((content, index) => (
                <button
                  key={index}
                  className={`w-[105%] py-4 px-6 text-white text-lg font-bold  border border-r-transparent  text-left rounded-l-full ${
                    index === selectedIndex
                      ? "bg-orange border-orange"
                      : "border-white duration-300 hover:translate-x-[-5%]"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  {content.title}
                </button>
              ))}
            </div>

            <div className="flex ">
              <div
                className="bg-white p-8 rounded-2xl shadow-xl w-full slide-in min-h-[50vh]"
                key={selectedIndex}
              >
                <ul className="">
                  {contents[selectedIndex].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex justify-between items-center  border-b border-dashed border-dark_blue py-3 last:border-none">
                      <div>
                        <p className="font-light text-[#555555]">{highlight.title}</p>
                      </div>
                      <div className="font-semibold text-[24px] text-dark_blue">
                        {highlight.numbers && highlight.unit ? (
                          <Stat
                            num={highlight.numbers}
                            suffix={highlight.unit}
                            color="#4C8591"
                          />
                        ) : (
                          `${highlight.description}`
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionWithSidebar;
