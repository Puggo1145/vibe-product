"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import DeviceFrame from '@/app/(main)/contents/hero/_components/DeviceFrame';

// 固定的提示词
const fixedPrompt = "帮我设计一个社交媒体App界面";

// 定义 AI 界面构建步骤
const buildSteps = [
  { step: 1, label: "分析需求..." },
  { step: 2, label: "创建基础布局..." },
  { step: 3, label: "添加组件..." },
  { step: 4, label: "应用样式..." },
  { step: 5, label: "优化设计..." },
  { step: 6, label: "完成!" }
];

// 应用界面组件
const XiaohongshuAppUI = () => (
  <div className="flex flex-col w-full h-full bg-white">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="h-12 bg-white flex items-center justify-between px-4 border-b border-gray-100"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center"
      >
        <span className="text-black font-bold text-lg">首页</span>
        <span className="ml-2 text-red-500 text-xs rounded-full px-2 py-0.5 border border-red-500">关注</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex space-x-4"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>

    {/* Content Feed */}
    <div className="flex-1 overflow-auto">
      {/* Stories/Categories Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex px-3 py-3 space-x-3 overflow-x-auto no-scrollbar"
      >
        {['推荐', '穿搭', '美食', '彩妆', '旅行', '家居'].map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + idx * 0.05 }}
            className={`flex flex-col items-center ${idx === 0 ? 'text-red-500' : 'text-gray-600'}`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              idx === 0 ? 'bg-red-50 border-2 border-red-500' : 'bg-gray-100'
            }`}>
              <span className="text-xs">{category}</span>
            </div>
            <span className="text-xs mt-1">{category}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Posts Grid */}
      <div className="grid grid-cols-2 gap-2 px-2">
        {[
          { id: 1, title: "冬季时尚穿搭灵感，温暖又不失时尚感", likes: "2.3k", comments: "132" },
          { id: 2, title: "今日营业！超级好吃的日式料理推荐", likes: "1.5k", comments: "98" },
          { id: 3, title: "旅行必备好物分享|提高幸福感的小众好物", likes: "3.7k", comments: "246" },
          { id: 4, title: "一学就会的快手家常菜，十分钟搞定晚餐", likes: "986", comments: "57" }
        ].map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.15 }}
            className="mb-3"
          >
            <div className="aspect-[3/4] rounded-lg mb-2 overflow-hidden bg-muted-foreground/20" />
            <div className="px-1">
              <p className="text-xs line-clamp-2 mb-1">{post.title}</p>
              <div className="flex items-center text-gray-500">
                <span className="text-xs mr-3">
                  <span className="inline-block align-middle">
                    <svg className="w-3 h-3 inline mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {post.likes}
                </span>
                <span className="text-xs">
                  <span className="inline-block align-middle">
                    <svg className="w-3 h-3 inline mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {post.comments}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Bottom Navigation */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="h-14 bg-white border-t border-gray-100 flex items-center justify-around px-2"
    >
      <div className="flex flex-col items-center">
        <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs text-red-500 mt-0.5">首页</span>
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs text-gray-400 mt-0.5">探索</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center -mt-5">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs text-gray-400 mt-0.5">消息</span>
      </div>
      <div className="flex flex-col items-center">
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs text-gray-400 mt-0.5">我</span>
      </div>
    </motion.div>
  </div>
);

export default function PromptToProductDemo() {
  // 状态管理
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // 模拟 AI 生成过程
  const handleGenerate = () => {
    if (isGenerating) return;

    setIsGenerating(true);
    setCurrentStep(0);
    setShowResult(false);
    setMessageSent(true);

    // 模拟 AI 思考和构建过程
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= buildSteps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setShowResult(true);
            setIsGenerating(false);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto w-full flex gap-6 border border-muted p-6 rounded-xl">
      {/* Left: Device Frame */}
      <div className="flex justify-center items-center">
        <DeviceFrame type="app" className="w-[300px] md:w-[350px]">
          {showResult ? (
            <XiaohongshuAppUI />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-background">
              {isGenerating ? (
                <div className="text-center p-4">
                  <div className="mb-4 text-lg font-medium">
                    {buildSteps[currentStep].label}
                  </div>
                  <div className="flex justify-center space-x-2">
                    {buildSteps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx <= currentStep ? 'bg-primary' : 'bg-muted'}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground text-center p-6">
                  <p>点击「发送」按钮尝试生成</p>
                  <p className="mt-2 text-sm opacity-70">生成的应用将在此处显示</p>
                </div>
              )}
            </div>
          )}
        </DeviceFrame>
      </div>

      {/* Right: Chat Interface */}
      <div className="flex-1 bg-background rounded-lg border border-border overflow-hidden flex flex-col">
        {/* Messages Container */}
        <div className="p-4 flex-1 overflow-y-auto">
          {/* User Fixed Prompt - Only show after sending */}
          {messageSent && (
            <div className="flex items-start mb-4 justify-end">
              <div className="bg-muted/40 rounded-lg p-3 max-w-[85%]">
                <p>{fixedPrompt}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ml-3 flex-shrink-0">
                <span className="text-sm">😊</span>
              </div>
            </div>
          )}

          {/* Generating Status */}
          {isGenerating && (
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 max-w-[85%]">
                <div className="space-y-4">
                  <p className="font-medium">正在设计您的产品界面...</p>
                  <div className="space-y-2">
                    {buildSteps.slice(0, currentStep + 1).map((step, idx) => (
                      <div key={step.step} className="flex items-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mr-2 text-xs"
                        >
                          {step.step}
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {step.label}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Result Confirmation */}
          {showResult && (
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 max-w-[85%]">
                <p className="font-medium">我已经帮你完成了一个社交媒体应用</p>
              </div>
            </div>
          )}
        </div>

        {/* Input Area - Taller input with embedded send button */}
        <div className="border-t border-border p-4 mt-auto">
          <div className="relative">
            <p className="w-full py-2 rounded-lg border-none text-muted-foreground resize-none h-28">
              {fixedPrompt}
            </p>
            
            {/* Model name and send button container */}
            <div className="flex justify-between items-center">
              <div className="text-xs text-muted-foreground">claude-3.7-sonnet</div>
              
              <button
                onClick={handleGenerate}
                disabled={isGenerating || messageSent}
                className={`px-4 py-1.5 rounded-md bg-muted cursor-pointer duration-100
                  ${isGenerating || messageSent ? 'text-muted-foreground' : 'hover:bg-muted-foreground/30'}`
                }
              >
                {isGenerating ? '生成中...' : messageSent ? '已发送' : '发送'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 