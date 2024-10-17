import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/董事會.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, List, P } from "../../components/ui/Text";
import { BgSection, Container, Section } from "../../components/ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YearTabContainer } from "../../components/ui/Tab";
import { boardPersonData } from "../../data/BoardPersonData";
import PersonInfoList from "./PersonInfoList";
import {
  faScaleBalanced,
  faChartLine,
  faCheckCircle,
  faChessKing,
  faExclamationTriangle,
  faGavel,
  faGlobe,
  faIndustry,
  faBriefcase,
} from "@fortawesome/pro-light-svg-icons";
import { Stat } from "../../components/ui/StatDisplay";
import { Table } from "../../components/ui";
const Board: React.FC = () => {
  const tableData = {
    headers: [
      { content: "姓名/條件" },
      { content: "專業資格與經驗" },
      { content: "獨立性情形" },
      { content: "兼任其他公開發行公司獨立董事家數" },
    ],
    rows: [
      [
        { content: "董事長 葛均" },
        {
          content: (
            <List
              items={[
                {
                  text: "董事長／董事會領導經驗。",
                },
                {
                  text: "具經營管理、領導、決策、營運判斷、危機處理、會計及財務分析、產業知識、法律知識及國際市場觀等專業經驗。",
                },
                {
                  text: "未有公司法第30條各款情事。",
                },
              ]}
              listType="disc"
            />
          ),
        },
        {
          content: (
            <List
              items={[
                {
                  text: "配偶、二親等以內親屬非為公司或其關係企業之董事、受僱人。",
                },
                {
                  text: "本人、配偶、二親等以內親屬非為公司或關係企業提供審計或最近二年取得報酬累計金額未逾新臺幣50萬元之商務、法務、財務、會計等相關服務或諮詢之專業人士、獨資、合夥、公司或機構之企業主、合夥人、董事（理事）、監察人（監事）、經理人及其配偶。",
                },
                {
                  text: "非與公司有財務或業務往來之特定公司或機構之董事（理事）、監察人（監事）、經理人或持股5%以上股東（但特定公司或機構如持有公司已發行股份總數20%上，未超過50%，且為公司與其母公司、子公司或屬同一母公司之子公司依本法或當地國法令設置之獨立董事相互兼任者，不在此限）。",
                },
                {
                  text: "本人、配偶、二親等以內親屬持有股數及比重請參閱本公司股東會年報「董事資料」章節。",
                },
              ]}
              listType="decimal"
            />
          ),
          rowSpan: 8,
        },
        { content: "0" },
      ],
      [
        { content: "董事 邢懷成", nowrap: true },
        {
          content: (
            <List
              items={[
                {
                  text: "董事會領導經驗。",
                },
                {
                  text: "具經營管理、領導、決策、營運判斷、危機處理、會計及財務分析、產業知識、法律知識及國際市場觀等專業經驗。",
                },
                {
                  text: "未有公司法第30條各款情事。",
                },
              ]}
              listType="disc"
            />
          ),
          rowSpan: 3,
        },
        { content: "0" },
      ],
      [{ content: "董事 謝錦宗" }, { content: "0" }],
      [{ content: "董事 胡正陽" }, { content: "0" }],
      [
        { content: "獨立董事 林佩蓉", nowrap: true },
        {
          content: (
            <List
              items={[
                {
                  text: "薪酬委員會／審計委員會／永續發展委員會／董事會領導經驗。",
                },
                {
                  text: "具經營管理、領導、決策、營運判斷、危機處理、會計及財務分析、產業知識、法律知識及國際市場觀等專業經驗。",
                },
                {
                  text: "未有公司法第30條各款情事。",
                },
              ]}
              listType="disc"
            />
          ),
          rowSpan: 4,
        },
        { content: "0" },
      ],
      [{ content: "獨立董事 楊耀松" }, { content: "0" }],
      [{ content: "獨立董事 王淮" }, { content: "2" }],
      [{ content: "獨立董事 黃國誠" }, { content: "0" }],
    ],
  };
  return (
    <div className="mb-48">
      <HeroSection
        title="董事會"
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"董事會運作"} />
        <P
          text={
            "董事會為至上最高治理單位，首要職責在於監督公司守法、資訊透明、即時揭露重要訊息及誠信經營。另於董事會下設置「審計委員會」、「薪資報酬委員會」，由全體獨立董事組成，本公司訂定之「公司章程」及「董事選任程序」皆已規範全體董事選舉採候選人提名制度。董事會首要職責在於監督，督促公司守法、資訊透明、即時揭露重要訊息及誠信經營，並透過各功能性委員會以及內控稽核系統協助董事會履行其監督職責，以確保公司永續發展及保障股東權益。"
          }
        />
        <P
          text={
            "董事會成員同時也應普遍具備執行職務所必須之知識、技能及素養，為達到公司治理之理想目標，其應具備之能力如下："
          }
        />
        <div className="grid grid-cols-5 gap-6 mt-12 text-blue justify-between">
          <div className=" bg-blue-light bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-full gap-6 aspect-[1/1] font-semibold tracking-wide w-full text-blue">
            <FontAwesomeIcon icon={faIndustry} className="h-[50px] text-blue" />
            產業知識
          </div>
          <div className=" bg-blue-light bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-full gap-6 aspect-[1/1]  font-semibold tracking-wide w-full text-blue">
            <FontAwesomeIcon
              icon={faChessKing}
              className="h-[50px] text-blue"
            />
            領導能力
          </div>
          <div className=" bg-blue-light bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-full gap-6 aspect-[1/1]  font-semibold tracking-wide w-full text-blue">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="h-[50px] text-blue"
            />
            經營管理能力
          </div>
          <div className=" bg-blue-light bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-full gap-6 aspect-[1/1]  font-semibold tracking-wide w-full text-blue">
            <FontAwesomeIcon icon={faGavel} className="h-[50px] text-blue" />
            法律知識
          </div>
          <div className=" bg-blue-light bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-full gap-6 aspect-[1/1]  font-semibold tracking-wide w-full text-blue">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="h-[50px] text-blue"
            />
            決策能力
          </div>
        </div>

    
        <Section>
          <H2 text={"董事會成員"} />
          <P
            text={
              "本屆董事會設置 8 席董事：4席一般董事、4席獨立董事："
            }
          />
          <PersonInfoList people={boardPersonData} />
        </Section>
      </Container>
      <BgSection color="#ECF2FD" className="mt-md">
        <Container>
          <div className="relative z-10 py-12 grid grid-cols-2 gap-36 items-center">
            <div>
              <p className="font-bold text-4xl tracking-wide text-blue">
                組織透明 落實多元
              </p>
              <p className="bg-blue h-[1px] w-full my-6"></p>
              <P text="至上董事會成員均具有產業專業背景及經營實務經驗，且分別擅長科技、財務會計、國際市場觀和法律等領域。應具備能力如下：" />
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
                <div className="px-4 py-2 bg-yellow-400 text-white shadow rounded tracking-wide">營運判斷能力</div>
                <div className="px-4 py-2 bg-green-400 text-white shadow rounded tracking-wide">危機處理能力</div>
                <div className="px-4 py-2 bg-pink-400 text-white shadow rounded tracking-wide">國際市場觀</div>
                <div className="px-4 py-2 bg-orange-400 text-white shadow rounded tracking-wide">會計及財務分析能力</div>
                <div className="px-4 py-2 bg-blue-400 text-white shadow rounded tracking-wide">產業知識</div>
                <div className="px-4 py-2 bg-green-400 text-white shadow rounded tracking-wide">領導能力</div>
                <div className="px-4 py-2 bg-red-400 text-white shadow rounded tracking-wide">經營管理能力</div>
                <div className="px-4 py-2 bg-cyan-400 text-white shadow rounded tracking-wide">法律知識</div>
                <div className="px-4 py-2 bg-purple-400 text-white shadow rounded tracking-wide">決策能力</div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-blue py-6">
                <p className="text-[16px]">具員工身份之董事占比為</p>
                <p className="text-2xl font-bold text-blue">
                  <Stat num={37.5} suffix={"%"} decimals={1} color="#3B79E4" />
                </p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-blue py-6">
                <p className="text-[16px]">獨立董事占比為</p>
                <p className="text-2xl font-bold text-blue">
                  <Stat num={50} suffix={"%"} decimals={0} color="#3B79E4" />
                </p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-blue py-6">
                <p className="text-[16px]">女性董事占比為</p>
                <p className="text-2xl font-bold text-blue">
                  <Stat num={12.5} suffix={"%"} decimals={1} color="#3B79E4" />
                </p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-blue py-6">
                <p className="text-[16px]">長期目標：將女性董事比率提升為</p>
                <p className="text-2xl font-bold text-blue">
                  <Stat num={25} suffix={"%"} decimals={0} color="#3B79E4" />
                </p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-blue py-6">
                <p className="text-[16px]">長期目標：具員工身份之董事占比降低至</p>
                <p className="text-2xl font-bold text-blue">
                  <Stat num={25} suffix={"%"} decimals={0} color="#3B79E4" />
                </p>
              </div>

              
            </div>
          </div>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"董事所具專業知識及獨立性之情形"} />
          <P
            text={
              "本公司董事長兼任總經理，係為營運效率及執行決策之貫徹，惟為提升公司治理及强化董事會之獨立性， 董事長除與各董事密切充分溝通，未來亦擬規劃增加獨立董事之席次，以提升董事會職能及强化監督功能。强化獨立性之措施包含：設置四席獨立董事有效發揮監督職能、設置功能性委員會以提出專業建議供董事會參考、 董事會成員中過半數董事未兼任員工或經理人、每年安排各董事參與外部專業機構課程以提升專業能力。"
            }
          />
          <Table data={tableData} color="#3B79E4" />
        </Section>

        <Section>
          <H2 text={"董事會成員進修情形"} />
          <P
            text={
              "為強化治理階層之職能與專業能力，以隨時了解法令規章修訂及公司管理業務要點，董事會成員每年持續參加《上市上櫃公司董事、監察人進修推行要點》所指定機構舉辦進修課程，課程內容涵蓋公司治理主題相關之財務、風險管理、業務、商務、會計、法律或企業永續等。同時公司治理主管也積極針對公司治理、財報審查、企業永續發展等内容持續進修。"
            }
          />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3B79E4">
            <div data-year="2023">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white rounded-tl-lg">
                        職稱
                      </th>
                      <th className="py-2 px-4 border border-white">姓名</th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white">
                        主辦單位
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修時數
                      </th>
                      <th className="py-2 px-4 border border-white rounded-tr-lg">
                        當年度完成進修總時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        董事長
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        葛均
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={20}
                      >
                        社團法人中華公司治理協會
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/12/05
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2024全球經濟展望與產業趨勢
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        副董事長
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        邢懷成
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/12/01
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        個資強力監管時代來臨
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        董事
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        胡正陽
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/11/14
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        新興洗錢模式及法規趨勢
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        董事
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        謝錦宗
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/11/17
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        公司治理主管合規工作實務
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={4}
                      >
                        獨立董事
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={4}
                      >
                        王淮
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={4}
                      >
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        內線交易案例與啟示暨從董事會高度看企業文化的塑造
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        1
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/11
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        從董事會高度看經理人接班繼任規劃
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        1
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/30
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        ChatGPT對產業的影響與因應
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        1
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={3}
                      >
                        獨立董事
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={3}
                      >
                        林佩蓉
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={3}
                      >
                        9
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/10/31
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        從經營權與股東行動主義觀點，由外資投票實務案例解析，國際思維之董監責任
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/12/12
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        第19屆(2023)公司治理國際高峰論壇─開創治理新局提升企業價值
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        獨立董事
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={2}
                      >
                        楊曜松
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={2}
                      >
                        6
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/11/10
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        美國公司治理：歷史演進與最新發展
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={3}
                      >
                        獨立董事
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre"
                        rowSpan={3}
                      >
                        黃國誠
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        集團稅務治理的觀念、實務與工具
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={3}
                      >
                        9
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/10/27
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        家族憲章與家族辦公室
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        3
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/12/12
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        第19屆(2023)公司治理國際高峰論壇─開創治理新局提升企業價值
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
                      <th className="py-2 px-4 border border-white rounded-tl-lg">
                        職稱
                      </th>
                      <th className="py-2 px-4 border border-white">姓名</th>
                      <th className="py-2 px-4 border border-white">
                        主辦單位
                      </th>
                      <th className="py-2 px-4 border border-white rounded-tr-lg">
                        課程名稱
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        董事長
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        葛均
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={8}
                      >
                        社團法人中華公司治理協會
                      </td>
                      <td
                        className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap"
                        rowSpan={8}
                      >
                        2022/08/11
                        <br />
                        非合意併購之攻防與公司負責人責任(3hr)
                        <br />
                        <br />
                        2022/11/08
                        <br />
                        企業成長策略與外部創新(3hr)
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        副董事長
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        邢懷成
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        董事
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        謝錦宗
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        董事
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        胡正陽
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        獨立董事
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        王淮
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        獨立董事
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        林佩蓉
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        獨立董事
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        楊曜松
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        獨立董事
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        黃國誠
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

export default Board;
