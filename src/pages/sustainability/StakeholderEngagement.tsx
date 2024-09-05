import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/永續經營/利害關係人議合.jpg";
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

import { Table2, P, List, H2, Section } from "../../components/ui";

const icons = [
  <FontAwesomeIcon icon={faUserFriends} className="h-[50px]" />,
  <FontAwesomeIcon icon={faTruck} className="h-[50px]" />,
  <FontAwesomeIcon icon={faUsers} className="h-[50px]" />,
  <FontAwesomeIcon icon={faChartPie} className="h-[50px]" />,
  <FontAwesomeIcon icon={faGavel} className="h-[50px]" />,
  <FontAwesomeIcon icon={faHandsHelping} className="h-[50px]" />,
];

const iconsCommunicate = [
  <FontAwesomeIcon icon={faChartPie} className="h-[50px]" />,
  <FontAwesomeIcon icon={faUsers} className="h-[50px]" />,
  <FontAwesomeIcon icon={faUsers} className="h-[50px]" />,
  <FontAwesomeIcon icon={faUserFriends} className="h-[50px]" />,
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

  const tableData = {
    headers: [
      { content: "類別" },
      { content: "窗口" },
      { content: "聯絡方式" },
    ],
    rows: [
      [
        { content: "發言人", rowSpan: 2 },
        { content: "張家偉" },
        { content: "電話：(02)2657-8809" },
      ],
      [{ content: "資深業務副總" }, { content: "郵件：wayne@supreme.com.tw" }],
      [
        { content: "代理發言人", rowSpan: 2 },
        { content: "羅育宗" },
        { content: "電話：(02)2657-8809" },
      ],
      [{ content: "財務協理" }, { content: "郵件：michael@supreme.com.tw" }],
      [
        { content: "股務代理機構", rowSpan: 3 },
        { content: "群益金鼎證券(股)公司", rowSpan: 3 },
        { content: "地址：台北市大安區敦化南路二段97號地下2樓" },
      ],
      [{ content: "電話：(02)2702-3999" }],
      [{ content: "郵件：wayne@supreme.com.tw" }],
      [
        { content: "公司股務", rowSpan: 2 },
        { content: "邱莉絜" },
        { content: "電話：(02)2657-8809" },
      ],
      [{ content: "副理" }, { content: "郵件：devinachiu@supreme.com.tw" }],
    ],
  };

  return (
    <div>
      <HeroBanner
        title="利害關係人議合"
        description={``}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
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
            本公司秉持「客戶至上、培育人才、追求卓越、分享利益」的經營理念，深切體認利害關係人的重要性，為追求永續經營與發展，期許對所有利害關係人建立透明、有效的溝通管道，秉持誠信原則即時處理及回應，並藉由瞭解利害關係人關切之議題，作為未來落實企業社會責任方向的參考依據。
          </p>

          <div className="mt-24">
            <TabContainer goals={["2023"]} tabColor="#3B79E4">
              <div data-goal="2023">
                <TabContainerIcon
                  goals={goals}
                  icons={icons}
                  tabColor="#3B79E4"
                >
                  <div data-goal="客戶">
                    <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                      <div className="border-r border-blue pr-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue">
                          溝通方式
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>電話、電子郵件</li>
                          <li>檢討會議</li>
                          <li>
                            設置業務後勤單位，由專人處理相關申訴或爭議事項，以保障客戶之權益
                          </li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          頻率
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>即時</li>
                          <li>每週</li>
                        </ul>
                      </div>
                      <div className="ml-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue ">
                          關注議題
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>產品品質</li>
                          <li>價格/交期</li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          2023年利害關係人溝通實績
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>
                            積極依客戶產品發展需求提供完整且即時的技術支援
                          </li>
                          <li>積極協助處理客戶申訴或爭議事項</li>
                          <li>選擇財務體質健全之客戶</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-goal="政府與主管機關">
                    <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                      <div className="border-r border-blue pr-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue">
                          溝通方式
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>公司網站</li>
                          <li>公開資訊觀測站</li>
                          <li>股東會年報</li>
                          <li>永續報告書</li>
                          <li>參與主管機關宣導會議</li>
                        </ul>
                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          頻率
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>即時</li>
                          <li>不定期</li>
                          <li>每年一次</li>
                        </ul>
                      </div>
                      <div className="ml-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue ">
                          關注議題
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>報導具可靠性</li>
                          <li>及時性</li>
                          <li>透明性</li>
                          <li>符合相關規範</li>
                          <li>法令規章之遵循</li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          2023年利害關係人溝通實績
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>違反法令遭處份事件：0</li>
                          <li>發布年度永續報告書</li>
                          <li>董事／經理人法令宣導：5次</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-goal="員工">
                    <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                      <div className="border-r border-blue pr-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue">
                          溝通方式
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>新人教育訓練</li>
                          <li>公司重要營運訊息等訊息</li>
                          <li>透過員工意見信箱收集員工意見</li>
                          <li>
                            公告各項員工福利事項（健檢、及團險等）、福委會資訊（慶生會、電影欣賞）
                          </li>
                          <li>教育訓練課程資訊</li>
                          <li>年度績效管理作業評量</li>
                          <li>座談會</li>
                          <li>內部推動員工福利及訓練</li>
                          <li>舉辦健康諮詢</li>
                        </ul>
                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          頻率
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>定期</li>
                          <li>不定期議</li>
                        </ul>
                      </div>
                      <div className="ml-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue ">
                          關注議題
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>法規遵循</li>
                          <li>誠信經營</li>
                          <li>人權</li>
                          <li>勞動條件</li>
                          <li>學習與成長</li>
                          <li>健康安全</li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          2023年利害關係人溝通實績
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>教育訓練總時數：3,527／H</li>
                          <li>人均時數：17.81／HR</li>
                          <li>職業傷害事件：0</li>
                          <li>
                            健康諮詢：
                            <br />
                            醫護 3次/月（共計36次）；
                            <br />
                            醫師 3次/年（共計3次）
                          </li>
                          <li>
                            員工健檢人數：170人
                            <br />
                            健檢率：99%
                          </li>
                          <li>安排健康諮詢、績效評量</li>
                          <li>視需求安排宣導座談會。</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-goal="投資人">
                    <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                      <div className="border-r border-blue pr-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue">
                          溝通方式
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>年度股東常會</li>
                          <li>公開資訊觀測站</li>
                          <li>中／英文重大訊息</li>
                          <li>設置獨立董事直接收信之通報信箱管道</li>
                          <li>公司網站</li>
                          <li>法說會</li>
                        </ul>
                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          頻率
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>即時</li>
                          <li>不定期</li>
                          <li>一年兩次</li>
                          <li>每年</li>
                        </ul>
                      </div>
                      <div className="ml-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue ">
                          關注議題
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>產業展望、公司競爭優勢及未來成長潛力</li>
                          <li>公司獲利能力及股利政策</li>
                          <li>股票價值</li>
                          <li>公司治理 / 風險管理</li>
                          <li>資訊揭露透明度</li>
                          <li>永續發展</li>
                          <li>營運績效</li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          2023年利害關係人溝通實績
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>發布年度永續報告書</li>
                          <li>即時回覆股東來電諮詢</li>
                          <li>與法人分析師維持溝通良好關係</li>
                          <li>股東通報事件：0</li>
                          <li>召開2次自辦法說會</li>
                          <li>公告中/英文重大訊息各40則</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-goal="供應商">
                    <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                      <div className="border-r border-blue pr-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue">
                          溝通方式
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>
                            邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業
                          </li>
                          <li>
                            與主要供應商，依業務說明、產品技術、市場發展等召開實體討論會議
                          </li>
                          <li>以電話、電子郵件保持溝通管道暢通</li>
                        </ul>
                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          頻率
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>即時</li>
                          <li>定期</li>
                          <li>不定期</li>
                        </ul>
                      </div>
                      <div className="ml-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue ">
                          關注議題
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>報導具可靠性、及時性、透明性及符合相關規範</li>
                          <li>法令規章之遵循</li>
                          <li>價格競爭力</li>
                          <li>持續平穩的供給</li>
                          <li>技術能力</li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          2023年利害關係人溝通實績
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>選擇信譽卓越之供應商</li>
                          <li>
                            與供應商溝通簽署「人權、環境永續暨誠信經營承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業
                          </li>
                          <li>業務實體討論會議34次</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-goal="非營利組織">
                    <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                      <div className="border-r border-blue pr-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue">
                          溝通方式
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>公司網站</li>
                          <li>舉辦公益活動或參與外部公益活動</li>
                          <li>股東會年報</li>
                          <li>永續報告書</li>
                          <li>公開資訊觀測站</li>
                        </ul>
                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          頻率
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>即時</li>
                          <li>不定期</li>
                          <li>每年一次</li>
                        </ul>
                      </div>
                      <div className="ml-8">
                        <p className="border-b border-blue pb-4 font-semibold text-blue ">
                          關注議題
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>能源與水資源管理、廢棄物管理與回收</li>
                          <li>人文及特色教育發展</li>
                          <li>社會及社區公益參與</li>
                          <li>環境保護</li>
                          <li>永續發展策略</li>
                        </ul>

                        <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">
                          2023年利害關係人溝通實績
                        </p>
                        <ul className="list-disc content pt-4 pl-6">
                          <li>
                            辦理淨灘公益活動，總計共拾拾37.5公斤海洋廢棄物
                          </li>
                          <li>
                            志工參與捐血活動及自辦愛心捐血活動，共收集495袋捐血
                          </li>
                          <li>公司股東會贈品購買環保材質(小麥桿)製品</li>
                          <li>
                            落實SDGs永續目標：
                            <br />
                            指標3-良好健康和福祉
                            <br />
                            指標12-責任消費與生產
                            <br />
                            指標14-保育海洋生態
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabContainerIcon>
              </div>
            </TabContainer>
          </div>

          <Section>
            <H2 text="溝通管道" />

            <TabContainerIcon
              goals={["投資人", "員工", "供應商", "客戶"]}
              icons={iconsCommunicate}
              tabColor="#3B79E4"
            >
              <div data-goal="投資人">
                <Table2
                  data={tableData}
                  color="#3B79E4"
                  title=""
                  unit=""
                  isCenter={false}
                />
              </div>
              <div data-goal="員工">
                <P text="內部員工可透過以下管道進行意見回饋或申訴：" />
                <List
                  items={[
                    {
                      text: "直屬主管",
                    },
                    {
                      text: "人力資源主管（鄭小姐 , Sabrina）",
                    },
                    {
                      text: "稽核單位（張先生 , Asment）",
                    },
                    {
                      text: "執行長室（周小姐 , Gloria）",
                    },
                    {
                      text: "意見箱（擺放於員工餐廳）",
                    },
                  ]}
                  listType="disc"
                />
              </div>
              <div data-goal="供應商">
                <List
                  items={[
                    {
                      text: " 本公司秉持誠信經營之原則，與供應商的商業行為過程中，秉持公平、誠信與透明之方式進行，雙方均不得直接或間接提供、承諾、要求或收受任何不正當利益，或做出其他違反誠信、不法或違背義務之行為，亦不得透過操縱、隱匿、濫用其基於職務所獲悉之資訊、對重要事項做不實陳述或其他不公平之交易方式，以維護雙方合法的權益。",
                    },
                    {
                      text: "本公司為電子零組件通路商，除努力扮演好代理商積極角色，穩定代理權外，為使供銷流程更加順暢，在原廠供給端，隨時掌握評估代理產品穩定度及持續性，進而能有效掌握貨源取得，達到較佳的庫存經濟規模，以符合客戶貨源需求，並降低庫存風險。",
                    },
                    {
                      text: "本公司與供應商間維持長遠與穩定的合作關係，亦持續關注原廠供應商在綠色環保、勞工人權及道德、衛生與安全、風險管理及道德規範等方面，是否遵守企業應盡之社會責任。",
                    },
                    {
                      text: "若您有產品、業務需求或品質等問題，可與各產品業務窗口聯繫，或來電(02)2657-8809 將有專人(田小姐)為您服務。",
                    },
                  ]}
                  listType="disc"
                />
              </div>
              <div data-goal="客戶">
                <List
                  items={[
                    {
                      text: "有鑑於終端消費者需求嗜好變化快速，在客戶需求端，除致力於產品線經營銷售外，並隨時評估外在環境消費趨勢變動對客戶所處產業之供需變化及客戶對產品需求狀況，嚴控備貨庫存水位，以減少資金積壓之機會成本；且積極掌握客戶營運、財務及經營層變化狀況，強化信用風險管理，防範可能倒帳風險，進而降低公司經營風險，穩定公司整體獲利。",
                    },
                    {
                      text: " 本公司對於客戶製造廠對關鍵零組件產品需求及問題提供技術服務支援，並協助尋求新產品應用之解決方案，縮減客戶進入產業之時間；另針對產品品質問題亦會協助與上游原廠供應商溝通協調，尋求解決方案，以滿足客戶之需求。",
                    },
                    {
                      text: "另由於本公司屬於企業對企業(Business to Business, B2B)之商業模式，因此利害關係人中並未包含一般終端消費者。",
                    },
                    {
                      text: "若您有產品、業務需求或品質等問題，可與各產品業務窗口聯繫，或來電(02)2657-8809 將有專人(田小姐)為您服務。",
                    },
                  ]}
                  listType="disc"
                />
              </div>
            </TabContainerIcon>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default StakeholderEngagement;
