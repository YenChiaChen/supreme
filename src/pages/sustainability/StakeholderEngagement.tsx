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



  return (
    <div>
      <HeroBanner
        title="利害關係人議合"
        description={`本公司秉持「客戶至上、培育人才、追求卓越、分享利益」的經營理念，深切體認利害關係人的重要性，為追求永續經營與發展，期許對所有利害關係人建立透明、有效的溝通管道，秉持誠信原則即時處理及回應，並藉由瞭解利害關係人關切之議題，作為未來落實企業社會責任方向的參考依據。`}
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
            為了解各利害關係人關注之永續議題，至上在公司網站設置利害關係人專區，以作為蒐集利害關係人之需求以及意見的溝通管道。
          </p>

          <div className="mt-24">
            <TabContainerIcon goals={goals} icons={icons} tabColor="#3B79E4">
              <div data-goal="客戶">
               <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                <div className="border-r border-blue pr-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue">溝通方式/頻率</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>不定期以電話、電子郵件保持溝通管道暢通</li>
                    <li>與主要客戶每週至少一次，依業務狀態、市場需求等召開實體檢討會議</li>
                    <li>設置業務後勤單位，由專人處理相關申訴或爭議事項，以保障客戶之權益</li>
                  </ul>
                </div>
                <div className="ml-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue ">關注議題</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>產品品質</li>
                    <li>價格/交期</li>
                  </ul>

                  
                  <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">2023年利害關係人溝通實績</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>積極依客戶產品發展需求提供完整且即時的技術支援</li>
                    <li>積極協助處理客戶申訴或爭議事項</li>
                    <li>選擇財務體質健全之客戶</li>
                  </ul>
                </div>
               </div>
              </div>
              <div data-goal="供應商">
               <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                <div className="border-r border-blue pr-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue">溝通方式/頻率</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>不定期以電話、電子郵件保持溝通管道暢通</li>
                    <li>與主要客戶每週至少一次，依業務狀態、市場需求等召開實體檢討會議</li>
                    <li>邀請供應商簽署「人權、環境永續暨誠信經營承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業</li>
                  </ul>
                </div>
                <div className="ml-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue ">關注議題</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>符合各項法規要求</li>
                    <li>工作環境安全</li>
                    <li>價格競爭力</li>
                    <li>持續平穩的供給</li>
                    <li>技術能力</li>
                  </ul>

                  
                  <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">2023年利害關係人溝通實績</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>選擇信譽卓越之供應商</li>
                    <li>與供應商溝通簽署「經營管理承諾書」，確認遵照各面向及責任商業聯盟行為準則之綱要標準經營企業</li>
                    <li>業務實體討論會議34次</li>
                  </ul>
                </div>
               </div>
              </div>
              <div data-goal="員工">
               <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                <div className="border-r border-blue pr-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue">溝通方式/頻率</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>新人教育訓練</li>
                    <li>不定期公告各項員工福利事項(健檢、團險等)、福委會資訊（慶生會、電影欣賞等）、公司重要營運訊息、教育訓練課程資訊、年度績效管理作業等訊息</li>
                    <li>設立員工意見箱收集員工意見</li>
                    <li>內部推動員工福利及訓練</li>
                    <li>舉辦「客戶至上，誠信經營」座談會</li>
                    <li>每月健康諮詢</li>
                  </ul>
                </div>
                <div className="ml-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue ">關注議題</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>法規遵循</li>
                    <li>誠信經營</li>
                    <li>人權</li>
                    <li>勞動條件</li>
                    <li>學習與成長</li>
                    <li>健康安全</li>
                  </ul>

                  
                  <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">2023年利害關係人溝通實績</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>教育訓練總時數：3,527／H</li>
                    <li>人均時數：17.81／HR</li>
                    <li>職業傷害事件：0</li>
                    <li>健康諮詢：<br />醫護 3次/月（共計36次）；<br />醫師 3次/年（共計3次）</li>
                    <li>員工健檢人數：170人<br />健檢率：99%</li>
                  </ul>
                </div>
               </div>
              </div>
              <div data-goal="投資人">
               <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                <div className="border-r border-blue pr-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue">溝通方式/頻率</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>一年一次股東常會</li>
                    <li>一年二次法說會</li>
                    <li>每季一次財務報告</li>
                    <li>不定期更新公司官網／公開資訊觀測站</li>
                    <li>設置獨立董事直接收信之通報信箱管道</li>
                    <li>中/英文重大訊息</li>
                  </ul>
                </div>
                <div className="ml-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue ">關注議題</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>產業展望、公司競爭優勢及未來成長潛力</li>
                    <li>公司獲利能力及股利政策</li>
                    <li>股票價值</li>
                    <li>公司治理 / 風險管理</li>
                    <li>資訊揭露透明度</li>
                    <li>永續發展</li>
                    <li>營運績效</li>
                  </ul>

                  
                  <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">2023年利害關係人溝通實績</p>
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
              <div data-goal="政府與主管機關">
               <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                <div className="border-r border-blue pr-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue">溝通方式/頻率</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>不定期更新公司官網／公開資訊觀測站</li>
                    <li>一年一次股東常會年報</li>
                    <li>一年一次永續發展報告</li>
                    <li>不定期參與主管機關召開宣導會議</li>
                  </ul>
                </div>
                <div className="ml-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue ">關注議題</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>報導具可靠性、及時性、透明性及符合相關規範</li>
                    <li>法令規章之遵循</li>
                  </ul>

                  
                  <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">2023年利害關係人溝通實績</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>違反法令遭處份事件：0</li>
                    <li>發布年度永續報告書</li>
                    <li>董事/經理人法令宣導：5次</li>
                  </ul>
                </div>
               </div>
              </div>
              <div data-goal="非營利組織">
               <div className="grid grid-cols-2 bg-light_blue bg-opacity-40 rounded-[20px] border border-blue p-8">
                <div className="border-r border-blue pr-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue">溝通方式/頻率</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>公司網站</li>
                    <li>公開資訊觀測站</li>
                    <li>股東會年報</li>
                    <li>企業永續發展報告書</li>
                    <li>公司不定期舉辦公益活動或參與外部公益活</li>
                  </ul>
                </div>
                <div className="ml-8">
                  <p className="border-b border-blue pb-4 font-semibold text-blue ">關注議題</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>能源與水資源管理、廢棄物管理與回收</li>
                    <li>人文及特色教育發展</li>
                    <li>社會及社區公益參與</li>
                    <li>環境保護</li>
                    <li>永續發展策略</li>
                  </ul>

                  
                  <p className="border-b border-blue pb-4 font-semibold text-blue mt-12">2023年利害關係人溝通實績</p>
                  <ul className="list-disc content pt-4 pl-6">
                    <li>辦理淨灘公益活動，總計共拾拾37.5公斤海洋廢棄物</li>
                    <li>志工參與捐血活動及自辦愛心捐血活動，共收集495袋捐血</li>
                    <li>公司股東會贈品購買環保材質(小麥桿)製品</li>
                    <li>落實SDGs永續目標：<br />指標3-良好健康和福祉<br />指標12-責任消費與生產<br />指標14-保育海洋生態</li>
                  </ul>
                </div>
               </div>
              </div>
            </TabContainerIcon>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StakeholderEngagement;
