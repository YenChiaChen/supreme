interface RadioOption {
    id: string;
    label: string;
  }
  interface SubQuestion {
    id: string;
    question: string;
    options: RadioOption[];
  }
  
  interface SurveyQuestion {
    id: string;
    question: string;
    options: RadioOption[];
    subQuestions?: SubQuestion[];
  }



const questions: SurveyQuestion[] = [
    {
      id: "q1",
      question: "您與至上電子股份有限公司的關係？",
      options: [
        "員工",
        "投資人 / 股東",
        "合作夥伴(供應商，承攬商)",
        "客戶",
        "政府與主管機關",
        "媒體",
        "社區居民",
      ].map((n) => ({
        id: `q1-option${n}`,
        label: n.toString(),
      })),
    },
    {
      id: "q2",
      question:
        "您主要關注至上電子股份有限公司的議題為何？【公司治理面（經濟面）】（1-5分）",
      options: [],
      subQuestions: [
        {
          id: "q3-sub1",
          question: "多元治理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub1-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub2",
          question: "經濟績效",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub2-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub3",
          question: "誠信經營",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub3-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub4",
          question: "法規遵循",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub4-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub5",
          question: "風險管理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub5-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub6",
          question: "產品品質與技術",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub6-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub7",
          question: "客戶服務",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub7-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q3-sub8",
          question: "供應鏈管理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q3-sub8-option${n}`,
            label: n.toString(),
          })),
        },
      ],
    },
    {
      id: "q3",
      question: "您主要關注至上電子的哪些議題？【環境面】（1-5分）",
      options: [],
      subQuestions: [
        {
          id: "q4-sub1",
          question: "氣候變遷對策",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q4-sub1-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q4-sub2",
          question: "綠色產品 / 服務",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q4-sub2-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q4-sub3",
          question: "能源、水資源、廢棄物管理	",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q4-sub3-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q4-sub4",
          question: "溫室氣體排放與減量",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q4-sub4-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q4-sub5",
          question: "環保問題申訴機制",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q4-sub5-option${n}`,
            label: n.toString(),
          })),
        },
      ],
    },
    {
      id: "q5",
      question: "您主要關注至上電子的哪些議題？【社會面】（1-5分）",
      options: [],
      subQuestions: [
        {
          id: "q5-sub1",
          question: "社會 / 社區參與",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub1-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q5-sub2",
          question: "勞雇 / 勞資關係",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub2-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q5-sub3",
          question: "職業安全衛生",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub3-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q5-sub4",
          question: "教育訓練與職涯發展	",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub4-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q5-sub5",
          question: "平等與多元化",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub5-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q5-sub6",
          question: "薪酬與福利",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub6-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q5-sub7",
          question: "顧客隱私管理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q5-sub7-option${n}`,
            label: n.toString(),
          })),
        },
      ],
    },

    {
      id: "q6",
      question:
        "您覺得這些議題對於經濟 / 社會 / 環境的影響大不大？【公司治理面（經濟面）】（1-5分）",
      options: [],
      subQuestions: [
        {
          id: "q6-sub1",
          question: "多元治理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub1-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub2",
          question: "經濟績效",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub2-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub3",
          question: "誠信經營",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub3-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub4",
          question: "法規遵循",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub4-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub5",
          question: "風險管理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub5-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub6",
          question: "產品品質與技術",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub6-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub7",
          question: "客戶服務",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub7-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q6-sub8",
          question: "供應鏈管理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q6-sub8-option${n}`,
            label: n.toString(),
          })),
        },
      ],
    },
    {
      id: "q7",
      question:
        "您覺得這些議題對於經濟 / 社會 / 環境的影響大不大？【環境面】（1-5分）",
      options: [],
      subQuestions: [
        {
          id: "q7-sub1",
          question: "氣候變遷對策",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q7-sub1-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q7-sub2",
          question: "綠色產品 / 服務",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q7-sub2-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q7-sub3",
          question: "能源、水資源、廢棄物管理	",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q7-sub3-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q7-sub4",
          question: "溫室氣體排放與減量",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q7-sub4-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q7-sub5",
          question: "環保問題申訴機制",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q7-sub5-option${n}`,
            label: n.toString(),
          })),
        },
      ],
    },
    {
      id: "q8",
      question:
        "您覺得這些議題對於經濟 / 社會 / 環境的影響大不大？【社會面】（1-5分）",
      options: [],
      subQuestions: [
        {
          id: "q8-sub1",
          question: "社會 / 社區參與",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub1-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q8-sub2",
          question: "勞雇 / 勞資關係",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub2-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q8-sub3",
          question: "職業安全衛生",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub3-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q8-sub4",
          question: "教育訓練與職涯發展	",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub4-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q8-sub5",
          question: "平等與多元化",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub5-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q8-sub6",
          question: "薪酬與福利",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub6-option${n}`,
            label: n.toString(),
          })),
        },
        {
          id: "q8-sub7",
          question: "顧客隱私管理",
          options: [1, 2, 3, 4, 5].map((n) => ({
            id: `q8-sub7-option${n}`,
            label: n.toString(),
          })),
        },
      ],
    },
  ];


  export default questions