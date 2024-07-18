import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Img01 from "../../assets/img/testing/climate-change-01.png";
import Img02 from "../../assets/img/testing/climate-change-02.png";
import Img03 from "../../assets/img/testing/climate-change-03.png";

import SlideUpList from "../../components/ui/SlideUpList";

const ClimateChange: React.FC = () => {


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
    { label: "永續共生", href: "/symbiosis" },
    { label: "氣候變遷對策" },
  ];


  return (
    <div>
      <HeroBanner
        title="氣候變遷對策"
        description={`為因應氣候變遷對產業的經營風險，本公司由永續發展委員會轄下工作推動小組負責召集相關各單位。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center mb-12">氣候變遷對策</p>
          <p className="mt-md content ">
            本公司參照「氣候相關財務揭露」( Task Force on Climate-related
            Financial Disclosures, TCFD ) 架構，透過「治理」、
            「策略」、「風險管理」、「指標與目標」等四項核心要素，辨識潛在氣候變遷風險與機會，掌握對營運的衝擊
            與影響，訂定相關因應策略與措施，降低氣候變遷所帶來的損失。
          </p>
          <div className="mt-md">
            <SlideUpList items={items2} />
          </div>

          <p className="mt-xl sub-title text-center">氣候相關風險與機會之鑑別流程</p>
          <img src={Img01} className="w-full mt-md" alt="Energy " />
          <p className="mt-xl sub-title text-center">氣候風險與機會重大性矩陣圖</p>
          <img src={Img02} className="w-full mt-md" alt="Energy " />
          <p className="mt-xl sub-title text-center">氣候相關風險及管理程序</p>
{/*           
          <div className="overflow-x-auto mt-md">
            <table className="min-w-full border-collapse">
              <thead className="bg-orange text-white content">
                <tr>
                  <th className="py-2 px-4 border border-white rounded-tl-lg">風險類別</th>
                  <th className="py-2 px-4 border border-white">構面</th>
                  <th className="py-2 px-4 border border-white">氣候相關風險</th>
                  <th className="py-2 px-4 border border-white">影響時程</th>
                  <th className="py-2 px-4 border border-white">潛在財務影響</th>
                  <th className="py-2 px-4 border border-white">因應策略方案</th>
                  <th className="py-2 px-4 border border-white">因應方案的財務影響</th>
                  <th className="py-2 px-4 border border-white rounded-tr-lg">成果及績效</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap " rowSpan={4}>轉型風險</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap " rowSpan={2}>技術</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap ">對新技術的投資失敗(R2)術</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap ">中長期</td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap ">電動車電池模組、馬達、EXN交換站及電動車零組件等新能源技術投資及開發將提高公司營運成本，若投資開發失敗可能造成公司營運虧損，影響股東獲利。</td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                  網路通訊安全管理
                  </td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                    <ul className="list-disc pl-6">
                      <li>依相關規定申請帳號使用網路通訊系統。</li>
                      <li>所有網路通訊埠原則上皆予鎖定，視業務需要酌以開放使用。</li>
                      <li>禁止使用撥號方式連接網路，特殊需要時以直接連線特定主機作業。</li>
                      <li>利用防火牆做為網路安全之屏障。</li>
                      <li>安裝防毒程式偵測網路安全風險。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                  應用系統安全管理
                  </td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                    <p className="text-dark_blue font-semibold">原始程式碼之存取更新</p>
                    <ul className="list-disc pl-6">
                      <li>原始程式均依規定存放於應用程式伺服器，並嚴格實施權限控管。</li>
                      <li>更新時必須依相關規定辦理，並將原始程式從應用程式伺服器，拷貝至測試環境更改。</li>
                      <li>新增或修改完成之應用程式，必須經由嚴格測試及主管核可後，始交付系統管理員執行安裝程序。</li>
                      <li>系統管理員於新原始程式與執行碼安裝於應用程式伺服器前，須將舊原始程式備份。</li>
                    </ul>
                    <p className="text-dark_blue font-semibold">程式執行權之控管</p>
                    <ul className="list-disc pl-6">
                      <li>建立安全控管檔案，以便系統管理員管理。</li>
                      <li>程式執行權配合使用者工作之需要，依相關規定申請，由系統管理員設定執行授權。</li>
                    </ul>
                    <p className="text-dark_blue font-semibold">資料存取之控管</p>
                    <ul className="list-disc pl-6">
                      <li>資料均透過應用系統之權限管理，並保留存取記錄。</li>
                      <li>管制非應用系統的資料存取，並保留存取記錄。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                  備援管理
                  </td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                    <ul className="list-disc pl-6">
                      <li>執行定期備份作業及異地儲存之管理計劃。</li>
                      <li>執行電腦系統災害復原計劃。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-[#e6e6e6] duration-300 content bg-white">
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                  資產管理
                  </td>
                  <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                    <ul className="list-disc pl-6">
                      <li>依相關規定實施電腦設備之請購、移轉、維修及報廢等作業。</li>
                      <li>依相關規定實施相關電腦軟體之請購與使用管理。</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <img src={Img03} className="w-full mt-md" alt="Energy " />
        </div>
      </div>
    </div>
  );
};

export default ClimateChange;
