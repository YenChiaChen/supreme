import BgImage from "../../assets/img/subPage/news/bg.png";
import HeroSection from "../../components/ui/HeroSection";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Container, Section } from "../../components/ui/Container";
import { YearTabContainer } from "../../components/ui/Tab";
import { newsData } from "../../data/NewsData";
import { Link } from "react-router-dom";

const NewsPage: React.FC = () => {
  const activityNews = newsData.filter((item) => item.category === "Activity");
  const specialNews = newsData.filter(
    (item) => item.category === "SpecialNews"
  );

  return (
    <>
      <HeroSection backgroundImage={BgImage} title="最新動態" mask={true} />

      <Container className="mt-24 text-[#555555]">
        <Breadcrumbs items={navItems} />

        <Section>
          <YearTabContainer
            years={["精選故事", "永續專欄特別報導", "永續消息"]}
            tabColor="#4C8591"
          >
            <div
              data-year="精選故事"
              className="grid grid-cols-3 gap-6 mt-6"
            ></div>
            <div
              data-year="永續專欄特別報導"
              className="grid grid-cols-3 gap-6 mt-6"
            >
              {specialNews.map((newsItem) => (
                <Link
                  key={newsItem.id}
                  to={`/news/${newsItem.id}`}
                  className="w-full rounded-[1rem] bg-white shadow overflow-hidden group cursor-pointer duration-300 hover:shadow-xl"
                  target="_blank"
                >
                  <div className="w-full overflow-hidden h-[250px]">
                    <img
                      src={newsItem.bg}
                      alt="Background Image"
                      className="object-cover w-full h-full group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-orange font-light text-sm mb-2">
                      {newsItem.location}
                    </div>
                    <p className="text-2xl font-semibold tracking-wider">
                      {newsItem.title}
                    </p>
                    <p className="mt-2 tracking-wider text-sm">
                      {newsItem.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div data-year="永續消息" className="grid grid-cols-3 gap-6 mt-6">
              {activityNews.map((newsItem) => (
                <Link
                  key={newsItem.id}
                  to={`/news/${newsItem.id}`}
                  className="w-full rounded-[1rem] bg-white shadow overflow-hidden group cursor-pointer duration-300 hover:shadow-xl"
                  target="_blank"
                >
                  <div className="w-full overflow-hidden h-[250px]">
                    <img
                      src={newsItem.bg}
                      alt="Background Image"
                      className="object-cover w-full h-full group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-orange font-light text-sm mb-2">
                      {newsItem.location}
                    </div>
                    <p className="text-2xl font-semibold tracking-wider">
                      {newsItem.title}
                    </p>
                    <p className="mt-2 tracking-wider text-sm">
                      {newsItem.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </YearTabContainer>
        </Section>
      </Container>
    </>
  );
};

export default NewsPage;
