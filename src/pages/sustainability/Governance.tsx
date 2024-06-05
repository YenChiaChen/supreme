import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import CardGrid from "../../components/ui/CardGrid";
import TabListGoal from "../../components/ui/TabListGoal";
const Governance: React.FC = () => {
  const stats = [
    { label: "第九屆公司治理評鑑得分", num: 94.5, suffix: "分" },
    {
      label: "上市公司排名列入之級距",
      num: 6,
      suffix: "%",
      staticString: "6% ~ 20%",
    },
    {
      label: "2022年設置",
      num: 24,
      suffix: "次",
      staticString: "永續發展委員會",
    },
  ];

  const goals = {
    "2021": [
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
  };

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "總覽" },
  ];

  const cards = [
    {
      title: "短期目標",
      subtitle: "",
      span: 4,
      description: "落實各項永續發展項目之執行 與董事會之監督及參與。",
    },
    {
      title: "中期目標",
      subtitle: "",
      span: 4,
      description: "公司治理評鑑進入前５% 並獲得永續獎。",
    },
    {
      title: "長期目標",
      subtitle: "",
      span: 4,
      description:
        "董事會成員具員工身分之董事 占比降低至 25%；女性董事比例提升至 25%。",
    },
  ];

  return (
    <div>
      <HeroBanner
        title="永續經營"
        description={`本公司於從事企業經營同時，積極實踐永續發展，以符合平衡環境，社會及公司治理發展之國際趨勢，
        並透過企業公民擔當，提升國家經濟貢獻，改善員工、社區及社會之生活品質，促進以企業責任為本之競爭優勢。`}
        backgroundImage="https://picsum.photos/1920/1080/?blur"
      />
      <div className="bg-white rounded-t-[50px] w-full  -translate-y-[50px]">
        <div className="container mx-auto -translate-y-[50px] px-8">
          <StatDisplay stats={stats} />
        </div>

        <div className="container mx-auto px-[10%] mt-8">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="mt-xl sub-title text-center">公司治理</p>
          <p className="mt-md content">
            良好的公司治理是公司穩健營運發展的基礎，優秀的企業不該只以獲利情形定義，更需要能永續經營、落實公司治理原則及善盡企業責任。
            至上相信公司治理與環境、社會、人權呈正向關係，愈加優化的公司治理將能為市場提供更高品質的產品及服務，亦可提升股東權益，為公司帶來正面效益。
          </p>

          <p className="mt-xl sub-title text-center">至上承諾</p>
          <p className="mt-md content">
            承諾遵守「上市上櫃公司治理實務守則」，並設置公司治理主管負責推行公司治理業務，另亦有設置公司治理小組暨股務部協助辦理董事會、股東會等相關事宜，秉持道德行為準則與誠信經營原
            則，持續推動永續發展，提昇公司治理同時，積極實踐永續發展政策以符合
            ESG 之國際趨勢。
          </p>
          <CardGrid cards={cards} />
          <p className="mt-xl sub-title text-center">有效性預估值</p>
          <p className="mt-md content">
            推動誠信經營政策，宣導公司永續經營理念，舉辦誠信經營和防範內線交易講座、加強法令宣導，
            確實遵循法令規章，共創優良企業形象，並於 2022 年 11
            月經董事會決議通過，自願設置「永續發展委員會」，以因應公司治理及永續發展。
          </p>
          <TabListGoal goals={goals} />
          <p className="mt-xl sub-title text-center">我們相信的根基</p>
          <p className="mt-md content">
            强健的公司治理絕對是要打拼企業永續營運的基底，因此將公司治理之精神融入內部控制制度中，新進員工到職時，即對其進行講習及訓練，且輔導員工遵循內部控制制度，另已依相關規定訂定《公司治理實務守則》、《獨立董事之職責範疇規則》、《董事進修推行要點》、《具控制能力法人、股東行使權利及參與議決規範》
            等規範，並將相關規範揭露於網站及公開資訊觀測站中。
            <br /><br />
            公司官⽅網站亦設有公司治理專區，可供查詢治理政策及相關執⾏情形。
            為進一步優化公司治理，於 2019
            年委任陳力行會計協理擔任公司治理主管，並於 2023
            年增設公司治理小組暨股務部專責辦理功能性委員會、董事會、股東會之會議相關事宜、申報董事解就任作業、安排董事持續進修、提供董事執行業務所需參考資料、協助董事法令遵循及其他依公司章程所訂定之事項等。
            <br /><br />
            我們以成為優良永續企業為目標，致力於結合優良公司治理與經濟績效，積極配合主管機關於每年進行公司治理評鑑作業，向投資人展現公司治理實施成效。於第九屆
            ( 111 年度 ) 公司治理評鑑得分為 94.58 分，上市公司排名列入 6%~20%
            級距。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Governance;
