import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import React from "react";
import img1 from "../../assets/img/testing/tabletennis.png";
import img2 from "../../assets/img/testing/basketball.png";
import img3 from "../../assets/img/testing/badminton.png";
import img4 from "../../assets/img/testing/run.png";
import Healthy01 from "../../assets/img/testing/healthy01.jpg";
import Healthy02 from "../../assets/img/testing/healthy02.jpg";
import Healthy03 from "../../assets/img/testing/healthy03.jpg";
import Nurse01 from "../../assets/img/testing/nurse01.jpg";
import Nurse02 from "../../assets/img/testing/nurse02.jpg";
import img5 from "../../assets/img/testing/golf.png";
import TableTennis01 from "../../assets/img/club/TableTennis/01.jpg"
import TableTennis02 from "../../assets/img/club/TableTennis/02.jpg"
import TableTennis03 from "../../assets/img/club/TableTennis/03.jpg"
import TableTennis04 from "../../assets/img/club/TableTennis/04.jpg"
import TableTennis05 from "../../assets/img/club/TableTennis/05.jpg"

import BasketBall01 from "../../assets/img/club/Basketball/01.jpg"
import BasketBall02 from "../../assets/img/club/Basketball/02.jpg"
import BasketBall03 from "../../assets/img/club/Basketball/03.jpg"
import BasketBall04 from "../../assets/img/club/Basketball/04.jpg"
import BasketBall05 from "../../assets/img/club/Basketball/05.jpg"
import BasketBall06 from "../../assets/img/club/Basketball/06.jpg"
import BasketBall07 from "../../assets/img/club/Basketball/07.jpg"



import Badminton01 from "../../assets/img/club/Badminton/01.jpg"
import Badminton02 from "../../assets/img/club/Badminton/02.jpg"
import Badminton03 from "../../assets/img/club/Badminton/03.jpg"
import Badminton04 from "../../assets/img/club/Badminton/04.jpg"
import Badminton05 from "../../assets/img/club/Badminton/05.jpg"
import Badminton06 from "../../assets/img/club/Badminton/06.jpg"


import Running01 from "../../assets/img/club/Running/01.jpg"
import Running02 from "../../assets/img/club/Running/02.jpg"
import Running03 from "../../assets/img/club/Running/03.jpg"
import Running04 from "../../assets/img/club/Running/04.jpg"
import Running05 from "../../assets/img/club/Running/05.jpg"


import Golf01 from "../../assets/img/club/Golf/01.jpg"
import Golf02 from "../../assets/img/club/Golf/02.jpg"
import Golf03 from "../../assets/img/club/Golf/03.jpg"
import Golf04 from "../../assets/img/club/Golf/04.jpg"
import Golf05 from "../../assets/img/club/Golf/05.jpg"
import Golf06 from "../../assets/img/club/Golf/06.jpg"
import Golf07 from "../../assets/img/club/Golf/07.jpg"
import Golf08 from "../../assets/img/club/Golf/08.jpg"


import Board01 from "../../assets/img/club/BoardGame/01.jpg"
import Board02 from "../../assets/img/club/BoardGame/02.jpg"
import Board03 from "../../assets/img/club/BoardGame/03.jpg"
import Board04 from "../../assets/img/club/BoardGame/04.jpg"
import Board05 from "../../assets/img/club/BoardGame/05.jpg"


import {
  faTableTennisPaddleBall,
  faBasketball,
  faFeather,
  faPersonRunning,
  faGolfBall,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabContainerIcon from "../../components/ui/TabContainerIcon";


const TableTennis: React.FC = () => (
  <>
    <p className="my-6 content">
      以「以球會友」為初衷，透過定期安排友誼比賽、聚餐等活動促進社團成員間的感情交流，且聘請專業桌
      球教練陪同練習，精進個人球技、培養運動家精神。
    </p>
    <div className="flex flex-wrap gap-4">
    <img src={TableTennis01} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={TableTennis02} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={TableTennis03} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={TableTennis04} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={TableTennis05} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    </div>
  </>
);
const BasketBall: React.FC = () => (
  <>
    <p className="my-6 content">
      社員的矯健身影在每周三固定出現於内湖運動中心專用室內籃球場，同仁們在揮灑汗水的同時增進同仁
      友誼
    </p>
    <div className="flex flex-wrap gap-4">
    <img src={BasketBall01} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={BasketBall02} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={BasketBall03} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={BasketBall04} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={BasketBall05} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={BasketBall06} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={BasketBall07} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    </div>
  </>
);
const Badminton: React.FC = () => (
  <>
    <p className="my-6 content">
      為了讓同仁在繁忙的工作中有機會放鬆身心，同時透過社團活動擴展社交圈、結交好友，羽球社固定每周
      一於專用標準羽球館舉辦相關活動，讓公司同仁們能在比賽和訓練中共同成長。
    </p>
    <div className="flex flex-wrap gap-4">
    <img src={Badminton01} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Badminton02} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Badminton03} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Badminton04} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Badminton05} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Badminton06} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    </div>
  </>
);
const Run: React.FC = () => (
  <>
    <p className="my-6 content">
      「若要跑得快，就一個人跑；若要跑得遠，就一群人跑」。路跑的風氣漸漸普及，且能為跑者帶來多種好
      處，不僅能瘦身，還可以保持身體健康。路跑社不僅有社服，在團練時也會提供補給品，並共同參加多元化公
      益路跑活動提供豐富參賽物資獎勵。
    </p>
    <div className="flex flex-wrap gap-4">
    <img src={Running01} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Running02} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Running03} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Running04} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Running05} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    </div>
  </>
);
const Golf: React.FC = () => (
  <>
    <p className="my-6 content">
      高爾夫球是一項可以在忙碌的工作生活之餘紓解身心壓力的休閑運動。愛好高爾夫球運動的同仁們，定期
      於每月第二週舉辦球敘齊聚各球場，不僅可在絕美大自然景色中放鬆身心，也能互相切磋球技。
    </p>
    <div className="flex flex-wrap gap-4">
    <img src={Golf01} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf02} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf03} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf04} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf05} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf06} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf07} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Golf08} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    </div>
  </>
);
const BoardGame: React.FC = () => (
  <>
    <p className="my-6 content">
    桌遊是一種能在輕鬆愉快的氛圍中鍛鍊思維和促進交流的活動。熱愛桌遊的同仁們，定期於每月第三週舉辦桌遊聚會，在這些聚會中，不僅能探索各式各樣的桌上遊戲，挑戰自己的策略和運氣，也能與同事們一起享受樂趣、增進彼此的感情。無論你是桌遊新手還是老手，我們都歡迎你的加入，一起體驗桌遊的無窮魅力。
    </p>
    <div className="flex flex-wrap gap-4">
    <img src={Board01} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Board02} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Board03} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Board04} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    <img src={Board05} className="w-[400px] rounded-xl  object-cover" alt="table_tennis" />
    </div>
  </>
);

const HealthWorkplace: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "友善職場" },
    { label: "健康職場" },
  ];

  const goals = [
    "桌球社",
    "籃球社",
    "羽球社",
    "路跑社",
    "高爾夫球社",
    "桌遊社",
  ];
  const icons = [
    <FontAwesomeIcon icon={faTableTennisPaddleBall} className="h-[50px]" />,
    <FontAwesomeIcon icon={faBasketball} className="h-[50px]" />,
    <FontAwesomeIcon icon={faFeather} className="h-[50px]" />,
    <FontAwesomeIcon icon={faPersonRunning} className="h-[50px]" />,
    <FontAwesomeIcon icon={faGolfBall} className="h-[50px]" />,
    <FontAwesomeIcon icon={faChessRook} className="h-[50px]" />,
  ];

  return (
    <div>
      <HeroBanner
        title="健康職場"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，\n制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">健康職場認證</p>
          <p className="mt-md content">
            健康職場認證是基於世界衛生組織的「職場周全健康促進推動模式」，強調整合「生理工作環境」、「社會心理工作環境」、「個人健康資源」，以及「企業社區參與」的四大層面。本公司於2023年新申請健康職場標章審核通過，我們承諾提供完善的健康資源，不斷改善生理及社會心理工作環境，同時擴及員工眷屬、社區，實踐企業社會責任。
          </p>
          <p className="mt-xl sub-title text-center">健檢與醫護服務</p>
          <p className="mt-md content">
            本公司長久以來極力保護員工身心健康，致力於打造健康幸福的職場，除勞保、健保以外，亦提供員工團體保險、新進員工免費健康檢查及在職員工定期免費健康檢查
            ( 2 年 1 次 )。此外，自 2021 年起新增設「勞工健康保護 -
            臨場醫護諮詢」，包含：執行工作負荷評估與管理、人因性危害預防、母性健康保護、職場暴力預防等健康保護四大計畫，每月提供
            2 次臨場服務。2022 年度護理人員共計提供醫護諮詢 24 次 ( 48 小時
            )；醫師 2 次 ( 4 小時
            )。為保護員工個人健康相關資訊的隱私與機密性，醫護諮詢過程皆秉持醫療保密原則，諮詢内容除醫護人員與諮詢本人外禁止向公司或第三者透露任何資訊。
          </p>

          <p className="tracking-wide text-pink font-semibold text-[20px] text-center mt-xl">
            自律神經健康講座
          </p>
          <div className="grid grid-cols-3 gap-8 mt-md justify-center">
              <img
                src={Healthy01}
                alt="healthy"
                className=""
              />
              <img
                src={Healthy02}
                alt="healthy"
                className=""
              />
              <img
                src={Healthy03}
                alt="healthy"
                className=""
              />
          </div>

          <p className="tracking-wide text-pink font-semibold text-[20px] text-center mt-xl">
            醫護諮詢
          </p>
          <div className="flex gap-8 mt-md justify-center">
              <img
                src={Nurse01}
                alt="healthy"
                className="w-[500px] h-[350px] object-cover"
              />
              <img
                src={Nurse02}
                alt="healthy"
                className="w-[500px] h-[350px] object-cover"
              />
          </div>

          <p className="mt-xl sub-title text-center">運動社團</p>
          <TabContainerIcon goals={goals} icons={icons} tabColor="#FF507C">
            <div data-goal="籃球社">
              <BasketBall />
            </div>
            <div data-goal="羽球社">
              <Badminton />
            </div>
            <div data-goal="路跑社">
              <Run />
            </div>
            <div data-goal="桌球社">
              <TableTennis />
            </div>
            <div data-goal="高爾夫球社">
              <Golf />
            </div>
            <div data-goal="桌遊社">
              <BoardGame />
            </div>
          </TabContainerIcon>
        </div>
      </div>
    </div>
  );
};

export default HealthWorkplace;
