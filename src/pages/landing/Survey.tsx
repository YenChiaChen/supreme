import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faArrowRightFromBracket,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RadioButtonGroup from "./RadioButton";
import questions from "./Questions";
import earthGif from '../../assets/img/gif/earth.gif';
interface SurveyProps {
  isOpen: boolean;
  onClose: () => void;
}

const Survey: React.FC<SurveyProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const [hasAnimated, setHasAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setHasAnimated(true);
  };



  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const handleChange = (questionId: string, value: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-[#000000] bg-opacity-50 z-[98]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 lg:w-3/5 h-full bg-white shadow-lg z-[99]  overflow-y-auto shadow-xl"
          >
            {!isSubmitted ? (
              <div className="py-4 px-10">
                <button
                  onClick={onClose}
                  className="text-[#bfbfbf] text-[35px] hover:bg-gray duration-300 py-1 px-2 rounded-xl"
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </button>
                <div className="mt-8">
                  <h2 className="text-2xl mb-6 text-dark_blue tracking-wide font-semibold">
                    至上電子股份有限公司利害關係人ESG關注議題問卷
                  </h2>
                  <p className="text-[14px] bg-gray rounded-xl p-8 mb-8 leading-7 tracking-wide">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="text-dark_blue text-[35px] mb-8"
                    />{" "}
                    <br />
                    為使利害關係人更加瞭解至上電子股份有限公司對於社會責任的各種作法與永續發展的績效，我們將自2022年起每年持續進行永續報告書(ESG
                    Report)的編撰與出版。為達成報告書能夠與利害關係人有效溝通之目的，本問卷題項內容由我司依循GRI及聯合國永續管理指標所訂定。
                    <br />
                    <br />
                    在此誠摯地邀請您表達心中最真實的想法，提供寶貴的意見與建議，協助我們瞭解您所關注的主題，以做為後續資訊揭露及永續發展治理作業改善的重要參考依據。
                    <br />
                    <br />
                    本問卷內容僅作為至上電子股份有限公司內部分析利害關係人關注議題之用，您所填具的任何個人資料，絕對不對外洩漏，請放心填寫。
                  </p>

                  {questions.map((question) => (
                    <div key={question.id} className="mb-12">
                      <h2 className=" mb-6 text-xl text-dark_blue tracking-wdie">
                        {question.question}
                      </h2>
                      {question.options.length > 0 && (
                        <RadioButtonGroup
                          name={question.id}
                          options={question.options}
                          selectedValue={responses[question.id] || ""}
                          onChange={(value) => handleChange(question.id, value)}
                        />
                      )}
                      {question.subQuestions &&
                        question.subQuestions.map((subQuestion) => (
                          <div
                            key={subQuestion.id}
                            className=" mb-4 grid grid-cols-12 gap-8 text-dark_blue pl-4"
                          >
                            <h3 className="mb-2 col-span-4">
                              {subQuestion.question}
                            </h3>
                            <div className="col-span-8">
                              <RadioButtonGroup
                                name={subQuestion.id}
                                options={subQuestion.options}
                                selectedValue={responses[subQuestion.id] || ""}
                                onChange={(value) =>
                                  handleChange(subQuestion.id, value)
                                }
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                  <h2 className=" mb-6 text-xl text-dark_blue tracking-wdie">
                    您對於至上電子股份有限公司的治理 / 社會 /
                    環境方面有什麼建議呢？
                  </h2>
                  <textarea
                    id="message"
                    className="text-dark_blue block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-dark_blue resize-none rounded-xl min-h-[150px] !outline-none"
                    placeholder="您的寶貴意見"
                  ></textarea>
                  <button
                    className="text-center w-full bg-dark_blue rounded-xl text-white my-8 py-4 text-xl hover:scale-[1.02] duration-300 font-bold tracking-widest"
                    onClick={handleSubmit}
                  >
                    送出問卷
                  </button>
                </div>
              </div>
            ) : (
                
                    <motion.div
                      className={`flex items-center justify-center text-white text-2xl  h-full lg:w-full w-[100vw]  bg-dark_blue `}
                      initial={{ scale: 1, y: "0", opacity: 0, borderRadius: "0%" }}
                      animate={{ scale: 1, y: 0, opacity: 1, borderRadius: "0%" }}
                      transition={{ duration: 0.8 }}
                      onAnimationComplete={() => {
                        setTimeout(onClose, 2000);
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="tracking-widest flex flex-col items-center gap-6"
                      >
                          <img src={earthGif} alt="Description of GIF" className="w-[140px]" />
                        謝謝您的寶貴意見
                      </motion.span>
                    </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Survey;
