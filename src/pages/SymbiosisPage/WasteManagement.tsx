import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續共生/廢棄物.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Desc, H2, H3, P } from "../../components/ui/Text";
import {
  IconTabContainer,
  Image,
  Table,
  YearTabContainer,
} from "../../components/ui";
import { BgSection, Container, Section } from "../../components/ui/Container";
import FlowChartImage from "../../assets/img/subPage/永續共生/waste-management-flowchart.png";
import WasteImage from "../../assets/img/subPage/永續共生/waste-management-2022.png";
import { faBullseye, faPlay } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMemoCircleCheck,
  faPalletBoxes,
  faBinBottlesRecycle,
  faBoxHeart,
} from "@fortawesome/pro-light-svg-icons";
const WasteManagement: React.FC = () => {
  const icons = [
    <FontAwesomeIcon icon={faMemoCircleCheck} className="h-[50px]" />,
    <FontAwesomeIcon icon={faPalletBoxes} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBinBottlesRecycle} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBoxHeart} className="h-[50px]" />,
  ];
  const tableData = {
    headers: [
      { content: "廢棄物總類" },
      { content: "單位" },
      { content: "2022年" },
      { content: "2023年" },
    ],
    rows: [
      [
        { content: "一般廢棄物（Ｈ類）" },
        { content: "公噸 t", rowSpan: 6 },
        { content: 0.812 },
        { content: "1.345 (註4)" },
      ],
      [
        { content: "公告應回收或再利用廢棄物（Ｒ類）" },
        { content: 2.7 },
        { content: "0.412 (註3)" },
      ],
      [
        { content: "混合五金廢料（Ｅ類）" },
        { content: "-" },
        { content: "0.056 (註2)" },
      ],
      [{ content: "廢棄物總重" }, { content: 3.512 }, { content: 1.813 }],
      [
        { content: "廢棄物的處置移轉" },
        { content: 2.7 },
        { content: "0.412 (註3)" },
      ],
      [
        { content: "廢棄物的直接處置" },
        { content: 0.812 },
        { content: "1.401 (註4)" },
      ],
      [
        { content: "廢棄物回收利用百分比" },
        { content: "百分比%" },
        { content: "76.88%" },
        { content: "22.72%" },
      ],
    ],
  }; const tableData2 = {
    headers: [
      { content: "專案名稱" },
      { content: "專案簡介" },
      { content: "減少資源浪費" },
      { content: "2023年度績效" },
    ],
    rows: [
      [
        { content: "e 化簽核流程" , nowrap:true},
        { content: "因應廢棄物減量政策，並減少管理成本，將紙本簽核全面改為電子簽核。" },
        { content: "銷售收款循環及採購付款循環作業單據e化簽核，減少紙張用量及減少管理成本。" },
        { content: "全集團共完成154,332次電子簽核，等於減少用紙量約462,996張A4 紙，約減少砍伐55.56棵樹。" },
      ],
      [
        { content: "外部憑證電子化" , nowrap:true},
        { content: "證電子化整合內部和外部之作業，將會計憑證改為電子化。" },
        { content: "發票及進出口報單等外部憑證逐年電子化，減少紙張用量及管理成本，並以全公司無紙作業為最終目標。" },
        { content: "電子發票(協力廠商)及進出口報單共減少用紙量約11,530張A4紙，約減少砍伐1.38棵樹。" },
      ],
      [
        { content: "棧板及包材減量" , nowrap:true},
        { content: "棧板使用不易耗損之材質及回收再出貨利用。• 包裝材料使用減量及再利用" },
        { content: "使用不易耗損之鐵塑棧板，木製棧板也持續回收再出貨利用。產品出貨到客戶端時，盡量以原廠包裝出貨，無再額外多增加包裝材料使用，以減少包裝耗材之採購量。" },
        { content: "棧板( 鐵塑及木質) 回收出貨再利用達6.175 公噸，較上年度增加4.535公噸。" },
      ],
    ],
  };

  return (
    <div className="mb-48">
      <HeroSection
        title="廢棄物管理"
        description={`本公司以追求能源與資源最佳使用效率作為努力目標，因此，持續執行節電措施及提高能源效率，同時思 考未來如何增加綠色能源的比例。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"廢棄物管理"} />
          <P
            text={
              "本公司主要從事半導體相關零組件代理經銷業務，未有生產製造的營運活動，各營運據點均為辦公大樓， 因此在營運過程中產生之廢棄物，多為員工在辦公室工作時產生之事務類廢棄物與生活廢棄物，是由辦公大樓 管委會設置垃圾分類集中區域統一處理；內湖總部倉儲中心不定期產生棧板、包材、電子零件等相關之廢棄物， 此類廢棄物屬於可回收廢棄物，係委託合法之廢棄物清運商，將此類物品予以回收處理。"
            }
          />
          <H3 text={" 價值鏈廢棄物流向圖："} className="text-green" />
          <Image src={FlowChartImage} alt="Waste Flow Chart" />
        </Section>

        <Section>
          <H2 text={"廢棄物管理"} />
          <P
            text={
              "本公司於 2021 年因應永續議題後,同仁對於永續有更深層認知,將「永續環境」概念落實於日常作業中;2023 年底更進一步將事業廢棄物進行更細部的分類,將組織中的廢棄物依照環境部廢棄物的分類加以區分後,由權責單位自訂週期以實秤方式取得廢棄物重量,並委外交由合規之清運公司處置;藉著上下游各盡其責,共同提升廢棄物回收的成果及效益,為了落實隨手做環保理念,於 2023 年第四季由物流倉庫將事業廢棄物的包材進行分類,並將積極有效控管存貨去化,減少 電子零件報廢品,以減少混合五金廢料,針對有害廢棄物 E-0217 所委託的甲級清運廠商,建立回報機制或監督機制,確保 廠商安全合法的執行廢棄物處理。"
            }
          />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3BC376">
            <div data-year="2023">
              <Table
                data={tableData}
                color="#3BC376"
                unit=""
                isCenter={true}
                notes={[
                  {
                    text: "統計範圍包含台北總公司。",
                  },
                  {
                    text: "本公司有害廢棄物係由上游供應鏈在生產過程中產出，含微量有害廢棄物0.056公噸。",
                  },
                  {
                    text: "公告應回收或再利用廢棄物（R類）之產生及處置移轉總重量較上期減少，係因2022年度以公司內部預估值（含外包裝實秤）作為統計揭露，為考量數據準確性，於2023年度改以清運公司實際處理重量統計揭露。",
                  },
                  {
                    text: "一般廢棄物（H類）之產生及直接處置總重量較上期增加，係因2023年度整體營運成長及員工人數增加，相對生活垃圾增加所致。",
                  },
                  {
                    text: "廢棄物的直接處置為權責單位自訂週期，並分別統計數量後，交由大樓管委會委託之清運公司離場處理。",
                  },
                  {
                    text: "廢棄物回收利用百分比＝生產產生的廢棄物中被回收的廢棄物重量 / 生產過程產生的廢棄物總重量，小數點以後取兩位。",
                  },
                ]}
              />
            </div>
            <div data-year="2022">
              <Image src={WasteImage} alt="Waste 2022" />
            </div>
          </YearTabContainer>
        </Section>
      </Container>

      <H2 text={"廢棄物報廢流程"} />
      <BgSection color="#F0FBF4" className="mt-md">
        <Container>
          <Section>
            <div className="relative z-10 py-24 grid grid-cols-4 items-center">
              <div className="border-t-[2px] border-green h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                />
                <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  步驟一
                </p>

                <Desc
                  text={
                    "當年度報廢之電子零件，待會計師盤點報廢數量，確認後，委託甲級廢棄物處理證照之廠商做清運並提供清冊。"
                  }
                />

                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
              </div>
              <div className="border-t-[2px] border-green h-full flex  flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                />
                <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  步驟二
                </p>
                <Desc text={"包材與電子零件進行分類(作業一)。"} />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
              </div>
              <div className="border-t-[2px] border-green h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                />
                <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  步驟三
                </p>

                <Desc
                  text={"料盤、載具與電子零件本體等做第二階段分類(作業二)。"}
                />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
              </div>
              <div className="border-t-[2px] border-green h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                />
                <FontAwesomeIcon
                  icon={faPlay}
                  className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-green h-[30px]"
                />
                <p className="text-2xl font-bold text-green tracking-widest mt-12 mb-5">
                  步驟四
                </p>

                <Desc text={"取出可回收廢棄物"} />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-green"></div>
              </div>
            </div>
          </Section>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"廢棄物減量"} />
          <P
            text={
              "為減少廢棄物之產生，除宣導減少資源浪費，亦積極做好垃圾分類，物流作業所需包裝材料，例如紙箱、 填充物及泡棉等，均回收再利用於出貨包裝，落實資源回收再利用政策，對於回收之廢棄物均採集中式管理， 定期記錄廢棄物數量與清運數據，並委託合格之廢棄物回收廠商進行處置。"
            }
          />
          <IconTabContainer
            years={[
              "辦公室無紙化",
              "運輸棧板重複利用",
              "落實垃圾分類",
              "產品不過度包裝",
            ]}
            icons={icons}
            tabColor="#3BC376"
          >
            <div data-year="辦公室無紙化">
              <P
                text={
                  "本公司為減少資源浪費，辦公室紙張採購選用森林驗證認可計畫標章(PEFC )的產品，並於辦公室內採用廢紙重複利用及雙面列印。廢棄紙張則統一委由合規環保公司處理，透過水銷方式再製成紙製品，達到循環經濟的目標，同時減少空氣污染和碳排放，水銷廢棄紙張共計15箱。同時推動文件表單審核流程電子化及實施電子發票開立服務功能，以減少紙張使用，2023年全集團共完成154,332次電子簽核，加計電子發票及進出口報單，總共減少用紙量約474,526張A4紙，約減少砍伐56.94棵樹，較前一年（2022年）減少用紙量約196,471張A4紙，未來持續推動少紙化。"
                }
              />
            </div>
            <div data-year="運輸棧板重複利用">
              <P
                text={
                  "倉儲中心原使用木棧板，為減少廢棄棧板數量，於2017年改購置鐵塑棧板使廢棄棧板量大幅減少，截至2023年無再採購存儲作業所需棧板，往年進貨所乘載貨物的木製棧板也持續回收再出貨利用。"
                }
              />
            </div>
            <div data-year="落實垃圾分類">
              <P
                text={
                  "推行辦公室資源回收再利用，加強同仁資源回收觀念，宣導愛惜各項資源，保護環境從細節生活做起，並在公司內部設置小型資源回收站，期望用簡便和統一處理的方式，提升環保意願和提高廢棄物回收率。"
                }
              />
            </div>
            <div data-year="產品不過度包裝">
              <P
                text={
                  "公司將產品出貨到客戶端時，盡量以原廠包裝出貨，勿再額外多增加包裝材料使用，包括紙箱、防震材及零件盒等。"
                }
              />
            </div>
          </IconTabContainer>
        </Section>

        <Section>
          <H2 text={"廢棄物減量專案"} />
                <Table data={tableData2} color="#3BC376" />
        </Section>
      </Container>
    </div>
  );
};

export default WasteManagement;
