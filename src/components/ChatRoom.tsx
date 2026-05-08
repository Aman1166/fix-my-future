import { useContext, useState, useRef, useEffect } from 'react';
import { LanguageContext } from '../App';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'astrologer';
  timestamp: Date;
}

export default function ChatRoom({
  astrologer,
  onBack
}: {
  astrologer: any;
  onBack: () => void;
}) {
  const { lang } = useContext(LanguageContext);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: lang === 'hi' ? `नमस्ते! मैं ${astrologer.name} हूं। आपकी मदद कैसे कर सकता हूं?` : `Hello! I am ${astrologer.name}. How can I help you today?`,
      sender: 'astrologer',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Simulate astrologer response after 2 seconds
      setTimeout(() => {
        const responses = [
          lang === 'hi' ? 'यह बहुत अच्छा प्रश्न है। कृपया और विस्तार से बताएं।' : 'That\'s a great question. Please tell me more details.',
          lang === 'hi' ? 'मैं आपकी स्थिति को समझ रहा हूं। चलिए आगे बढ़ते हैं।' : 'I understand your situation. Let\'s proceed.',
          lang === 'hi' ? 'यह एक सामान्य समस्या है। हम इसे हल कर सकते हैं।' : 'This is a common issue. We can resolve it.',
          lang === 'hi' ? 'आपके जन्म कुंडली के आधार पर, मैं कुछ सुझाव दे सकता हूं।' : 'Based on your birth chart, I can give some suggestions.'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        const astrologerMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: randomResponse,
          sender: 'astrologer',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, astrologerMessage]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 z-[64] bg-gray-800 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800/95 backdrop-blur-md border-b border-white/10 p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white hover:text-amber-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>{lang === 'hi' ? 'वापस' : 'Back'}</span>
        </button>

        <div className="flex items-center space-x-3">
          <img
            src={astrologer.image}
            alt={astrologer.name}
            className="w-10 h-10 rounded-full border-2 border-white/20"
          />
          <div>
            <h3 className="text-white font-bold">{astrologer.name}</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-400 text-sm">{lang === 'hi' ? 'ऑनलाइन' : 'Online'}</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-green-400 font-bold">₹{astrologer.price}/min</div>
          <div className="text-gray-400 text-sm">{astrologer.waitTime}</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-amber-700 text-white rounded-br-sm'
                  : 'bg-gray-700 text-stone-200 rounded-bl-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-gray-800/95 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={lang === 'hi' ? 'अपना संदेश लिखें...' : 'Type your message...'}
            className="flex-1 bg-gray-700 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-600/50"
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-gradient-to-r from-amber-600-500 to-blue-500 hover:from-amber-600-600 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-amber-600-500/30 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="hidden sm:inline">{lang === 'hi' ? 'भेजें' : 'Send'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}