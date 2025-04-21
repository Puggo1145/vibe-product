"use client"

import { useState } from 'react';
import { BotIcon, LayoutDashboardIcon, CodeIcon } from 'lucide-react';
import ToolCard from './_components/ToolCard';
import ToolSelector from './_components/ToolSelector';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Types for our tool cards
interface ToolInfo {
  scenario: string;
  category: string;
  description: string;
  products: string[];
  icon: React.ReactNode;
}

export default function AICodingToolsSection() {
  // Define the tool categories with their data
  const tools: ToolInfo[] = [
    {
      scenario: "我想构建出完整的产品",
      category: "AI IDE",
      description: "AI IDE 在传统编程专用的 IDE 基础上，添加了如 AI 代码补全和 Agent 模式等 AI 功能，功能更丰富、更复杂、更完整，可以与代码编写流程无缝融合，实现 AI 和人工之间的平衡协作",
      products: ["Cursor", "Windsurf"],
      icon: <CodeIcon className="w-10 h-10" />
    },
    {
      scenario: "我想快速构建出产品原型界面",
      category: "AI 界面生成工具",
      description: "更为简单的原型设计工具，描述你的产品功能或界面，即可快速生成产品原型界面",
      products: ["V0.dev"],
      icon: <LayoutDashboardIcon className="w-10 h-10" />
    },
    {
      scenario: "我想完全摆烂",
      category: "AI Agent 平台",
      description: "输入你对产品的构思，剩下的所有工作全部交给 AI Agent 帮你完成，直接交付成品。这类平台的 Agent 通常可以使用各种工具，帮你从 0 到 1 构建出一个产品。但还处于较为早期的阶段，效果并没有十分理想",
      products: ["Replit", "Manus"],
      icon: <BotIcon className="w-10 h-10" />
    }
  ];

  // State to track which scenario is selected
  const [selectedScenario, setSelectedScenario] = useState(tools[0].scenario);

  // Get the currently selected tool
  const selectedTool = tools.find(tool => tool.scenario === selectedScenario);

  return (
    <section className="max-w-7xl mx-auto relative py-32 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>

      {/* Section Title */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          选对工具
          <span className="relative inline-block ml-4">
            <span className="relative z-10">一切都很简单</span>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full"></div>
          </span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground max-w-3xl">
          市面上有很多 AI 编程工具，根据你的需求选一个最适合你的
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-8 mb-20">
        {/* Left column - Scenario Selection */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h3 className="text-xl font-medium mb-6 px-4">开发场景</h3>
          {tools.map((tool, index) => (
            <motion.button
              key={index}
              className={cn(
                "w-full text-left p-6 rounded-xl border transition-all cursor-pointer",
                selectedScenario === tool.scenario
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-border bg-background/50 hover:bg-muted/30'
              )}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedScenario(tool.scenario)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${selectedScenario === tool.scenario ? 'bg-primary/20' : 'bg-muted'}`}>
                  <div className="text-primary w-8 h-8 flex items-center justify-center">
                    {tool.icon}
                  </div>
                </div>
                <span className="font-medium">{tool.scenario}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Right column - Selected Card */}
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            {selectedTool && (
              <motion.div
                key={selectedTool.scenario}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full"
              >
                <ToolCard
                  category={selectedTool.category}
                  description={selectedTool.description}
                  products={selectedTool.products}
                  icon={selectedTool.icon}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tool Selector Component */}
      <ToolSelector />
    </section>
  );
} 