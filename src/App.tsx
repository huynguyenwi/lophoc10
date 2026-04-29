import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { subjects } from './data/lessons';
import { Icons } from './components/Icons';
import SubjectCard from './components/SubjectCard';
import QuizSection from './components/QuizSection';
import ChatBot from './components/ChatBot';

type View = 'home' | 'subject' | 'lesson';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [activeSubjectId, setActiveSubjectId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [lessonMode, setLessonMode] = useState<'theory' | 'practice'>('theory');

  const activeSubject = subjects.find(s => s.id === activeSubjectId);
  const activeLesson = activeSubject?.lessons.find(l => l.id === activeLessonId);

  const handleSubjectClick = (id: string) => {
    setActiveSubjectId(id);
    setView('subject');
  };

  const handleLessonClick = (id: string) => {
    setActiveLessonId(id);
    setLessonMode('theory');
    setView('lesson');
  };

  const goBack = () => {
    if (view === 'lesson') setView('subject');
    else if (view === 'subject') setView('home');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12 flex flex-col">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 h-20 bg-white border-b-4 border-slate-900 flex items-center justify-between px-6 sm:px-10 shrink-0">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setView('home')}
            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-2xl tracking-tighter cursor-pointer"
          >
            5+
          </div>
          <h1
            onClick={() => setView('home')}
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight cursor-pointer select-none"
          >
            Học Tập <span className="text-blue-600">Lớp 5</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-8 font-black uppercase text-sm tracking-widest">
          {subjects.map(s => (
            <button
              key={s.id}
              onClick={() => handleSubjectClick(s.id)}
              className={`pb-1 transition-all border-b-4 ${activeSubjectId === s.id ? 'text-blue-600 border-blue-600' : 'text-slate-400 border-transparent hover:text-slate-900'}`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-full border-2 border-slate-900">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-tight">Trực tuyến</span>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <div className="inline-block bg-yellow-400 px-4 py-1 border-2 border-slate-900 transform -rotate-1">
                  <span className="text-sm font-black uppercase tracking-tighter">Chào mừng học sinh lớp 5</span>
                </div>
                <h2 className="text-6xl sm:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-slate-900 max-w-4xl">
                  Khám phá <br /><span className="text-blue-600">TRI THỨC</span> MỚI
                </h2>
                <p className="text-xl font-bold text-slate-500 max-w-2xl leading-tight">
                  Tự tin chinh phục kiến thức lớp 5 với hệ thống bài giảng sinh động và bài tập rèn luyện mỗi ngày.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subjects.map(subject => (
                  <SubjectCard key={subject.id} subject={subject} onClick={handleSubjectClick} />
                ))}
              </div>
            </motion.div>
          )}

          {view === 'subject' && activeSubject && (
            <motion.div
              key="subject"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col lg:flex-row gap-10"
            >
              {/* Sidebar: Lesson List */}
              <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <button onClick={goBack} className="p-2 border-2 border-slate-900 rounded-lg hover:bg-slate-200 transition-colors">
                    <Icons.ChevronLeft size={24} />
                  </button>
                  <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Danh sách bài học</h2>
                </div>

                <div className="flex flex-col gap-3">
                  {activeSubject.lessons.map((lesson, idx) => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson.id)}
                      className={`text-left p-5 rounded-xl border-2 transition-all ${activeLessonId === lesson.id
                          ? 'bg-blue-600 text-white border-slate-900 shadow-neo-sm translate-x-1 translate-y-1'
                          : 'bg-white border-slate-200 hover:border-slate-900 hover:bg-slate-50'
                        }`}
                    >
                      <p className={`text-[10px] font-black uppercase tracking-widest ${activeLessonId === lesson.id ? 'opacity-80' : 'text-slate-400'}`}>
                        Bài {idx + 1}
                      </p>
                      <h3 className="font-black text-lg leading-tight uppercase tracking-tighter">{lesson.title}</h3>
                    </button>
                  ))}
                </div>
              </aside>

              {/* Subject Content Header */}
              <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <div className={`inline-block px-4 py-1 border-2 border-slate-900 ${activeSubject.color} text-white`}>
                    <span className="text-sm font-black uppercase tracking-tighter">{activeSubject.name}</span>
                  </div>
                  <h2 className="text-6xl font-black uppercase leading-none tracking-tighter text-slate-900">
                    Sẵn sàng <br />để học chưa?
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white border-4 border-slate-900 shadow-neo rounded-sm">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Hãy chọn một bài học</h3>
                    <p className="font-bold text-slate-500">Bấm vào các bài học ở danh sách bên trái để bắt đầu khám phá kiến thức thú vị!</p>
                  </div>
                  <div className="p-8 bg-yellow-400 border-4 border-slate-900 shadow-neo rounded-sm transform rotate-1">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Mẹo nhỏ</h3>
                    <p className="font-bold text-slate-900">Mỗi bài học sẽ bao gồm phần lý thuyết trước, sau đó là các câu hỏi luyện tập để kiểm tra trình độ của em.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'lesson' && activeLesson && (
            <motion.div
              key="lesson"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <button onClick={goBack} className="p-3 border-4 border-slate-900 rounded-lg bg-white shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                    <Icons.ChevronLeft size={28} />
                  </button>
                  <div className="space-y-1">
                    <div className="inline-block bg-blue-600 text-white px-3 py-0.5 border-2 border-slate-900">
                      <span className="text-[10px] font-black uppercase tracking-widest">{activeSubject?.name}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-slate-900">{activeLesson.title}</h2>
                  </div>
                </div>

                <div className="flex bg-slate-200 p-1 border-4 border-slate-900 rounded-xl gap-1 shrink-0">
                  <button
                    onClick={() => setLessonMode('theory')}
                    className={`px-8 py-3 rounded-lg font-black uppercase tracking-widest transition-all ${lessonMode === 'theory'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-500 hover:bg-slate-300'
                      }`}
                  >
                    Lý thuyết
                  </button>
                  <button
                    onClick={() => setLessonMode('practice')}
                    className={`px-8 py-3 rounded-lg font-black uppercase tracking-widest transition-all ${lessonMode === 'practice'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-500 hover:bg-slate-300'
                      }`}
                  >
                    Luyện tập
                  </button>
                </div>
              </div>

              <div className="bg-[#FDFCF8] min-h-[500px]">
                <AnimatePresence mode="wait">
                  {lessonMode === 'theory' ? (
                    <motion.div
                      key="theory-content"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-10"
                    >
                      <div className="flex flex-col gap-6">
                        <div className="inline-block bg-yellow-400 px-6 py-2 border-4 border-slate-900 self-start shadow-neo-sm">
                          <span className="text-xl font-black uppercase tracking-tighter italic">Nội dung trọng tâm</span>
                        </div>
                        <div className="p-10 bg-white border-4 border-slate-900 shadow-neo rounded-sm">
                          <div className="prose prose-xl max-w-none text-slate-800 font-bold leading-snug">
                            {activeLesson.theory.split('\n').map((line, i) => (
                              <p key={i} className="mb-6 last:mb-0 border-l-8 border-blue-600 pl-8 py-2">{line}</p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-8">
                        <button
                          onClick={() => setLessonMode('practice')}
                          className="group flex items-center gap-4 px-12 py-5 bg-slate-900 text-white rounded-lg font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-neo transform -rotate-1"
                        >
                          Sẵn sàng thực hành
                          <Icons.ChevronLeft className="rotate-180 transform group-hover:translate-x-2 transition-transform" size={24} />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="practice-content"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <QuizSection
                        questions={activeLesson.questions}
                        onComplete={() => setView('subject')}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Chat Bot */}
      <ChatBot />

      {/* Footer */}
      <footer className="h-16 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between px-8 mt-auto shrink-0 gap-4 py-4 sm:py-0">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 italic text-center sm:text-left">
          Lớp 5 - Chinh phục ước mơ • Hệ thống học tập 2026
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Tiến độ cá nhân: 85%</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Hỗ trợ trực tuyến</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
