import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import TabListGoal from "../../components/ui/TabListGoal";
import Bg from "../../assets/img/bg/subPage/永續經營/公司治理.jpg";
import Img01 from "../../assets/img/bg/bg01.png";
import Img02 from "../../assets/img/testing/board.png";
import {
  faCircleCheck,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import SlideUpList from "../../components/ui/SlideUpList";
import TabContainer from "../../components/ui/TabContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseyeArrow } from "@fortawesome/pro-solid-svg-icons";
const Governance: React.FC = () => {
 

  const goals = {
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

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "公司治理" },
  ];


  const items = [
    { id: 1, content: "・依法辦理董事會及股東會之會議相關事宜。" },
    { id: 2, content: "・製作董事會及股東會議事錄。" },
    { id: 3, content: "・協助董事就任及持續進修。" },
    { id: 4, content: "・提供董事執行業務所需之資料。" },
    { id: 5, content: "・協助董事遵循法令。" },
    { id: 6, content: "・其他依公司章程或契約所訂定之事項等。" },
  ];

  const items2 = [
    {
      id: 1,
      content: "通知董事會成員有關公司經營領域以及公司治理最新法令規章修訂。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 2,
      content:
        "獨立董事依照公司治理實務守則，需與內部稽核主管或簽證會計師會面瞭解公司業務狀況時，協助安排相關會議。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 3,
      content: "依照公司產業特性及最新經濟情勢發展，安排董事參與年度進修課程。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 4,
      content:
        "向董事會、審計委員會及薪酬委員會報告本公司之公司治理運作狀況，股東會及董事會召開是否符合相關法律及公司治理守則規範。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 5,
      content:
        "董事會後負責重大訊息發布事宜，確保重訊內容之適法性及正確性，以保障投資人交易訊息對等。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 6,
      content:
        "擬訂董事會議程於七日前通知董事，召集會議並提供會議資料，議題如需利益迴避予以事前提醒，並於會後二十天內完成董事會議事錄。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
    {
      id: 7,
      content:
        "依法辦理股東會日期事前登記，法定期限內製作開會通知、議事手冊、議事錄並於修訂章程或董事改選辦理變更登記事務。",
      icon: faCircleCheck,
      iconColor: "#FF8D50",
      iconSize: "30px",
    },
  ];

  const goals2 = ["2023", "2022", "2021"];

  return (
    <div>
      <HeroBanner
        title="公司治理"
        description={`良好的公司治理是公司穩健營運發展的基礎，優秀的企業不該只以獲利情形定義，更需要能永續經營、落實公司治理原則及善盡企業責任。 至上相信公司治理與環境、社會、人權呈正向關係，愈加優化的公司治理將能為市場提供更高品質的產品及服務，亦可提升股東權益，為公司帶來正面效益。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">至上承諾</p>
          <p className="mt-md content">
            承諾遵守「上市上櫃公司治理實務守則」，並設置公司治理主管負責推行公司治理業務，另亦有設置公司治理小組暨股務部協助辦理董事會、股東會等相關事宜，秉持道德行為準則與誠信經營原
            則，持續推動永續發展，提昇公司治理同時，積極實踐永續發展政策以符合
            ESG 之國際趨勢。
          </p>
        </div>
        <div className="container mx-auto relative mt-md px-[10%]">
          <div className="relative z-10 py-24 grid grid-cols-3 items-center">
            <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12">
              <FontAwesomeIcon
                icon={faBullseyeArrow}
                className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
              />
              <p className="text-2xl font-bold text-blue tracking-widest mt-12">
                短期目標
              </p>
              <ul className="mt-6 ml-6  list-disc">
                <li className="my-2">
                  落實各項永續發展項目之執行與董事會之監督及參與。
                </li>
              </ul>
            </div>
            <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12">
              <FontAwesomeIcon
                icon={faBullseyeArrow}
                className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
              />
              <p className="text-2xl font-bold text-blue tracking-widest mt-12">
                中期目標
              </p>
              <ul className="mt-6 ml-6  list-disc">
                <li className="my-2">公司治理評鑑進入前５% 並獲得永續獎。</li>
              </ul>
            </div>
            <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12">
              <FontAwesomeIcon
                icon={faBullseyeArrow}
                className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
              />
              <FontAwesomeIcon
                icon={faPlay}
                className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
              />
              <p className="text-2xl font-bold text-blue tracking-widest mt-12">
                長期目標
              </p>
              <ul className="mt-6 ml-6  list-disc">
                <li className="my-2">
                  董事會成員具員工身分之董事占比降低至 25%。
                </li>
                <li className="my-2">女性董事比例提升至 25%。</li>
              </ul>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-[110%] bg-light_blue rounded-r-[50px] -ml-[10%] z-0 min-h-full bg-opacity-40"></div>
        </div>
        <div className="container mx-auto px-[10%]">
          <p className="mt-xl sub-title text-center">各年度公司治理績效</p>
          <p className="mt-md content">
            推動誠信經營政策，宣導公司永續經營理念，舉辦誠信經營和防範內線交易講座、加強法令宣導，
            確實遵循法令規章，共創優良企業形象，並於 2022 年 11
            月經董事會決議通過，自願設置「永續發展委員會」，以因應公司治理及永續發展。
          </p>
          <TabListGoal goals={goals} color="#3B79E4" />
          <p className="mt-xl sub-title text-center">我們相信的根基</p>
          <div className="grid grid-cols-5 gap-20">
            <p className="mt-md content col-span-3">
              强健的公司治理絕對是要打拼企業永續營運的基底，因此將公司治理之精神融入內部控制制度中，新進員工到職時，即對其進行講習及訓練，且輔導員工遵循內部控制制度，另已依相關規定訂定《公司治理實務守則》、《獨立董事之職責範疇規則》、《董事進修推行要點》、《具控制能力法人、股東行使權利及參與議決規範》
              等規範，並將相關規範揭露於網站及公開資訊觀測站中。
              <br />
              <br />
              公司官⽅網站亦設有公司治理專區，可供查詢治理政策及相關執⾏情形。
              為進一步優化公司治理，於 2019
              年委任陳力行會計協理擔任公司治理主管，並於 2023
              年增設公司治理小組暨股務部專責辦理功能性委員會、董事會、股東會之會議相關事宜、申報董事解就任作業、安排董事持續進修、提供董事執行業務所需參考資料、協助董事法令遵循及其他依公司章程所訂定之事項等。
              <br />
              <br />
              我們以成為優良永續企業為目標，致力於結合優良公司治理與經濟績效，積極配合主管機關於每年進行公司治理評鑑作業，向投資人展現公司治理實施成效。於第九屆
              ( 111 年度 ) 公司治理評鑑得分為 94.58 分，上市公司排名列入 6%~20%
              級距。
            </p>
            <img src={Img01} className="col-span-2 mt-md h-[100%]" />
          </div>

          <p className="mt-xl sub-title text-center">公司治理架構</p>
          <div className="flex justify-center">
            <img src={Img02} className="w-[100%] max-w-[900px] mt-md" />
          </div>
          <p className="mt-xl sub-title text-center">公司治理施行原則</p>
          <p className="mt-md content">
            本公司透過總經理室專職推行公司治理相關業務，主要職責為提供董事執行業務所需之資料，與經營公司有關之最新法規發展，以協助董事遵循法令，並依法辦理董事會及股東會相關事宜。業經2019年8月13日董事會通過會計協理陳力行先生擔任公司治理主管，其具備公開發行公司股務主管工作經驗達三年以上，並依法令規定進行專業進修。
          </p>

          <p className="mt-xl side-title !text-blue">
            公司治理主管主要職責如下：
          </p>
          <div className="mt-md">
            <SlideUpList items={items} />
          </div>
          <p className="mt-xl side-title !text-blue">
            本公司之公司治理單位2022年業務執行情況如下：
          </p>
          <div className="mt-md">
            <SlideUpList items={items2} />
          </div>

          <p className="mt-xl sub-title text-center">公司治理主管進修情形</p>
          <TabContainer goals={goals2} tabColor="#3B79E4">
            <div data-goal="2023">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white rounded-tl-lg">
                        進修機構
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white rounded-tr-lg">
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
                        證券暨期貨市場發展基金會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        112年度防範內線交易宣導會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/06/09{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        3{" "}
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣證券交易所{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        2023國泰永續金融暨氣候變遷高峰論壇{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/07/04{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        6{" "}
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        會計研究發展基金會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        2023轉型金融與永續揭露研討會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        2023/07/18{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        3{" "}
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        中華公司治理協會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        集團稅務治理的觀念、實務與工具{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/08/08{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        3{" "}
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        金融監督管理委員會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        第十四屆臺北公司治理論壇{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/09/04{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        6{" "}
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣董事學會{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        國際新秩序中的思維與韌性{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/10/02{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        3{" "}
                      </td>
                    </tr>
                    <tr className="content bg-white">
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        台灣金融研訓院{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        公司治理暨企業永續經營研習班{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        2023/11/01{" "}
                      </td>
                      <td className="py-2 px-4 border-b border-light_gray whitespace-pre-wrap">
                        {" "}
                        3{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div data-goal="2022">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white rounded-tl-lg">
                        進修機構
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white rounded-tr-lg">
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
            <div data-goal="2021">
              <div className="overflow-x-auto mt-md">
                <table className="min-w-full border-collapse">
                  <thead className="bg-blue text-white content">
                    <tr>
                      <th className="py-2 px-4 border border-white rounded-tl-lg">
                        進修機構
                      </th>
                      <th className="py-2 px-4 border border-white">
                        課程名稱
                      </th>
                      <th className="py-2 px-4 border border-white">
                        進修日期
                      </th>
                      <th className="py-2 px-4 border border-white rounded-tr-lg">
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
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default Governance;
