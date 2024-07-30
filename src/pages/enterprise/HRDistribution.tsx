import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/bg.png";
import React from "react";
import PieChart from "../../components/charts/PieChart";
import TabContainer from "../../components/ui/TabContainer";
const HRDistribution: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "人力資源分佈" },
  ];
  const pieData = [
    { id: "正職", label: "正職", value: 96.4, color: "#FF507C" },
    { id: "約聘", label: "約聘", value: 3.6, color: "#FF7C9D" },
  ];

  const pieData2 = [
    { id: "全職", label: "全職", value: 100, color: "#FF507C" },
    { id: "兼職", label: "兼職", value: 0, color: "#FF7C9D" },
  ];
  const pieData3 = [
    { id: "男性", label: "男性", value: 67.8, color: "#FF507C" },
    { id: "女性", label: "女性", value: 32.2, color: "#FF7C9D" },
  ];
  const pieData4 = [
    { id: "<35", label: "<35", value: 27.0, color: "#FF507C" },
    { id: "35-45", label: "35-45", value: 28.5, color: "#FF7C9D" },
    { id: ">45", label: ">45", value: 44.5, color: "#FFA7BD" },
  ];

  const pieData5 = [
    { id: "主管", label: "主管", value: 39.2, color: "#FF507C" },
    { id: "非主管", label: "非主管", value: 60.8, color: "#FF7C9D" },
  ];
  const pieData6 = [
    { id: "女性", label: "女性", value: 18.1, color: "#FF507C" },
    { id: "男性", label: "男性", value: 81.9, color: "#FF7C9D" },
  ];
  const pieData7 = [
    { id: "21-30", label: "21-30", value: 35.7, color: "#FF507C" },
    { id: "31-40", label: "31-40", value: 25, color: "#FF7C9D" },
    { id: "41-50", label: "41-50", value: 25, color: "#FFA7BD" },
    { id: ">51", label: ">51", value: 14.3, color: "#FFD3DE" },
  ];
  const pieData8 = [
    { id: "女性", label: "女性", value: 39.3, color: "#FF507C" },
    { id: "男性", label: "男性", value: 60.7, color: "#FF7C9D" },
  ];

  
  const pieData2023 = [
    { id: "正職", label: "正職", value: 95.45, color: "#FF507C" },
    { id: "約聘", label: "約聘", value: 4.55, color: "#FF7C9D" },
  ];

  const pieData20232 = [
    { id: "全職", label: "全職", value: 100, color: "#FF507C" },
    { id: "兼職", label: "兼職", value: 0, color: "#FF7C9D" },
  ];
  const pieData20233 = [
    { id: "男性", label: "男性", value: 69.7, color: "#FF507C" },
    { id: "女性", label: "女性", value: 30.3, color: "#FF7C9D" },
  ];
  const pieData20234 = [
    { id: "台灣", label: "台灣", value: 90.9, color: "#FF507C" },
    { id: "中國", label: "中國", value: 9.1, color: "#FF7C9D" },
  ];

  const pieData20235 = [
    { id: "主管", label: "主管", value: 35.36, color: "#FF507C" },
    { id: "業務行銷", label: "業務行銷", value: 17.68, color: "#FF7C9D" },
    { id: "行政管理", label: "行政管理", value: 29.8, color: "#FFA7BD" },
    { id: "研發人員", label: "研發人員", value: 17.16, color: "#FFD3DE" },
  ];
  const pieData20236 = [
    { id: "女性", label: "女性", value: 17.1, color: "#FF507C" },
    { id: "男性", label: "男性", value: 82.9, color: "#FF7C9D" },
  ];
  const pieData20237 = [
    { id: "21-30", label: "21-30", value: 39.3, color: "#FF507C" },
    { id: "31-40", label: "31-40", value: 25, color: "#FF7C9D" },
    { id: "41-50", label: "41-50", value: 25, color: "#FFA7BD" },
    { id: ">51", label: ">51", value: 10.7, color: "#FFD3DE" },
  ];
  const pieData20238 = [
    { id: "女性", label: "女性", value: 17.9, color: "#FF507C" },
    { id: "男性", label: "男性", value: 82.1, color: "#FF7C9D" },
  ];



  
  const pieData2021 = [
    { id: "非定期契約", label: "非定期契約", value: 95.9, color: "#FF507C" },
    { id: "定期契約", label: "定期契約", value: 4.1, color: "#FF7C9D" },
  ];

  const pieData20212 = [
    { id: "全職", label: "全職", value: 100, color: "#FF507C" },
    { id: "兼職", label: "兼職", value: 0, color: "#FF7C9D" },
  ];
  const pieData20213 = [
    { id: "男性", label: "男性", value: 70.4, color: "#FF507C" },
    { id: "女性", label: "女性", value: 29.6, color: "#FF7C9D" },
  ];

  const pieData20215 = [
    { id: "經理級以上", label: "經理級以上", value: 33.7, color: "#FF507C" },
    { id: "一般員工", label: "一般員工", value: 66.3, color: "#FF7C9D" },
  ];
  const pieData20216 = [
    { id: "女性", label: "女性", value: 15.1, color: "#FF507C" },
    { id: "男性", label: "男性", value: 84.9, color: "#FF7C9D" },
  ];
  const pieData20217 = [
    { id: "21-30", label: "21-30", value: 18.7, color: "#FF507C" },
    { id: "31-40", label: "31-40", value: 12.5, color: "#FF7C9D" },
    { id: "41-50", label: "41-50", value: 45.9, color: "#FFA7BD" },
    { id: ">51", label: ">51", value: 22.9, color: "#FFD3DE" },
  ];
  const pieData20218 = [
    { id: "女性", label: "女性", value: 68.7, color: "#FF507C" },
    { id: "男性", label: "男性", value: 32.3, color: "#FF7C9D" },
  ];

  return (
    <div>
      <HeroBanner
        title="人力資源分布"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={Bg}
        center={true}
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">各年度人力資源分布</p>

          <TabContainer goals={["2023", "2022", "2021"]} tabColor="#FF507C">
            <div data-goal="2023">
              <div>
                <p className="mt-md content">
                  截至 2023 年 12 月 31 日，至上的員工總數為 198 人，其中包含 189
                  名正職人員和 9 名約聘人員，全部的員工皆為全
                  職職位，女性和男性員工人數的比例約為
                  0.43：1.00，主管職由女性擔任之比例為
                  17.14%，員工組成較上一年度無顯著變 化。另，除 198 名員工外，2023
                  年無非員工的工作者。報導期間內及報導期間與前期比較，非員工的工作者人數沒有重大
                  顯著波動。
                </p>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  勞雇型態
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">勞雇合約分佈</p>
                    <PieChart data={pieData2023} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">勞雇類型分佈</p>
                    <PieChart data={pieData20232} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">員工性別分布</p>
                    <PieChart data={pieData20233} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  員工架構
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">職級分佈</p>
                    <PieChart data={pieData20235} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">管理職性別分布</p>
                    <PieChart data={pieData20236} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">工作地區分布</p>
                    <PieChart data={pieData20234} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  新進員工
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">年齡分佈</p>
                    <PieChart data={pieData20237} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">性別分佈</p>
                    <PieChart data={pieData20238} />
                  </div>
                </div>
              </div>
            </div>
            <div data-goal="2022">
              <div>
                <p className="mt-md content">
                  截至2022年12月31日，至上的員工總數為196人，其中包含189名正職人員和7名約聘人員，全部的員工皆為全職職位，女性和男性員工人數的比例約為0.47：1.00，主管職由女性擔任之比例為18.18%，員工組成較上一年度無顯著變化。2022年共招募28位新進員工，新進率約為14.28%，相較2021年(48位)新進員工呈現下降趨勢，主要係受疫情影響，營收成長趨緩，致使人力需求減少。2022年有28名離職員工，主要是績效考核及優化人力所致，其中包含轉調至子公司的4名研發人員，以利發展個人職涯規劃。
                </p>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  勞雇型態
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">勞雇合約分佈</p>
                    <PieChart data={pieData} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">勞雇類型分佈</p>
                    <PieChart data={pieData2} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">員工性別分布</p>
                    <PieChart data={pieData3} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  員工架構
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">年齡分佈</p>
                    <PieChart data={pieData4} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">職級分佈</p>
                    <PieChart data={pieData5} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">管理職性別分布</p>
                    <PieChart data={pieData6} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  新進員工
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">年齡分佈</p>
                    <PieChart data={pieData7} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">性別分佈</p>
                    <PieChart data={pieData8} />
                  </div>
                </div>
              </div>
            </div>
            <div data-goal="2021">
              <div>
                <p className="mt-md content">
                截至2021年底，至上電子股份有限公司員工總數為196人， 男性佔70%，女性約佔30%。
                </p>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  勞雇型態
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">勞雇合約分佈</p>
                    <PieChart data={pieData2021} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">勞雇類型分佈</p>
                    <PieChart data={pieData20212} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">員工性別分布</p>
                    <PieChart data={pieData20213} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  員工架構
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">職級分佈</p>
                    <PieChart data={pieData20215} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">管理職性別分布</p>
                    <PieChart data={pieData20216} />
                  </div>
                </div>

                <p className="text-[20px] font-semibold text-center text-pink mt-xl">
                  新進員工
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">年齡分佈</p>
                    <PieChart data={pieData20217} />
                  </div>
                  <div className="items-center flex flex-col">
                    <p className="text-[18px]">性別分佈</p>
                    <PieChart data={pieData20218} />
                  </div>
                </div>
              </div>
            </div>
          </TabContainer>
        </div>
      </div>
    </div>
  );
};

export default HRDistribution;
