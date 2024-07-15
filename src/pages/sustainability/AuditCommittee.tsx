import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import img01 from "../../assets/img/testing/compensation-committee-01.png";
import img02 from "../../assets/img/testing/compensation-committee-02.png";
import img03 from "../../assets/img/testing/compensation-committee-03.png";
import img04 from "../../assets/img/testing/compensation-committee-04.png";
import CollapsibleList from "../../components/ui/CollapsibleList ";
import TabContainer from "../../components/ui/TabContainer";
import Table from "../../components/ui/Table";
const AuditCommittee: React.FC = () => {
  const breadcrumbItems = [
    { label: "永續經營", href: "/sustainability" },
    { label: "功能性委員會" },
    { label: "審計委員會" },
  ];
  const items = [
    {
      title: <p>一、審閱財務報告</p>,
      children:
        <p>董事會造送本公司111年度營業報告書、財務報告及盈餘分配議案，其中111年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。</p>,
    },
    {
      title: <p>二、委任簽證會計師</p>,
      children:
        <p>董事會造送本公司111年度營業報告書、財務報告及盈餘分配議案，其中111年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。</p>,
    },
    {
      title: <p>三、評估內部控制制度之有效性</p>,
      children:
        <p>董事會造送本公司111年度營業報告書、財務報告及盈餘分配議案，其中111年度財務報表經董事會委任之安侯建業聯合會計師事務所于紀隆會計師及黃泳華會計師查核完竣，並出具查核報告。經本審計委員會查核認為尚無不合。</p>,
    },
  ];
  const columns = [
    { header: '身份別', accessor: 'identity' },
    { header: '姓名', accessor: 'name' },
    { header: '主要學經歷', accessor: 'education' },
    { header: '主要現職', accessor: 'current' },
  ];

  const data = [
    { identity: '獨立董事', name: '林佩蓉', education: '國立台灣大學管理學院', current: '安和智通（股）董事長' },
  ];

  const LongTermGoals: React.FC = () => (
    <>
      <p className="notes">
        2023年度：於2024年01月31日經薪酬委員會審核通過，同日提報董事會。
      </p>
      <CollapsibleList items={items} />
    </>
  );
  const Second: React.FC = () => (
    <>
      <p className="notes">
        2023年度：於2024年01月31日經薪酬委員會審核通過，同日提報董事會。
      </p>
      <img src={img04} className="w-full max-w-[1200px] mt-md"  alt='img'  />
    </>
  );

  const goals = ["2023", "2022", "2021"];

  return (
    <div>
      <HeroBanner
        title="審計委員會"
        description={`本公司於2019年完成設置審計委員會，並由董事會訂定「審計委員會組織規程」，藉以強化公司治理，健全公司管理制度。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto px-[10%] mt-8 pt-18">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">審計委員會</p>
          <p className="mt-md content">
            審計委員會旨在協助董事會履行其監督公司在執行有關會計、稽核、財務報導流程及財務控制上的品質和誠信度。
            <br />
            <br />
            依照中華民國證券交易法及相關行政命令規定，審計委員會應由全體獨立董事組成，其人數不得少於三人。本公司審計委員會的設置完全符合上開法規的要求。
            <br />
            <br />
            審計委員會為履行其職責，依其組織章程規定有權進行任何適當的審核及調查，並且與公司內部稽核人員、簽證會計師及所有員工間皆有直接聯繫之管道。審計委員會也有權聘請律師、會計師或其他顧問，協助審計委員會執行職務。審計委員會至少每季召開一次常會。
          </p>

          <p className="mt-xl sub-title text-center">第二屆審計委員會成員</p>
          <img src={img01} className="w-full max-w-[1200px] mt-md"  alt='img'  />
          <Table columns={columns} data={data} />
          <p className="mt-xl sub-title text-center">審議事項列表</p>
          <img src={img02} className="w-full max-w-[1200px] mt-md"  alt='img'  />

          <p className="mt-xl sub-title text-center">
            各年度審計委員會審議情形
          </p>
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
          </TabContainer>

          <p className="mt-xl sub-title text-center">審計委員會運作情形</p>
          <p className="notes mt-md">
            本屆委員任期：2022年06月17日至2025年06月16日，截至2024年03月11日，出席情形如下：
          </p>
          <img src={img03} className="w-full max-w-[1200px]"  alt='img'  />
          <TabContainer goals={goals}>
            <div data-goal="2023">
              <Second />
            </div>
            <div data-goal="2022">
              <Second />
            </div>
            <div data-goal="2021">
              <Second />
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default AuditCommittee;
