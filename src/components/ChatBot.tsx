import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icons } from './Icons';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Chào em! Thầy là trợ lý học tập AI. Em cần thầy giúp đỡ gì về bài học hôm nay không?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `Bạn là một trợ lý học tập thân thiện dành cho học sinh lớp 5 tại Việt Nam. 
              Hãy trả lời bằng tiếng Việt, ngôn ngữ dễ hiểu, khích lệ và lễ phép. 
              Bạn có thể giúp giải toán, giải thích kiến thức Tiếng Việt, Khoa học, Lịch sử và Địa lý lớp 5.
              
              Câu hỏi hiện tại của học sinh là: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "Bạn là một gia sư lớp 5 tận tâm. Hãy giải thích ngắn gọn, súc tích và khích lệ học sinh.",
        }
      });

      const botResponse = response.text || "Xin lỗi, thầy gặp chút trục trặc. Em thử hỏi lại nhé!";
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Thầy đang bận một chút, em quay lại sau nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white border-4 border-slate-900 shadow-neo flex flex-col rounded-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 p-4 border-b-4 border-slate-900 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 border-2 border-slate-900 rounded-lg flex items-center justify-center text-slate-900">
                  <Icons.Bot size={20} />
                </div>
                <span className="font-black uppercase tracking-tight">Gia Sư AI Lớp 5</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-blue-700 rounded transition-colors"
              >
                <Icons.X size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`
                    max-w-[85%] p-3 border-2 border-slate-900 shadow-neo-sm
                    ${msg.role === 'user' ? 'bg-yellow-400 rounded-l-xl rounded-tr-xl' : 'bg-white rounded-r-xl rounded-tl-xl'}
                  `}>
                    <p className="text-sm font-bold leading-tight">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 border-2 border-slate-900 shadow-neo-sm rounded-r-xl rounded-tl-xl flex gap-1">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t-4 border-slate-900 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi thầy bất cứ điều gì..."
                  className="flex-1 px-4 py-2 border-2 border-slate-900 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-slate-900 text-white rounded-lg border-2 border-slate-900 hover:bg-blue-600 transition-all active:translate-x-1 active:translate-y-1 shadow-neo-sm active:shadow-none"
                >
                  <Icons.Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-yellow-400 border-4 border-slate-900 shadow-neo rounded-2xl flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
      >
        {isOpen ? <Icons.X size={32} /> : <Icons.MessageCircle size={32} />}
      </motion.button>
    </div>
  );
}
