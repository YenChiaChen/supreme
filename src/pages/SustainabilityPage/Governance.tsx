import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/公司治理.jpg";
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
const Governance: React.FC = () => {
  const ListTabItems = {
    "2021": [
      {
        description:
          "整體董事會針對「對公司營運之參與程度、提升董事會決策品質、董事會組成與結構、董事選任及 持續進修、內部控制」五項内容進行董事會内部自評，平均達成率為",
        highlight: "95.4 %",
      },
      {
        description:
          "個別董事成員針對「公司目標與任務之掌握、董事職責認知、對公司營運之參與程度、內部關係經營與溝通、董事之專業及持續進修、內部控制」六項内容進行董事自評，平均達成率為",
        highlight: "95.63 %",
      },
    ],
    "2022": [
      {
        description:
          "整體董事會針對「對公司營運之參與程度、提升董事會決策品質、董事會組成與結構、董事選任及 持續進修、內部控制」五項内容進行董事會内部自評，平均達成率為",
        highlight: "93.81 %",
      },
      {
        description:
          "個別董事成員針對「公司目標與任務之掌握、董事職責認知、對公司營運之參與程度、內部關係經營與溝通、董事之專業及持續進修、內部控制」六項内容進行董事自評，平均達成率為",
        highlight: "95.46 %",
      },
      {
        description: "董事會議共計召開",
        highlight: "7 次",
      },
      {
        description: "全體董事平均親自出席率 ( 不含委託 ) 達",
        highlight: "100 %",
      },
      {
        description: "定期向董事會報告財務狀況、投資公司營運情形，共計",
        highlight: "4 次",
      },
    ],
    "2023": [
      {
        description:
          "整體董事會針對「對公司營運之參與程度、提升董事會決策品質、董事會組成與結構、董事選任及 持續進修、內部控制」五項内容進行董事會内部自評，平均達成率為",
        highlight: "97.27 %",
      },
      {
        description:
          "個別董事成員針對「公司目標與任務之掌握、董事職責認知、對公司營運之參與程度、內部關係經營與溝通、董事之專業及持續進修、內部控制」六項内容進行董事自評，平均達成率為",
        highlight: "98.02 %",
      },
      {
        description: "董事會議共計召開",
        highlight: "6 次",
      },
      {
        description: "全體董事平均親自出席率 ( 不含委託 ) 達",
        highlight: "97.92 %",
      },
      {
        description: "定期向董事會報告財務狀況、投資公司營運情形，共計",
        highlight: "4 次",
      },
      {
        description:
          "推動誠信經營政策，宣導公司永續經營理念，舉辦誠信經營暨公平交易、反貪腐及防範內線交易講座等",
        highlight: "2 場",
      },
      {
        description: "對董事、內部經理人進行內部人股權異動相關法令宣導",
        highlight: "12 次",
      },
      {
        description:
          "依據公司治理實務守則§10 規定,於召開董事會（決議財務報告）前通知董事【財報封閉期間】禁止買賣股票資訊",
        highlight: "4 次",
      },
    ],
  };

  const AnimatedListItems1 = [
    { id: 1, content: "・依法辦理董事會及股東會之會議相關事宜。" },
    { id: 2, content: "・製作董事會及股東會議事錄。" },
    { id: 3, content: "・協助董事就任及持續進修。" },
    { id: 4, content: "・提供董事執行業務所需之資料。" },
    { id: 5, content: "・協助董事遵循法令。" },
    { id: 6, content: "・其他依公司章程或契約所訂定之事項等。" },
  ];

  const AnimatedListItems2 = [
    {
      id: 1,
      content: "通知董事會成員有關公司經營領域以及公司治理最新法令規章修訂。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 2,
      content:
        "獨立董事依照公司治理實務守則，需與內部稽核主管或簽證會計師會面瞭解公司業務狀況時，協助安排相關會議。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 3,
      content: "依照公司產業特性及最新經濟情勢發展，安排董事參與年度進修課程。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 4,
      content:
        "向董事會、審計委員會及薪酬委員會報告本公司之公司治理運作狀況，股東會及董事會召開是否符合相關法律及公司治理守則規範。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 5,
      content:
        "董事會後負責重大訊息發布事宜，確保重訊內容之適法性及正確性，以保障投資人交易訊息對等。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 6,
      content:
        "擬訂董事會議程於七日前通知董事，召集會議並提供會議資料，議題如需利益迴避予以事前提醒，並於會後二十天內完成董事會議事錄。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
    {
      id: 7,
      content:
        "依法辦理股東會日期事前登記，法定期限內製作開會通知、議事手冊、議事錄並於修訂章程或董事改選辦理變更登記事務。",
      icon: faCircleCheck,
      iconColor: "#3B79E4",
      iconSize: "30px",
    },
  ];

  return (
    <div className="mb-48">
      <HeroSection
        title="公司治理"
        description={`良好的公司治理是公司穩健營運與永續發展的基礎，優秀的企業不僅以獲利為目標，更須著眼於永續經營、全面落實公司治理原則，並善盡企業社會責任。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"至上承諾"} />
          <P
            text={
              "承諾遵守「上市上櫃公司治理實務守則」，並設置公司治理主管負責推行公司治理業務，另亦有設置公司治理小組暨股務部協助辦理董事會、股東會等相關事宜，秉持道德行為準則與誠信經營原 則，持續推動永續發展，提昇公司治理同時，積極實踐永續發展政策以符合 ESG 之國際趨勢。"
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
                  短期目標
                </p>

                <Desc
                  text={"落實各項永續發展項目之執行與董事會之監督及參與。"}
                />

                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  中期目標
                </p>
                <Desc text={"公司治理評鑑進入前５% 並獲得永續獎。"} />
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
                  長期目標
                </p>

                <Desc
                  text={
                    "董事會成員具員工身分之董事占比降低至 25%；\n女性董事比例提升至 25%。"
                  }
                />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
            </div>
          </Section>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"有效性預估值"} />
          <P
            text={
              "推動誠信經營政策，宣導公司永續經營理念，舉辦誠信經營和防範內線交易講座、加強法令宣導， 確實遵循法令規章，共創優良企業形象，並於 2022 年 11 月經董事會決議通過，自願設置「永續發展委員會」，以因應公司治理及永續發展。"
            }
          />
          <ListTab goals={ListTabItems} color="#3B79E4" />
        </Section>

        <Section>
          <H2 text={"公司治理架構"} />
          <Image
            src={BoardStructureImage}
            alt="Company Governance Structure"
            maxWidth="800px"
          />
        </Section>

        <Section>
          <H2 text={"公司治理施行原則"} />
          <P
            text={
              "本公司透過總經理室專職推行公司治理相關業務，主要職責為提供董事執行業務所需之資料，與經營公司有關之最新法規發展，以協助董事遵循法令，並依法辦理董事會及股東會相關事宜。業經2019年8月13日董事會通過會計協理陳力行先生擔任公司治理主管，其具備公開發行公司股務主管工作經驗達三年以上，並依法令規定進行專業進修。"
            }
          />
          <H3 text={"公司治理主管主要職責如下："} className="text-blue" />
          <AnimatedList items={AnimatedListItems1} />

          <H3
            text={"本公司之公司治理單位2022年業務執行情況如下："}
            className="text-blue"
          />
          <AnimatedList items={AnimatedListItems2} />
        </Section>

        <Section>
          <H2 text={"公司治理主管進修情形"} />
          <YearTabContainer years={["2023", "2022", "2021"]} tabColor="#3B79E4">
            <div data-year="2023">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white ">
                        進修機構
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white ">
                        進修時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={4}
                      >
                        會計研究發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        主管機關審閱財務報告及重大訊息實務解析
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        2023/03/30
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        最新「營利事業所得稅」法令動態與企業因應策略
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        「洗錢防制」最新立法趨勢與法律責任案例解析
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        2023/03/31
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        「背信罪」實務案例與法律責任解析
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        證券暨期貨市場發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        112年度防範內線交易宣導會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/06/09
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣證券交易所
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        2023國泰永續金融暨氣候變遷高峰論壇
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/07/04
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        會計研究發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        2023轉型金融與永續揭露研討會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        2023/07/18
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        中華公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        金融監督管理委員會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        第十四屆臺北公司治理論壇
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/09/04
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣董事學會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        國際新秩序中的思維與韌性
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/10/02
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣金融研訓院
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        公司治理暨企業永續經營研習班
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/11/01
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div data-year="2022">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white ">
                        進修機構
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white ">
                        進修時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        會計研究發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        企業財報編製常見缺失與內稽內控法令遵循實務
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/03/10
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        證券交易所
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        國際雙峰會線上論壇
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/05/04
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        證券暨期貨市場發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        111年度防範內線交易宣導會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/06/10
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        財團法人台灣金融研訓院
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        公司治理暨永續經營學習班（第19期）
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/06/22
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        中華公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        非合併購併之攻防與公司負責人責任
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/08/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        證券交易所
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022年上市公司—獨立董事及審計委員會行使職權參考指引發布暨董監宣導會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/10/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        中華公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        第18屆(2022)公司治理高峰論壇—提升董事職能落實公司永續治理
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/10/19
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        財團法人台灣金融研訓院
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        公司治理暨企業永續經營研習班—企業永續經營及國內外稅務趨勢
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/10/25
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        中華公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        富邦產險ESG趨勢與風險管理研討會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/11/03
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        證券暨期貨市場發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        上市櫃公司—衍生性商品交易策略與市場展望研討會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2022/11/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div data-year="2021">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white ">
                        進修機構
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white ">
                        進修時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        社團法人中華公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        富邦產險董監事責任暨風險管理研討會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/04/15
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        財團法人中華民國會計研究發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        「公司治理 3.0- 永續發展藍圖」全盤解析
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/06/22
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        財團法人中華民國會計研究發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        主管機關審閱財務報告及重大訊息實務解析
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/06/23
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        社團法人中華民國公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        投資人都在想什麼 - 從ESG 投融資談企業永續轉型
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/08/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        金融監督管理委員會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        第十三屆台北公司治理論壇
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/09/01
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣數位治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        董監事責任暨風險管理研討會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/09/15
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        財團法人中華民國證券暨期貨市場發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021 年度內部人股權交易法律遵循宣導說明會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/10/20
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        財團法人中華民國證券暨期貨市場發展基金會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021 年度防範內線交易宣導會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/11/03
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        社團法人中華民國公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        全面啟動企業數位韌性 -從勒索病毒談事件緊急應變與回復
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/11/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        臺灣證券交易所
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        國泰永續金融暨氣候變遷高峰論壇
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/12/07
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        社團法人中華民國公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        第 17 屆公司治理高峰論壇 - 實 踐 ESG 落 實 治
                        理與永續發展
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2021/12/22
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default Governance;