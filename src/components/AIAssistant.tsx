"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "Where can I download Surah Yasin?",
  "How can I listen to Quran recitation?",
  "Find Sahih Bukhari hadiths",
  "I want to learn Arabic basics",
];

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Assalamu Alaikum! 👋 I'm your Islamic Library AI assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to get response");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          error instanceof Error
            ? error.message
            : "I apologize, but I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container - Centered */}
      <div className="relative w-full max-w-2xl mx-auto my-auto">
        {/* Close Button - Outside Modal */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-20 flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all hover:scale-110 shadow-2xl font-bold text-lg"
          aria-label="Close AI Assistant"
        >
          <span>✕ Close</span>
        </button>

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl flex flex-col h-[80vh] md:h-[85vh] overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#0D7377]/10 bg-gradient-to-r from-[#0D7377] to-[#4DB8B8]">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
            🤖
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">AI Assistant</h3>
            <p className="text-xs text-white/80">Powered by OpenAI • Press ESC to close</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FEFDF8]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-[#0D7377] to-[#4DB8B8]"
                    : "bg-[#D4AF37]/20"
                }`}
              >
                <span className="text-lg">{message.role === "user" ? "👤" : "🤖"}</span>
              </div>
              <div
                className={`flex-1 max-w-[80%] ${
                  message.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-[#0D7377] to-[#4DB8B8] text-white rounded-br-sm"
                      : "bg-white border border-[#0D7377]/10 text-[#2C3E50] rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🤖</span>
              </div>
              <div className="bg-white border border-[#0D7377]/10 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#0D7377] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-[#0D7377] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-[#0D7377] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && !isLoading && (
          <div className="px-6 py-4 border-t border-[#0D7377]/10 bg-white">
            <p className="text-xs font-semibold text-[#0D7377] uppercase tracking-wider mb-3">
              Quick Questions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(question)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-left text-[#2C3E50]/80 bg-[#0D7377]/5 hover:bg-[#0D7377]/10 rounded-lg transition-colors"
                >
                  <span>💬</span>
                  <span className="line-clamp-1">{question}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-[#0D7377]/10 bg-white">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about Islamic resources..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-[#0D7377]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-[#0D7377] to-[#4DB8B8] text-white rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </span>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
