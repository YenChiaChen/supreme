import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import Img01 from "../../assets/img/testing/Group 87.png";
import CollapsibleList from "../../components/ui/CollapsibleList ";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img02 from "../../assets/img/testing/board-01.png";
import Img03 from "../../assets/img/testing/board-02.png";
const Board: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "董事會" },
  ];
  const items = [
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          董事長
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            葛均
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            輔仁大學電子系
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            國立台灣大學管理學院
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            台大-復旦EMBA境外專班碩士班
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            台灣飛利浦電子零件部業務經理
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            本公司總經理
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            高照國際(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Supreme International Co., Ltd.董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Golden Supreme International Pte. Ltd.董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            高拓國際貿易(上海)有限公司法定代表人
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            威恆香港實業(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            高達能源科技(股)公司董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            和鈞綠能(香港)有限公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            鼎洲電子(股)公司法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            南基國際科技(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Mighty Cosmo Limited法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Alfo International Co ., Ltd法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            保康特生物科技(股)公司董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            尚驛光電(股)公司董事長
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          副董事長
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            邢懷成
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            海洋大學電子系
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            台灣飛利浦電子零件部業務經理
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            本公司副總經理
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Alfo International Co ., Ltd法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Supreme International Co., Ltd.董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            高照國際(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            惠州市富麗電子(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            蘇州和鈞新能源有限公司總經理
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            威恆香港實業(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            高達能源科技(股)公司法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            南基國際科技(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            保康特生物科技(股)公司法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            尚驛光電(股)公司法人董事代表
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            香港芯知己數碼(有)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            海寧樂眾信息技術(股)公司董事
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          董事
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            謝錦宗
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            海洋大學電子系
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            台灣飛利浦電子零件部業務經理
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            高照國際(有)公司副董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            Alfo International Co ., Ltd 法人董事代表
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          董事
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            胡正陽
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            台灣大學商學碩士
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            品佳(股)公司總經理
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            鼎洲電子(股)公司董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            群淂集團控股有限公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            群淂數碼科技(上海)有限公司法定代表人
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          獨立董事
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            王淮
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            國立政治大學企管碩士
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            龍巖(股)公司獨立董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            博錸生技(股)公司獨立董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            智擎生技製藥(股)公司獨立董事
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            中華公司治理協會秘書長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            龍巖(股)公司獨立董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            智擎生技製藥(股)公司獨立董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            博錸生技(股)公司獨立董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            中華公司治理協會理事
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          獨立董事
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            林佩蓉
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            國立台灣大學管理學院
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            台大-復旦EMBA境外專班碩士班
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            東森電視業務營銷部副總經理
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            安禾智通(股)公司董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            安璽整合行銷(股)公司董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            鉑齡(股)公司董事長
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          獨立董事
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            胡正陽
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            英國萊斯特大學EMBA
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            魔奇科技(股)公司董事
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            香港華馨達國際(股)公司副董事長
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            晨星半導體(股)公司總經理特助
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            香港華馨達國際(股)公司副董事長
          </p>
        </div>
      ),
    },
    {
      title: (
        <p className="text-[18px] font-semibold tracking-wide">
          獨立董事
          <span className="text-orange ml-12 text-2xl tracking-widest ">
            黃國誠
          </span>
        </p>
      ),
      children: (
        <div className="content">
          <p>主要經（學）歷：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            清華大學數學系
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            威強電(股)公司副總經理
          </p>
          <p className="mt-12">目前兼任本公司及其他公司之職務：</p>
          <p className="flex items-center mt-4">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[5px] mr-4 text-[#555555]"
            />
            泓格科技(股)公司副總經理
          </p>
        </div>
      ),
    },
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

          <img src={Img01} className="w-full mt-md" />

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

          <CollapsibleList items={items} colSpan="2" />
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

          <div className="absolute top-0 left-0 w-[110%] bg-blue rounded-r-xl -ml-[10%] z-0 min-h-full"></div>
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
          <img src={Img02} className="w-full mt-md" />
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
