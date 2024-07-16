import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Img01 from "../../assets/img/testing/chairmain.png";

import SlideUpList from "../../components/ui/SlideUpList";

const MessageFromChairmain: React.FC = () => {
  const items2 = [
    {
      id: 1,
      content:
        "各相關單位每年負責進行氣候相關議題蒐整，經確認各項 議題之風險及對組織內部和外部的衝擊，包含氣候變遷風險之 鑑別評估及因應氣候衝擊。以擇定公司當年度永續發展優先倡 議，包含氣候變遷相關議題，以實際行動履行永續政策。 在內部控制制度之監督下，由各單位依據法令規範及風險 管理之執行，並透過內部稽核實施查核，以確保營運安全及穩定，並定期每年一次向董事會報告績效成果，使董事會能及時 掌握永續相關趨勢以及公司在氣候治理議題上的執行進度與因 應狀況，以期更能落實所制定之氣候變遷政策。",
      title: "・治理",
    },
    {
      id: 2,
      content:
        "各單位依循 TCFD 指引進行完整的氣 候變遷相關風險與機會之鑑別，透過分析 產業概況以及國際永續趨勢，將氣候議題 區分為實體風險、轉型風險與氣候機會三大類別，並針對各項風險機會的影響期 程、發生可能性與衝擊程度進行評估，最終確認四項轉型風險、二項實體風險及四項氣候機會，以擬定相關目標與因應策略， 未來每年將定期監督實施情形與目標達成 度，以達管理目的。",
      title: "・策略",
    },
  ];

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "經營者的話" },
  ];

  return (
    <div>
      <HeroBanner
        title="經營者的話"
        description={`建立誠實信用的企業文化可以強化客戶的信任度，提高服務滿意度，增加營業銷售額，創造股東最大利益，達到永續經營的目標。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="pr-[30%] relative">
            <p className="mt-xl sub-title mb-12">董事長暨執行長的話</p>
            <p className="mt-md content ">
              秉持「客戶至上、追求卓越、培育人才、分享利益」的經營理念，欣然分享公司對於未
              來發展的願景和使命，並持續推展我們對永續發展的承諾。 聯合國自 2015
              年起推動「永續」至今，已然成為企業競爭的新規則，是企業無法忽視的重要議題，它必須以持續性為基礎，尋求長期價值和共同繁榮。
              <br />
              <br />
              因此，我們堅守著讓永續發展的理念融入公司業務策略中，並與供應商緊密合作，確保所代理的產品在生產、運輸和使用過程中符合相關環境法規的要求。這意味著我們積極追求減少產品對環境的影響，包括節能、減排及促進循環經濟等方面，相信在這樣的努力之下，不僅有助於環境保護，同時也對業務長期發展具有正向影響。
              <br />
              <br />
              公司亦致力於員工關懷，提供平等的就業機會，創造安全、多元化、友善包容的工作場所，鞏固公司與利害關係人之間的信任關係，並積極參與社會公益及學術文化的活動。 
              <br />
              <br />
              在公司治理上，持續優化內部控制和監督機制，確保公司決策與業務運作符合道德和法令的要求，展現至上電子的透明度及公正性，同時在尊重股東權益之餘，也設立投資人信箱鼓勵股東一起參與企業經營並繼續給予支持，共同追求長期價值及企業永續發展。
              在公司邁向永續的路徑上每一個人都扮演著重要的角色，每一項小小的行動都可能產生巨大的影響，在此，衷心感謝每一位員工對至上電子的奉獻與努力，每一位股東對至上電子的支持與認同，讓我們對公司的永
              續發展保持熱情，擁抱挑戰，並不斷超越自我，一同攜手邁向永續，創造更美好的佳績！
            </p>
            <p className="mt-12 font-semibold tracking-wide text-[18px]">至上電子股份有限公司 董事長 <span className="ml-6 text-3xl font-bold tracking-wdiest">葛 均</span></p>
          <img src={Img01} className="absolute right-0 bottom-[-300px] w-[30%]" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MessageFromChairmain;
