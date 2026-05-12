import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  time: string;
}

const aiResponses: Record<string, string[]> = {
  gemstone: [
    "🔮 Based on Vedic astrology, I'd recommend wearing a Yellow Sapphire (Pukhraj) for prosperity and wisdom. It strengthens Jupiter's influence in your birth chart. Would you like to know more about which gemstone suits your zodiac sign?",
    "💎 For career growth, Blue Sapphire (Neelam) is highly recommended. It brings discipline and stability. However, always consult with an astrologer before wearing it, as it's a very powerful stone!",
  ],
  love: [
    "❤️ For matters of the heart, Rose Quartz is known as the stone of unconditional love. Wearing a Rose Quartz bracelet can help attract love and strengthen relationships. Our Dhan Yog bracelet also helps in building harmonious connections!",
    "💕 Venus-ruled gemstones like Diamond and Opal are excellent for love and relationships. Would you like me to suggest a specific gemstone based on your zodiac sign?",
  ],
  career: [
    "🚀 For career advancement, Emerald (Panna) is associated with Mercury and enhances intelligence and business growth. Many successful professionals wear Emerald for sharp decision-making abilities!",
    "📈 Red Coral (Moonga) strengthens Mars energy, giving you courage and determination in your career. It's especially beneficial for people in leadership positions!",
  ],
  health: [
    "🌿 Pearl (Moti) is connected with the Moon and promotes emotional balance and peace of mind. It's excellent for mental health and reducing stress.",
    "🧘 For overall well-being, wearing a 5 Mukhi Rudraksha is highly recommended. It brings peace, clarity, and positive energy into your life.",
  ],
  rudraksha: [
    "📿 Rudraksha beads are sacred seeds with immense spiritual power! A 5 Mukhi Rudraksha is great for general well-being, while 7 Mukhi is associated with Goddess Lakshmi for wealth. Which aspect of life would you like to improve?",
    "✨ Gauri Shankar Rudraksha is perfect for harmony in relationships, while 14 Mukhi is considered the most powerful for spiritual awakening. We have authentic Nepali Rudraksha available in our store!",
  ],
  default: [
    "🙏 Namaste! I'm your AI Astrologer at Fix My Future. I can guide you on gemstones, Rudraksha, zodiac signs, career, love, and health based on Vedic astrology. What would you like to know?",
    "✨ Welcome! Ask me anything about gemstones, astrology, Rudraksha, or zodiac signs. I'm here to help you find the right spiritual remedy for your life's challenges!",
    "🌟 I can help you discover the perfect gemstone for your birth chart, recommend Rudraksha for spiritual growth, or guide you on zodiac-based remedies. What interests you?",
  ],
};

function getAIResponse(userMsg: string): string {
  const lower = userMsg.toLowerCase();
  if (lower.includes('gem') || lower.includes('stone') || lower.includes('ratan') || lower.includes('पुखराज') || lower.includes('नीलम') || lower.includes('पन्ना')) {
    return aiResponses.gemstone[Math.floor(Math.random() * aiResponses.gemstone.length)];
  }
  if (lower.includes('love') || lower.includes('relationship') || lower.includes('marriage') || lower.includes('प्रेम') || lower.includes('शादी')) {
    return aiResponses.love[Math.floor(Math.random() * aiResponses.love.length)];
  }
  if (lower.includes('career') || lower.includes('job') || lower.includes('business') || lower.includes('करियर') || lower.includes('नौकरी')) {
    return aiResponses.career[Math.floor(Math.random() * aiResponses.career.length)];
  }
  if (lower.includes('health') || lower.includes('disease') || lower.includes('स्वास्थ्य') || lower.includes('बीमारी')) {
    return aiResponses.health[Math.floor(Math.random() * aiResponses.health.length)];
  }
  if (lower.includes('rudraksha') || lower.includes('रुद्राक्ष') || lower.includes('mukhi') || lower.includes('मुखी')) {
    return aiResponses.rudraksha[Math.floor(Math.random() * aiResponses.rudraksha.length)];
  }
  return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "🙏 Namaste! I'm your AI Astrologer at Fix My Future. Ask me about gemstones, Rudraksha, zodiac signs, career, love, or health! I'm here to guide you for FREE.", sender: 'ai', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        text: getAIResponse(userMsg.text),
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const quickQuestions = ["Which gemstone for career?", "Tell me about Rudraksha", "Love & relationship advice", "Health remedies"];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-linear-to-br from-purple-600 to-gray-600 rounded-full shadow-2xl shadow-purple-500/30 flex items-center justify-center hover:scale-110 transition-transform group animate-float"
      >
        <span className="text-3xl group-hover:rotate-12 transition-transform text-white flex items-center justify-center"><span className="material-symbols-outlined" style={{ fontSize: '32px' }}>smart_toy</span></span>
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
        </span>
        <span className="absolute -top-10 right-0 bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-purple-500/30 flex items-center gap-1">
          Free AI Astrologer <span className="material-symbols-outlined text-amber-500 text-sm">auto_awesome</span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-4rem)] bg-gray-800 rounded-2xl shadow-2xl border border-purple-500/20 flex flex-col overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="bg-linear-to-r from-purple-900 via-gray-900 to-purple-900 p-4 flex items-center justify-between border-b border-purple-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-gray-500 rounded-full flex items-center justify-center text-xl shadow-lg text-white">
            <span className="material-symbols-outlined">smart_toy</span>
          </div>
          <div>
            <h3 className="font-black text-white text-sm">AI Astrologer</h3>
            <p className="text-[10px] text-green-400 font-bold flex items-center">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
              Online • Free Consultation
            </p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors text-xl font-bold">✕</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-800/80">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.sender === 'user' ? 'bg-linear-to-r from-purple-600 to-gray-600 text-white rounded-br-md' : 'bg-gray-700/80 text-stone-200 rounded-bl-md border border-white/5'}`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-[9px] mt-1.5 ${msg.sender === 'user' ? 'text-white/50' : 'text-stone-500'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700/80 rounded-2xl rounded-bl-md px-4 py-3 border border-white/5">
              <div className="flex space-x-1.5">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-white/5 bg-gray-800/50">
        {quickQuestions.map((q) => (
          <button
            key={q}
            onClick={() => { setInput(q); }}
            className="shrink-0 text-[10px] font-bold px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/10 bg-gray-800/80">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about gemstones, astrology..."
            className="flex-1 bg-gray-700 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
          />
          <button
            onClick={sendMessage}
            className="w-10 h-10 bg-linear-to-r from-purple-500 to-gray-500 rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-gray-600 transition-all shadow-lg active:scale-90"
          >
            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
