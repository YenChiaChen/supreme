import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import img02 from "../../assets/img/testing/product-customer-service-02.png";
import {
  faChartPie,
  faGavel,
  faHandsHelping,
  faTruck,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabContainerIcon from "../../components/ui/TabContainerIcon";
import TabContainer from "../../components/ui/TabContainer";
import SlideUpList from "../../components/ui/SlideUpList";



const Content: React.FC = () => (
  <>
    <p className="my-6 content">
      有鑑於終端消費者需求嗜好變化快速，在客戶需求端，除致力於產品線經營銷售外，並隨時評估外在環境消費趨勢變動對客戶所處產業之供需變化及客戶對產品需求狀況，嚴控備貨庫存水位，以減少資金積壓之機會成本；且積極掌握客戶營運、財務及經營層變化狀況，強化信用風險管理，防範可能倒帳風險，進而降低公司經營風險，穩定公司整體獲利。
      <br />
      <br />
      本公司對於客戶製造廠對關鍵零組件產品需求及問題提供技術服務支援，並協助尋求新產品應用之解決方案，縮減客戶進入產業之時間；另針對產品品質問題亦會協助與上游原廠供應商溝通協調，尋求解決方案，以滿足客戶之需求。
      <br />
      <br />
      另由於本公司屬於企業對企業(Business to Business,
      B2B)之商業模式，因此利害關係人中並未包含一般終端消費者。
    </p>
    <div className="border-t-[2px] border-b-[2px] border-light_gray mt-md flex flex-cols">
      <div className="grid grid-cols-[auto,1fr] w-full gap-x-24" >
        <div className="text-orange text-xl py-6">・優先關注議題</div>
        <div className="flex flex-wrap  gap-16 items-center content">
          <div>・產品與客戶服務</div>
          <div>・資訊安全</div>
          <div>・顧客隱私</div>
        </div>
        <div className="text-orange text-xl py-6">・溝通方式</div>
        <div className="flex flex-wrap  gap-16 items-center content">
          <div>・不定期與主要客戶業務檢討</div>
          <div>・由專人處理相關申訴或爭議事項，以保障客戶之權益</div>
        </div>
      </div>
    </div>
  </>
);
const icons = [
  <FontAwesomeIcon icon={faUserFriends} className="h-[50px]" />,
  <FontAwesomeIcon icon={faTruck} className="h-[50px]" />,
  <FontAwesomeIcon icon={faUsers} className="h-[50px]" />,
  <FontAwesomeIcon icon={faChartPie} className="h-[50px]" />,
  <FontAwesomeIcon icon={faGavel} className="h-[50px]" />,
  <FontAwesomeIcon icon={faHandsHelping} className="h-[50px]" />,
];
const goals = [
  "客戶",
  "供應商",
  "員工",
  "投資人",
  "政府與主管機關",
  "非營利組織",
];
const StakeholderEngagement: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "利害關係人專區" },
    { label: "利害關係人議合" },
  ];
  const items2022 = [
    { id: 1, title:"客戶", content: "・積極處理客戶提出之問題\n・選擇財務體質健全之客戶" },
    { id: 2, title:"供應商", content: "・選擇信譽卓越之供應商與供應商\n・溝通簽署「經營管理承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業" },
    { id: 3, title:"員工", content: "・內部推動員工福利及訓練\n・舉辦「客戶至上，誠信經營」座談會\n・舉辦「策略式銷售與談判成交技巧」、「國際貿易經營實務」、「區塊鏈與密碼貨幣」教育訓練課程" },
    { id: 4, title:"投資人 / 股東 /券商", content: "・主動揭露2021年度ESG永續報告書\n・主動揭露溫室氣體盤查並經第三方驗證\n・第九屆(2022年)公司治理評鑑得分為94.58，排名列為前6%~20%\n・召開兩場線上法說會，與法人分析師維持溝通良好關係" },
    { id: 5, title:"政府與主管機關", content: "・未有違反法令遭處份之情事" },
    { id: 6, title:"非營利組織 / 社區", content: "・辦理淨山、淨灘等公益活動\n・2022年度淨山環境保護活動總計清理32.70公斤垃圾\n・關懷股東，購買防疫包當公司股東會贈品" },
  ];
  const items2021 = [
    { id: 1, title:"客戶", content: "・選擇財務體質健全之客戶\n・積極處理客戶提出之問題\n" },
    { id: 2, title:"供應商", content: "・選擇信譽卓越之供應與供應商溝通\n・簽署企業社會責任承諾書" },
    { id: 3, title:"員工", content: "・具體實現對員工的協助與關懷\n・2021 年內部推動員工福利及訓練\n・舉辦「客戶至上，誠信經營」座談會\n・舉辦教育訓練課程" },
    { id: 4, title:"投資人 / 股東 /券商", content: "・中/ 英文重大訊息及即時公告\n・舉辦法人說明會\n・與投資人及法人分析師溝通良好\n・規劃進行ESG永續發展專案工作\n・成立風險管理組織運作" },
    { id: 5, title:"政府與主管機關", content: "・公司治理評鑑排行占整體上市公司前20%\n・未有違反法令遭處份之情事" },
    { id: 6, title:"非營利組織 / 社區", content: "・辦理淨山、淨灘等公益活動\n・辦理各項福利公益事業" },
  ];
  const items2023 = [
    { id: 1, title:"客戶", content: "・積極依客戶產品需求提供完整且即時的技術支援\n・積極協助處理客戶申訴或爭議事項\n・選擇財務體質健全之客戶" },
    { id: 2, title:"供應商", content: "・選擇信譽卓越之供應商\與供應商溝通簽署「人權、環境永續暨誠信經營承諾書」,確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業\n・業務實體討論會議34次" },
    { id: 3, title:"員工", content: "・教育訓練總時數3,530小時，人均時數17.83小時\n・職業災害事件：0\n・健康醫護諮詢：醫護3次/月(共計36次)；醫師3次/年(共計3次)\n・員工健檢人數：170人；健檢率:99%\n・新進員工入職進行新人導引訓練\n・視需求安排宣導座談會" },
    { id: 4, title:"投資人 / 股東 /券商", content: "・發布年度永續報告書\n・即時回覆股東來電諮詢\n・與法人分析師維持溝通良好關係\n・股東通報事件：0\n・召開2次自辦法說會\n・公告中/英文重大訊息各40則" },
    { id: 5, title:"政府與主管機關", content: "・違反法令遭處份事件：0\n・董事/經理人法令宣導：5 次" },
    { id: 6, title:"非營利組織 / 社區", content: "・辦理淨灘公益活動,總計共撿拾37.5 公斤海洋廢棄物。\n・志工參與捐血活動及至上自辦愛心捐血活動,共收集 495 袋\n・公司股東會贈品購買環保材質（小麥桿）製品\n・落實 SDGs 永續目標：指標 3-良好健康和福祉、指標 12-責任消費與生產、指標 14-保育海洋生態。" },
  ];
  const List2022: React.FC = () => (
    <>
     
     <div className="mt-md">
            <SlideUpList items={items2022} />
          </div>
    </>
  );
  const List2021: React.FC = () => (
    <>
     
     <div className="mt-md">
            <SlideUpList items={items2021} />
          </div>
    </>
  );
  const List2023: React.FC = () => (
    <>
     
     <div className="mt-md">
            <SlideUpList items={items2023} />
          </div>
    </>
  );

  const years = ["2023", "2022", "2021"];

  return (
    <div>
      <HeroBanner
        title="利害關係人議合"
        description={`本公司秉持「客戶至上、培育人才、追求卓越、分享利益」的經營理念，深切體認利害關係人的重要性，為追求永續經營與發展，期許對所有利害關係人建立透明、有效的溝通管道，秉持誠信原則即時處理及回應，並藉由瞭解利害關係人關切之議題，作為未來落實企業社會責任方向的參考依據。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">利害關係人鑑別與選擇</p>
          <p className="mt-md content">
            至上參考AA1000SES (Stakeholder Engagement Standards, SES)
            標準進行利害關係人鑑別，針對「依賴性、責任性、影響力、多元觀點、關注張力」五項評估構面篩選鑑別出本年度六大利害關係人群體，包括客戶、供應商、員工、投資人/股東/券商、政府與主管機關以及非營利組織與社區。
            <br />
            <br />
            為了解各利害關係人關注之永續議題，至上在公司網站設置利害關係人專區，以作為蒐集利害關係人之需求以及意見的溝通管道。
          </p>

          <div className="mt-24">
            <TabContainerIcon goals={goals} icons={icons}>
              <div data-goal="客戶">
                <Content />
              </div>
              <div data-goal="供應商">
                <Content />
              </div>
              <div data-goal="員工">
                <Content />
              </div>
              <div data-goal="投資人">
                <Content />
              </div>
              <div data-goal="政府與主管機關">
                <Content />
              </div>
              <div data-goal="非營利組織">
                <Content />
              </div>
            </TabContainerIcon>
          </div>


          <p className="mt-xl sub-title text-center">利害關係人年度溝通實績</p>
          <TabContainer goals={years}>
            <div data-goal="2023">
              <List2023 />
            </div>
            <div data-goal="2022">
              <List2022 />
            </div>
            <div data-goal="2021">
              <List2021 />
            </div>
          </TabContainer>


        </div>
      </div>
    </div>
  );
};

export default StakeholderEngagement;
