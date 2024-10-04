import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/智慧財產權管理.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import AnimatedList from "../../components/ui/List";
import { H2, P } from "../../components/ui/Text";
import { Container, Section } from "../../components/ui/Container";
import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons";
const IntellectualProperty: React.FC = () => {

    const AnimatedListItems1 = [
        {
          id: 1,
          content: "由研發、法務、業務及其他相關人員共同分析研擬，確認專利價值及申請之必要性後，送研發會議討論後決行，並記錄於會議紀錄中。",
          title: "1・成案",
          titleColor: "#3B79E4",
        },
        {
          id: 2,
          content: "由研發部人員擬具專利佈局規劃，並負責專利之申請、答辯及維護。必要時，由研發、法務人員與專利事務所接洽，討論智慧財產相關事宜，並由法務、業務人員與客戶溝通，研發人員從旁協助。上述發明、新型或設計，於未申請獲准專利前，所有接觸該發明或創作之工作人員，就與該發明或創作有關之資料均應負保密義務。",
          title: "2・申請",
          titleColor: "#3B79E4",
        },
        {
          id: 3,
          content: "研發人員應妥善保存智慧財產權研發過程之報告或紀錄，作為智慧財產權爭訟時之舉證資料，各該報告或紀錄之管理方法由研發部門依其性質訂定。本公司所有之智慧財產權遭第三人提出異議、無效或法律爭訟程序時，該智慧財產權之開發人員應協助公司進行合法防禦，如係遭他人侵權之案件，亦應協助公司進行侵害可能性之鑑定工作，以確保本公司及利害關係人之合法權益。專利證書由研發部門負責保管及每年專利維護。",
          title: "3・保管、訴訟及維護",
          titleColor: "#3B79E4",
        },
    ]
    const AnimatedListItems2 = [
        {
          id: 1,
          content: "本公司規劃、設計新商標時，主辦、會辦部門均應負保密義務，屬於委外設計案者，應於委任契約明訂保密條款及受任人違約洩密之賠償責任。",
        },
        {
          id: 2,
          content: "各部門應使用本公司之商標於商標證書上列示之商品及本公司營業上，以維持本公司之商標專用權。",
        },
        {
          id: 3,
          content: "註冊商標之使用應依本公司所列示之圖樣，不得任意變更商標圖樣及文字之高、寬、直徑之比率及其各部分之相對位置，亦不得在商標圖樣內加註文字或圖案。",
        },
        {
          id: 4,
          content: "由法務人員負責商標之申請與維護。",
        },
    ]
    const AnimatedListItems3 = [
        {
          id: 1,
          content: "本公司之進貨、銷貨記錄等資料，由 Oracle系統控管。",
        },
        {
          id: 2,
          content: "本公司員工皆須遵循Oracle系統分層授權之規範，落實交易資料之管控。",
        },
        {
          id: 3,
          content: "本公司與員工簽屬保密合約，確保營業資料不外洩。",
        },
        {
          id: 4,
          content: "本公司各部門辦理對公司之生產、銷售、經營等具有經濟價值或屬機密性質之資料時，應採取適當保密措施。",
        },
        {
          id: 5,
          content: "本公司員工離職前應繳還其持有之公司資料、文件、報告、檔案等營業秘密。",
        },
    ]
    const AnimatedListItems4 = [
        {
          id: 1,
          content: "2023年01月12日董事會完成執行情形報告，如附件",
          download: 'http://www.supreme.com.tw/File/1120112智慧財產管理執行情形.pdf',
        },
        {
          id: 2,
          content: "2022年01月24日董事會完成執行情形報告，如附件",
          download: 'http://www.supreme.com.tw/File/1110124智慧財產管理執行情形.pdf',
        },
        {
          id: 3,
          content: "2021年01月08日董事會完成執行情形報告，如附件",
          download: 'http://www.supreme.com.tw/File/1100108智慧財產管理執行情形.pdf',
        },
        {
          id: 4,
          content: "2020年11月經董事會通過訂定「智慧財產管理計畫」",
        },
    ]
  return (
    <div className="mb-48">
      <HeroSection
        title="智慧財產管理"
        description={`本公司為有效管理本公司智慧財產權，於2020年11月經董事會通過訂定「智慧財產管理計畫」。範圍包含：專利權、商標權、著作權及營業秘密，對象涵蓋本公司員工及參與本公司研究計畫之外部人士所產出或取得之各種智慧財產。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Section>
          <Breadcrumbs items={navItems} />
        </Section>

        <Section>
          <H2 text={"專案管理"} className="pb-8" />
            <AnimatedList items={AnimatedListItems1} />
        </Section>
        <Section>
          <H2 text={"商標管理"} className="pb-8" />
            <AnimatedList items={AnimatedListItems2} />
        </Section>
        <Section>
          <H2 text={"營業秘密管理"} className="pb-8" />
            <AnimatedList items={AnimatedListItems3} />
        </Section>
        <Section>
          <H2 text={"執行報告"} className="pb-8"/>
            <AnimatedList items={AnimatedListItems4} />
        </Section>
      </Container>
    </div>
  );
};

export default IntellectualProperty;
