import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/幸福企業/人力資源分佈.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import RingChart from "../../components/chart/RingChart";
import { YearTabContainer } from "../../components/ui";
import { HRData } from "../../data/HRData";
const HRDistribution: React.FC = () => {
  const years = HRData.map((yearData) => yearData.year);
  return (
    <div className="mb-48">
      <HeroSection
        title="人力資源分布"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
          <H2 text={"人力資源分布"} />

          <YearTabContainer years={years} tabColor="#FF507C">
            {HRData.map((yearData, yearIndex) => (
              <div key={yearIndex} data-year={yearData.year}>
                {/* Render the description */}
                <P text={yearData.description} />

                {yearData.subTitles.map((subTitleData, subIndex) => (
                  <div key={subIndex}>
                    <P text={subTitleData.subTitle} className="text-pink text-xl text-center font-semibold pt-24 pb-8" />

                    <div className="grid grid-cols-3 gap-x-6 gap-y-36 mt-6">
                      {subTitleData.charts.map((chart, chartIndex) => (
                        <div className="flex justify-center">
                          <RingChart
                            key={chartIndex}
                            title={chart.title}
                            size={chart.size}
                            strokeWidth={chart.strokeWidth}
                            gap={chart.gap}
                            segments={chart.segments}
                            unit={chart.unit}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </YearTabContainer>
        </Section>
      </Container>
    </div>
  );
};

export default HRDistribution;
