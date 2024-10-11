import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/風險管理.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Image } from "../../components/ui/Image";
import { Desc, H2, H3, List, P } from "../../components/ui/Text";
import { BgSection, Container, Section } from "../../components/ui/Container";
import { faBullseye, faPlay } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListTab, YearTabContainer } from "../../components/ui/Tab";
import BoardStructureImage from "../../assets/img/subPage/永續經營/board-structure.png";
import AnimatedList from "../../components/ui/List";
import { faCircleCheck } from "@fortawesome/pro-light-svg-icons";
import RiskManagementStructureImage from "../../assets/img/subPage/永續經營/risk-management-structure.png"
const RiskManagement: React.FC = () => {
    const AnimatedListItems1 = [
        {
          id: 1,
          content: "本公司風險管理之最高決策單位，負責公司整體風險之最終責任。董事會應依整體營運策略及經營環境，核定整體之風險管理政策，持續監督風險管理機制之有效運作，充分掌握風險狀況，並確保擁有適足之資本以因應所涉風險。",
          title: "董事會",
          titleColor: "#3B79E4",
        },
        {
          id: 2,
          content: "由財務、會計、資訊、倉儲中心、人力資源、管理部 - 風控中心、業務、管理部 - 股務及稽核室等部門共同組成，執行董事會核定之風險管理決策，並監督建立本公司風險管理機制之架構及質化與量化之管理標準。檢視依內部分層負責陳報之風險控管報告與處理風險管理相關議題，協調及促進跨組織之風險管控方案，決定及執行符合成本效益的風險控制方案，以提高風險管理透明度及改善風險控制作法。",
          title: "風險管控小組",
          titleColor: "#3B79E4",
        },
        {
          id: 3,
          content: "每年應執行風險控管作業，要求各部門出具自行評估報告，並據此擬訂稽核計劃，定期進行稽查並出具報告，適時提出改進建議予風險管理小組。",
          title: "稽核室",
          titleColor: "#3B79E4",
        },
        {
          id: 4,
          content: "因應內外部環境、法令調整進行風險管理制度之規劃與修正，各業務部門應明確辨識其所面臨之各項風險，並依規定執行必要之自評作業及風險管理作業，以利本公司將所涉風險控制於可承擔之範圍內。",
          title: "各業務部門",
          titleColor: "#3B79E4",
        },
        {
          id: 5,
          content: "強化資訊安全管理，透過日常演練、滲透測試、資安檢測、弱點掃瞄，並宣導同仁提高資安意識等手段，以達到確保本公司資訊合法存取；如遭受外力入侵或事故發生時，能做迅速必要之應變處置，在最短時間內回復系統正常運作，以降低該事故可能帶來之損害。",
          title: "資安管理部門",
          titleColor: "#3B79E4",
        },
    ]
    const AnimatedListItems2 = [
        {
          id: 1,
          content: "成立風險管控小組，由各部門推派人員共同組成，共 9 名成員，於每年年初及年中檢討各項風險 議題，投入部門人力監控及增加保險預算轉嫁風險。",
          icon: faCircleCheck,
          iconColor: "#3B79E4",
          iconSize: "30px",
        },
        {
          id: 2,
          content: "做好保險規劃控制損失，提升公司整體利益。",
          icon: faCircleCheck,
          iconColor: "#3B79E4",
          iconSize: "30px",
        },
        {
          id: 3,
          content: "由各部門針對風險議題實施預防管理計畫，授信部門實地查訪客戶，要求提供財務報表，再審慎評估客戶風險。",
          icon: faCircleCheck,
          iconColor: "#3B79E4",
          iconSize: "30px",
        },
        {
          id: 4,
          content: "建立風險事件及時應對作業流程，評估影響程度，並依規定公告揭露。",
          icon: faCircleCheck,
          iconColor: "#3B79E4",
          iconSize: "30px",
        },
    ]

  return (
    <div className="mb-48">
      <HeroSection
        title="風險管理"
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section className="mt-16">
          <P
            text={
              "成立風險管控小組，由各部門推派人員共同組成，共9名成員，於會計年度中每季結束後滾動式檢討各項風險議題，俾利控制與減緩風險。"
            }
          />
        </Section>
      </Container>

      <BgSection color="#ECF2FD" className="mt-md">
        <Container>
          <Section>
            <div className="relative z-10 py-24 grid grid-cols-3 items-center">
              <div className="border-t-[2px] border-blue h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                短期目標 ( 2026年 )
                </p>
                <List items={[
                    {text: "庫存管理：使用大數據預測分析，以減少庫存積壓或短缺之風險。"},
                    {text: "供應鏈風險評估：定期評估供應商 / 客戶之財務狀況、供應穩定性、應收帳款等情形。"},
                    {text: "財務風險管理：建立財務風險管控制度，以應對潛在的財務問題。"},
                ]} />


                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                中期目標 ( 2028年 )
                </p>
                
                <List items={[
                    {text: "市場多元化：降低單一市場及對單一供應商依賴之風險。"},
                    {text: "網路安全：加強網絡安全措施，避免資訊洩露風險。"},
                    {text: "全面風險管理：培養員工風險意識，將風險管理內化到日常業務流程。"},
                ]} />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <FontAwesomeIcon
                  icon={faPlay}
                  className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                長期目標(2030年)
                </p>

             
                <List items={[
                    {text: "環境風險管理：確保業務策略符合環境動態，減少錯誤判斷以致資源浪費。"},
                    {text: "國際法規風險 ： 了解各國法規，降低法律風險。"},
                    {text: "人才風險：提供持續的人才培訓，避免關鍵人才流失。"},
                ]} />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
            </div>
          </Section>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"管理方針"} />
          <P
            text={
              "本公司積極推動整合性風險管理體系，董事會作為最高決策單位，由永續發展委員會協助董事會監督風險管理機制運作及整體落實情形，帶領由各業務部門、稽核室、資安管理部門共同成立的風險管控小組，執行董事會核定之風險管理決策，監督建立風險管理架構及質化與量化之管理標準。董事會依據「道德行為準則」、「誠信經營守則」、「公司治理實務守則」及「永續發展」 等規範，並配合最新法令及時修正相關風險管理政策。"
            }
          />
        </Section>
        <Section>
          <H2 text={"風險管理組織架構"} />
            <Image src={RiskManagementStructureImage} alt="Risk Management Structure" className="mb-12" />
            <AnimatedList items={AnimatedListItems1}  />
        </Section>
        <Section>
          <H2 text={"實際執行成效"} />
            <AnimatedList items={AnimatedListItems2} />
        </Section>

     

      </Container>
    </div>
  );
};

export default RiskManagement;
