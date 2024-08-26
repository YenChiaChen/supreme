import { faBowlFood, faCartShopping, faForkKnife, faMobile, faPlane } from "@fortawesome/pro-solid-svg-icons";
import { InfoListProps } from "../components/type";


interface Data {
  title: string
  rows: InfoListProps[]
}

interface Store {
  title: string
  content: { text: string }[]
  icon?: any
}

export const welfareData: Data[] = [
  {
    title: "員工保障",
    rows: [
      {
        title: "享健保、勞保、退休金提撥",
        content: "依法為每位員工投保勞工保險、全民健康保險。",
      },
      {
        title: "職災保險",
        content:
          "勞工保險職業災害保險係屬納費互助之社會保險制度，亦具集體連帶分擔風險性質。當被保險人發生職業災害或傷病等保險事故時，可依規定申請醫療或現金給付之補償，使本人或遺屬得到適度之生活安全保障。",
      },
      {
        title: "員工團體保險",
        content:
          "除了法定的保險保障 ( 包含勞工保險、全民健康保險 )，另外亦幫每一位同仁加入團體保險，其中團體保險包括了：壽險、重大疾病險、傷害保險、意外保險、重大燒燙，疾病住院險及癌症醫療等保險，讓同仁擁有全方位的保險保障。保費均由公司全額負擔。",
      },
      {
        title: "急難救助",
        content: "由福委會專案審查遭受重大災難的員工，並酌予發給適當之慰問金。",
      },
    ],
  },
  {
    title: "獎酬福利",
    rows: [
      { title: "年節獎金", content: "於中秋、端午節給予節慶獎金。" },
      { title: "生日禮金", content: "於員工生日時給予禮金。" },
      { title: "結婚禮金", content: "	員工結婚時給予祝賀禮金。" },
      { title: "生育禮金", content: "員工子女出生後給予祝賀禮金。" },
      {
        title: "喪葬禮金",
        content: "員工本人、配偶、三等親內直系親屬死亡，給予慰問金。",
      },
      {
        title: "持股信託",
        content:
          "員工每月自薪資提撥一定比率金額至其信託帳戶購買本公司股票，公司亦提撥一定比率金額至員工信託帳戶。",
      },
      {
        title: "績效獎金",
        content: "視當年度營運及個人表現績效給予績效獎金。",
      },
      {
        title: "年終獎金",
        content:
          "保障 13個月 +1個月 (依個人績效 )，以確保員工的努力與成果能即時得到回饋，並每年調薪。",
      },
    ],
  },
  {
    title: "各項補助",
    rows: [
      {
        title: "業務人員手機、油資費用、停車費補助",
        content:
          "業務人員到職提供手機、油資費用、停車費相關補助。到職滿三個月提供定額汽車維修保養補助。",
      },
      { title: "員工筆電補助", content: "提供業務人員筆電補助。" },
      { title: "退休金", content: "依法提撥勞工退休金。" },
    ],
  },
  {
    title: "快樂職場",
    rows: [
      {
        title: "人性化的上、下班彈性出勤制度",
        content:
          "為使員工出勤管理效率化、人性化、制度化與彈性化，並因應上下班時段交通壅塞情況，採彈性上下班與電子識別證刷卡及差勤管理系統網路作業方式。",
      },
      {
        title: "多元化的公司活動",
        content:
          "不定期舉辦部門聯誼、春酒、社團活動等，亦提供各式客制化的員工福利制度，包括國內旅遊、國外旅遊、電影欣賞、雜誌訂閱、餐券、慶生會等。",
      },
    ],
  },
  {
    title: "休假制度",
    rows: [
      {
        title: "週休二日",
        content:
          "勞工一週正常工時為 40 小時，可享有週休二日，工作與家庭生活間有更多的調適與平衡之時間。",
      },
      {
        title: "特休 / 年假",
        content: "依《勞動基準法第 38 條規定》，給予特別休假。",
      },
      {
        title: "男性員工陪產假",
        content: "依性別工作平等法及施行細則規定，給予陪產檢及陪產假。",
      },
      {
        title: "女性生理假",
        content:
          "依性別工作平等法第 14 條第 1 項之規定，給予女性受僱者生理假。",
      },
      {
        title: "家庭照顧假",
        content:
          "受僱者於其家庭成員預防接種、發生嚴重之疾病或其他重大事故須親自照顧時，得請家庭照顧假。",
      },
    ],
  },
];

export const storeData: Store[] = [
  {
    title: "Moooon River Cafe & Books",
    content: [
      { text: "內用享9折優惠。" },
      { text: "外帶享8折優惠。" },
      { text: "購買書籍類單本即79折優惠。" },
    ],
    icon: faForkKnife
  },
  {
    title: "潮味決 內湖江南分社(潮滷商行)",
    content: [
      { text: "內用、外帶消費滿120元，贈送高麗菜一份，不予其他活動合併使用。" },
      { text: "外送消費滿500元，立即享9折優惠。" },
    ],
    icon: faForkKnife
  },
  {
    title: "易遊網旅行社股份有限公司",
    content: [
      { text: "國內旅遊（含國內團體旅遊和自由行）優惠折扣團費 2%（不含航空假期、郵輪式列車、高鐵訂房）。" },
      { text: "國外旅遊（含國外團體旅遊和自由行）優惠折扣團費 2%（不含航空假期）。" },
    ],
    icon: faPlane
  },
  {
    title: "喜鴻旅行社有限公司",
    content: [
      { text: "國外自由行套裝旅遊可享新台幣 300 元（特價促銷產品、早鳥優惠不適用此折扣，但會員線上報名 1% 之折扣優惠仍適用）,加贈喜鴻購物電商購物金 100 元。" },
      { text: "國外機票價格可享最高 1% 折扣優惠。" },
      { text: "國外票劵價格可享最高 3% 折扣優惠。" },
      { text: "國外團體旅遊其他優惠。" },
      { text: "國內團體旅遊最高可享新台幣 200 元。" },
    ],
    icon: faPlane
  },
  {
    title: "威拜購物",
    content: [
      { text: "提供企業團購，以優惠價訂購商品。" },
    ],
    icon: faCartShopping
  },
  {
    title: "手機急診室",
    content: [
      { text: "依官網維修定價折扣NT$ 200。" },
      { text: "維修後皆貼保固貼紙，可保固三個月。" },
    ],
    icon: faMobile
  },
];
