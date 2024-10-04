import HeroSection from "../../components/ui/HeroSection";
import BgImage from "../../assets/img/subPage/永續經營/誠信經營.jpg";
import Breadcrumbs from "../../components/nav/BreadCrumbs";
import navItems from "../../data/nav.json";
import { Image } from "../../components/ui/Image";
import WhistleblowerImage from "../../assets/img/subPage/永續經營/whistleblower-banner.png";
import AuditStructureImage from "../../assets/img/subPage/永續經營/audit-structure.png";
import { Desc, H2, H3, List, P } from "../../components/ui/Text";
import { BgSection, Container, Section } from "../../components/ui/Container";
import { faBullseye, faPlay } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { YearTabContainer } from "../../components/ui/Tab";
import {
  faArrowUpRightFromSquare,
  faBadgeCheck,
} from "@fortawesome/pro-light-svg-icons";
const EthicalManagement: React.FC = () => {
  return (
    <div className="mb-48">
      <HeroSection
        title="誠信經營"
        description={`建立誠實信用的企業文化可以強化客戶的信任度，提高服務滿意度，增加營業銷售額，創造股東最大利益，達到永續經營的目標。`}
        backgroundImage={BgImage}
        center={true}
      />
      <Container className="mt-12">
        <Breadcrumbs items={navItems} />

        <H2 text={"誠信經營"} />
      </Container>

      <BgSection color="#ECF2FD" className="mt-md">
        <Container>
          <Section>
            <div className="relative z-10 py-24 grid grid-cols-3 items-center">
              <div className="border-t-[2px] border-blue h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  整體目標
                </p>

                <Desc
                  text={
                    "持續推動誠信經營理念，將此信念深植在每位員工心中，轉化為公司創新成長的動力。\n\n至上承諾遵守公平交易，以誠信為最高原則推動公司永續經營成長。"
                  }
                />

                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex  flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  中期目標
                </p>
                <Desc
                  text={
                    "要求供應商簽署誠信承諾，持續觀察與供應商往來交易，改善誠信經營不足之處。"
                  }
                />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
              <div className="border-t-[2px] border-blue h-full flex flex-col relative px-12 py-6 relative">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <FontAwesomeIcon
                  icon={faPlay}
                  className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-blue h-[30px]"
                />
                <p className="text-2xl font-bold text-blue tracking-widest mt-12 mb-5">
                  長期目標
                </p>

                <Desc text={"所有供應商皆簽署誠信承諾。"} />
                <div className="w-full h-full absolute left-0 top-0 border-l-[1px] border-dashed border-blue"></div>
              </div>
            </div>
          </Section>
        </Container>
      </BgSection>

      <Container>
        <Section>
          <H2 text={"誠信經營政策"} />
          <P
            text={
              "本公司為健全誠信經營之管理，由執行長室負責誠信經營政策之制定、推行及監督運作。本公司已於2019年11月12日董事會通過，訂定「誠信經營守則」及「誠信經營作業程序及行為指南」，並將相關規範揭露於公司網站及公開資訊觀測站中，每年定期（至少一次）將執行情形彙整後向董事會進行報告說明。"
            }
          />
        </Section>

        <Section>
          <H2 text={"誠信經營執行情形"} />
          <YearTabContainer years={["2023", "2022"]} tabColor="#3B79E4">
            <div data-year="2023">
              <P
                text={
                  "本公司每年不定期以教育訓練課程或電子郵件形式對董事、經理人及受僱人進行「誠信經營守則」及「防範內線交易管理」等相關法令宣導。2023年度已分別於02月14日（第一梯次）、02月21日（第二梯次），向全體員工進行「誠信經營暨公平交易、反貪腐」及「防範內線交易管理」之教育訓練宣導課程，課程內容包括建立誠信經營之企業文化及健全發展、內線交易形成原因、認定過程及交易實例說明，並將課程簡報發送予員工作為參考，2023年誠信經營相關課程實體受訓人數共160位，其餘人員皆以數位方式進行溝通宣導，累計總時數共計80小時。"
                }
              />
              <H3
                text={"通知財務報告封閉期間："}
                className="text-blue"
              />

              <table className="min-w-full border-collapse mt-6">
                <thead>
                  <tr className="bg-blue text-white content">
                    <th className="border border-white px-4 py-2 rounded-tl-2xl  whitespace-pre">
                      日期
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre">
                      項目
                    </th>
                    <th className="border border-white px-4 py-2 rounded-tr-2xl  whitespace-pre ">
                      連結
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.10.13
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年Q3財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4Q3%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.07.17
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年Q2財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4Q2%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.04.19
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      112年Q1財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/112%E5%B9%B4Q1%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2023.02.07
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年年度財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/111%E5%B9%B4%E5%B9%B4%E5%BA%A6%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <H3
                text={
                  "本年度履行誠信經營之執行情形已於2023年3月9日董事會進行報告說明，內容摘要如下："
                }
                className="text-blue"
              />
              <ul className="border-t-[2px] border-light_gray mt-6">
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    為持續履行企業誠信經營政策，本公司除訂有「公司治理實務守則」、「誠信經營守則」、「誠信經營作業程序及行為指南」、
                    「企業社會責任實務守則」
                    及「道德行為準則」等規範外，並會配合法令修改及實際需求及時修訂相關規範。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    本公司除加強內部教育訓練外，並持續監督相關部門於履行政策推行之運作，並於董事會進行報告。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    本公司透過年報、公開資訊觀測站、公司網站…等，及時揭露相關資訊，以提供股東及利害關係人了解公司運作狀況。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    本公司設立“稽核信箱”之檢舉管道，於2022年度並未接獲任何投訴檢舉事項。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    本公司網站業已設置「投資人專區」，並新增英文重大訊息資訊，提升資訊透明度。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    本公司為落實公司治理，已全面採行董事提名制度，且業已設置公司治理人員及主管。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    股東常會已採行電子投票方式，鼓勵股東參與公司治理及提高股東出席比率。
                  </p>
                </li>
                <li className="border-b border-light_gray py-6 flex gap-12 items-center">
                  <FontAwesomeIcon
                    icon={faBadgeCheck}
                    className="h-[40px] text-blue"
                  />
                  <p className="content">
                    2022年共舉辦二場(07/20、07/21)企業誠信經營宣導課程，共計參與課程之員工人數達123人。
                  </p>
                </li>
              </ul>
            </div>
            <div data-year="2022">
              <P
                text={
                  "本年度已分別於2022年07月20日（第一梯次）、07月21日（第二梯次），合計123人時，向本公司全體員工進行「誠信經營守則」及「防範內線交易管理」之教育訓練宣導課程，課程內容包括建立誠信經營之企業文化及健全發展、內線交易形成原因、認定過程及交易實例說明，並將課程簡報以郵件發送予員工作為參考。"
                }
              />

              <H3
                text={"通知財務報告封閉期間："}
                className="text-blue"
              />

              <table className="min-w-full border-collapse mt-6">
                <thead>
                  <tr className="bg-blue text-white content">
                    <th className="border border-white px-4 py-2 rounded-tl-2xl  whitespace-pre">
                      日期
                    </th>
                    <th className="border border-white px-4 py-2  whitespace-pre">
                      項目
                    </th>
                    <th className="border border-white px-4 py-2 rounded-tr-2xl  whitespace-pre ">
                      連結
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.10.06
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年Q3財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_Q3.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.07.18
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年Q2財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_Q2.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.04.19
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      111年Q1財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_Q1.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.02.15
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre  ">
                      年度財務報告【封閉期間】通知
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E9%80%9A%E7%9F%A5_%E5%B9%B4%E5%BA%A6.jpg"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-light_gray px-4 py-6 text-center">
                      2022.01.24
                    </td>
                    <td className="border-b border-light_gray px-8 py-2 whitespace-pre ">
                      防範內線交易宣導_財報封閉期
                      【於董事會上宣導/人次：7席董事(含獨立董事)】
                    </td>
                    <td className="border-b border-light_gray px-12 py-2 text-center">
                      <a
                        href="http://www.supreme.com.tw/File/1110124%E5%A0%B1%E5%91%8AC-%E9%98%B2%E7%AF%84%E5%85%A7%E7%B7%9A%E4%BA%A4%E6%98%93%E5%AE%A3%E5%B0%8E_%E8%B2%A1%E5%A0%B1%E5%B0%81%E9%96%89%E6%9C%9F-1.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-blue h-[30px] duration-300 cursor-pointer hover:scale-[1.05] hover:opacity-100 opacity-70"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </YearTabContainer>
        </Section>
      </Container>

      <BgSection color="#ECF2FD" className="mt-xl">
        <Container>
          <div className="grid grid-cols-2 gap-x-0 gap-y-8 py-16">
            <H3
              text={"內部稽核之稽核組織"}
              className="text-blue col-span-2 mt-0"
            />

            <div className="flex flex-col justify-center pr-24">
              <img
                src={AuditStructureImage}
                alt="Board Stru"
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <List
                items={[
                  {
                    text: " 本公司設置隸屬於董事會之稽核室，配置適任且專任之稽核人員，目前編制為稽核主管一人、稽核人員二人，共三人。其中內部稽核主管之任免，前經董事會決議通過。",
                  },
                  {
                    text: "於109年3月12日訂定「公司治理實務守則」，本公司內部稽核人員之任免、每年執行考評乙次、薪資報酬係由稽核主管簽報至本公司董事長核定。",
                  },
                  {
                    text: "內部稽核人員均符合法令規定之適任條件，每年持續進修並參加金管會認定機構所舉辦之內部稽核講習，以提升稽核品質及能力。",
                  },
                ]}
                listType="disc"
              />
            </div>
          </div>
        </Container>
      </BgSection>

      <Container>
      

        <Section>
            <H2 text={"舉報管道與機制"} />
            <P text={"本公司承諾保護檢舉人不因檢舉情事而遭不當處置，檢舉情事經查證若屬實，並協助公司避免損失，將會給予適當獎勵，以鼓勵內部員工與外部其他利害關係人檢舉不誠信與不當行為。"} />
            <Image src={WhistleblowerImage} alt="WhistleBlower Banner Image" />
        </Section>
        
    
      </Container>
    </div>
  );
};

export default EthicalManagement;
