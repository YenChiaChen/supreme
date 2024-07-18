import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import img01 from "../../assets/img/testing/product-customer-service-01.png";
import img02 from "../../assets/img/testing/product-customer-service-02.png";
const ProductCustomerService: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "永續供應鏈" },
    { label: "產品與客戶服務" },
  ];


  return (
    <div>
      <HeroBanner
        title="產品與客戶服務"
        description={`本公司於2011年完成設置薪資報酬委員會，並由董事會訂定「薪資報酬委員會組織規程」，\n藉以強化公司治理，健全公司董事及經理人薪資報酬制度。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">政策與承諾</p>
          <p className="mt-md content">
            掌握產業趨勢，制定客戶服務策略，承諾支持環境保護之相關法令規定，滿足環境及社會議題要求之規範。所有銷售之產品與服務及行銷與廣告皆依循法規及國際準則為之，不得有欺騙、誤導、詐欺或任何其他破壞消費者信任、損害消費者權益之行為。
          </p>
          <p className="mt-xl sub-title text-center">至上提供之服務及產品</p>
          <p className="mt-md content">
            在全球半導體市場中，電子零組件通路商扮演著極為重要的角色，保持著持續的動能，並參與國際化的專業分工體系。通路商具有多重功能，包括為上游零組件製造商提供下游市場的動向消息，提供產品開發建議，並建立完整的銷售網路。同時，也為下游的電子產品製造商提供全面性技術服務，以協助開發新產品，並縮短新產品上市的時間。積極扮演上下游之間的溝通橋樑，成為具有高附加價值的專業技術服務通路商，在電子產業價值鏈中占據著重要地位。
          </p>
          <div className="flex justify-center">
            <img
              src={img01}
              className="w-full max-w-[1200px] mt-md"
              alt="img"
            />
          </div>
          <p className="mt-xl sub-title text-center">研發與創新</p>
          <p className="mt-md content">
            本公司的競爭優勢為即時提供客戶需求及掌握關鍵技術發展趨勢，研發部門專責開發新一代產品之應用技術，創新產品應用領域，同時掌握關鍵技術發展趨勢以及客戶未來需求走向，提供有利的市場資訊及專業的技術支援，協助客戶產品整合規劃，解決設計、生產上的問題，並以提供整體設計方案為目標。
          </p>
          <div className="mt-md">
            <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
              <div className="collapse-title flex">
                <span className="text-lg">未來研發計畫及投入之研發費用</span>
              </div>
              <div className="collapse-content content">
                <>
                  <p>
                    2022年度依消費性電子產品市場需求訂定不同之研發專案，研發費用計投入新台幣88,789仟元，預計2023
                    年度將再投入約80,000仟元持續開發快篩試劑、試劑檢測儀、醫療雲端服務、電動車電池組、EXN交換站及影像產品研發與製造等產品。近三年個體財務報告所載之累計投入研發費用：
                  </p>
                  <img
                    src={img02}
                    className="max-w-[800px] w-full mt-md"
                    alt="img"
                  />
                </>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
              <div className="collapse-title flex">
                <span className="text-lg">重大創新技術開發</span>
              </div>
              <div className="collapse-content content">
                目前持續研發之新產品為全民健康快速篩檢系統、試劑檢測儀、醫療雲端服務、次世代生物科技、電動車電池組、雲端能源交換管理系統(EnergyeXchangeNetwork)、安全性鋰電池材料、低電壓電力推進系統整合方案及大型儲能設備與能源管理系統(EMS)等產品。
                對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨
                時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條，
                本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後
                分派，並向股東會報告。
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
              <div className="collapse-title flex">
                <span className="text-lg">完成 ISO-13485 的認證</span>
              </div>
              <div className="collapse-content content">
                研發部門成立迄今，除以提供客戶技術支援外，亦積極尋求新產品的合作開發案，以多元化的產品應用觀念與其核心關鍵技術，同時導入系統整合設計，協助客戶用最短的時間及最有效率的方式，完成產品開發與量產，帶來新商機；另外在遠距智慧醫療產品線的布建需求下，完成ISO-13485的認證，以利後續相關服務及產品的銷售推動，目前已取得科專計畫及專利項目。(EnergyeXchangeNetwork)、安全性鋰電池材料、低電壓電力推進系統整合方案及大型儲能設備與能源管理系統(EMS)等產品。
                對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨
                時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條，
                本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後
                分派，並向股東會報告。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomerService;
