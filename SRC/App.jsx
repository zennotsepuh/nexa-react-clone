import React, { useState } from 'react';
import { 
  Coins, 
  Server, 
  User, 
  Crown, 
  Eye, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Award,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const App = () => {
  // STATE buat emoji
  const [emojiList, setEmojiList] = useState([]);
  const [inputEmoji, setInputEmoji] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // DATA dummy buat membership
  const userData = {
    name: 'Nexa User',
    id: 'NEXA-C04E83AD',
    membership: 'FREE USER',
    balance: 3,
    currency: 'Coins',
    verified: true
  };

  // Handle tambah emoji
  const handleAddEmoji = (e) => {
    e.preventDefault();
    if (!inputEmoji.trim()) return;
    if (emojiList.length >= 4) {
      alert('BOS! Maksimal 4 emoji aja!');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setEmojiList([...emojiList, inputEmoji.trim()]);
      setInputEmoji('');
      setIsSubmitting(false);
    }, 300);
  };

  // Handle hapus emoji
  const handleRemoveEmoji = (index) => {
    setEmojiList(emojiList.filter((_, i) => i !== index));
  };

  // Handle reset emoji
  const handleResetEmoji = () => {
    if (emojiList.length === 0) return;
    if (confirm('Yakin mau reset semua emoji, bos?')) {
      setEmojiList([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans antialiased">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 pointer-events-none"></div>
      
      {/* HEADER */}
      <header className="relative border-b border-white/5 bg-[#12121a]/90 backdrop-blur-xl px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/25">
            N
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%] animate-[gradient_3s_ease_infinite]">
              Nexa React
            </span>
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-500/30 ml-2 inline-block">
              👑
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Server size={14} className="text-green-400" />
            <span className="text-gray-300">Server2</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-green-400/70">Online</span>
          </div>
          <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 sm:hidden">
            <Server size={14} className="text-green-400" />
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative max-w-3xl mx-auto px-4 py-6">
        
        {/* MEMBERSHIP CARD */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-white/5 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-shadow duration-500">
          
          {/* Header Membership */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Crown size={18} className="text-yellow-400" />
              <span className="text-sm font-semibold text-gray-300">Membership</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
                <ShieldCheck size={14} />
                {userData.membership}
              </span>
              {userData.verified && (
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30 flex items-center gap-1">
                  <CheckCircle size={12} />
                  Verified
                </span>
              )}
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/25">
              {userData.name.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-400">Verified ID</p>
              <p className="font-mono text-sm tracking-wider text-white flex items-center gap-2">
                {userData.id}
                <span className="text-xs text-green-400">
                  <CheckCircle size={14} />
                </span>
              </p>
            </div>
          </div>

          {/* Balance */}
          <div className="mt-4 flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/5 hover:border-yellow-500/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <Coins size={20} className="text-yellow-400" />
              </div>
              <div>
                <span className="text-sm text-gray-400">Saldo Tersedia</span>
                <div className="text-xs text-gray-500">Updated just now</div>
              </div>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-yellow-400">{userData.balance}</span>
              <span className="text-sm text-yellow-400/70 mb-1">{userData.currency}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
              <Award size={16} className="text-purple-400 mx-auto mb-1" />
              <span className="text-xs text-gray-400">Level</span>
              <div className="text-sm font-bold text-white">Bronze</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
              <Clock size={16} className="text-blue-400 mx-auto mb-1" />
              <span className="text-xs text-gray-400">Member</span>
              <div className="text-sm font-bold text-white">3 Days</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
              <Zap size={16} className="text-yellow-400 mx-auto mb-1" />
              <span className="text-xs text-gray-400">Status</span>
              <div className="text-sm font-bold text-green-400">Active</div>
            </div>
          </div>
        </div>

        {/* EMOJI PREVIEW SECTION */}
        <div className="mt-6 bg-[#12121a] rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300">
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Eye size={18} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-300">Preview Emoji</span>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/30">
                {emojiList.length}/4
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 hidden sm:inline">Ketik emoji di atas...</span>
              {emojiList.length > 0 && (
                <button
                  onClick={handleResetEmoji}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Emoji Grid */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[...Array(4)].map((_, idx) => {
              const emoji = emojiList[idx];
              return (
                <div 
                  key={idx}
                  className={`aspect-square rounded-xl border-2 transition-all duration-300 flex items-center justify-center text-4xl ${
                    emoji 
                      ? 'border-purple-500/50 bg-purple-500/10 hover:border-purple-400 hover:bg-purple-500/20' 
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  {emoji || (
                    <span className="text-gray-600 text-sm">
                      {idx + 1}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Input Section */}
          <form onSubmit={handleAddEmoji} className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputEmoji}
                onChange={(e) => setInputEmoji(e.target.value)}
                placeholder="Contoh: 😈 🔥 💀 🚀"
                className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                maxLength={2}
                disabled={emojiList.length >= 4}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                {inputEmoji.length}/2
              </div>
            </div>
            
            <button
              type="submit"
              disabled={emojiList.length >= 4 || !inputEmoji.trim() || isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-w-[120px]"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Sparkles size={16} />
                  Tambah
                </>
              )}
            </button>
          </form>

          {/* Active Emojis */}
          {emojiList.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500 mb-2">Emoji Aktif:</p>
              <div className="flex flex-wrap gap-2">
                {emojiList.map((emoji, idx) => (
                  <span 
                    key={idx}
                    className="group bg-white/10 px-4 py-2 rounded-xl text-2xl flex items-center gap-3 border border-white/10 hover:border-red-500/30 transition-all duration-300"
                  >
                    <span>{emoji}</span>
                    <button 
                      onClick={() => handleRemoveEmoji(idx)}
                      className="text-xs text-gray-500 group-hover:text-red-400 transition-colors"
                    >
                      <XCircle size={16} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldCheck size={16} className="text-green-400" />
            <span className="text-xs text-gray-400">Aman & Terlindungi</span>
            <span className="text-xs text-gray-600">•</span>
            <span className="text-xs text-gray-400">SSL Encrypted</span>
          </div>
          <p className="text-xs text-gray-500">
            © 2026 Nexa React Smm — Powered by{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              DanzModss
            </span>
          </p>
        </div>
      </main>

      {/* CSS Animation tambahan */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default App;
