import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Img01 from "../../assets/img/testing/Group 87.png";
import Img03 from "../../assets/img/testing/board-02.png";
import { faBriefcase, faChartLine, faCheckCircle, faChessKing, faExclamationTriangle, faGavel, faGlobe, faIndustry, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Board: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "董事會" },
  ];

  return (
    <div>
      <HeroBanner
        title="董事會"
        description={`董事會為至上最高治理單位，首要職責在於監督公司守法、資訊透明、即時揭露重要訊息及誠信經營。\n另於董事會下設置「審計委員會」、「薪資報酬委員會」，由全體獨立董事組成，本公司訂定之「公司章程」及「董事選任程序」皆已規範全體董事選舉採候選人提名制度。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">
            健全有效的董事會運作是永續經營的根基
          </p>
          <p className="mt-md content">
            董事會首要職責在於監督，督促公司守法、資訊透明、即時揭露重要訊息及誠信經營，並透過審計委員會、薪酬委員會、內控稽核系統協助董事會履行其監督職責；其次，與經營團隊維持良好的溝通管道及互動，指導公司業務之執行及重大決策之決議，以確保公司永續發展及保障股東權益。
            <br />
            <br />
            董事會成員同時也應普遍具備執行職務所必須之知識、技能及素養，為達到公司治理之理想目標，其應具備之能力如下：
          </p>

          <div className="flex gap-6 mt-12 text-dark_blue flex-wrap">
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faScaleBalanced} className="h-[50px]" />
              營運判斷能力
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faExclamationTriangle} className="h-[50px]" />
              危機處理能力
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faGlobe} className="h-[50px]" />
              國際市場觀
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faChartLine} className="h-[50px]" />
              會計及財務分析能力
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faIndustry} className="h-[50px]" />
              產業知識
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faChessKing} className="h-[50px]" />
              領導能力
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faBriefcase} className="h-[50px]" />
              經營管理能力
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faGavel} className="h-[50px]" />
              法律知識
            </div>
            <div className="bg-blue bg-opacity-50 rounded-[30px] flex flex-col items-center justify-center p-5 w-[200px] gap-6  font-semibold tracking-wide aspect-square">
              <FontAwesomeIcon icon={faCheckCircle} className="h-[50px]" />
              決策能力
            </div>
          </div>

          <p className="mt-xl sub-title text-center">董事提名與遴選</p>
          <p className="mt-md content">
            本公司董事之選舉均依照公司法第 192 條之 1
            所規定之候選人提名制度，由股東會就董事候選人名單中選任。適任之董事應普遍具備多元性、獨立性、專業職能等，董事選任程序請詳閱公司官網
            / 公司治理專區 / 規章辦法。
          </p>

          <p className="mt-xl sub-title text-center">董事會成員</p>
          <p className="mt-md content">
            本屆董事會由 8 位成員組成，包含 4 位董事 以及 4 位獨立董事：
          </p>

          <div className="grid grid-cols-2 gap-12 mt-12 bg-white">
            <div className="flex flex-col gap-4">
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">董事長</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    葛均
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>輔仁大學電子系</li>
                      <li>國立台灣大學管理學院</li>
                      <li>台大-復旦EMBA境外專班碩士班</li>
                      <li>台灣飛利浦電子零件部業務經理</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>本公司總經理</li>
                      <li>高照國際(有)公司董事</li>
                      <li>Supreme International Co., Ltd.董事</li>
                      <li>Golden Supreme International Pte. Ltd.董事</li>
                      <li>高拓國際貿易(上海)有限公司法定代表人</li>
                      <li>威恆香港實業(有)公司董事</li>
                      <li>高達能源科技(股)公司董事長</li>
                      <li>和鈞綠能(香港)有限公司董事</li>
                      <li>鼎洲電子(股)公司法人董事代表</li>
                      <li>南基國際科技(有)公司董事</li>
                      <li>Mighty Cosmo Limited法人董事代表</li>
                      <li>Alfo International Co ., Ltd法人董事代表</li>
                      <li>保康特生物科技(股)公司董事長</li>
                      <li>尚驛光電(股)公司董事長</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">董事</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    謝錦宗{" "}
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>海洋大學電子系</li>
                      <li>台灣飛利浦電子零件部業務經理</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>高照國際(有)公司副董事長</li>
                      <li>Alfo International Co ., Ltd. 法人董事代表</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">獨立董事</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    王淮
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>國立政治大學企管碩士</li>
                      <li>龍巖(股)公司獨立董事</li>
                      <li>博錸生技(股)公司獨立董事</li>
                      <li>智擎生技製藥(股)公司獨立董事</li>
                      <li>中華公司治理協會理事</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>博錸生技(股)公司獨立董事</li>
                      <li>生華創業投資(股)公司 監察人</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">獨立董事</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    楊耀松
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>英國萊斯特大學EMBA</li>
                      <li>魔奇科技(股)公司董事</li>
                      <li>香港華馨達國際(股)公司副董事長</li>
                      <li>晨星半導體(股)公司總經理特助</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>香港華馨達國際(股)公司副董事長</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">副董事長</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    邢懷成
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>海洋大學電子系</li>
                      <li>台灣飛利浦電子零件部業務經理</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>本公司副總經理</li>
                      <li>Alfo International Co ., Ltd.法人董事代表</li>
                      <li>Supreme International Co., Ltd.董事</li>
                      <li>高照國際(有)公司董事</li>
                      <li>東照電子(有)公司董事</li>
                      <li>惠州市富麗電子(有)公司董事</li>
                      <li>蘇州和鈞新能源(有)公司總經理</li>
                      <li>威恆香港實業(有)公司董事</li>
                      <li>高達能源科技(股)公司法人董事長</li>
                      <li>南基國際科技(有)公司董事</li>
                      <li>保康特生物科技(股)公司法人董事代表</li>
                      <li>尚驛光電(股)公司法人董事代表</li>
                      <li>香港芯知己數碼(有)公司董事</li>
                      <li>海寧樂眾信息技術(股)公司董事</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">董事</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    胡正陽
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>台灣大學商學碩士</li>
                      <li>品佳(股)公司總經理</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>鼎洲電子(股)公司董事長</li>
                      <li>群淂集團控股(有)公司董事</li>
                      <li>群淂數碼科技(上海)(有)公司法定代表人</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex">
                  <span className="w-32 font-semibold text-lg">獨立董事</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    林佩蓉
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>國立台灣大學管理學院</li>
                      <li>台大-復旦EMBA境外專班碩士班</li>
                      <li>東森電視業務營銷部副總經理</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>安禾智通(股)公司董事長</li>
                      <li>安璽整合行銷(股)公司董事長</li>
                      <li>鉑齡(股)公司董事長</li>
                      <li>安投(股)公司 董事長</li>
                      <li>安智媒體行銷(股)公司 董事長</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div tabIndex={0} className="collapse collapse-arrow shadow  p-4">
                <div className="collapse-title flex ">
                  <span className="w-32 font-semibold text-lg">獨立董事</span>
                  <span className="ml-4 text-orange tracking-widest text-2xl">
                    黃國誠
                  </span>
                </div>
                <div className="collapse-content">
                  <div className="content">
                    <p>主要經（學）歷：</p>
                    <ul className="content list-disc pl-8">
                      <li>清華大學數學系</li>
                      <li>威強電(股)公司副總經理</li>
                    </ul>
                    <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
                    <ul className="content list-disc pl-8">
                      <li>泓格科技(股)公司副總經理</li>
                      <li>上海金泓格國際貿易(有)公司 監察人</li>
                      <li>泓格通科技(武漢)(有)公司 監察人</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto relative mt-xl px-[10%]">
          <div className="relative z-10 py-12 grid grid-cols-2 gap-36 items-center">
            <div>
              <p className="sub-title"> 組織透明 落實多元</p>
              <p className="bg-dark_blue h-[1px] w-full my-6"></p>
              <p className="content">
                至上董事會成員均具有產業專業背景及經營實務經驗，且分別擅長科技、財務會計、國際市場觀和法律等領域。
                <br />
                <br />
                至上相當注重多元平等、廣納不同性別、年齡層、族群。
              </p>
            </div>

            <div className="">
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-dark_blue py-6">
                <p className="text-[16px]">具員工身份之董事占比為</p>
                <p className="text-2xl font-bold text-dark_blue">37.5%</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-dark_blue py-6">
                <p className="text-[16px]">獨立董事占比為</p>
                <p className="text-2xl font-bold text-dark_blue">50%</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-dark_blue py-6">
                <p className="text-[16px]">女性董事占比為</p>
                <p className="text-2xl font-bold text-dark_blue">12.5%</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-dashed border-dark_blue py-6">
                <p className="text-[16px]">長期目標：將女性董事比率提升為</p>
                <p className="text-2xl font-bold text-dark_blue">25%</p>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-[110%] bg-blue rounded-r-[50px] -ml-[10%] z-0 min-h-full bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-[10%]">
          <p className="mt-xl sub-title text-center">
            董事所具專業知識及獨立性之情形
          </p>
          <p className="mt-md content">
            本公司董事長兼任總經理，係為營運效率及執行決策之貫徹，惟為提升公司治理及强化董事會之獨立性，
            董事長除與各董事密切充分溝通，未來亦擬規劃增加獨立董事之席次，以提升董事會職能及强化監督功能。强化獨立性之措施包含：設置四席獨立董事有效發揮監督職能、設置功能性委員會以提出專業建議供董事會參考、
            董事會成員中過半數董事未兼任員工或經理人、每年安排各董事參與外部專業機構課程以提升專業能力。
          </p>
          <table className="min-w-full border-collapse mt-md">
            <thead>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl">
                  姓名/條件
                </th>
                <th className="border border-white px-4 py-2">
                  專業資格與經驗
                </th>
                <th className="border border-white px-4 py-2">獨立性情形</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl">
                  兼任其他公開發行公司獨立董事家數
                </th>
              </tr>
            </thead>
            <tbody className="content">
              <tr className="content">
                <td className="border border-light_gray px-4 py-2">
                  董事長 葛均
                </td>
                <td className="border border-light_gray px-4 py-2">
                  <ul className="list-decimal px-4">
                    <li>董事長／董事會領導經驗。</li>
                    <li>
                      具經營管理、領導、決策、營運判斷、危機處理、會計及財務分析、產業知識、法律知識及國際市場觀等專業經驗。
                    </li>
                    <li>未有公司法第30條各款情事。</li>
                  </ul>
                </td>
                <td className="border border-light_gray px-4 py-2" rowSpan={8}>
                  <ul className="list-decimal px-4">
                    <li>
                      配偶、二親等以內親屬非為公司或其關係企業之董事、受僱人。
                    </li>
                    <li>
                      本人、配偶、二親等以內親屬非為公司或關係企業提供審計或最近二年取得報酬累計金額未逾新臺幣50萬元之商務、法務、財務、會計等相關服務或諮詢之專業人士、獨資、合夥、公司或機構之企業主、合夥人、董事（理事）、監察人（監事）、經理人及其配偶。
                    </li>
                    <li>
                      非與公司有財務或業務往來之特定公司或機構之董事（理事）、監察人（監事）、經理人或持股5%以上股東（但特定公司或機構如持有公司已發行股份總數20%上，未超過50%，且為公司與其母公司、子公司或屬同一母公司之子公司依本法或當地國法令設置之獨立董事相互兼任者，不在此限）。
                    </li>
                    <li>
                      本人、配偶、二親等以內親屬持有股數及比重請參閱本公司股東會年報「董事資料」章節。
                    </li>
                  </ul>
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border  border-light_gray px-4 py-2">
                  董事 邢懷成
                </td>
                <td className="border  border-light_gray px-4 py-2" rowSpan={3}>
                  <ul className="list-decimal px-4">
                    <li>董事會領導經驗。</li>
                    <li>
                      具經營管理、領導、決策、營運判斷、危機處理、會計及財務分析、產業知識、法律知識及國際市場觀等專業經驗。
                    </li>
                    <li>未有公司法第30條各款情事。</li>
                  </ul>
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">
                  董事 謝錦宗
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border  border-light_gray px-4 py-2">
                  董事 胡正陽
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border  border-light_gray px-4 py-2">
                  獨立董事 林佩蓉
                </td>
                <td className="border  border-light_gray px-4 py-2" rowSpan={4}>
                  <ul className="list-decimal px-4">
                    <li>
                      薪酬委員會／審計委員會／永續發展委員會／董事會領導經驗。
                    </li>
                    <li>
                      具經營管理、領導、決策、營運判斷、危機處理、會計及財務分析、產業知識、法律知識及國際市場觀等專業經驗。
                    </li>
                    <li>未有公司法第30條各款情事。</li>
                  </ul>
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">
                  獨立董事 楊耀松
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border  border-light_gray px-4 py-2">
                  獨立董事 王淮
                </td>
                <td className="border border-light_gray px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border  border-light_gray px-4 py-2">
                  獨立董事 黃國誠
                </td>
                <td className="border border-light_gray px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-xl sub-title text-center">提升治理單位智識</p>
          <p className="mt-md content">
            為強化治理階層之職能與專業能力，以隨時了解法令規章修訂及公司管理業務要點，董事會成員每年持續參加《上市上櫃公司董事、監察人進修推行要點》所指定機構舉辦進修課程，課程內容涵蓋公司治理主題相關之財務、風險管理、業務、商務、會計、法律或企業永續等。同時公司治理主管也積極針對公司治理、財報審查、企業永續發展等内容持續進修。
          </p>
          <img src={Img03} className="w-full mt-md" />
        </div>
      </div>
    </div>
  );
};

export default Board;
