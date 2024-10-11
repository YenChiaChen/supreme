
type NewsComponent =
  | { type: "title"; content: string }
  | { type: "subTitle"; content: string }
  | { type: "heading"; content: string }
  | { type: "paragraph"; content: string }
  | { type: "date"; content: string }
  | { type: "image"; src: string; alt: string; width?: string; desc?: string }
  | { type: "column"; left: NewsComponent[]; right: NewsComponent[] }
  | { type: "margin";}

type NewsItem = {
  id: number;
  components: NewsComponent[];
  category: string;
  date: string;
  title?: string;
  bg?: string;
  desc?: string;
  location? : string;
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    category: "SpecialNews",
    date:"2023",
    location: "2023年永續報告書",
    title: "永續專欄特別報導-新能源",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727095041/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-09-23_203659_lx2rcl.png",
    desc: "國際能源總署（IEA）表示，預估2023年全球再生能源發電量將增加5億千瓦，創歷史最高水準。根據IEA公布「2023年世界能源展望」，2020年至2023年再生能源等清淨能源投資成長40%。",
    components: [
      { type: "title", content: "永續專欄特別報導-新能源" },
      { type: "date", content: "2023年永續報告書" },
      
      {
        type: "paragraph",
        content: "國際能源總署（IEA）表示，預估2023年全球再生能源發電量將增加5億千瓦，創歷史最高水準。根據IEA公布「2023年世界能源展望」，2020年至2023年再生能源等清淨能源投資成長40%。特別是太陽能發電每日計有超過10億美元（約1,500億日圓）之投資。估計到2030年，再生能源將占新能源增加量之80%，預估包括石油在內，化石燃料需求將在2030年前達到高峰。",
      },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727095041/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-09-23_203659_lx2rcl.png",
        alt: "Energy Image",
        width: "80%"
      },
      {
        type: "paragraph",
        content: "至上於2024年正式啟動新能源事業元年，首要瞄準印度、東南亞電動機車市場。在全球淨零碳排趨勢下，電動汽機車市場快速成長，相關應用成長迅速，先前已布局新能源車用市場已有3~4年，相關技術與營運計畫已逐步完成，現階段將主要聚焦於印度及東南亞的機車及載貨車商機，提供燃油載具客戶之電動化方案移植，縮短開發時程，迅速進入市場。",
      },
      {
        type: "paragraph",
        content: "研發部門成立迄今，除提供客戶技術支援外，亦負責分析未來市場發展趨勢及新產品推廣之應用技術，並協助客戶解決生產、設計方面的問題，並以提供整體設計方案為目標與提昇整體解決方案之能力，不但能提昇客戶之便利性與價值，降低生產成本，同時對於客戶的維繫與帶來新產品領域的商機亦有所助益。",
      },
      {
        type: "paragraph",
        content: "主要有兩項研發創新專案：",
      },
      {
        type: "paragraph",
        content: "- 低壓電動動力系統研發：包含電動機、電動機電源轉換及控制系統、電池能量管理系統及動力載具管理系統。在全球淨零碳排趨勢下，電動汽機車市場快速成長，相關應用成長迅速，先前已布局新能源車用市場已有3~4年，相關技術與營運計畫已逐步完成，目前已成功完成階段性開發目標，實現批量整合式單體電機生產，性能相關數據驗證符合預期效能。電控系統、冷卻系統、車輛控制VCU系統已逐漸成功整合，透過此創新研發，希望致力於推廣電動車輛之發展，以降低廢氣排放，達到節能減碳之環保效益。",
      },
      {
        type: "paragraph",
        content: "- 高安全性鋰離子電池開發計畫：包含高壓電解液及矽碳負極材料之相關電化學應用。在此計畫中，藉由內部研發以及臺科大的專利授權，使添加寡聚物電池的容量較無添加寡聚物的電池減少，並大幅增加電池安全性。若能有效解決電池安全性問題，則可提昇台灣鋰電池產業技術水平，並提升國際市場之競爭能力，同時配合政府於能源戰略科技之研究發展政策，凸顯政府在能源的開發運用之策略佈局與重視，與厚植台灣本土產業技術。",
      },
      {
        type: "paragraph",
        content: "新能源電機應用研發部門，目前已成功完成階段性開發目標，實現批量整合式單體電機生產，性能相關數據驗證符合預期效能。電控系統、冷卻系統、車輛控制VCU系統成功整合，二輪樣車在台灣智慧移動展展出。因應客戶需求，自主研發車輛管理系統，以車輛儀表為中心介面，針對動力運轉單元，電源模組單元做相關運轉信息搜集，雲端大數據評估，並提供相應自動參數調整，以期對終端產品有最佳化配置。",
      },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727096150/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-09-23_205523_ygclzz.png",
        alt: "Energy Image",
        width: "80%"
      },
    ],
  },
  {
    id: 2,
    date:"2023",
    location: "2023年永續報告書",
    title: "永續專欄特別報導-高效率與自動數位化節能產品",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727096150/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-09-23_205523_ygclzz.png",
    desc: "隨著科技的快速演變，現今已進入高速運算的AI時代，而在全球氣候變化和環保意識已日趨成熟的背景下，節能減碳躍升為國際專注議題，也成為企業責無旁貸不可推卸的社會責任。",
    category: "SpecialNews",
    components: [
      { type: "title", content: "永續專欄特別報導-高效率與自動數位化節能產品" },
      { type: "date", content: "2023年永續報告書" },
      {
        type: "paragraph",
        content: "隨著科技的快速演變，現今已進入高速運算的AI時代，而在全球氣候變化和環保意識已日趨成熟的背景下，節能減碳躍升為國際專注議題，也成為企業責無旁貸不可推卸的社會責任。本公司不僅以為股東追求最大利益為首要目標，亦高度重視企業社會責任，為此，公司制定因應策略並調整運營方針，不僅致力研發綠色電池等新能源產品，還積極開拓能源管理相關商品之代理版圖，將氣候危機轉化為營運機會。",
      },
      {
        type: "paragraph",
        content: "高速運算的AI產品對電力需求量極高，為達友善環境與節能減碳目標，本公司於2023年第四季與法商施耐德電機正式成為合作夥伴，法商施耐德電機成立至今已擁有188年的歷史，是首家取得ISO 50001 能源管理認證的公司，此次合作，本公司取得了該公司高效率與自動數位化節能產品全系列代理權，例如：Rack機櫃、UPS、空調系統、監控Camera、樓宇能源管理系統BMS…..等。",
      },
      {
        type: "paragraph",
        content: "可施作場域包含：Data Center、AI場域、SMT生產線 & Chamber、冷水主機房等等，其監控Camera不受場域限制，透過針對用電環境的監測，可及時發現用電異常而提昇場域能源管理效益，亦可確保場域環境安全，降低職災風險之發生。而產線透過能源自動數位化管理，將收集到的電力資料進行分析，產出用電相關資費報表、各場域用電資料數據，達到有效監測和電力控管，進而協助企業進行能源管理，訂定排碳減量策略，加速企業實現低碳、節能目標，費用支出減少及供應鏈優良企業形象。",
      },
      {
        type: "paragraph",
        content: "本公司積極拓展綠能與節能產品，將「控電、節電」訂為永續環境的目標，透過自行研發綠色新能源產品和拓展高效節能產品的代理，積極推動節能設備業務，達成公司代理永續綠色產品目標，降低公司代理商品過度集中之風險，進而提升公司市場競爭力，增加產品多元化，引領公司邁向永續企業。 ",
      },
      {
        type: "paragraph",
        content: "從IC製造到下游成品的產出，以至成品的應用，每減少一度電，都是本公司對地球永續的一分心力。",
      },
    ],
  },
  {
    id: 3,
    date:"2022",
    location: "2022年永續報告書",
    title: "新能源部門投資發展",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727097919/Untitled_design_1_wwqf0t.png",
    desc: "因應環保低排碳目標，世界各國政府大力推行電動車應用。根據國際能源署 ( IEA ) 調查，2022 年全球共售出了超過 1,000 萬輛的電動車 ( 包含純電車與混合動力車 )，同時也預估 2023 年電動車銷量能再成長 35%，達到 1,400 萬輛，進一步將市場佔比拉高至 18%。",
    category: "SpecialNews",
    components: [
      { type: "title", content: "新能源部門投資發展" },
      { type: "date", content: "2022年永續報告書" },
      {
        type: "paragraph",
        content: "因應環保低排碳目標，世界各國政府大力推行電動車應用。根據國際能源署 ( IEA ) 調查，2022 年全球共售出了超過 1,000 萬輛的電動車 ( 包含純電車與混合動力車 )，同時也預估 2023 年電動車銷量能再成長 35%，達到 1,400 萬輛，進一步將市場佔比拉高至 18%。",
      },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727097919/Untitled_design_1_wwqf0t.png",
        alt: "Energy Image",
        width: "80%",
        desc: "至上參加 2023 年台北國際車用電子展"
      },
      {
        type: "paragraph",
        content: "因此，針對輕型載具應用及市場，本公司成立電機應用研發部門，延攬專業電子，電機，軟韌體相關人才，加大力度投資低壓電力驅動系統自主研發。目前已成功完成階段性目標，實現單體電機性能相關數據驗證且超過預期效能。具體項目為工程初期樣品製作，電控系統整合，冷卻系統整合，二輪樣車動力測試運轉成功。第二階段目標：1. 建立車輛管理系統，在此架構下之動力運轉單元，電源模組單元相關運轉信息搜集，評估，最佳化相應自動參數配置；2. 試量產相關生產工程規劃，產品信賴性試驗，客戶端樣品送測、實車測試等；3. 評估添購相關測試設備，成立專門動力實驗中心，以整車性能為目標，提供燃油載具客戶之電動化方案移植，縮短開發時程，迅速進入市場。",
      },
      {
        type: "paragraph",
        content: "此外，本公司延續 2022 年之經營策略，透過轉投資之高達能源持續積極開拓市場及發展相關綠色能源技術。在自動導引運輸車 ( AGV、AMR ) 等智慧物流機器人相關應用上持續深耕，目前以通過 IEC-62133, IEC-62619 可攜式充電電池安全要求認證為設計目標。在電池模組動力需求上，期許能提供客戶高科技、高品質、高信賴性之設計及製造服務。",
      },
      {
        type: "paragraph",
        content: "相關研發部門成立迄今，除以客戶技術支援為基本功能外，並積極尋求新產品的合作開發案，提供廠商多元化的產品應用觀念與其核心關鍵技術，同時導入系統的整合設計，協助客戶以最短的時間及最有效率的方式，完成產品之開發與量產，進一步帶來整體之新商機。",
      },
    ],
  },
  {
    id: 4,
    date:"2022",
    location: "2022年永續報告書",
    title: "「代理生技品牌，跨足再生醫學領域",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_reluma_aah3jn.png",
    desc: "保康特生技於 2020 年積極跨足再生醫學研究領域，取得一系列獨家代理權。於 2021 年取得全球前四大外泌體 - 韓國 ExoCoBio 公司三個品牌的台灣獨家代理權。",
    category: "SpecialNews",
    components: [
      { type: "title", content: "代理生技品牌，跨足再生醫學領域" },
      { type: "date", content: "2022年永續報告書" },
      {
        type: "paragraph",
        content: "保康特生技於 2020 年積極跨足再生醫學研究領域，取得一系列獨家代理權。於 2021 年取得全球前四大外泌體 - 韓國 ExoCoBio 公司三個品牌的台灣獨家代理權；隨後，在 2022 年更進一步獲得了美國Invitrx 公司兩個品牌的台灣獨家代理權，以及新加坡生技品牌 Vesi+Derm 的代理權。這一系列動作展現了我們在再生醫學領域的積極投入和擴展。",
      },
      { type: "subTitle", content: "取得美國 Invitrx 公司旗下兩個品牌的台灣總代理" },
      { type: "heading", content: "reluma" },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_reluma_aah3jn.png",
        alt: "Energy Image",
        width: "70%",
      },
      
      {
        type: "paragraph",
        content: "由 Invitrx 研發出具有突破性的日常化妝保養系列產品，產品皆由幹細胞核心萃取技術衍生而成的生長基因及基質蛋白而成，可增強肌膚屏障以及提升肌膚光彩。reluma 不只專注在臉部肌膚上的保養，更推出針對頭皮保養的產品，帶給使用者齊全的產品線。",
      },
      { type: "heading", content: "SkinVitali" },
      
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_SkinVitali_e7csey.png",
        alt: "Energy Image",
        width: "70%",
      },
      {
        type: "paragraph",
        content: "由美國 Invitrx Therapeutics 所創立的機能護膚品牌，集結多年細胞治療的研究經驗、第一線醫師的回饋與 Invitrx 獨家專利幹細胞核心技術，以奠基於次世代科技的保養，給予肌膚實證的賦活，回歸舒適、回歸健康。",
      },
      { type: "subTitle", content: "取得韓國 ExoCoBio 公司旗下三個品牌的台灣總代理" },
      { type: "heading", content: "Celltweet" },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_Celltweet_y6taip.png",
        alt: "Energy Image",
        width: "70%",
      },
      {
        type: "paragraph",
        content: "居家護理外泌體品牌，透過專利成份 ExoSCRT™純淨的外泌體萃取，以日常的肌膚護理，達到喚醒健康肌膚的自然修護能量，深層肌膚修護與再生。",
      },
      { type: "heading", content: "EXOMAGE" },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_EXOMAGE_pdvsjm.png",
        alt: "Energy Image",
        width: "70%",
      },
      {
        type: "paragraph",
        content: "美容 SPA 館外泌體領導品牌，透過美容師精湛的按摩手法，搭配美容導入儀，將 99.5% 高純度外泌體精萃導入到肌膚細胞，加速受損的肌膚修護速度。",
      },
      { type: "heading", content: "ASCE" },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101682/img_ASCE_wh4wa8.png",
        alt: "Energy Image",
        width: "70%",
      },
      {
        type: "paragraph",
        content: "醫學美容外泌體再生修護品牌，採用全球獨家專利的外泌體製程 ExoSCRT™ 專利技術，五十億個純淨外泌體，搭配專業的醫學美容器材，讓幹細胞最珍稀的極萃精華以最有效率的方式修復受損細胞，找回肌膚深層由內而外的原生美麗，還原天生的柔嫩肌膚。值得一提的是該生髮系列產品獲得 AMWC 皮膚科學研會最佳化妝品獎第一名。",
      },
      { type: "subTitle", content: "取得新加坡生技品牌 Vesi+Derm 的代理" },
      { type: "heading", content: "Vesi+Derm" },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_Vesi_qvhrxz.png",
        alt: "Energy Image",
        width: "70%",
      },
      {
        type: "paragraph",
        content: "採用先進的微脂體萃取技術，是由蛋黃卵磷脂所萃取來的微脂體，大小介於 100 nm，裡面包含著磷脂雙層分子層及大量水份，富含著人體所需要的脂肪、脂溶性營養素、以及維生素 D&E，它每毫升含有超過 10 萬億的活性微質體，有助於滋潤敏感的皮膚，尤其是與皮膚乾燥、瘙癢、皮膚發紅等有關的濕疹。它還可以防止表皮水分流失，為肌膚提供深層保濕，以及增強肌膚屏障，預防肌膚老化和受到外部環境的影響，長期使用可撫平細紋和減少肌膚瘡傷，是修復肌膚屏障的最佳微脂體保養品。",
      },
    ],
  },
  {
    id: 5,
    date:"2022",
    location: "2022年永續報告書",
    title: "自行研發醫療器材",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727101681/img_reluma_aah3jn.png",
    desc: "由 Invitrx 研發出具有突破性的日常化妝保養系列產品，產品皆由幹細胞核心萃取技術衍生而成的生長基因及基質蛋白而成，可增強肌膚屏障以及提升肌膚光彩。reluma 不只專注在臉部肌膚上的保養，更推出針對頭皮保養的產品，帶給使用者齊全的產品線。",
    category: "SpecialNews",
    components: [
      { type: "title", content: "自行研發醫療器材" },
      { type: "date", content: "2022年永續報告書" },
      { type: "heading", content: "心音貼片" },
      {
        type: "paragraph",
        content: "由 Invitrx 研發出具有突破性的日常化妝保養系列產品，產品皆由幹細胞核心萃取技術衍生而成的生長基因及基質蛋白而成，可增強肌膚屏障以及提升肌膚光彩。reluma 不只專注在臉部肌膚上的保養，更推出針對頭皮保養的產品，帶給使用者齊全的產品線。",
      },
      { type: "heading", content: "體外快篩檢測系統" },
      {
        type: "paragraph",
        content: "「速析能可攜式試紙檢測儀」快篩體外檢測系統，是一套可攜式試紙檢測儀器，利用可攜式試紙檢測儀，搭配速析能專用試紙卡匣進行體外檢測。試紙在固定的 LED 光源下反射的色度深淺影像，配合無線傳輸技術進行智慧圖像識別演算法，以及雲端大數據計算精確分析待測物的濃度，進而提供醫療前的快速先期參考，也就是「預防醫學」的概念。",
      },
      {
        type: "paragraph",
        content: "透過此檢測系統，使用者能夠進行個人化的日常健康分析。檢測數據透過藍芽傳輸至專屬的應用程式，以便儲存和管理健康資訊。進一步地，這些資料可以透過網路儲存在雲端，讓使用者能夠長期追蹤和存取個人化的健康數據。此系統將為使用者提供嶄新的健康照護體驗，滿足個人化醫療服務的需求，同時有助於實現預防醫學的目標。",
      },
      {
        type: "paragraph",
        content: "此系統已獲得中華民國發明專利與中國新型專利，藉由更換不同試紙，可檢驗不同的檢測項目，包含新冠病毒抗原快篩、幽門螺旋桿菌、黃體化激素及檢測毛小孩的尿液以提早發現寵物疾病。",
      },
    ],
  },
  {
    id: 6,
    date:"2023",
    location: "新北市石門白沙灣 / 2023年07月15日(六)",
    title: "至上淨灘愛地球",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411677/news06_yysiks.jpg",
    desc: "自2019年起，至上每年舉辦淨灘/淨山環境維護活動，同時鼓勵同仁邀請家人及親朋好友一同參與，透過實際行動來促進環境的永續保護。",
    category: "Activity",
    components: [
      { type: "title", content: "至上淨灘愛地球" },
      { type: "date", content: "新北市石門白沙灣 / 2023年07月15日(六)" },
      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "自2019年起，至上每年舉辦淨灘/淨山環境維護活動，同時鼓勵同仁邀請家人及親朋好友一同參與，透過實際行動來促進環境的永續保護。活動當天天氣晴朗，志工們不畏酷熱齊心協力，一同為海洋環境出一分力，經統計總共撿拾了37.5公斤的海洋廢棄物。透過這次活動，我們全力還給白沙灘一個乾淨的環境，企盼這樣的美好能夠繼續被愛惜、維護下去。",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012387/%E6%96%B0%E5%8C%97%E5%B8%82%E7%9F%B3%E9%96%80%E7%99%BD%E6%B2%99%E7%81%A3-1_kj3mrc.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
    ],
  },
  {
    id: 7,
    date:"2023",
    location: "台北市南港玉成公園福德宮 / 2023年10月28日(六)",
    title: "至上協助辦理愛心捐血活動",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411864/news07_xigxol.jpg",
    desc: "本公司關心各種社會議題，並持續投入時間與資源支持公益活動。",
    category: "Activity",
    components: [
      { type: "title", content: "至上協助辦理愛心捐血活動" },
      { type: "date", content: "台北市南港玉成公園福德宮 / 2023年10月28日(六)" },  
      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "本公司關心各種社會議題，並持續投入時間與資源支持公益活動。本次同仁參與捐血志工，協助辦理「拱天慈善功德會」於2023年10月28日（星期六）在南港玉成公園福德宮前舉辦的愛心捐血活動。儘管當天下著小雨，但這無法熄滅所有志工們的熱情，在活動開始前幫忙設置場地、分配任務，以確保捐血者在整個過程中既安全又舒適。活動當天各地的捐血者紛紛響應號召，前來獻出自己的一份愛心，當天總共有266位熱心民眾捐血；共收集到了410袋的血液，這些血液將用於救助有需要的患者，成為一份珍貴的生命禮物。這次不僅是一次捐血行動，也象徵了至上與社區共同參與愛心的精神。期望未來能夠聚集更多熱心的夥伴，將公益熱忱轉化為實際行動，持續為社會帶來溫暖的貢獻。",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012387/%E5%8D%94%E8%BE%A6%E6%84%9B%E5%BF%83%E6%8D%90%E8%A1%80%E6%B4%BB%E5%8B%95_aepgvx.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
     
    ],
  },
  {
    id: 8,
    date:"2023",
    location: "台北市內湖區港墘路189號1樓 / 2023年12月11日(一)",
    title: "「捐血救人、熱血至上」愛心捐血活動",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411684/news08_wmpvmu.jpg",
    desc: "本公司長期關心各式社會議題，持續投入資源支持公益及響應永續發展。",
    category: "Activity",
    components: [
      { type: "title", content: "「捐血救人、熱血至上」愛心捐血活動" },
      { type: "date", content: "台北市內湖區港墘路189號1樓 / 2023年12月11日(一)" },
      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "本公司長期關心各式社會議題，持續投入資源支持公益及響應永續發展。為了讓血庫挹注更多血源及時幫助需要救助的病患，本公司與「台北捐血中心」，攜手舉辦「捐血救人、熱血至上」愛心捐血活動，號召公司同仁及社區民眾一起參與，透過實際的行動展現愛心，為社會盡一份心力。此次的捐血活動辦得相當成功，不僅有公司高階主管挽袖相挺，當地民眾也早早到現場排隊等著捐血，捐血袋數超出預期標準，當天總共有54位熱心民眾捐血；共收集到了85袋的血液。未來至上將定期舉辦捐血活動，也呼籲大家一起來「熱血相挺」!",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012387/%E8%87%AA%E8%BE%A6%E6%84%9B%E5%BF%83%E6%8D%90%E8%A1%80%E6%B4%BB%E5%8B%95-1_s1pm9x.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
    ],
  },
  {
    id: 9,
    date:"2023",
    location: "臺北市立長安國中 / 自112學年度起，每週一的晨光時間",
    title: "長安國中「動手做STEAM多元智能晨光時間」計畫",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411681/news09_ixdrry.jpg",
    desc: "本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」。",
    category: "Story",
    components: [
      { type: "title", content: "長安國中「動手做STEAM多元智能晨光時間」計畫" },
      { type: "date", content: "臺北市立長安國中 / 自112學年度起，每週一的晨光時間" },
      {
        type: "image",
        src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411681/news09_ixdrry.jpg",
        alt: "Energy Image",
        width: "100%",
      },
      {
        type: "paragraph",
        content: "本公司與國立臺灣師範大學科技應用與人力資源發展學系攜手合作，展開「動手做STEAM多元智能晨光時間」。本計畫由臺師大科技系的蔡其瑞助理教授領導，旨在啟發長安國中特教學生發展多元智能，提升其自我肯定，促進社交技巧，同時體驗動手做的樂趣。",
      },
      {
        type: "paragraph",
        content: "計畫主持人蔡其瑞助理教授表示，此次合作讓特教學生在晨光時間有機會參與動手做課程，提供了一個快樂探索自我和開發潛能的機會。學生們在課程中不僅學到了STEAM知識，還培養了專注力和認知彈性。而家長的積極反饋顯示孩子們對課程充滿喜愛，提升了他們的自信，促進了家庭互動。擔任講師的兩位臺師大的同學分享了他們的經驗，觀察到學生在整個教學過程中持續進步，這樣的轉變顯示出學生在課程中不僅學到了動手做STEAM知識，更培養了專注力和認知彈性，是這項活動最感動和寶貴的回饋。",
      },
      {
        type: "margin",
      },
      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "長安國中校方對計畫的執行給予高度評價，感謝至上電子和臺師大的合作和支持，推動「動手做STEAM多元智能晨光職業探索課程」，期待未來繼續合作。",
          },
          {
            type: "paragraph",
            content: "本公司在教育推動上非常重視，由於本公司是電子通路代理商，於是自身比喻成「橋樑」，透過贊助為有不同學習需求的孩子們搭建通往實現夢想的橋樑，培養其興趣和熱情。也期望透過此次支持能夠為更多不同學習需求的孩子提供充足的學習資源，並達到抛磚引玉之效。",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012387/%E9%95%B7%E5%AE%89%E5%9C%8B%E4%B8%AD-STEAM%E6%99%A8%E5%85%89%E8%A8%88%E7%95%AB-1_qngrqd.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
     
     
    ],
  },
  {
    id: 10,
    date:"2022",
    location: "新北市劍南蝶園 / 2022年1月15日(六)",
    title: "至上淨山愛地球",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411676/news10_vodz7o.jpg",
    desc: "2021年因COVID-19疫情因素所以當年度並無舉辦活動，待至2022年1月疫情趨向緩和時才舉辦，「2021至上淨山愛地球」活動是步行前往劍南蝶園登山步道淨山。",
    category: "Activity",
    components: [
      { type: "title", content: "至上淨山愛地球" },
      { type: "date", content: "新北市劍南蝶園 / 2022年1月15日(六)" },


      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "2021年因COVID-19疫情因素所以當年度並無舉辦活動，待至2022年1月疫情趨向緩和時才舉辦，「2021至上淨山愛地球」活動是步行前往劍南蝶園登山步道淨山。",
          },
          {
            type: "paragraph",
            content: "當日參與健行及淨山活動同仁與眷屬共計37位，大家自行搭乘大眾交通工具，自捷運劍南路站1號出口集合出發，為保護環境及響應聯合國永續發展目標之SDG 15「陸地生態」，同仁們準備了垃圾袋、棉質手套與鐵夾，將在路途中發現的垃圾收集起來統一處理，當天共清除了32.70公斤的垃圾。",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012413/%E6%96%B0%E5%8C%97%E5%B8%82%E5%8A%8D%E5%8D%97%E8%9D%B6%E5%9C%92-1_iyf2lf.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
    ],
  },
  {
    id: 11,
    date:"2020",
    location: "新北市劍南蝶園 / 2020年8月15日(六)",
    title: "至上淨山愛地球",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411685/news11_cajm70.jpg",
    desc: "富含多樣化的植被與高達150種以上蝴蝶的劍南蝶園，是都市近郊彩蝶的搖籃。",
    category: "Activity",
    components: [
      { type: "title", content: "至上淨山愛地球" },
      { type: "date", content: "新北市劍南蝶園 / 2020年8月15日(六)" },

      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "富含多樣化的植被與高達150種以上蝴蝶的劍南蝶園，是都市近郊彩蝶的搖籃。而台灣蝴蝶保育學會每月皆於固定時程在此進行假日解說導覽服務，帶著大家一起尋找生態的寶藏，更一同維護這優良的生態環境！",
          },
          {
            type: "paragraph",
            content: "透過這次的淨山，我們親近大自然，認識各類彩蝶及植物的生活環境，並動手移除不該出現的外來物種，願原生物種能保有自身的生存空間，讓蝴蝶世世代代繁衍不息！",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012422/%E6%96%B0%E5%8C%97%E5%B8%82%E5%8A%8D%E5%8D%97%E8%9D%B6%E5%9C%92-1_oggec6.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
     
    ],
  },
  {
    id: 12,
    date:"2019",
    location: "基隆市大武崙澳底沙灘 / 2019年9月21日(六)",
    title: "至上淨灘愛地球",
    bg: "https://res.cloudinary.com/dvgxlmyje/image/upload/v1727411677/news12_xz6zan.jpg",
    desc: "對台灣人民來說，921是個傷痛的日子，今年，是921地震後的第20年，我們走過歷史的傷痛，應給予9月21日一個全新的定義，爾後，921不再只是地震的代稱，而是至上員工及眷屬淨灘愛地球的開始！",
    category: "Activity",
    components: [
      { type: "title", content: "至上淨灘愛地球" },
      { type: "date", content: "基隆市大武崙澳底沙灘 / 2019年9月21日(六)" },
      {
        type: "column",
        left: [
          {
            type: "paragraph",
            content: "對台灣人民來說，921是個傷痛的日子，今年，是921地震後的第20年，我們走過歷史的傷痛，應給予9月21日一個全新的定義，爾後，921不再只是地震的代稱，而是至上員工及眷屬淨灘愛地球的開始！當天雖遇風雨，參與人數仍逾70人，同心協力，一同為海洋環境付出、愛護地球；經統計，此次共撿拾350公斤之海洋廢棄物，以此篇報導【鯨魚擱淺菲律賓海攤，胃裡塞了40公斤的塑膠垃圾】作為換算，相當於拯救9隻鯨魚免於塑膠垃圾的影響！",
          },
          {
            type: "paragraph",
            content: "透過此場活動，我們全力還給澳底沙灘一個乾淨的環境，企盼這樣的美好能夠繼續被愛惜、維護下去。",
          },
        ],
        right: [
          {
            type: "image",
            src:"https://res.cloudinary.com/dvgxlmyje/image/upload/v1728012431/%E5%9F%BA%E9%9A%86%E5%B8%82%E5%A4%A7%E6%AD%A6%E5%B4%99%E6%BE%B3%E5%BA%95%E6%B2%99%E7%81%98-1_tqjuvx.jpg",
            alt: "Energy Image",
            width: "100%",
          },
        ]
      },
     
     
    ],
  },
];