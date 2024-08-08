import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/經營者的話.jpg";
import Img01 from "../../assets/img/testing/chairmain.png";


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
        description={``}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="pr-[40%] relative">
            <p className="mt-xl sub-title mb-12">董事長暨執行長的話</p>
            <p className="mt-md content ">
              至上在永續發展方面的進展和承諾，累積至今已開始萌芽並交出了不錯的成績。我們深知永續發展不只是一種趨勢，
              而是企業經營的新規則，因此，積極回應社會的期望，堅守讓永續發展的理念融入公司核心價值，使之成為我們企業文化
              的一部分。<br /><br />
              在永續環境及供應鏈管理方面，持續秉持著「客戶至上、追求卓越、培育人才、分享利益」的經營理念，與供應商緊
              密合作，確保所代理的產品在生產、運輸和使用過程中符合相關環境法規的要求，並努力減少公司運營過程對環境的不良
              影響，包括減少能源消耗、降低碳排放等有利於環境的措施。
              在公司治理方面，確保公司決策與業務運作符合道德和法令要求，保持資訊揭露的透明度和公正性，建立良好的公司
              治理架構，尊重所有利害相關人的權益。公司亦設立投資人信箱，歡迎股東積極參與對企業經營提出寶貴建言，以創造價
              值回饋股東。<br /><br />
              在員工關懷方面，深知公司的成功不僅來自先進的技術和有效的管理，更來自每一位員工的努力和貢獻，至上提供全
              面的培訓和平等的發展機會，創造安全、多元化、友善和包容的工作環境，讓每位員工都能夠充分發揮潛力，相信快樂和
              有成就感的員工是實現企業永續發展的重要關鍵之一。
              在公司邁向永續的路上，至上將以健全的公司治理為基石，進一步加強運營的韌性。讓我們一同對公司的永續發展保
              持熱情，迎接挑戰，攜手邁向企業永續的目標。
            </p>
            <p className="mt-12 font-semibold tracking-wide text-[18px]">
              至上電子股份有限公司 董事長{" "}
              <span className="ml-6 text-3xl font-bold tracking-wdiest">
                葛 均
              </span>
            </p>
            <img
              src={Img01}
              className="absolute right-0 bottom-[-300px] w-[30%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFromChairmain;
