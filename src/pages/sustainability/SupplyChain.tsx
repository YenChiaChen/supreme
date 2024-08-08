import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/供應鏈管理.jpg";
import Supply from "../../assets/img/testing/supply1.png";
import Supply2 from "../../assets/img/testing/supply2.png";
import Table from "../../components/ui/Table";

const SupplyChain: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "供應鏈管理" },
  ];

  const columns = [
    { header: "年度", accessor: "year" },
    { header: "2020", accessor: "year2020" },
    { header: "2021", accessor: "year2021" },
    { header: "2022", accessor: "year2022" },
  ];

  const data = [
    {
      "year" : "新供應商數量統計",
      "year2020": 21,
      "year2021": 28,
      "year2022": 11,
    }
  ]

  const columns2 = [
    { header: "認證項目", accessor: "item" },
    { header: "SAMSUNG", accessor: "samsung" },
    { header: "瀚宇彩晶(股)公司", accessor: "hannstar" },
    { header: "聯發科技(股)公司", accessor: "mediatek" },
  ];

  const data2 = [
    {
      "item" : "RBA 責任商業聯盟行為準則",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "AEO安全認證優質企業",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO 14064-1溫室氣體排放查證",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO 14067碳足跡",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "",
    },
    {
      "item" : "ISO 50001 能源管理系統",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO 14001 環璄管理系統",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO 45001 職業安全衛生管理",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO 9001 品質管理系統",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO 27001 資安管理認證",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO/IEC 27701 隱私資訊管理",
      "samsung": "V",
      "hannstar": "",
      "mediatek": "",
    },
    {
      "item" : "ISO 28000 供應鏈安全管理系統",
      "samsung": "",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "ISO14040、ISO 14044生命週期評估",
      "samsung": "V",
      "hannstar": "",
      "mediatek": "",
    },
    {
      "item" : "RoHS 有害物質限制指令",
      "samsung": "V",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "IECQ QC 080000 有害物質管理系統記證",
      "samsung": "",
      "hannstar": "V",
      "mediatek": "V",
    },
    {
      "item" : "WEEE 廢電器電子設備指令",
      "samsung": "",
      "hannstar": "V",
      "mediatek": "",
    },
    {
      "item" : "水資源管理聯盟（AWS）白金級認證",
      "samsung": "V",
      "hannstar": "",
      "mediatek": "",
    },
    {
      "item" : "ISO 14064-3標準碳足跡驗證",
      "samsung": "V",
      "hannstar": "",
      "mediatek": "",
    },
    {
      "item" : "SA8000 社會責任標準",
      "samsung": "",
      "hannstar": "",
      "mediatek": "V",
    },
  ];
  


  return (
    <div>
      <HeroBanner
        title="供應鏈管理"
        description={`本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格等符合規範外，
亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，
共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">產業供應鏈</p>
          <p className="mt-md content">
            半導體零組件產品主要可區分為積體電路及分離式元件，積體電路依功能不同區分為記憶體
            IC、微元件 IC、邏輯 IC 及類比 IC
            四大類；分離式元件則包括電晶體、二極體、閘流體及光電半導體等，由於該等元件應用
            範圍橫跨主機板及筆記型電腦、多媒體及系統周邊、通訊及消費性產業等，故隨全球電腦、網際網路、行動通
            訊、與多媒體視訊產品之快速普及，半導體零組件需求不斷推升，使得零件通路業者之地位日益重要。
          </p>
          <p className="mt-xl sub-title text-center">半導體產品關聯圖</p>
          <p className="mt-md content">
            本公司向上游半導體電子零組件製造商採購，透過系統化之倉儲管理、多樣化之經銷代理品牌及綿密之行
            銷通路網，將產品銷售予下游資訊、通訊及消費性產品之製造商，並提供整合與應用等諮詢服務，滿足客戶一
            次性購足之需求。因此，在電子資訊產業之產銷分工模式中，扮演著不可或缺的中間橋樑角色。
          </p>
          <img
            src={Supply}
            alt="goal"
            className="w-full max-w-[1000px] mt-md mx-auto"
          />
          <p className="mt-xl sub-title text-center">
            半導體電子零組件上、中、下游供應鏈狀態
          </p>
          <img
            src={Supply2}
            alt="goal"
            className="w-full max-w-[1000px] mt-24 mx-auto"
          />
          <p className="mt-xl sub-title text-center">供應商的管理與評鑑</p>

          <div className="flex flex-col gap-4">
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              
              <div className="collapse-title flex">
                <span className="text-lg text-blue">供應商 / 承攬商管理政策</span>
              </div>
              <div className="collapse-content content text-black">
                <p>
                  本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格等符合規範外，亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。
                  <br />
                  <br />
                  本公司主要供應商位於韓國、台灣、中國、越南、菲律賓等據點，為確保供應商夥伴擁有相同的永續發展理念，邀請供應商簽署「人權、環境永續暨誠信經營承諾書」。2023
                  年並無具有強迫或強制勞動事件重大風險的營運據點和供應商。
                  <br />
                  <br />
                  基於保護兒童身心發展、禁止強迫勞動及不歧視之人權政策，本公司不雇用年齡未滿16 歲之童工、不強迫勞動及避免任何不當的聘雇歧視，並要求供應商同樣遵循國際標準及其營業據點之勞工聘僱應符合相關法律。2023
                  年，本公司及供應商皆無發生歧視、使用童工、強迫勞動、歧視或其他違反勞工人權之重大風險或情事。
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              
              <div className="collapse-title flex">
                <span className="text-lg text-blue">供應商 / 承攬商管理機制</span>
              </div>
              <div className="collapse-content content text-black">
                <p>
                  本公司對供應商管理係透過「供應商遴選」及「供應商永續管理」兩個面向，以促進上下游共同展開永續價值鏈發展。
                  <br />
                  <br />
                  <span className="font-semibold">供應商遴選：</span>
                  <br />
                  對於新供應商之遴選,除應慎選信譽良好之廠商外,尚應考量其產品品質、財務狀況、價格、供貨數量、環保議題、勞工安全與衛生等各面向進行評核。
                  <br />
                  <br />
                  <span className="font-semibold">供應商永續管理：</span>
                  <br />
                  ・供應商鑑別：(1)對供應商進行間接環境考量面鑑別。(2)評估供應商是否有影響環境與社會之紀錄。
                  <br />
                  ・供應商新增：應由業務部填寫「供應商基本資料表」，經權責主管核准後，由業務後勤部於系統建立供應商資料。
                  <br />
                  ・供應商資本資料維護：供應商資料有異動時，及時更新供應商資料。
                  <br />
                  ・重要採購：進行長期供銷合作時，公司應與其簽訂代理業務合約以保障自身之代理權。
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              
              <div className="collapse-title flex">
                <span className="text-lg text-blue">
                  供應商遴選
                </span>
              </div>
              <div className="collapse-content content text-black">
                <div className="mt-8"></div>
                本公司與各供應商之間依約交易，持續維繫良好的長期夥伴關係，並依據供應商管理作業進行評鑑；新供應商之遴選，除應慎選信譽良好之廠商外，尚應考量其產品品質、財務狀況、價格、供貨數量、環保議題、勞工安全與衛生等各面向進行評核，待通過評鑑符合本公司要求條件者，始成為合格供應商。亦邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，與供應商夥伴共同在永續發展的道路上努力。針對供應商管理實施情形揭露於本公司官網。
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              
              <div className="collapse-title flex">
                <span className="text-lg text-blue">供應商新增及異動</span>
              </div>
              <div className="collapse-content content text-black">
                於新增供應商時，應由業務部填寫「供應商基本資料表」，經權責主管核准後，再由業務後勤部至系統建立供應商基本資料；資料有異動時，及時更新供應商資料。
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow shadow text-blue  p-4 relative group"
            >
              
              <div className="collapse-title flex">
                <span className="text-lg text-blue">重要採購</span>
              </div>
              <div className="collapse-content content text-black">
                本公司係與選定之供應商進行長期合作，與其簽訂代理業務合約以保障自身之代理權。與之簽訂之合約或協議，均須符合內稽內控之流程，經權責主管及法務人員覆核後始簽訂，並由風險管理部妥善保管合約或交易協議。
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">個年度新供應商數量</p>
          <Table columns={columns} data={data} color="#3B79E4" />


          <p className="mt-xl sub-title text-center">供應商鑑別</p>
          <p className="mt-md content">
            本公司定期評量供應商提供的產品品質及其法令遵守情形，同時審查其是否有不誠信的經營行為與對環境
            和社會的負面記錄，以避免與不誠信行為者以及違反企業社會責任政策的供應商進行交易。
            基於至上為產品代理商之角色，故每年針對主要供應商所公開之訊息進行更新管理。
          </p>
          <Table columns={columns2} data={data2} color="#3B79E4" />
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
