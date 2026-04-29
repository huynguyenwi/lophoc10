import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';
import { Icons } from './Icons';

interface QuizSectionProps {
  questions: Question[];
  onComplete: () => void;
}

export default function QuizSection({ questions, onComplete }: QuizSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 bg-white border-4 border-slate-900 shadow-neo rounded-sm"
      >
        <div className="w-24 h-24 bg-green-400 border-4 border-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-neo-sm transform -rotate-12">
          <Icons.CheckCircle2 size={48} className="text-slate-900" />
        </div>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Tuyệt vời!</h3>
        <p className="text-xl font-bold text-slate-600 mb-10">
          Bạn đã đạt <span className="text-3xl font-black text-blue-600 tracking-tighter">{score}/{questions.length}</span> điểm.
        </p>
        <button
          onClick={onComplete}
          className="px-10 py-4 bg-slate-900 text-white rounded-lg font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-neo-sm"
        >
          Tiếp tục học bài khác
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex items-center justify-between">
          <div className="bg-yellow-400 border-2 border-slate-900 px-4 py-1 transform -rotate-2">
            <span className="text-sm font-black uppercase tracking-tighter">
              Câu hỏi {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(questions.length)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 border-2 border-slate-900 rounded-sm ${i <= currentQuestionIndex ? 'bg-blue-600' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
        <div className="h-4 w-full bg-slate-200 border-2 border-slate-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            className="h-full bg-blue-600"
          />
        </div>
      </div>

      <motion.h3
        key={currentQuestion.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 mb-12"
      >
        {currentQuestion.text}
      </motion.h3>

      <div className="grid gap-6">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correctAnswer;
          const isSelected = index === selectedOption;

          let buttonClass = "w-full p-6 text-left rounded-xl border-4 transition-all relative group ";
          if (!showResult) {
            buttonClass += "border-slate-900 bg-white hover:bg-blue-50 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none";
          } else {
            if (isCorrect) {
              buttonClass += "border-slate-900 bg-green-400 shadow-neo-sm";
            } else if (isSelected) {
              buttonClass += "border-slate-900 bg-red-400 opacity-100";
            } else {
              buttonClass += "border-slate-200 bg-white opacity-40";
            }
          }

          return (
            <motion.button
              disabled={showResult}
              key={`${currentQuestion.id}-${index}`}
              onClick={() => handleOptionClick(index)}
              whileTap={{ scale: showResult ? 1 : 0.98 }}
              className={buttonClass}
            >
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-black shrink-0 border-2 border-slate-900">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-xl font-black uppercase tracking-tight">{option}</span>
                {showResult && isCorrect && (
                  <div className="ml-auto w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-slate-900">
                    <Icons.CheckCircle2 size={20} className="text-green-600" />
                  </div>
                )}
                {showResult && isSelected && !isCorrect && (
                  <div className="ml-auto w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-slate-900">
                    <Icons.XCircle size={20} className="text-red-600" />
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleNext}
              className="group flex items-center gap-4 px-12 py-4 bg-slate-900 text-white rounded-lg font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-neo"
            >
              <span className="text-lg">
                {currentQuestionIndex < questions.length - 1 ? 'Tiếp tục' : 'Xem kết quả'}
              </span>
              <Icons.ChevronLeft className="rotate-180 transform group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
