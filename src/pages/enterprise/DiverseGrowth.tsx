import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import React from "react";
import { faBuilding, faBook, faUserTie, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import CardGrid from "../../components/ui/CardGrid";
import Img01 from "../../assets/img/testing/2022-1.png";
import Img02 from "../../assets/img/testing/2022-2.png";
import Img03 from "../../assets/img/testing/2022-3.png";
import BlockChain01 from "../../assets/img/testing/blockchain01.png"
import BlockChain02 from "../../assets/img/testing/blockchain02.png"
import Sells01 from "../../assets/img/testing/sells01.png"
import Sells02 from "../../assets/img/testing/sells02.png"
import HoverCard from "../../components/ui/HoverCard";
import TabContainer from "../../components/ui/TabContainer";
const DiverseGrowth: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "人才培育" },
    { label: "多元化成長" },
  ];

  const cardData = [
    {
      title: "文化發展",
      description:
        "強調組織價值觀、企業文化和倫理道德的培養，確立員工對組織的認同感，並促進積極的工作態度和合作精神。",
      icon: faBuilding,
    },
    {
      title: "職能發展",
      description:
        "提升員工專業領域技能和知識，確保員工得以勝任並不斷進步。",
      icon: faBook,
    },
    {
      title: "主管培育",
      description:
        "針對管理階層人才，培養領導能力、人際關係和決策技能。",
      icon: faUserTie,
    },
    {
      title: "競爭力發展",
      description:
        "協助員工提升職場能力和競爭力 可以解決工作場所的爭議和糾紛，避免對勞雇 / 勞資關係造成負面影響。",
      icon: faRankingStar,
    },
  ];
  
  
  
  const ShortTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );
  
  const MidTermGoals: React.FC = () => (
    <>
      <img src={Img01} alt="testing" className="w-full mt-md" />
      <img src={Img02} alt="testing" className="w-full mt-md" />
      <img src={Img03} alt="testing" className="w-full mt-md" />
    </>
  );
  
  const LongTermGoals: React.FC = () => (
    <>
      <p className="my-6 content">目前沒有資料！過一陣子再來看看吧！</p>
    </>
  );


  const cards = [
    {
      title: "教育",
      subtitle: "訓練",
      span: 4,
      description:
        "注重「標竿學習」的精神，以開放接納的胸襟，盡情學習產業內外最佳的經驗、共通技術流程指導、管理經驗技巧教授及產品/服務發展趨勢，使學習充分發揮效益於策略目標之達成。",
    },
    {
      title: "良師",
      subtitle: "益友",
      span: 4,
      description:
        "強調「輔助教育」的精神，針對各自不同的專業領域，透過資深及專業能手加強對業務需求的深度教導及諮詢，縮短差異化及學習歷程。",
    },
    {
      title: "專家",
      subtitle: "養成",
      span: 4,
      description:
        "強調「深度發展」的精神，透過職能發展，協助同仁不斷的在專業上自我成長，以提昇工作績效，並推動公司的整體競爭優勢。",
    },
  ];

  const goals = ["2023", "2022", "2021"];


  return (
    <div>
      <HeroBanner
        title="多元化成長"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，\n制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />


        
          <p className="mt-xl sub-title text-center">多元訓練課程</p>
          <p className="mt-md content">
            秉持「攜手學習，共同成長」的人才培育理念，本公司注重員工的專業技能和職業發展，提供多元化的內部培訓課程，包括專業技能培訓、管理培訓、語言培訓和高階主管訓練等，針對管理階層及一般員工的不同能力及專業需求設計各類課程；同時積極鼓勵員工參加外部專業課程和研討會等進修，幫助員工增加知識和技能。
          </p>
          <p className="mt-md content">
            2022 年度各層級員工受訓時數共計 1,583 小時。
            為避免教育訓練的實施流於形式，或與企業目標脫節，故以企業營運目標及發展策略為藍本，以內部同仁
            實際需求為導向，提供人才養成及教育諮詢等專業服務，透過各項教育訓練活動的推展，塑造公司為不斷創新改善的「學習型組織」。
            本公司的人才培育制度不僅關注教育訓練本身，也關注員工的職業發展和福利。因此，相關政策通常包括薪資福利、職業發展計劃、工作彈性、員工關懷和支持等方面，以確保員工在學習和發展方面得到全面的支持和保障，以貫徹「人才為本」的企業文化。
          </p>
          <p className="mt-xl text-center sub-title">人才培育之三項層次</p>
          <CardGrid cards={cards} />

          <p className="mt-xl text-center sub-title">人才培育之四大課程類別</p>
          {/* <img src={TestImage} alt="testing" className="w-full mt-md" /> */}
          
          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} />
            ))}
          </div>
          <p className="mt-xl text-center sub-title">多元職涯發展</p>
          <p className="mt-md content">
            本公司十分重視員工之培訓和學習計劃，期望能和員工以長遠的目標共同成長，因此提供職業規劃和發展計劃，協助員工確立長期職業發展目標和方向。提供內部調動和轉職機會，讓員工可以在公司內部尋找新的職業發展機會，包括跨部門調動、工作輪調、跨國調動等。倘若當公司面臨需要進行組織重組或裁員時，公司會提供適應性培訓和協助，如職業轉型培訓及就業輔導等，確保員工能夠順利過渡到新的工作環境中。
          </p>
          <p className="tracking-wide text-orange font-semibold text-[20px] text-center mt-xl">
          區塊鏈與密碼貨幣課程
          </p>
          <div className="flex gap-12 mt-md justify-center">
            <div className="bg-white shadow-xl rounded-md px-4 pt-4 pb-12 -rotate-[4deg] hover:rotate-0 duration-300 hover:scale-[1.4] hover:shadow-2xl">
              <img
                src={BlockChain01}
                alt="healthy"
                className="w-[400px] h-[250px] object-cover"
              />
            </div>
            <div className="bg-white shadow-xl rounded-md px-4 pt-4 pb-12 rotate-[4deg] hover:rotate-0 duration-300 hover:scale-[1.4] hover:shadow-2xl">
              <img
                src={BlockChain02}
                alt="healthy"
                className="w-[400px] h-[250px] object-cover"
              />
            </div>
          </div>

          
          <p className="tracking-wide text-orange font-semibold text-[20px] text-center mt-xl">
          策略式銷售與談判成交技巧課程
          </p>
          <div className="flex gap-12 mt-md justify-center">
            <div className="bg-white shadow-xl rounded-md px-4 pt-4 pb-12 -rotate-[4deg] hover:rotate-0 duration-300 hover:scale-[1.4] hover:shadow-2xl">
              <img
                src={Sells01}
                alt="healthy"
                className="w-[400px] h-[250px] object-cover"
              />
            </div>
            <div className="bg-white shadow-xl rounded-md px-4 pt-4 pb-12 rotate-[4deg] hover:rotate-0 duration-300 hover:scale-[1.4] hover:shadow-2xl">
              <img
                src={Sells02}
                alt="healthy"
                className="w-[400px] h-[250px] object-cover"
              />
            </div>
          </div>
          <p className="mt-xl text-center sub-title">年度執行情形報告</p>
          <TabContainer goals={["2023", "2022"]}>
            <div data-goal="2023">
            <p className="text-orange text-[18px] tracking-widest font-semibold">2023 年度員工受訓內部課程</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl">類別</th>
                <th className="border border-white px-4 py-2">上課日期</th>
                <th className="border border-white px-4 py-2">課程名稱</th>
                <th className="border border-white px-4 py-2">參與對象</th>
                <th className="border border-white px-4 py-2">上課人次</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl">課程時數</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>文化發展類</td>
                <td className="border border-light_gray px-4 py-2">2月14日</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>資訊安全宣導講座</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>全體同仁</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>160</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>480</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2月21日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>文化發展類</td>
                <td className="border border-light_gray px-4 py-2">2月14日</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>誠信經營暨公平交易、反貪腐</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>全體同仁</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>160</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>80</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2月21日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>競爭力發展類</td>
                <td className="border border-light_gray px-4 py-2">3月16日</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>心智圖法於職場之高效運用</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>業務部同仁</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>69</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>483</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">3月24日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">4月17日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">4月25日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>職能發展類</td>
                <td className="border border-light_gray px-4 py-2">8月02日</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>高影響力簡報技巧</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>業務人員</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>36</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>378</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">8月10日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">8月22日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>文化發展類</td>
                <td className="border border-light_gray px-4 py-2">9月06日</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>職安宣導講座</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>全體同仁</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>153</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>469</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">9月07日</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">主管培育類</td>
                <td className="border border-light_gray px-4 py-2">9月23日</td>
                <td className="border border-light_gray px-4 py-2">團隊凝聚合動營</td>
                <td className="border border-light_gray px-4 py-2">全體同仁</td>
                <td className="border border-light_gray px-4 py-2">141</td>
                <td className="border border-light_gray px-4 py-2">846</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">文化發展類</td>
                <td className="border border-light_gray px-4 py-2">3月24日</td>
                <td className="border border-light_gray px-4 py-2">新生訓練-3/14</td>
                <td className="border border-light_gray px-4 py-2">全體同仁</td>
                <td className="border border-light_gray px-4 py-2">9</td>
                <td className="border border-light_gray px-4 py-2">54</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">文化發展類</td>
                <td className="border border-light_gray px-4 py-2">6月06日</td>
                <td className="border border-light_gray px-4 py-2">新生訓練-06/06</td>
                <td className="border border-light_gray px-4 py-2">全體同仁</td>
                <td className="border border-light_gray px-4 py-2">9</td>
                <td className="border border-light_gray px-4 py-2">54</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">文化發展類</td>
                <td className="border border-light_gray px-4 py-2">11月22日</td>
                <td className="border border-light_gray px-4 py-2">新生訓練-11/22</td>
                <td className="border border-light_gray px-4 py-2">全體同仁</td>
                <td className="border border-light_gray px-4 py-2">9</td>
                <td className="border border-light_gray px-4 py-2">54</td>
              </tr>
            </tbody>
          </table>
          <p className="notes mt-1">註: 每年以四大類別來發展教育訓練內容，表格中揭露內容以本年度亮點課程為主。</p>

          
          <p className="text-orange text-[18px] tracking-widest font-semibold mt-md">2023 年度各層級員工受訓（內部＋外部）時數與性別比</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl" rowSpan={2}>類別</th>
                <th className="border border-white px-4 py-2" colSpan={3}>總受訓時數 ( 小時 )</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl" colSpan={3}>每人平均受訓時數 ( 小時 )</th>
              </tr>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2">男性</th>
                <th className="border border-white px-4 py-2">女性</th>
                <th className="border border-white px-4 py-2">合計</th>
                <th className="border border-white px-4 py-2">男性</th>
                <th className="border border-white px-4 py-2">女性</th>
                <th className="border border-white px-4 py-2">合計</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">主管</td>
                <td className="border border-light_gray px-4 py-2">1,025.00</td>
                <td className="border border-light_gray px-4 py-2">222.00</td>
                <td className="border border-light_gray px-4 py-2">1,247.00</td>
                <td className="border border-light_gray px-4 py-2">17.67</td>
                <td className="border border-light_gray px-4 py-2">18.50</td>
                <td className="border border-light_gray px-4 py-2">17.81</td>
              </tr>
              <tr>
              <td className="border border-light_gray px-4 py-2">非主管</td>
              <td className="border border-light_gray px-4 py-2">1,449.50</td>
              <td className="border border-light_gray px-4 py-2">834.00</td>
              <td className="border border-light_gray px-4 py-2">2,283.50</td>
              <td className="border border-light_gray px-4 py-2">18.12</td>
              <td className="border border-light_gray px-4 py-2">17.38</td>
              <td className="border border-light_gray px-4 py-2">17.84</td>
              </tr>
              <tr>
              <td className="border border-light_gray px-4 py-2">受訓時數總計</td>
              <td className="border border-light_gray px-4 py-2">2,474.50</td>
              <td className="border border-light_gray px-4 py-2">1,056.00</td>
              <td className="border border-light_gray px-4 py-2">3,530.50</td>
              <td className="border border-light_gray px-4 py-2">17.93</td>
              <td className="border border-light_gray px-4 py-2">17.60</td>
              <td className="border border-light_gray px-4 py-2">17.83</td>
              </tr>
            </tbody>
          </table>
          
          <p className="notes mt-1">註1： 主管定義為6職等以上。<br />註2： 統計涵蓋範圍包含台北總部及新莊、龍潭、新竹、台南4處辦事處。<br/>註3： 平均受訓時數=各類別總訓練時數/各類別2023.12.31員工人數。</p>
            </div>
            <div data-goal="2022">
              <p className="text-orange text-[18px] tracking-widest font-semibold">2022 年度員工受訓課程</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl">類別</th>
                <th className="border border-white px-4 py-2">課程名稱</th>
                <th className="border border-white px-4 py-2">參與對象</th>
                <th className="border border-white px-4 py-2">參與人次</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl">課程時數</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">競爭力發展類</td>
                <td className="border border-light_gray px-4 py-2">區塊鏈與密碼貨幣</td>
                <td className="border border-light_gray px-4 py-2">業務部及自願者</td>
                <td className="border border-light_gray px-4 py-2">86</td>
                <td className="border border-light_gray px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">競爭力發展類</td>
                <td className="border border-light_gray px-4 py-2">國際貿易經營實務</td>
                <td className="border border-light_gray px-4 py-2">業務部</td>
                <td className="border border-light_gray px-4 py-2">73</td>
                <td className="border border-light_gray px-4 py-2">7</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">文化發展類</td>
                <td className="border border-light_gray px-4 py-2">誠信經營及防範內線交易</td>
                <td className="border border-light_gray px-4 py-2">全體同仁</td>
                <td className="border border-light_gray px-4 py-2">123</td>
                <td className="border border-light_gray px-4 py-2">0.5</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">職能發展類</td>
                <td className="border border-light_gray px-4 py-2">策略式銷售與談判成交技巧</td>
                <td className="border border-light_gray px-4 py-2">業務人員</td>
                <td className="border border-light_gray px-4 py-2">42</td>
                <td className="border border-light_gray px-4 py-2">7</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">文化發展類</td>
                <td className="border border-light_gray px-4 py-2">新生訓練</td>
                <td className="border border-light_gray px-4 py-2">新進同仁</td>
                <td className="border border-light_gray px-4 py-2">17</td>
                <td className="border border-light_gray px-4 py-2">6</td>
              </tr>
            </tbody>
          </table>
          <p className="notes mt-1">註 : 每年以四大類別來發展教育訓練內容，表格中揭露內容以本年度亮點課程為主。</p>

          
          <p className="text-orange text-[18px] tracking-widest font-semibold mt-md">2022 年度各層級員工受訓時數與性別比</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2 rounded-tl-2xl" rowSpan={2}>類別</th>
                <th className="border border-white px-4 py-2" colSpan={2}>總受訓時數 ( 小時 )</th>
                <th className="border border-white px-4 py-2 rounded-tr-2xl" colSpan={2}>每人平均受訓時數 ( 小時 )</th>
              </tr>
              <tr className="bg-orange text-white content">
                <th className="border border-white px-4 py-2">男性</th>
                <th className="border border-white px-4 py-2">女性</th>
                <th className="border border-white px-4 py-2">男性</th>
                <th className="border border-white px-4 py-2">女性</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">主管</td>
                <td className="border border-light_gray px-4 py-2">335.5</td>
                <td className="border border-light_gray px-4 py-2">85</td>
                <td className="border border-light_gray px-4 py-2">5.33</td>
                <td className="border border-light_gray px-4 py-2">6.07</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">非主管</td>
                <td className="border border-light_gray px-4 py-2">693</td>
                <td className="border border-light_gray px-4 py-2">469.5</td>
                <td className="border border-light_gray px-4 py-2">9.90</td>
                <td className="border border-light_gray px-4 py-2">9.58</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">受訓時數總計</td>
                <td className="border border-light_gray px-4 py-2" colSpan={2}>1,583</td>
                <td className="border border-light_gray px-4 py-2" colSpan={2}>8.08</td>
              </tr>
            </tbody>
          </table>
            </div>
          </TabContainer>

    







        </div>
      </div>
    </div>
  );
};

export default DiverseGrowth;
