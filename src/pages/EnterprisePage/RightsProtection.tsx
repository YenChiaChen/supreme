import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/幸福企業/員工權益保障.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHandshake, faUserClock } from "@fortawesome/pro-light-svg-icons";
const RightsProtection: React.FC = () => {

  return (
    <div className="mb-48">
      <HeroSection
        title="員工權益保障"
        description={`本公司致力於打造能讓員工安心、幸福共融的工作環境。遵循「勞動基準法」與「國際人權公約」，\n制訂明確的工作規則及各項管理政策，以保障員工相關合法權益。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <Section>
        <div className="w-full text-center mb-4 mt-xl">
            <FontAwesomeIcon
              icon={faComments}
              className="text-pink h-[80px]"
            />
          </div>
          <H2 text={"員工溝通管道"} className="!mt-0" />
          <P
            text={
              "為保障每一位員工權益、改善同仁的工作環境並增進勞資溝通管道，依法設立勞資委員會。該委員會不定期召開勞資溝通會議，邀請全公司員工參與並鼓勵同仁提供建言，以了解同仁對於管理或福利制度的看法，這些意見將作為今後改善勞動條件和福利等事項的參考。除勞資溝通會議外，亦在員工餐廳設立員工意見信箱，提供員工隨時能發聲的管道。 2022 年度共舉辦勞資溝通會議 4次，且無發生任何爭訟及勞資間關係須協調事件。"}
          />
        </Section>
        <Section>
        <div className="w-full text-center mb-4 mt-xl">
            <FontAwesomeIcon
              icon={faUserClock}
              className="text-pink h-[80px]"
            />
          </div>
          <H2 text={"勞工退休制度"} className="!mt-0" />
          <P
            text={
              "本公司依據勞動基準法之規定訂定員工退休辦法，組成勞工退休準備金監督委員會，每月按薪資總額2% 提撥退休準備金，同時以該委員會名義存入中央信託局之專戶；2005 年 7月起，遵循政府法令，採個人退休 金專戶制，雇主每月提撥勞工月工資 6 %之退休金存入勞保局之員工個人專戶內。近年來，少子化及高齡化之人口結構問題並未趨緩，為促進中高齡者重新就業以因應勞動力減少的重要課題，實施退休人員回聘措施，提供重新就業的機會，促進與新一世代員工間的交流與合作，以傳承專業技術和豐富的經驗，防範公司專業技能之斷層及流失。"}
          />
        </Section>
        <Section>
        <div className="w-full text-center mb-4 mt-xl">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-pink h-[80px]"
            />
          </div>
          <H2 text={"保障勞資關係"} className="!mt-0" />
          <P
            text={
              "目前無成立工會組織或團體協約。完全依循「勞動基準法」第 16條之規定，當公司即將發生重大營運變化時，依法行使終止勞動契約之最短預告期，保障員工就業權利與勞動條件，同時努力將衝擊降至最低程度。此外，建立與員工長期溝通之機制，以合理有效的方式告知員工可能對他們產生造成重大影響之營運變動。2022年度無營運重大變動之情事發生。"}
          />
             <table className="min-w-full border-collapse mt-md">
            <thead>
              <tr className="bg-pink text-white content">
                <th className="border border-white px-4 py-2">員工年資</th>
                <th className="border border-white px-4 py-2" >預告期間</th>
              </tr>
            </thead>
            <tbody className="content">
              <tr>
                <td className="border border-light_gray px-4 py-2 text-center">繼續工作三個月以上一年未滿</td>
                <td className="border border-light_gray px-4 py-2 text-center">十日前預告</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2 text-center">繼續工作一年以上三年未滿</td>
                <td className="border border-light_gray px-4 py-2 text-center">二十日前預告</td>
              </tr>
              <tr>
                <td className="border border-light_gray px-4 py-2 text-center">繼續工作三年以上</td>
                <td className="border border-light_gray px-4 py-2 text-center">三十日前預告</td>
              </tr>
            </tbody>
          </table>

        </Section>

      </Container>
    </div>
  );
};

export default RightsProtection;