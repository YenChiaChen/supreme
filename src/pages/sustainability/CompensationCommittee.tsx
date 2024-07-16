import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import img01 from "../../assets/img/testing/audit-committee01.png";
import img02 from "../../assets/img/testing/audit-committee02.png";
import img03 from "../../assets/img/testing/audit-committee03.png";
import CollapsibleList from "../../components/ui/CollapsibleList ";
import TabContainer from "../../components/ui/TabContainer";
const CompensationCommittee: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "功能性委員會" },
    { label: "薪酬委員會" },
  ];
  const items = [
    {
      title: <p>董事薪酬政策</p>,
      children:
        <p>本公司董事薪酬包含董事薪資、職務加給、離職金、各種獎金、獎勵金等，相關訂定酬金之程序皆依循「董事績效評估辦法」，除參考公司整體的營運績效、產業未來經營風險及發展趨勢，亦參考個人的績效達成率及 對公司績效的貢獻度，而給予合理報酬，相關績效考核及薪酬合理性均經薪資報酬委員會及董事會審核，並隨 時視實際經營狀況及法令適時檢討酬金制度，以謀公司永續經營與風險控管之平衡。依本公司章程第二十條， 本公司年度扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥不高於百分之二為董事酬勞，由董事會決議後 分派，並向股東會報告。</p>,
    },
    {
      title: <p>經理人薪酬政策</p>,
      children:
      <p>本公司經理人分派之酬勞包含薪資及獎金，其中薪資係參考同業水準及依其職級職等、學 ( 經 ) 歷、專業 能力與職責等項目，而獎金則係依照公司內部「績效考核管理辦法」考量經理人績效評估項目，其中包含財 務性指標 ( 如公司營收、稅前淨利與稅後淨利之達成率 )，並依據薪酬委員會建議分配原則，由董事會核定。 酬勞比例則依循本公司章程第十七條、第二十條規定，扣除員工酬勞及董事酬勞前之本期稅前淨利，應提撥 1%~5% 作為員工酬勞 ( 含經理人 )。</p>,
    },
  ];

  const LongTermGoals: React.FC = () => (
    <>
      <img src={img03} className="w-full max-w-[1200px] mt-md" alt="img" />
    </>
  );

  const goals = ["2023", "2022", "2021", "2020"];

  return (
    <div>
      <HeroBanner
        title="薪資報酬委員會"
        description={`本公司於2011年完成設置薪資報酬委員會，並由董事會訂定「薪資報酬委員會組織規程」，\n藉以強化公司治理，健全公司董事及經理人薪資報酬制度。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">薪資報酬委員會</p>
          <p className="mt-md content">
            成立薪資報酬委員會會旨在於協助董事會執行與評估公司整體薪酬與福利政策及經理人之報酬，以強化公司治理。薪酬審核、績效及調薪等作業，相關薪酬政策及規範皆訂於本公司辦法及規章中。{" "}
            <br />
            <br />
            本屆薪資報酬委員會由董事會任命，由林佩蓉獨立董事擔任召集人，成員為三位獨立董事。本公司薪資報酬委員會每年至少召開兩次，並得視需要隨時召開之，2022
            年度共召開 2 次，委員出席率達
            100%。該委員會以善良管理人之注意，依法忠實履行相關職權，並將所提建議提交董事會討論。
            <br />
            <br />
            本公司為了讓委員會成員更加瞭解相關法令規範及公司實際運作狀況，亦安排會議就薪資報酬委員會相關法令規定及公司高階經理人薪酬福利現況向委員會成員進行簡報。
          </p>

          <p className="mt-xl sub-title text-center">薪酬政策</p>
          <div className="mt-md">
            <CollapsibleList items={items} />
          </div>

          <p className="mt-xl sub-title text-center">第五屆薪酬委員會成員</p>
          <p className="mt-md notes">任期：2022/06/17~2025/06/16</p>
          <img src={img01} className="w-full max-w-[1200px]" alt="img" />

          <p className="mt-xl sub-title text-center">薪酬委員會運作情形</p>
          <img src={img02} className="w-full max-w-[1200px] mt-md" alt="img" />
          <p className="mt-md notes">
            符合之資格條件： <br />
            1.商務、法務、財務、會計或公司業務所需相關科系之公私立大專院校講師以上。
            <br />
            2.法官、檢察官、律師、會計師或其他與公司業務所需之國家考試及格須有證書之專門職業及技術人員。
            <br />
            3.具有商務、法務、財務、會計或公司業務所需之工作經驗
            <br />
            <br />
            <span className="text-xs">
              註：本項應於設置或廢止薪酬委員會，成員委(選)任及異動後二日內輸入，任期中辭任者，請於備註乙欄明寫X年X月X日辭任。
            </span>
          </p>

          <p className="mt-xl sub-title text-center">薪酬委員會績效評估</p>
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <LongTermGoals />
            </div>
            <div data-goal="2022">
              <LongTermGoals />
            </div>
            <div data-goal="2021">
              <LongTermGoals />
            </div>
            <div data-goal="2020">
              <LongTermGoals />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default CompensationCommittee;
