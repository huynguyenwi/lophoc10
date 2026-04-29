import { motion } from 'motion/react';
import { Icons, IconName } from './Icons';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onClick: (id: string) => void;
}

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const IconComponent = Icons[subject.icon as IconName] || Icons.GraduationCap;

  return (
    <motion.button
      whileHover={{ translateZ: 10 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(subject.id)}
      className="relative overflow-hidden group p-8 rounded-sm bg-white border-4 border-slate-900 shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-left"
      id={`subject-card-${subject.id}`}
    >
      <div className={`w-14 h-14 rounded-lg bg-slate-900 flex items-center justify-center text-white mb-6 border-2 border-slate-900`}>
        <IconComponent size={28} />
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-2">{subject.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-xs font-black uppercase tracking-widest text-slate-400">{subject.lessons.length} Bài học</span>
        <div className={`h-1 flex-1 ${subject.color.replace('bg-', 'bg-')} bg-opacity-20 rounded-full overflow-hidden`}>
          <div className={`h-full ${subject.color} w-1/3`} />
        </div>
      </div>
    </motion.button>
  );
}
