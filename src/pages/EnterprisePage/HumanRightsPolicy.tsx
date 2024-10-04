import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/幸福企業/人權政策.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, H3, List, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import { useTranslation } from "react-i18next";
import {
  faBalanceScale,
  faBan,
  faChild,
  faHeart,
  faHeartCircleCheck,
  faLock,
  faShieldAlt,
  faUsers,
  faUserShield,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideTabWithIcon } from "../../components/ui";
const HumanRightsPolicy: React.FC = () => {
  const { t } = useTranslation();

  const icons = [
    <FontAwesomeIcon icon={faHeart} className="text-4xl" />, // 員工關懷
    <FontAwesomeIcon icon={faUsers} className="text-4xl" />, // 職場包容性
    <FontAwesomeIcon icon={faBan} className="text-4xl" />, // 歧視與性騷擾
    <FontAwesomeIcon icon={faShieldAlt} className="text-4xl" />, // 職業安全衛生
    <FontAwesomeIcon icon={faChild} className="text-4xl" />, // 禁用童工
    <FontAwesomeIcon icon={faLock} className="text-4xl" />, // 禁止強迫勞動
    <FontAwesomeIcon icon={faBalanceScale} className="text-4xl" />, // 勞資爭議
  ];

  const goals = [
    "員工關懷",
    "職場包容性",
    "歧視與性騷擾",
    "職業安全衛生",
    "禁用童工",
    "禁止強迫勞動",
    "勞資爭議",
  ];

  return (
    <div className="mb-48">
      <HeroSection
        title={t("common.humanRightsPolicy")}
        description={t("human_right_policy.hero.subtitle")}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Section>
          <Breadcrumbs items={navItems} />
        </Section>
        <Section>
          <H2 text={t("human_right_policy.policy.title")} />
          <P text={t("human_right_policy.policy.description01")} />
        </Section>
        <Section>
          <H2 text={t("human_right_policy.approaches.title")} />
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-3 w-full rounded-[1rem] border border-pink bg-pink-light p-8 flex-col items-center">
              <FontAwesomeIcon
                icon={faHeartCircleCheck}
                className="text-[70px] text-pink w-full"
              />
              <p className="mt-8 text-2xl font-semibold tracking-wide text-center">
                {t("human_right_policy.approaches.card01.title")}
              </p>

              <List
                items={[
                  { text: t("human_right_policy.approaches.card01.items01") },
                  { text: t("human_right_policy.approaches.card01.items02") },
                ]}
              />
            </div>
            <div className="col-span-3 w-full rounded-[1rem] border border-pink bg-pink-light p-8 flex-col items-center">
              <FontAwesomeIcon
                icon={faUserShield}
                className="text-[70px] text-pink w-full"
              />
              <p className="mt-8 text-2xl font-semibold tracking-wide text-center">
                {t("human_right_policy.approaches.card02.title")}
              </p>

              <List
                items={[
                  { text: t("human_right_policy.approaches.card02.items01") },
                  { text: t("human_right_policy.approaches.card02.items02") },
                  { text: t("human_right_policy.approaches.card02.items03") },
                ]}
              />
            </div>
            <div className="col-span-2 w-full rounded-[1rem] border border-pink bg-pink-light p-8 flex-col items-center">
              <FontAwesomeIcon
                icon={faBan}
                className="text-[70px] text-pink w-full"
              />
              <p className="mt-8 text-2xl font-semibold tracking-wide text-center">
                {t("human_right_policy.approaches.card03.title")}
              </p>

              <List
                items={[
                  { text: t("human_right_policy.approaches.card03.items01") },
                ]}
              />
            </div>
            <div className="col-span-2 w-full rounded-[1rem] border border-pink bg-pink-light p-8 flex-col items-center">
              <FontAwesomeIcon
                icon={faChild}
                className="text-[70px] text-pink w-full"
              />
              <p className="mt-8 text-2xl font-semibold tracking-wide text-center">
                {t("human_right_policy.approaches.card04.title")}
              </p>

              <List
                items={[
                  { text: t("human_right_policy.approaches.card04.items01") },
                ]}
              />
            </div>
            <div className="col-span-2 w-full rounded-[1rem] border border-pink bg-pink-light p-8 flex-col items-center">
              <FontAwesomeIcon
                icon={faLock}
                className="text-[70px] text-pink w-full"
              />
              <p className="mt-8 text-2xl font-semibold tracking-wide text-center">
                {t("human_right_policy.approaches.card05.title")}
              </p>

              <List
                items={[
                  { text: t("human_right_policy.approaches.card05.items01") },
                ]}
              />
            </div>
          </div>
        </Section>
        <Section>
          <H2 text={t("human_right_policy.mitigation.title")} />
          <P text={t("human_right_policy.mitigation.description")} />
          <SideTabWithIcon goals={goals} icons={icons} tabColor="#FF507C">
            <div data-goal="員工關懷">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "全體員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "工作場所" }, { text: "執行職務期間" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "無健康狀態屬高風險之個案" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    items={[
                      {
                        text: "提供員工團體保險以彌補勞、健保險之不足,提升員工及眷屬保障。",
                      },
                      {
                        text: "新進員工免費健康檢查及在職員工定期免費健康檢查( 2 年 1 次)。",
                      },
                      { text: "不定期舉辦健康衛教講座,提升員工健康觀念。" },
                      {
                        text: "設置「勞工健康保護- 臨場醫護諮詢」服務,包含:執行工作負荷評估與管理、人因性危害預防、母性健康保護、職場暴力預防等健康保護四大計畫,醫護駐點諮詢:護理師 3 次/月;醫師 3 次/年,醫護諮詢過程皆秉持醫療保密原則,諮詢内容除醫護人員與諮詢本人外禁止向公司或第三者透露任何資訊。",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div data-goal="職場包容性">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "全體員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "工作場所" }, { text: "執行職務期間" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "讓員工都能在平等的環境下工作" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    items={[
                      {
                        text: "制定相關政策和指導方針,加強員工多元文化培訓和教育,以確保每位員工都受到平等的對待和支持。",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div data-goal="歧視與性騷擾">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "全體員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "工作場所" }, { text: "執行職務期間" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "無歧視與性騷擾事件" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    items={[
                      {
                        text: "訂有「性騷擾防治措施、申訴及懲戒辦法」,並要求所有員工確實遵循。",
                      },
                      {
                        text: "加強宣導「性別工作平等法」、「性騷懮防治法」,保護員工免於遭受被歧視及被騷擾之情況。",
                      },
                      {
                        text: "提供性騷擾申訴管道,使員工得即時表達意見,並保護被害人之權益及隱私。",
                      },
                      {
                        text: "設置性騷擾申訴處理委員會,由勞資雙方代表共同組成負責處理性騷擾申訴案件,秉持公正處理相關案件。",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div data-goal="職業安全衛生">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "全體員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "工作場所" }, { text: "執行職務期間" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "提供安全之工作環境" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    title="本公司辦公環境主要為辦公室以及倉儲兩類地點。針對辦公處所以及倉儲環境,制訂以下職業安全衛生規範:"
                    items={[
                      {
                        text: "辦公處所",
                        subItems: [
                          {
                            text: "設置符合飲用水標準之飲水設備,定期清洗及維護。",
                          },
                          {
                            text: "公司位置為內湖園區大樓,依法規規定設置完整之消防系統 ( 如:緊急電源插座、排煙設備、逃生指示燈、滅火器、安全逃生通道)。",
                          },
                          {
                            text: "消防設備檢查:1 次 / 年;消防演習:1 次 / 半年。",
                          },
                          {
                            text: "大樓管委會設有警衛人員執行大樓巡邏、訪客登記及車輛進出管制。",
                          },
                          {
                            text: "本公司有二名員工領具消防人員證照,確保在緊急情況下能夠迅速且有效應對。",
                          },
                        ],
                      },
                      {
                        text: "倉儲環境",
                        subItems: [
                          {
                            text: "秉持工作安全至上原則,倉儲之貨物搬運、堆放係依勞動部「職業安全衛生設施規則」辧理。",
                          },
                          {
                            text: "貨物堆放高度不得超過 180cm 或六層高度,二者限高規定取其先達標者遵守。",
                          },
                          {
                            text: "貨物搬運時儘量利用器械代替人力,例:手推車。",
                          },
                          {
                            text: "宣導工作場所不得穿著露指型鞋款,以包鞋為佳。",
                          },
                        ],
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div data-goal="禁用童工">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "求職者及新進員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "面試及報到時" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "無僱用童工情形" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    items={[
                      {
                        text: "於面試作業需填寫之文件要求應徵者載明出生日期,並確保資料之正確性，另於報到時覆核其身分證件",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div data-goal="禁止強迫勞動">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "全體員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "工作場所" }, { text: "執行職務期間" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "無強迫勞動事件" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    items={[
                      {
                        text: "招募廣告如實揭露各職缺內容,不保留員工或求職者身份文件,也不收取財物或要求保證金。",
                      },
                      {
                        text: "在正式任用前,將詳細說明勞動條件,確保員工在明確同意後方開始任職,絕不使用任何非自願的勞動力。",
                      },
                      {
                        text: "保證所提供給員工的實際工作條件和工資支付與勞動契約和工作規則一致,並遵守相關的勞動法令規範。",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div data-goal="勞資爭議">
              <div className="grid grid-cols-2 bg-pink-light bg-opacity-40 rounded-[20px] border border-pink p-8">
                <div className="border-r border-pink pr-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink">
                    評估對象
                  </p>
                  <List items={[{ text: "全體員工" }]} />

                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    風險產生源
                  </p>

                  <List
                    items={[{ text: "勞資雙方認知差異及溝通不良" }]}
                  />
                  <p className="border-b border-pink pb-4 font-semibold text-pink mt-12">
                    目標
                  </p>

                  <List items={[{ text: "無勞資爭議事件" }]} />
                </div>
                <div className="ml-8">
                  <p className="border-b border-pink pb-4 font-semibold text-pink ">
                    預防/風險減緩措施
                  </p>
                  <List
                    items={[
                      {
                        text: "透過會議、意見反饋及訪談等,瞭解員工的需求和關切事項,從而改善工作環境和勞工待遇。",
                      },
                      {
                        text: "定期辦理勞資會議,妥善與員工溝通,確保勞資對話暢通。",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </SideTabWithIcon>
        </Section>
      </Container>
    </div>
  );
};

export default HumanRightsPolicy;
