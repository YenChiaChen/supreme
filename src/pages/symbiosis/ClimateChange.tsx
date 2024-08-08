import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續共生/氣候變遷對策.jpg";
import Img01 from "../../assets/img/testing/climate-change-01.png";
import Img02 from "../../assets/img/testing/climate-change-02.png";

import SlideUpList from "../../components/ui/SlideUpList";

const ClimateChange: React.FC = () => {


  const items2 = [
    {
      id: 1,
      content:
        "各相關單位每年負責進行氣候相關議題蒐整，經確認各項 議題之風險及對組織內部和外部的衝擊，包含氣候變遷風險之 鑑別評估及因應氣候衝擊。以擇定公司當年度永續發展優先倡 議，包含氣候變遷相關議題，以實際行動履行永續政策。 在內部控制制度之監督下，由各單位依據法令規範及風險 管理之執行，並透過內部稽核實施查核，以確保營運安全及穩定，並定期每年一次向董事會報告績效成果，使董事會能及時 掌握永續相關趨勢以及公司在氣候治理議題上的執行進度與因 應狀況，以期更能落實所制定之氣候變遷政策。",
      title: "・治理",
      titleColor: "#3BC376"
    },
    {
      id: 2,
      content:
        "各單位依循 TCFD 指引進行完整的氣 候變遷相關風險與機會之鑑別，透過分析 產業概況以及國際永續趨勢，將氣候議題 區分為實體風險、轉型風險與氣候機會三大類別，並針對各項風險機會的影響期 程、發生可能性與衝擊程度進行評估，最終確認四項轉型風險、二項實體風險及四項氣候機會，以擬定相關目標與因應策略， 未來每年將定期監督實施情形與目標達成 度，以達管理目的。",
      title: "・策略",
      titleColor: "#3BC376"
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
        titleColor="#ffffff"
        contentColor="#ffffff"
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
          <div className="flex justify-center mt-md">
              <img src={Img01} className="w-full max-w-[1000px]" alt="Energy " />
          </div>
          <p className="mt-xl sub-title text-center">氣候風險與機會重大性矩陣圖</p>
          <div className="flex justify-center mt-md">
              <img src={Img02} className="w-full max-w-[1000px]" alt="Energy " />
          </div>
          <p className="mt-xl sub-title text-center">氣候相關風險及管理程序</p>
          
          <div className="overflow-x-auto mt-md">
            <table className="min-w-full border-collapse">
              <thead className="bg-green text-white content">
                <tr>
                  <th className="py-2 px-4 border border-white rounded-tl-lg">類別</th>
                  <th className="py-2 px-4 border border-white">氣候相關風險</th>
                  <th className="py-2 px-4 border border-white">影響時程</th>
                  <th className="py-2 px-4 border border-white">潛在財務影響</th>
                  <th className="py-2 px-4 border border-white">管理程序</th>
                </tr>
              </thead>
              <tbody>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={4}>轉型風險</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">R2對新技術的投資失敗</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中長期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={2}>電動車電池模組、馬達、EXN 交換站及電動車零組件等新能源技術投資及開發將提高公司營運成本，若投資開發失敗可能造成公司營運虧損，影響股東獲利。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={2}>
                    <ul className="list-disc pl-6">
                      <li>自主研發設計，委託低碳加工廠製造；</li>
                      <li>共用零組件策略，降低無效組裝工時及成本，並簡化設計生產流程；</li>
                      <li>記錄研發日誌工作表，並定期檢視投資及開發成果，參展推廣公司新能源業務；</li>
                      <li>申請專利，保護技術研發成果，並偕同客戶開發綠能電動車之相關組件；</li>
                      <li>人員控管簽訂保密協議，避免研發技術外流，並強化公司研發技術能力。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">R3低碳技術轉型的成本</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中期</td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">R4客戶偏好改變</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">氣候變遷實體風險造成長時間停電、機場關閉飛機航班停飛、道路封閉，導致公司營業中斷、阻斷貨物運輸，延遲送達目的地，影響客戶生產排程，造成營運交易之違約或信用衝擊，可能面臨財務成本提高或履約延遲等賠償或追償。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">
                    <ul className="list-disc pl-6">
                      <li>每半年召開風險管控小組會議檢討。</li>
                      <li>使用 UPS 避免突發性停電。</li>
                      <li>分散倉儲區域發貨。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">R7違約或信用衝擊風險</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">
                  <ul className="list-disc pl-6">
                      <li>若與高碳排企業合作可能影響客戶對本公司的採購意願，而造成收益下降。</li>
                      <li>氣候韌性低可能影響客戶及利害關係人對公司滿意度。</li>
                    </ul>
                  </td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">
                    <ul className="list-disc pl-6">
                      <li>與符合環保規範的上游廠商 ( 供應商 ) 合作，降低產品對環境的衝擊足跡。</li>
                      <li>訂有「供應商管理作業」，基於公司之業務性質，多為代理商品銷售買賣，對於往來之供應商應慎選信譽良好之廠商。</li>
                      <li>透過環保節能措施、氣候災害應變等措施，提昇本公司氣候韌性。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={6}>實體風險</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={3}>R5颱風、洪水等極端天氣事件嚴重程度提高</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={3}>短期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">氣候因素 ( 如交通中斷、淹水等 )可能導致運送成本增加、派送時間延遲、存貨及運輸的保險成本提高，客訴機率增加，可能影響應收帳款回收天期。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >
                    <ul className="list-disc pl-6">
                      <li>天候若遇非常時期，如颱風及梅雨季等，將提升包裝強度，以減少因氣候帶來的貨損及客訴，並督促運輸公司提升運送安全意識與強度。</li>
                      <li>倉儲人員積極參與永續環境小組作業，以提升環保意識，落實於倉儲作業中。</li>
                    </ul>
                  </td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">營運據點辦公室硬體設備因氣候災害而發生損害。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >災害而發生損害。 營運據點辦公室硬體設備投保產險。</td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">員工無法出勤，生產力受影響，導致收益降低和職安衛成本增加。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >人力資源部依人事行政局公告，公佈重大氣候災害時是否上班，以避免人員損傷。</td>
                </tr>

                
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={3}>R6降雨 ( 水 ) 模式變化和氣候模式的極端變化</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={3}>中長期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">在極端氣候的影響下，天災發生機率提高，不僅自身在設立倉庫時的選擇受限外，倉儲和營運硬體設備使用年限縮短。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >針對營運硬體設備 ( 包含建物及運輸設備 ) 及存貨保險保額做定期健檢年度檢討會，若添購硬體設備或委外倉庫時，環境及氣候因素須納入耐用年限評估項目。
                  </td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">員工健康受到影響，工安風險提高，供電不穩網路中斷等均造成營運成本增加，嚴重時將使中斷營運。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >除勞健保外，亦投保員工團體保險。</td>
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">均溫上升導致營運據點冷氣使用量增加，造成電費逐年增加。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >營運據點採用符合節能標章之空調設備，並設定均溫為 26 ～ 28 度。</td>
                </tr>

                
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " rowSpan={4}>氣候機會</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">O1使用更高效率的配銷流程</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">在全球低碳轉型的趨勢下且銷量增加的同時，積極投入節能減碳規劃，減少非必要運送成本。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap " >
                    <ul className="list-disc pl-6">
                      <li>作業流程整合及作業窗口單一化，除提升作業效率，亦可避免不必要的派送及運輸作業。</li>
                      <li>持續督促委外運輸設備更換為五期車。</li>
                    </ul>
                  </td>
                </tr>

                
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">O2積極拓展再生能源來源</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中長期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">再生能源為未來趨勢，本公司轉投資能源科技公司目前雖有虧損，但未來可持續拓展再生能源來源以增加營收。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">持續投入尋找新綠能產業代理機會。</td>
               
                </tr>
                
                
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">O3開發和 / 或增加低碳商品和服務</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中長期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">開發或增加代理低碳產品和服務，預估可提升年度營收。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">隨時關注所代理產品是否符合環境法規並積極開發低碳商品之代理權。</td>
               
                </tr>
                <tr className="content bg-white">
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">O4進入新市場</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">中長期</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">因應碳經濟市場崛起，積極增加LED 及電池等新能源業務。</td>
                  <td className="py-2 px-4 border border-light_gray whitespace-pre-wrap ">除代理電子 IC 零組件，亦持續投入綠色產品的代理，如 LED、電動車電池等，以拓展新產業市場。</td>
               
                </tr>








              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateChange;
