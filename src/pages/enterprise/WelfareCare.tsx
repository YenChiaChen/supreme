import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/福利措施與關懷.jpg";
import React from "react";
import {
  faShieldAlt,
  faGift,
  faHandHoldingUsd,
  faSmile,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoMoonRiver from "../../assets/img/logo/logo_moon_river.png";
import LogoCiaoWin from "../../assets/img/logo/logo_ciaowin.png";
import LogoBesttour from "../../assets/img/logo/logo_besttour.png";
import LogoMashup from "../../assets/img/logo/logo_mashup.png";
import LogoWeibo from "../../assets/img/logo/logo_weibo.png";
import LogoEZTravel from "../../assets/img/logo/logo_eztravel.png";
import Girl from "../../assets/img/testing/girl.png";

import {
  H2,
  H3,
  P,
  List,
  Container,
  Section,
  LabeledContentTable,
  Image,
  Table2,
  YearTabContainer,
  IconTabContainer,
  InfoList,
  CollapseList,
} from "../../components/ui";

import { welfareData, storeData } from "../../data/welfare";

const WelfareCare: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "員工政策" },
    { label: "福利措施與關懷" },
  ];

  const icons = [
    <FontAwesomeIcon icon={faShieldAlt} className="h-[50px]" />,
    <FontAwesomeIcon icon={faGift} className="h-[50px]" />,
    <FontAwesomeIcon icon={faHandHoldingUsd} className="h-[50px]" />,
    <FontAwesomeIcon icon={faSmile} className="h-[50px]" />,
    <FontAwesomeIcon icon={faUmbrellaBeach} className="h-[50px]" />,
  ];

  return (
    <div>
      <HeroBanner
        title="福利措施與關懷"
        description={`設立職工福利委員會，推行各項員工福利措施，包括結婚、生育、生日、喪葬、旅遊、急難補助、電影欣賞、社團活動、年節/慶生禮券等。此外亦提供員工教育訓練、團體意外險、員工入股、持股信托、分紅等多種福利項目。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <Section>
            <H2 text="員工福利措施" />
            <IconTabContainer
              years={welfareData.map((tab) => tab.title)}
              icons={icons}
              tabColor="#FF507C"
            >
              {welfareData.map((tab) => (
                <div key={tab.title} data-year={tab.title}>
                  <InfoList rows={tab.rows} />
                </div>
              ))}
            </IconTabContainer>
          </Section>

          <Section>
            <H2 text="員工專享特約商店" />
            <P text="福委會與外部廠商合作，提供同仁在「飲食、旅遊、其他」三方面的優惠，照顧同仁的日常生活，讓消費變得更便利、實惠，提供同仁更多優惠選擇。" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-md">
              {storeData.map((store, index) => (
                <div key={index} className="flex flex-col">
                  <CollapseList title={store.title} content={store.content} icon={store.icon} />
                </div>
              ))}
            </div>
          </Section>

          <p className="mt-xl sub-title text-center">母性健康保護計畫</p>

          <p className="mt-md content">
            本公司依法落實《性別工作平等法》，並倡議聯合國可持續發展目標 ( SDGs
            ) 中促進性別平等。鼓勵並支
            持員工孕育下一代，提供育嬰假、陪產假、生理假等。
            依據勞基法規定，在每一位子女滿 3
            歲前，都有權申請育嬰留職停薪，停薪期最長可達 2
            年。育嬰留職停薪期間，員工均可繼續參加原有的社會保險。此外，員工復職後，提供外部幼兒園之托兒服務，協助員工在工作的同時兼顧孩子的照顧，讓員工能夠更好地平衡工作和家庭的需求。
          </p>
          <p className="mt-4 content">
            於本公司所在的辦公大樓中設有專用哺乳室，為同仁提供上班時間內的哺(集)乳需求。哺乳室內配置舒適靠背椅、桌子、電源插座、母乳儲存專用冰箱以及有蓋垃圾桶等設備，符合《哺集乳室與托兒設施措施設置標準及經費補助辦法》之規定。
          </p>
          <img src={Girl} className="w-full mt-md" alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default WelfareCare;
