import HeroBanner from "../../components/ui/HeroBanner";
import Breadcrumbs from "../../components/navigation/BreadCrumb";
import Bg from "../../assets/img/bg/subPage/幸福企業/福利措施與關懷.jpg";
import React from "react";
import {
  faShieldAlt,
  faGift,
  faHandHoldingUsd,
  faSmile,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabContainerIcon from "../../components/ui/TabContainerIcon";
import LogoMoonRiver from "../../assets/img/logo/logo_moon_river.png";
import LogoCiaoWin from "../../assets/img/logo/logo_ciaowin.png";
import LogoBesttour from "../../assets/img/logo/logo_besttour.png";
import LogoMashup from "../../assets/img/logo/logo_mashup.png";
import LogoWeibo from "../../assets/img/logo/logo_weibo.png";
import LogoEZTravel from "../../assets/img/logo/logo_eztravel.png";
import Girl from "../../assets/img/testing/girl.png"
const WelfareCare: React.FC = () => {
  const breadcrumbItems = [
    { label: "幸福企業", href: "/enterprise" },
    { label: "員工政策" },
    { label: "福利措施與關懷" },
  ];

  const icons = [
    <FontAwesomeIcon icon={faShieldAlt} className="h-[50px]" />,
    <FontAwesomeIcon icon={faGift} className="h-[50px]" />,
    <FontAwesomeIcon icon={faHandHoldingUsd} className="h-[50px]" />,
    <FontAwesomeIcon icon={faSmile} className="h-[50px]" />,
    <FontAwesomeIcon icon={faUmbrellaBeach} className="h-[50px]" />,
  ];

  return (
    <div>
      <HeroBanner
        title="福利措施與關懷"
        description={`設立職工福利委員會，推行各項員工福利措施，\n包括結婚、生育、生日、喪葬、旅遊、急難補助、電影欣賞、社團活動、年節/慶生禮券等。\n此外亦提供員工教育訓練、團體意外險、員工入股、持股信托、分紅等多種福利項目。`}
        backgroundImage={Bg}
        center={true}
        titleColor="#ffffff"
        contentColor="#ffffff"
      />
      <div className="bg-white">
        <div className="container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%]">
          <Breadcrumbs items={breadcrumbItems} />

          <p className="mt-xl sub-title text-center">員工福利措施</p>

          <TabContainerIcon
            goals={["員工保障", "獎酬福利", "各項補助", "快樂職場", "休假制度"]}
            icons={icons}
            tabColor="#FF507C"
          >
            <div data-goal="員工保障">
              <table className="border-t-[2px] border-light_gray w-full">
                <tbody>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      享健保、勞保、退休金提撥
                    </td>
                    <td className="py-8 text-[16px]">
                      依法為每位員工投保勞工保險、全民健康保險。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      職災保險
                    </td>
                    <td className="py-8 text-[16px]">
                      勞工保險職業災害保險係屬納費互助之社會保險制度，亦具集體連帶分擔風險性質。當被保險人發生職業災害或傷病等保險事故時，可依規定申請醫療或現金給付之補償，使本人或遺屬得到適度之生活安全保障。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      員工團體保險
                    </td>
                    <td className="py-8 text-[16px]">
                      除了法定的保險保障 ( 包含勞工保險、全民健康保險
                      )，另外亦幫每一位同仁加入團體保險，其中團體保險包括了：壽險、重大疾病險、傷害保險、意外保險、重大燒燙，疾病住院險及癌症醫療等保險，讓同仁擁有全方位的保險保障。保費均由公司全額負擔。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      急難救助
                    </td>
                    <td className="py-8 text-[16px]">
                      由福委會專案審查遭受重大災難的員工，並酌予發給適當之慰問金。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div data-goal="獎酬福利">
              <table className="border-t-[2px] border-light_gray w-full">
                <tbody>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      年節獎金
                    </td>
                    <td className="py-8 text-[16px]">
                      於中秋、端午節給予節慶獎金。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      生日禮金
                    </td>
                    <td className="py-8 text-[16px]">於員工生日時給予禮金。</td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      結婚禮金
                    </td>
                    <td className="py-8 text-[16px]">
                      員工結婚時給予祝賀禮金。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      生育禮金
                    </td>
                    <td className="py-8 text-[16px]">
                      員工子女出生後給予祝賀禮金。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      喪葬禮金
                    </td>
                    <td className="py-8 text-[16px]">
                      員工本人、配偶、三等親內直系親屬死亡，給予慰問金。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      持股信託
                    </td>
                    <td className="py-8 text-[16px]">
                      員工每月自薪資提撥一定比率金額至其信託帳戶購買本公司股票，公司亦提撥一定比率金額至員工信託帳戶。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      績效獎金
                    </td>
                    <td className="py-8 text-[16px]">
                      視當年度營運及個人表現績效給予績效獎金。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      年終獎金
                    </td>
                    <td className="py-8 text-[16px]">
                      保障 13個月 +1個月 (依個人績效
                      )，以確保員工的努力與成果能即時得到回饋，並每年調薪。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div data-goal="各項補助">
              <table className="border-t-[2px] border-light_gray w-full">
                <tbody>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      業務人員手機、油資費用、停車費補助
                    </td>
                    <td className="py-8 text-[16px]">
                      業務人員到職提供手機、油資費用、停車費相關補助。到職滿三個月提供定額汽車維修保養補助。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      員工筆電補助
                    </td>
                    <td className="py-8 text-[16px]">提供業務人員筆電補助。</td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      退休金
                    </td>
                    <td className="py-8 text-[16px]">依法提撥勞工退休金。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div data-goal="快樂職場">
              <table className="border-t-[2px] border-light_gray w-full">
                <tbody>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      人性化的上、下班彈性出勤制度
                    </td>
                    <td className="py-8 text-[16px]">
                      為使員工出勤管理效率化、人性化、制度化與彈性化，並因應上下班時段交通壅塞情況，採彈性上下班與電子識別證刷卡及差勤管理系統網路作業方式。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      多元化的公司活動
                    </td>
                    <td className="py-8 text-[16px]">
                      不定期舉辦部門聯誼、春酒、社團活動等，亦提供各式客制化的員工福利制度，包括國內旅遊、國外旅遊、電影欣賞、雜誌訂閱、餐券、慶生會等。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div data-goal="休假制度">
              <table className="border-t-[2px] border-light_gray w-full">
                <tbody>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      週休二日
                    </td>
                    <td className="py-8 text-[16px]">
                      勞工一週正常工時為 40
                      小時，可享有週休二日，工作與家庭生活間有更多的調適與平衡之時間。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      特休 / 年假
                    </td>
                    <td className="py-8 text-[16px]">
                      依《勞動基準法第 38 條規定》，給予特別休假。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      男性員工陪產假
                    </td>
                    <td className="py-8 text-[16px]">
                      依性別工作平等法及施行細則規定，給予陪產檢及陪產假。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      女性生理假
                    </td>
                    <td className="py-8 text-[16px]">
                      依性別工作平等法第 14 條第 1
                      項之規定，給予女性受僱者生理假。
                    </td>
                  </tr>
                  <tr className="border-b border-light_gray">
                    <td className="py-8 font-bold text-pink text-[18px] align-center whitespace-pre pr-12">
                      家庭照顧假
                    </td>
                    <td className="py-8 text-[16px]">
                      受僱者於其家庭成員預防接種、發生嚴重之疾病或其他重大事故須親自照顧時，得請家庭照顧假。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabContainerIcon>

          <p className="mt-xl sub-title text-center">員工專享特約商店</p>

          <p className="mt-md content">
            福委會與外部廠商合作，提供同仁在「飲食、旅遊、其他」三方面的優惠，照顧同仁的日常生活，讓消費變得更便利、實惠，提供同仁更多優惠選擇。
          </p>

          <div className="grid grid-cols-3 gap-6 mt-md">
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="bg-dark_blue flex items-center justify-center px-8 h-[200px] ">
                <img src={LogoMoonRiver} className="w-[250px]" />
              </div>
              <div className="p-8">
                <p className="text-dark_blue font-bold text-lg">
                  Moooon River Cafe &amp; Books
                </p>
                <ul className="content list-disc pl-6 mt-4">
                  <li>內用享9折優惠。</li>
                  <li>外帶享8折優惠。</li>
                  <li>購買書籍類單本即79折優惠。</li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="bg-dark_blue flex items-center justify-center px-8 h-[200px] ">
                <img src={LogoCiaoWin} className="w-[250px]" />
              </div>
              <div className="p-8">
                <p className="text-dark_blue font-bold text-lg">
                  潮味決 內湖江南分社(潮滷商行)
                </p>
                <ul className="content list-disc pl-6 mt-4">
                  <li>
                    內用、外帶消費滿120元，贈送高麗菜一份，不予其他活動合併使用。
                  </li>
                  <li>外送消費滿500元，立即享9折優惠。</li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="bg-dark_blue flex items-center justify-center px-8 h-[200px] ">
                <img src={LogoEZTravel} className="w-[250px]" />
              </div>
              <div className="p-8">
                <p className="text-dark_blue font-bold text-lg">
                  易遊網旅行社股份有限公司
                </p>
                <ul className="content list-disc pl-6 mt-4">
                  <li>
                    國內旅遊（含國內團體旅遊和自由行） 優惠團費 2%
                    (不含航空假期、郵輪式列車、高鐵訂房)
                  </li>
                  <li>
                    國外旅遊（含國外團體旅遊和自由行） 優惠團費 2%
                    (不含航空假期)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="bg-dark_blue flex items-center justify-center px-8 h-[200px] ">
                <img src={LogoBesttour} className="w-[250px]" />
              </div>
              <div className="p-8">
                <p className="text-dark_blue font-bold text-lg">
                  喜鴻旅行社有限公司
                </p>
                <ul className="content list-disc pl-6 mt-4">
                  <li>
                    國外自由行套裝旅遊可享新台幣 300
                    元（特價促銷產品、早鳥優惠不適用此折扣，但會員線上報名 1%
                    之折扣優惠仍適用）,加贈喜鴻購物電商購物金 100 元。
                  </li>
                  <li>國外機票價格可享最高 1% 折扣優惠。</li>
                  <li>國外票劵價格可享最高 3% 折扣優惠。</li>
                  <li>國外團體旅遊其他優惠</li>
                  <li>國內團體旅遊最高可享新台幣 200 元</li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="bg-dark_blue flex items-center justify-center px-8 h-[200px] ">
                <img src={LogoMashup} className="w-[250px]" />
              </div>
              <div className="p-8">
                <p className="text-dark_blue font-bold text-lg">手機急診室</p>
                <ul className="content list-disc pl-6 mt-4">
                  <li>依官網維修定價折扣NT$200</li>
                  <li>維修後皆貼保固貼紙，可保固三個月</li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="bg-dark_blue flex items-center justify-center px-8 h-[200px] ">
                <img src={LogoWeibo} className="w-[250px]" />
              </div>
              <div className="p-8">
                <p className="text-dark_blue font-bold text-lg">威拜購物</p>
                <ul className="content list-disc pl-6 mt-4">
                  <li>提供企業團購，以優惠價訂購商品</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-xl sub-title text-center">母性健康保護計畫</p>

          <p className="mt-md content">
            本公司依法落實《性別工作平等法》，並倡議聯合國可持續發展目標 ( SDGs
            ) 中促進性別平等。鼓勵並支
            持員工孕育下一代，提供育嬰假、陪產假、生理假等。
            依據勞基法規定，在每一位子女滿 3
            歲前，都有權申請育嬰留職停薪，停薪期最長可達 2
            年。育嬰留職停薪期間，員工均可繼續參加原有的社會保險。此外，員工復職後，提供外部幼兒園之托兒服務，協助員工在工作的同時兼顧孩子的照顧，讓員工能夠更好地平衡工作和家庭的需求。
          </p>
          <img src={Girl} className="w-full mt-md" alt='girl' />
        </div>
      </div>
    </div>
  );
};

export default WelfareCare;
