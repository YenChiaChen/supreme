import { YearTabContainer } from "../components/ui/Tab";

type CharityItem = {
  years: string;
  name: string;
  item: string;
  numbers: number;
};

export const newsData: CharityItem[] = [
  {
    years: "2023",
    name: "財團法人輔仁大學",
    item: "理工學院新建實驗大樓基金",
    numbers: 500000,
  },
  {
    years: "2023",
    name: "國立台灣師範大學",
    item: "「動手做STEAM多元智能晨光時間」教育計畫",
    numbers: 500000,
  },
  {
    years: "2023",
    name: "國立台灣師範大學",
    item: "IEYI世界青少年發明展國際賽贊助款",
    numbers: 500000,
  },
  {
    years: "2023",
    name: "台灣科技公益協進會",
    item: "科技盃高爾夫球贊助款",
    numbers: 300000,
  },
  {
    years: "2023",
    name: "卓越高爾夫推廣協會",
    item: "深耕高爾夫球運動，培育優秀選手",
    numbers: 200000,
  },
  {
    years: "2023",
    name: "財團法人輔仁大學籃球校隊",
    item: "深耕籃球運動，培育優秀選手",
    numbers: 300000,
  },
  {
    years: "2023",
    name: "台灣永續經營發展協會",
    item: "促進台灣永續經營發展",
    numbers: 300000,
  },
  {
    years: "2023",
    name: "中華民國紅十字會",
    item: "因2023年「土耳其強震」發生，公司號召員工參與愛心一日捐活動，公司亦秉持社會關懷一同捐款。",
    numbers: 1000000,
  },
  {
   
    years: "2023",
    name: "社團法人台北市內湖港墘福德協會",
    item: "社區參與",
    numbers: 36000,
  },
  {
   
    years: "2022",
    name: "台灣永續經營發展協會",
    item: "促進台灣永續經營發展",
    numbers: 300000,
  },
  {
   
    years: "2022",
    name: "台灣科技公益協進會",
    item: "科技盃高爾夫球贊助款",
    numbers: 300000,
  },
  {
   
    years: "2022",
    name: "財團法人第一社會福利基金會",
    item: "公益高爾夫球名人賽贊助款",
    numbers: 200000,
  },
  {
   
    years: "2022",
    name: "台北市內湖社團法人港墘福德協會",
    item: "社區參與",
    numbers: 39000,
  },
  {
   
    years: "2022",
    name: "財團法人輔仁大學",
    item: "理工學院新建實驗大樓基金",
    numbers: 500000,
  },
  {
    years: "2022",
    name: "社團法人臺灣照顧生命協會",
    item: "照顧生命協會-愛無差別",
    numbers: 50000,
  },
  {
    years: "2021",
    name: "台灣永續經營發展協會",
    item: "促進台灣永續經營發展和相關社會團體合作",
    numbers: 200000,
  },
  {
    years: "2021",
    name: "台灣眾藝益百人文關懷協會",
    item: "點燃HOPE圓夢-松山春暉_母親節",
    numbers: 50000,
  },
  {
    years: "2021",
    name: "台灣科技公益協進會",
    item: "贊助款",
    numbers: 500000,
  },
  {
    years: "2021",
    name: "財團法人第一社會福利基金會",
    item: "公益高爾夫球名人賽贊助款",
    numbers: 220000,
  },
  {
    years: "2021",
    name: "台北市內湖社團法人港前福德協會",
    item: "社區參與",
    numbers: 30000,
  },
  {
    years: "2020",
    name: "輔仁大學",
    item: "2020理工學院新建實驗大樓基金(F630106)",
    numbers: 500000,
  },
  {
    years: "2020",
    name: "台灣科技公益協進會",
    item: "贊助",
    numbers: 600000,
  },
  {
    years: "2020",
    name: "台北市內湖社團法人港墘福德協會",
    item: "社區關懷",
    numbers: 42000,
  },
  {
    years: "2020",
    name: "台灣蝴蝶保育學會",
    item: "環境保育",
    numbers: 35000,
  },
  {
    years: "2020",
    name: "恆基醫療財團法人恆春基督教醫院",
    item: "興建醫療大樓",
    numbers: 300000,
  },
  {
    years: "2019",
    name: "輔仁大學",
    item: "2019理工學院新建實驗大樓基金(F630106)",
    numbers: 500000,
  },
  {
    years: "2019",
    name: "台灣科技公益協進會",
    item: "贊助款",
    numbers: 500000,
  },
  {
    years: "2019",
    name: "台灣科技公益協進會",
    item: "8/29匠人義賣球袋贊助款",
    numbers: 13000,
  },
  {
    years: "2019",
    name: "中華趕路的雁全人關懷協會",
    item: "捐款",
    numbers: 300000,
  },
  {
    years: "2019",
    name: "財團法人忠義社會福利事業基金會",
    item: "2019/05/04- 童漾家年華愛心園遊會 參與攤位認養",
    numbers: 100000,
  },
  {
    years: "2019",
    name: "國立臺灣大學",
    item: "學術回饋金",
    numbers: 3836,
  },
  {
    years: "2018",
    name: "私立輔仁大學",
    item: "電機系系所發展基金(F630801)",
    numbers: 500000,
  },
  {
    years: "2018",
    name: "台灣科技公益協進會",
    item: "贊助款",
    numbers: 300000,
  },
  {
    years: "2018",
    name: "中華民國網球協會",
    item: "華國三太子盃贊助款",
    numbers: 500000,
  },
  {
    years: "2018",
    name: "財團法人忠義社會福利事業基金會",
    item: "2018/05/14「帶我尋家趣」愛心園遊會 參與攤位認養",
    numbers: 50000,
  },
  {
    years: "2018",
    name: "國立台灣大學",
    item: "學術回饋金(第3期)",
    numbers: 200000,
  },
  {
    years: "2017",
    name: "社團法人中華公司治理協會",
    item: "贊助新書發表",
    numbers: 300000,
  },
  {
    years: "2017",
    name: "私立輔仁大學",
    item: "電機系系所發展基金(F630801)",
    numbers: 500000,
  },
  {
    years: "2017",
    name: "國立台灣大學",
    item: "學術回饋金",
    numbers: 200000,
  },
  {
    years: "2017",
    name: "財團法人忠義社會福利事業基金會",
    item: "2017/05/06「愛你一起童舞同樂」愛心園遊會攤位認養	",
    numbers: 50000,
  },
  {
    years: "2017",
    name: "台灣科技公益協進會",
    item: "贊助款",
    numbers: 300000,
  },
  {
    years: "2017",
    name: "台灣科技公益協進會",
    item: "松山高中籃球基金贊助款",
    numbers: 80000,
  },
  {
    years: "2016",
    name: "財團法人薛伯輝基金會",
    item: "捐款-「興建伯利恆早療暨融合教育中心」",
    numbers: 10000,
  },
  {
    years: "2016",
    name: "台灣科技公益協進會",
    item: "贊助款",
    numbers: 300000,
  },
  {
    years: "2016",
    name: "國立台灣大學",
    item: "學術回饋金",
    numbers: 200000,
  },
  {
    years: "2016",
    name: "國立台灣大學",
    item: "FG181臺大永續基金(臺大EMBA校友菁英學者講座永續基金)",
    numbers: 1000000,
  },
  {
    years: "2016",
    name: "輔仁大學",
    item: "捐款-興建「理工學院新實驗大樓」",
    numbers: 400000,
  },
  {
    years: "2015",
    name: "財團法人竹銘教學基金會",
    item: "NCTU Angel Club Working Group捐款",
    numbers: 50000,
  },
  {
    years: "2015",
    name: "社團法人台灣女子職業高爾夫協會",
    item: "高爾夫球科技盃女子組贊助款",
    numbers: 300000,
  },
  {
    years: "2015",
    name: "財團法人大甲媽社會福利基金會附設臺中市私立鎮瀾宮兒童家園、內政部中區兒童之家、財團法人基督教台北市私立伯大尼兒少家園、衛生福利部北區兒童之家、財團法人天主教福利會...等單位",
    item: "捐贈物資，共計花東山泉米1,800公斤",
    numbers: 160000,
  },
  {
    years: "2015",
    name: "輔仁大學",
    item: "捐款-興建「理工學院新實驗大樓」",
    numbers: 300000,
  },
  {
    years: "2015",
    name: "財團法人薛伯輝基金會",
    item: "捐款-「興建伯利恆早療暨融合教育中心」",
    numbers: 10000,
  },
];

const CharityTable: React.FC = () => {
  const groupedByYear = newsData.reduce((acc: any, curr) => {
    const year = curr.years;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(curr);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort(
    (a, b) => Number(b) - Number(a)
  ); 

  return (
    <YearTabContainer years={years} tabColor="#A36ACA">
      {years.map((year) => {
        const yearData = groupedByYear[year];

        const totalDonation = yearData.reduce((sum: number, item: any) => {
          const amount = typeof item.numbers === "string"
            ? parseInt(item.numbers.replace(/,/g, ""), 10)
            : item.numbers;
          return sum + amount;
        }, 0);

        return (
          <div key={year} className="mb-12" data-year={year}>
            <table className="min-w-full bg-white mt-6 ">
              <thead className="text-white tracking-widest">
                <tr>
                  <th className="py-4 px-4 bg-purple border-white border">對象</th>
                  <th className="py-4 px-4 bg-purple border-white border">捐贈項目</th>
                  <th className="py-4 px-4 bg-purple border-white border">金額</th>
                </tr>
              </thead>
              <tbody>
                {yearData.map((item: any, index: number) => {
                  const formattedNumber = typeof item.numbers === "string"
                    ? parseInt(item.numbers.replace(/,/g, ""), 10).toLocaleString()
                    : item.numbers.toLocaleString();
                  
                  return (
                    <tr
                      key={item.id}
                      className={`${index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-[#F3EFF7]"} text-center`}
                    >
                      <td className="py-6 px-4 border-white border-[2px]">{item.name}</td>
                      <td className="py-6 px-4 border-white border-[2px]">{item.item}</td>
                      <td className="py-6 px-4 border-white border-[2px]">{formattedNumber}</td>
                    </tr>
                  );
                })}
                <tr className="bg-[#EDEDED] text-center ">
                  <td className="py-6 px-4 border-white border-[2px]" colSpan={2}>
                    年度捐款贊助總金額
                  </td>
                  <td className="py-6 px-4 border-white border-[2px]">{totalDonation.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </YearTabContainer>
  );
};

export default CharityTable;
