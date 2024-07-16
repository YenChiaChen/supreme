import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Supply from "../../assets/img/testing/supply1.png";
import Supply2 from "../../assets/img/testing/supply2.png";
import CollapsibleList from "../../components/ui/CollapsibleList ";

const SupplyChain: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "供應鏈管理" },
  ];

  const items = [
    {
      title: <p>供應商 / 承攬商管理政策</p>,
      children: (
        <p>
          本公司視供應商為重要合作夥伴,持續規劃制定供應商管理政策,確保所銷售電子產品品質、交期與價格等符合規範
          外,亦與供應商維持長期合作關係,落實勞工安全與衛生、環境保護、道德規範、重視人權等,共同遵循相關規範及促進經
          濟、社會及環境之平衡與永續發展。
          <br />
          <br />
          本公司主要供應商位於韓國、台灣、中國、越南、菲律賓等據點,為確保供應商夥伴擁有相同的永續發展理念,邀請供
          應商簽署「人權、環境永續暨誠信經營承諾書」。2023
          年並無具有強迫或強制勞動事件重大風險的營運據點和供應商。
          <br />
          <br />
          基於保護兒童身心發展、禁止強迫勞動及不歧視之人權政策,本公司不雇用年齡未滿
          16 歲之童工、不強迫勞動及避免
          任何不當的聘雇歧視,並要求供應商同樣遵循國際標準及其營業據點之勞工聘僱應符合相關法律。2023
          年,本公司及供應
          商皆無發生歧視、使用童工、強迫勞動、歧視或其他違反勞工人權之重大風險或情事。
        </p>
      ),
    },
    {
      title: <p>供應商 / 承攬商管理機制</p>,
      children: (
        <p>
          本公司對供應商管理係透過「供應商遴選」及「供應商永續管理」兩個面向,以促進上下游共同展開永續價值鏈發展。
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
      ),
    },
    {
      title: <p>供應商遴選</p>,
      children: (
        <p>
          本公司與各供應商之間依約交易，持續維繫良好的長期夥伴關係，並依據供應商管理作業進行評鑑；新供應商之遴選，除應慎選信譽良好之廠商外，尚應考量其產品品質、財務狀況、價格、供貨數量、環保議題、勞工安全與衛生等各面向進行評核，待通過評鑑符合本公司要求條件者，始成為合格供應商。亦邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，與供應商夥伴共同在永續發展的道路上努力。針對供應商管理實施情形揭露於本公司官網。
        </p>
      ),
    },
    {
      title: <p>供應商新增及異動</p>,
      children: (
        <p>
          於新增供應商時，應由業務部填寫「供應商基本資料表」，經權責主管核准後，再由業務後勤部至系統建立供應商基本資料；資料有異動時，及時更新供應商資料。
        </p>
      ),
    },
    {
      title: <p>重要採購</p>,
      children: (
        <p>
          本公司係與選定之供應商進行長期合作，與其簽訂代理業務合約以保障自身之代理權。與之簽訂之合約或協議，均須符合內稽內控之流程，經權責主管及法務人員覆核後始簽訂，並由風險管理部妥善保管合約或交易協議。
        </p>
      ),
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
          <CollapsibleList items={items} />
          <p className="mt-xl sub-title text-center">供應商鑑別</p>
          <p className="mt-md content">
            本公司定期評量供應商提供的產品品質及其法令遵守情形，同時審查其是否有不誠信的經營行為與對環境
            和社會的負面記錄，以避免與不誠信行為者以及違反企業社會責任政策的供應商進行交易。
            基於至上為產品代理商之角色，故每年針對主要供應商所公開之訊息進行更新管理。
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
