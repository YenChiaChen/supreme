import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/經營者的話.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import ChairManImage from "../../assets/img/subPage/永續經營/chairmain.png";
import { P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
const MessageFromChairmain: React.FC = () => {
  return (
    <div className="mb-48">
      <HeroSection
        title="經營者的話"
        description={``}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Section>
          <Breadcrumbs items={navItems} />
          <div className="grid grid-cols-5 gap-12">
            <div className="col-span-3">
              <p className="mt-xl text-3xl font-bold mb-12">經營者的話</p>
              <P
                text={
                  "至上在永續發展方面的進展和承諾，累積至今已開始萌芽並交出了不錯的成績。我們深知永續發展不只是一種趨勢，而是企業經營的新規則，因此，積極回應社會的期望，堅守讓永續發展的理念融入公司核心價值，使之成為我們企業文化的一部分。"
                }
              />
              <P
                text={
                  "在永續環境及供應鏈管理方面，持續秉持著「客戶至上、追求卓越、培育人才、分享利益」的經營理念，與供應商緊密合作，確保所代理的產品在生產、運輸和使用過程中符合相關環境法規的要求，並努力減少公司運營過程對環境的不良影響，包括減少能源消耗、降低碳排放等有利於環境的措施。"
                }
              />
              <P
                text={
                  "在公司治理方面，確保公司決策與業務運作符合道德和法令要求，保持資訊揭露的透明度和公正性，建立良好的公司治理架構，尊重所有利害相關人的權益。公司亦設立投資人信箱，歡迎股東積極參與對企業經營提出寶貴建言，以創造價值回饋股東。"
                }
              />
              <P
                text={
                  "在員工關懷方面，深知公司的成功不僅來自先進的技術和有效的管理，更來自每一位員工的努力和貢獻，至上提供全面的培訓和平等的發展機會，創造安全、多元化、友善和包容的工作環境，讓每位員工都能夠充分發揮潛力，相信快樂和有成就感的員工是實現企業永續發展的重要關鍵之一。"
                }
              />
              <P
                text={
                  "在公司邁向永續的路上，至上將以健全的公司治理為基石，進一步加強運營的韌性。讓我們一同對公司的永續發展保持熱情，迎接挑戰，攜手邁向企業永續的目標。"
                }
              />

              <p className="mt-24 font-semibold tracking-wide text-[18px] ">
                至上電子股份有限公司 董事長
                <span className="ml-6 text-3xl font-bold tracking-wdiest">
                  葛 均
                </span>
              </p>
            </div>
            <div className="col-span-2 flex h-full items-end">
              <img src={ChairManImage} className="w-[80%]" />
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default MessageFromChairmain;
