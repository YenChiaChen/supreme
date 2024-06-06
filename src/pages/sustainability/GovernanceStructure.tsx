import HeroBanner from "../../components/ui/HeroBanner";
import StatDisplay from "../../components/ui/StatDisplay";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Board from "../../assets/img/testing/board.png";
import SlideUpList from "../../components/ui/SlideUpList";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import TabContainer from "../../components/ui/TabContainer";
import TrainingTable from "../../components/ui/TrainingTable";

const data = [
  {
    name: "陳力行",
    trainings: [
      {
        organization: "財團法人中華民國會計研究發展基金會",
        course: "企業財報編制常見缺失與內稽內控法令遵循實務",
        startTime: "2022/03/10",
        endTime: "2022/03/10",
        hours: "6",
      },
      {
        organization: "財團法人中華民國會計研究發展基金會",
        course: "企業財報編制常見缺失與內稽內控法令遵循實務",
        startTime: "2022/03/10",
        endTime: "2022/03/10",
        hours: "6",
      },
      {
        organization: "財團法人中華民國會計研究發展基金會",
        course: "企業財報編制常見缺失與內稽內控法令遵循實務",
        startTime: "2022/03/10",
        endTime: "2022/03/10",
        hours: "6",
      },
    ],
  },
  {
    name: "陳力行",
    trainings: [
      {
        organization: "財團法人中華民國會計研究發展基金會",
        course: "企業財報編制常見缺失與內稽內控法令遵循實務",
        startTime: "2022/03/10",
        endTime: "2022/03/10",
        hours: "6",
      },
      {
        organization: "財團法人中華民國會計研究發展基金會",
        course: "企業財報編制常見缺失與內稽內控法令遵循實務",
        startTime: "2022/03/10",
        endTime: "2022/03/10",
        hours: "6",
      },
      {
        organization: "財團法人中華民國會計研究發展基金會",
        course: "企業財報編制常見缺失與內稽內控法令遵循實務",
        startTime: "2022/03/10",
        endTime: "2022/03/10",
        hours: "6",
      },
    ],
  },
];

const GovernanceStructure: React.FC = () => {
  const ShortTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );

  const MidTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">
        <TrainingTable data={data} />
      </p>
    </>
  );

  const LongTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );

  const goals = ["2023", "2022", "2021"];

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

  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "公司治理架構" },
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
      iconColor: '#FF8D50',
      iconSize: '30px',
    },
    {
      id: 2,
      content:
        "獨立董事依照公司治理實務守則，需與內部稽核主管或簽證會計師會面瞭解公司業務狀況時，協助安排相關會議。",
      icon: faCircleCheck,
      iconColor: '#FF8D50',
      iconSize: '30px',
    },
    {
      id: 3,
      content: "依照公司產業特性及最新經濟情勢發展，安排董事參與年度進修課程。",
      icon: faCircleCheck,
      iconColor: '#FF8D50',
      iconSize: '30px',
    },
    {
      id: 4,
      content:
        "向董事會、審計委員會及薪酬委員會報告本公司之公司治理運作狀況，股東會及董事會召開是否符合相關法律及公司治理守則規範。",
      icon: faCircleCheck,
      iconColor: '#FF8D50',
      iconSize: '30px',
    },
    {
      id: 5,
      content:
        "董事會後負責重大訊息發布事宜，確保重訊內容之適法性及正確性，以保障投資人交易訊息對等。",
      icon: faCircleCheck,
      iconColor: '#FF8D50',
      iconSize: '30px',
    },
    {
      id: 6,
      content:
        "擬訂董事會議程於七日前通知董事，召集會議並提供會議資料，議題如需利益迴避予以事前提醒，並於會後二十天內完成董事會議事錄。",
      icon: faCircleCheck,
      iconColor: '#FF8D50',
      iconSize: '30px',
    },
    {
      id: 7,
      content:
        "依法辦理股東會日期事前登記，法定期限內製作開會通知、議事手冊、議事錄並於修訂章程或董事改選辦理變更登記事務。",
      icon: faCircleCheck,
      iconColor: '#FF8D50',
      iconSize: '30px',
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
          <p className="mt-xl sub-title text-center">公司治理架構</p>
          <p className="mt-md content">
            本公司依據中華民國公司法、證券交易法以及其他相關法令，建置公司治理架構與執行實務，藉以提升資訊透明度、強化董事會職能、尊重利害關係人及保障股東權益，並秉持企業誠信經營原則，期望能透過有效的公司治理運作，來提昇公司經營績效與實踐企業永續經營責任。
          </p>
          <img
            src={Board}
            alt="company structure"
            className="mx-auto max-w-[800px] mt-md"
          />
          <p className="mt-xl sub-title text-center">公司治理施行原則</p>
          <p className="mt-md content">
            本公司透過總經理室專職推行公司治理相關業務，主要職責為提供董事執行業務所需之資料，與經營公司有關之最新法規發展，以協助董事遵循法令，並依法辦理董事會及股東會相關事宜。業經2019年8月13日董事會通過會計協理陳力行先生擔任公司治理主管，其具備公開發行公司股務主管工作經驗達三年以上，並依法令規定進行專業進修。
          </p>

          <p className="mt-xl side-title">公司治理主管主要職責如下：</p>
          <div className="mt-md">
            <SlideUpList items={items} />
          </div>
          <p className="mt-xl side-title">
            本公司之公司治理單位2022年業務執行情況如下：
          </p>
          <div className="mt-md">
            <SlideUpList items={items2} />
          </div>

          <p className="mt-xl sub-title text-center">公司治理主管進修情形</p>
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <ShortTermGoals />
            </div>
            <div data-goal="2022">
              <MidTermGoals />
            </div>
            <div data-goal="2021">
              <LongTermGoals />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default GovernanceStructure;
