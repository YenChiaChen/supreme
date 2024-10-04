import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/幸福企業/多元化成長.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, H3, P } from "../../components/ui/Text";
import { Image, YearTabContainer } from "../../components/ui";
import { Container, Section } from "../../components/ui/Container";
import ClassSellsImage01 from '../../assets/img/subPage/幸福企業/diverse-growth-sells01.png'
import ClassSellsImage02 from '../../assets/img/subPage/幸福企業/diverse-growth-sells02.png'
import ClassBlockImage01 from '../../assets/img/subPage/幸福企業/diverse-growth-blockchain01.png'
import ClassBlockImage02 from '../../assets/img/subPage/幸福企業/diverse-growth-blockchain02.png'
import {
  faBook,
  faBuilding,
  faChalkboardUser,
  faRankingStar,
  faUserGroup,
  faUserTie,
  faUserTieHair,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HoverCard } from "../../components/ui";
import { t } from "i18next";
const DiverseGrowth: React.FC = () => {
  const cardData = [
    {
      title: "文化發展",
      description:
        "強調組織價值觀、企業文化和倫理道德的培養，確立員工對組織的認同感，並促進積極的工作態度和合作精神。",
      icon: faBuilding,
    },
    {
      title: "職能發展",
      description: "提升員工專業領域技能和知識，確保員工得以勝任並不斷進步。",
      icon: faBook,
    },
    {
      title: "主管培育",
      description: "提升員工專業領域技能和知識，確保員工得以勝任並不斷進步。",
      icon: faUserTie,
    },
    {
      title: "競爭力發展",
      description: "協助員工提升職場能力和競爭力。",
      icon: faRankingStar,
    },
  ];

  return (
    <div className="mb-48">
      <HeroSection
        title="多元化成長"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"多元訓練課程"} />
          <P
            text={
              "秉持「攜手學習，共同成長」的人才培育理念，本公司注重員工的專業技能和職業發展，提供多元化的內部培訓課程，包括專業技能培訓、管理培訓、語言培訓和高階主管訓練等，針對管理階層及一般員工的不同能力及專業需求設計各類課程；同時積極鼓勵員工參加外部專業課程和研討會等進修，幫助員工增加知識和技能。"
            }
          />
          <P
            text={
              "2022 年度各層級員工受訓時數共計 1,583 小時。 為避免教育訓練的實施流於形式，或與企業目標脫節，故以企業營運目標及發展策略為藍本，以內部同仁 實際需求為導向，提供人才養成及教育諮詢等專業服務，透過各項教育訓練活動的推展，塑造公司為不斷創新改善的「學習型組織」。 本公司的人才培育制度不僅關注教育訓練本身，也關注員工的職業發展和福利。因此，相關政策通常包括薪資福利、職業發展計劃、工作彈性、員工關懷和支持等方面，以確保員工在學習和發展方面得到全面的支持和保障，以貫徹「人才為本」的企業文化。"
            }
          />
        </Section>
        <Section>
          <H2 text={"人才培育之三項層次"} />
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="w-full bg-gray-100 rounded-[1rem] p-8">
              <p className="text-2xl font-semibold tracking-wide flex items-center gap-4">
                教育訓練{" "}
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  className="text-3xl text-pink"
                />
              </p>
              <div className="w-[80%] h-[1px] my-6 bg-gray-400"></div>
              <P
                text={
                  "注重「標竿學習」的精神，以開放接納的胸襟，盡情學習產業內外最佳的經驗、共通技術流程指導、管理經驗技巧教授及產品/服務發展趨勢，使學習充分發揮效益於策略目標之達成。"
                }
              />
            </div>
            <div className="w-full bg-gray-100 rounded-[1rem] p-8">
              <p className="text-2xl font-semibold tracking-wide flex items-center gap-4">
                良師益友{" "}
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="text-3xl text-pink"
                />
              </p>
              <div className="w-[80%] h-[1px] my-6 bg-gray-400"></div>
              <P
                text={
                  "強調「輔助教育」的精神，針對各自不同的專業領域，透過資深及專業能手加強對業務需求的深度教導及諮詢，縮短差異化及學習歷程。"
                }
              />
            </div>
            <div className="w-full bg-gray-100 rounded-[1rem] p-8">
              <p className="text-2xl font-semibold tracking-wide flex items-center gap-4">
                專家養成{" "}
                <FontAwesomeIcon
                  icon={faUserTieHair}
                  className="text-3xl text-pink"
                />
              </p>
              <div className="w-[80%] h-[1px] my-6 bg-gray-400"></div>
              <P
                text={
                  "強調「深度發展」的精神，透過職能發展，協助同仁不斷的在專業上自我成長，以提昇工作績效，並推動公司的整體競爭優勢。"
                }
              />
            </div>
          </div>
        </Section>

        <Section>
          <H2 text={"人才培育之四大課程類別"} />
          <div className="w-full flex mt-md justify-between gap-4">
            {cardData.map((data, index) => (
              <HoverCard key={index} data={data} color="#FF507C" />
            ))}
          </div>
        </Section>
        <Section>
          <H2 text={"多元職涯發展"} />
          <P
            text={
              "本公司十分重視員工之培訓和學習計劃，期望能和員工以長遠的目標共同成長，因此提供職業規劃和發展計劃，協助員工確立長期職業發展目標和方向。提供內部調動和轉職機會，讓員工可以在公司內部尋找新的職業發展機會，包括跨部門調動、工作輪調、跨國調動等。倘若當公司面臨需要進行組織重組或裁員時，公司會提供適應性培訓和協助，如職業轉型培訓及就業輔導等，確保員工能夠順利過渡到新的工作環境中。"
            }
          />

          <H3 text={"區塊鏈與密碼貨幣課程"} className="text-center text-pink" />
          <div className="flex gap-12 justify-center -mt-12">
            <Image src={ClassBlockImage01} alt="Blockchain Class Iamge" maxWidth="600px" />
            <Image src={ClassBlockImage02} alt="Blockchain Class Iamge" maxWidth="600px" />
          </div>
          <H3 text={"策略式銷售與談判成交技巧課程"} className="text-center text-pink" />
          <div className="flex gap-12 justify-center -mt-12">
            <Image src={ClassSellsImage01} alt="Sells Class Iamge" maxWidth="600px" />
            <Image src={ClassSellsImage02} alt="Sells Class Iamge" maxWidth="600px" />
          </div>
        </Section>


        
        <Section>
          <H2 text={"年度執行情形報告"} />
          <YearTabContainer years={["2023", "2022"]} tabColor="#FF507C">
            <div data-year="2023">
            <p className="text-pink text-[18px] tracking-widest font-semibold mt-12">{t("diverse_growth.performanceReport.training")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 "> {t("common.category")}</th>
                <th className="border border-white px-4 py-2">{t("common.classDate")}</th>
                <th className="border border-white px-4 py-2">{t("common.courseName")}</th>
                <th className="border border-white px-4 py-2">{t("common.participants")}</th>
                <th className="border border-white px-4 py-2">{t("common.numberOfParticipants")}</th>
                <th className="border border-white px-4 py-2 ">{t("common.courseHours")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">2/14</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("diverse_growth.performanceReport.table2023.infoSecuritySeminar")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>160</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>480</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2/21</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">2/14</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("diverse_growth.performanceReport.table2023.integrityManagementAndFairTrade")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>160</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>80</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">2/21</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>{t("common.competitivenessDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">3/16</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>{t("diverse_growth.performanceReport.table2023.mindMappingInWorkplace")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={4}>{t("common.salesDepartmentEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={4}>69</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={4}>483</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">3/24</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">4/17</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">4/25</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>{t("common.skillsDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">8/02</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>{t("diverse_growth.performanceReport.table2023.highImpactPresentationSkills")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={3}>{t("common.salesStaff")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={3}>36</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={3}>378</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">8/10</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">8/22</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">9/06</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("diverse_growth.performanceReport.table2023.occupationalSafetySeminar")}</td>
                <td className="border border-light_gray px-4 py-2" rowSpan={2}>{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>153</td>
                <td className="border border-light_gray px-4 py-2 text-center" rowSpan={2}>469</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">9/07</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.managementTraining")}</td>
                <td className="border border-light_gray px-4 py-2">9/23</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.teamBuildingCamp")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">141</td>
                <td className="border border-light_gray px-4 py-2 text-center">846</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">3/24</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.newEmployeeTraining0314")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">9</td>
                <td className="border border-light_gray px-4 py-2 text-center">54</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">6/06</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.newEmployeeTraining0606")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">9</td>
                <td className="border border-light_gray px-4 py-2 text-center">54</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">11/22</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2023.newEmployeeTraining1122")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">9</td>
                <td className="border border-light_gray px-4 py-2 text-center">54</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-400 mt-4">{t("diverse_growth.performanceReport.table2023.trainingNote")}</p>

          
          <p className="text-pink text-[18px] tracking-widest font-semibold mt-md">{t("diverse_growth.performanceReport.trainingHoursAndGenderRatio")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 " rowSpan={2}>{t("common.category")}</th>
                <th className="border border-white px-4 py-2" colSpan={3}>{t("common.totalTrainingHoursInHours")}</th>
                <th className="border border-white px-4 py-2 " colSpan={3}>{t("common.averageTrainingHoursPerPerson")}</th>
              </tr>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
                <th className="border border-white px-4 py-2">{t("common.total")}</th>
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
                <th className="border border-white px-4 py-2">{t("common.total")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.supervisor")}</td>
                <td className="border border-light_gray px-4 py-2">1,025.00</td>
                <td className="border border-light_gray px-4 py-2">222.00</td>
                <td className="border border-light_gray px-4 py-2">1,247.00</td>
                <td className="border border-light_gray px-4 py-2">17.67</td>
                <td className="border border-light_gray px-4 py-2">18.50</td>
                <td className="border border-light_gray px-4 py-2">17.81</td>
              </tr>
              <tr>
              <td className="border border-light_gray px-4 py-2">{t("common.nonSupervisor")}</td>
              <td className="border border-light_gray px-4 py-2">1,449.50</td>
              <td className="border border-light_gray px-4 py-2">834.00</td>
              <td className="border border-light_gray px-4 py-2">2,283.50</td>
              <td className="border border-light_gray px-4 py-2">18.12</td>
              <td className="border border-light_gray px-4 py-2">17.38</td>
              <td className="border border-light_gray px-4 py-2">17.84</td>
              </tr>
              <tr>
              <td className="border border-light_gray px-4 py-2">{t("common.totalTrainingHours")}</td>
              <td className="border border-light_gray px-4 py-2">2,474.50</td>
              <td className="border border-light_gray px-4 py-2">1,056.00</td>
              <td className="border border-light_gray px-4 py-2">3,530.50</td>
              <td className="border border-light_gray px-4 py-2">17.93</td>
              <td className="border border-light_gray px-4 py-2">17.60</td>
              <td className="border border-light_gray px-4 py-2">17.83</td>
              </tr>
            </tbody>
          </table>
          
          <p className="text-sm text-gray-400 mt-4">{t("diverse_growth.performanceReport.table2023.note1")}<br />{t("diverse_growth.performanceReport.table2023.note2")}<br/>{t("diverse_growth.performanceReport.table2023.note3")}</p>
            </div>
            <div data-year="2022">
              <p className="text-pink text-[18px] tracking-widest font-semibold mt-12">{t("diverse_growth.performanceReport.training")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 ">{t("common.category")}</th>
                <th className="border border-white px-4 py-2">{t("common.courseName")}</th>
                <th className="border border-white px-4 py-2">{t("common.participants")}</th>
                <th className="border border-white px-4 py-2">{t("common.numberOfParticipants")}</th>
                <th className="border border-white px-4 py-2 ">{t("common.courseHours")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.competitivenessDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.blockchainAndCryptocurrency")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.salesStaff")}、{t("common.volunteers")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">86</td>
                <td className="border border-light_gray px-4 py-2 text-center">3</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.competitivenessDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.internationalTradePractices")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.salesDepartmentEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">73</td>
                <td className="border border-light_gray px-4 py-2 text-center">7</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.integrityManagementAndInsiderTradingPrevention")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.allEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">123</td>
                <td className="border border-light_gray px-4 py-2 text-center">0.5</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.skillsDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.strategicSalesAndNegotiationSkills")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.salesStaff")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">42</td>
                <td className="border border-light_gray px-4 py-2 text-center">7</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.culturalDevelopment")}</td>
                <td className="border border-light_gray px-4 py-2">{t("diverse_growth.performanceReport.table2022.newEmployeeTraining")}</td>
                <td className="border border-light_gray px-4 py-2">{t("common.newEmployees")}</td>
                <td className="border border-light_gray px-4 py-2 text-center">17</td>
                <td className="border border-light_gray px-4 py-2 text-center">6</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-400 mt-4">{t("diverse_growth.performanceReport.table2023.trainingNote")}</p>

          
          <p className="text-pink text-[18px] tracking-widest font-semibold mt-md">{t("diverse_growth.performanceReport.trainingHoursAndGenderRatio")}</p>
            <table className="min-w-full border-collapse mt-6">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2 " rowSpan={2}>{t("common.category")}</th>
                <th className="border border-white px-4 py-2" colSpan={2}>{t("common.totalTrainingHoursInHours")}</th>
                <th className="border border-white px-4 py-2 " colSpan={2}>{t("common.averageTrainingHoursPerPerson")}</th>
              </tr>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
                <th className="border border-white px-4 py-2">{t("common.male")}</th>
                <th className="border border-white px-4 py-2">{t("common.female")}</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.supervisor")}</td>
                <td className="border border-light_gray px-4 py-2">335.5</td>
                <td className="border border-light_gray px-4 py-2">85</td>
                <td className="border border-light_gray px-4 py-2">5.33</td>
                <td className="border border-light_gray px-4 py-2">6.07</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.nonSupervisor")}</td>
                <td className="border border-light_gray px-4 py-2">693</td>
                <td className="border border-light_gray px-4 py-2">469.5</td>
                <td className="border border-light_gray px-4 py-2">9.90</td>
                <td className="border border-light_gray px-4 py-2">9.58</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2">{t("common.totalTrainingHours")}</td>
                <td className="border border-light_gray px-4 py-2" colSpan={2}>1,583</td>
                <td className="border border-light_gray px-4 py-2" colSpan={2}>8.08</td>
              </tr>
            </tbody>
          </table>
            </div>
          </YearTabContainer>
          </Section>
      </Container>
    </div>
  );
};

export default DiverseGrowth;
