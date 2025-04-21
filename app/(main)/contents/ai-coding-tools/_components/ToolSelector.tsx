"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductLogos } from './ProductLogos';

// Type for supported product keys
type ProductKey = keyof typeof ProductLogos;

// Tool selection questionnaire
interface QuestionOption {
  text: string;
  recommendedTool: string;
}

interface Question {
  question: string;
  options: QuestionOption[];
}

interface ToolRecommendation {
  title: string;
  description: string;
  products: string[];
}

export default function ToolSelector() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Define the questions and options
  const questions: Question[] = [
    {
      question: "你想通过 AI 完成什么样的开发任务？",
      options: [
        { text: "从零开始构建完整功能的产品", recommendedTool: "AI IDE" },
        { text: "快速设计产品界面原型", recommendedTool: "AI 界面生成工具" },
        { text: "完全由 AI 自动构建整个产品", recommendedTool: "AI Agent 平台" }
      ]
    },
    {
      question: "你希望在开发过程中扮演什么角色？",
      options: [
        { text: "主导开发并使用 AI 辅助", recommendedTool: "AI IDE" },
        { text: "专注于设计和创意，让 AI 生成界面", recommendedTool: "AI 界面生成工具" },
        { text: "只提供想法，让 AI 完成全部工作", recommendedTool: "AI Agent 平台" }
      ]
    },
    {
      question: "你希望得到多少控制权？",
      options: [
        { text: "完全控制代码和实现细节", recommendedTool: "AI IDE" },
        { text: "控制设计方向，但不关心底层代码", recommendedTool: "AI 界面生成工具" },
        { text: "交给 AI 全权处理，最小化人工干预", recommendedTool: "AI Agent 平台" }
      ]
    }
  ];

  // Tool recommendations data
  const toolRecommendations: Record<string, ToolRecommendation> = {
    "AI IDE": {
      title: "AI IDE",
      description: "AI IDE 适合那些想要结合 AI 能力与自己编程经验的开发者",
      products: ["Cursor", "Windsurf"]
    },
    "AI 界面生成工具": {
      title: "AI 界面生成工具",
      description: "AI 界面生成工具适合那些想要快速构建界面原型的设计师和产品经理",
      products: ["V0.dev"]
    },
    "AI Agent 平台": {
      title: "AI Agent 平台",
      description: "AI Agent 平台适合那些希望由 AI 完成大部分开发工作的用户，虽然目前仍处于早期阶段",
      products: ["Replit", "Manus"]
    }
  };

  // Reset the questionnaire
  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedTool(null);
  };

  // Handle option selection
  const handleOptionSelect = (recommendedTool: string) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setSelectedTool(recommendedTool);
    }
  };

  return (
    <div className="mt-32 max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-full transition-all"
        >
          <span>找到适合你的 AI 工具</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`w-5 h-5 transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="bg-background/70 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              {selectedTool ? (
                // Results view
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl mx-auto"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">你最适合使用 {selectedTool}</h3>
                  
                  <div className="px-8 py-6 bg-primary/10 rounded-xl mb-12">
                    <p className="text-lg">{toolRecommendations[selectedTool]?.description || ""}</p>
                  </div>
                  
                  {/* Product recommendations with logos */}
                  <div className="mb-10">
                    <h4 className="text-center font-medium mb-8 text-primary">推荐产品</h4>
                    
                    <div className="flex justify-center gap-12 flex-wrap">
                      {toolRecommendations[selectedTool]?.products.map((product, index) => {
                        // Type check to ensure product exists in ProductLogos
                        const isValidProduct = product in ProductLogos;
                        const LogoComponent = isValidProduct 
                          ? ProductLogos[product as ProductKey] 
                          : null;
                        
                        return (
                          <motion.div 
                            key={index}
                            className="flex flex-col items-center gap-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="bg-background p-5 rounded-xl shadow-sm border border-border/50">
                              <div className="text-primary w-20 h-20 flex items-center justify-center">
                                {LogoComponent && <LogoComponent size={64} />}
                              </div>
                            </div>
                            <span className="font-medium">{product}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-muted hover:bg-muted/80 rounded-lg transition-colors font-medium"
                    >
                      重新测试
                    </button>
                  </div>
                </motion.div>
              ) : (
                // Question view
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-between text-sm text-muted-foreground mb-6">
                    <span>问题 {currentQuestionIndex + 1} / {questions.length}</span>
                    <button 
                      onClick={handleReset}
                      className="hover:text-foreground transition-colors"
                    >
                      重置
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestionIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-medium mb-8">
                        {questions[currentQuestionIndex].question}
                      </h3>

                      <div className="space-y-4">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                          <motion.button
                            key={index}
                            className="w-full text-left p-5 border border-border rounded-xl hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.01, backgroundColor: "rgba(var(--primary), 0.05)" }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => handleOptionSelect(option.recommendedTool)}
                          >
                            <span className="text-lg">{option.text}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 