import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Supply from "../../assets/img/testing/supply1.png";
import Supply2 from "../../assets/img/testing/supply2.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollapsibleList from "../../components/ui/CollapsibleList ";

const SupplyChain: React.FC = () => {
  const stats = [
    { label: "提供人資部門專業相關之外部訓練", num: 44.5, suffix: "小時" },
    { label: "2022年平均調薪幅度", num: 5, suffix: "%" },
    { label: "提供職醫 / 職護臨場諮詢服務", num: 24, suffix: "次" },
  ];

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "供應鏈管理" },
  ];

  const items = [
    {
      title: "供應商 / 承攬商管理政策",
      content:
        "基於保護兒童身心發展、禁止強迫勞動及不歧視之社會責任，不雇用年齡未滿 16 歲之童工、不強迫勞動 及避免任何不當的聘雇歧視，並要求供應商同樣遵循國際標準及其營業據點之勞工聘僱應符合相關法律。2022 年，本公司及供應商皆無發生雇用童工、強迫勞動事件及任何不當的聘僱歧視之重大風險或情事。本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格 等符合規範外，亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。\n\n本公司訂定《供應商管理作業辦法》，要求所銷售產品必須符合品質、技術、環保和安全之相關法定標準， 並據以評估供應商，是否有無影響環境、社會或違反法令遵循之紀錄納入考量。 目前主要供應商為三星電子等知名國際大廠，其對上述標準皆有嚴格控管程序，\n\n本公司亦會持續就採購及服務流程制定相關管理辦法以確保客戶及消費者權益。",
    },
    {
      title: "供應商 / 承攬商管理機制",
      content:
        "基於保護兒童身心發展、禁止強迫勞動及不歧視之社會責任，不雇用年齡未滿 16 歲之童工、不強迫勞動 及避免任何不當的聘雇歧視，並要求供應商同樣遵循國際標準及其營業據點之勞工聘僱應符合相關法律。2022 年，本公司及供應商皆無發生雇用童工、強迫勞動事件及任何不當的聘僱歧視之重大風險或情事。本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格 等符合規範外，亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。\n\n本公司訂定《供應商管理作業辦法》，要求所銷售產品必須符合品質、技術、環保和安全之相關法定標準， 並據以評估供應商，是否有無影響環境、社會或違反法令遵循之紀錄納入考量。 目前主要供應商為三星電子等知名國際大廠，其對上述標準皆有嚴格控管程序，\n\n本公司亦會持續就採購及服務流程制定相關管理辦法以確保客戶及消費者權益。",
    },
    {
      title: "供應商遴選",
      content:
        "基於保護兒童身心發展、禁止強迫勞動及不歧視之社會責任，不雇用年齡未滿 16 歲之童工、不強迫勞動 及避免任何不當的聘雇歧視，並要求供應商同樣遵循國際標準及其營業據點之勞工聘僱應符合相關法律。2022 年，本公司及供應商皆無發生雇用童工、強迫勞動事件及任何不當的聘僱歧視之重大風險或情事。本公司視供應商為重要合作夥伴，持續規劃制定供應商管理政策，確保所銷售電子產品品質、交期與價格 等符合規範外，亦與供應商維持長期合作關係，落實勞工安全與衛生、環境保護、道德規範、重視人權等，共同遵循相關規範及促進經濟、社會及環境之平衡與永續發展。\n\n本公司訂定《供應商管理作業辦法》，要求所銷售產品必須符合品質、技術、環保和安全之相關法定標準， 並據以評估供應商，是否有無影響環境、社會或違反法令遵循之紀錄納入考量。 目前主要供應商為三星電子等知名國際大廠，其對上述標準皆有嚴格控管程序，\n\n本公司亦會持續就採購及服務流程制定相關管理辦法以確保客戶及消費者權益。",
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
