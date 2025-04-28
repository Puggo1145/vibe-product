'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, MessageSquareText, Brain, Image as ImageIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PromptStep {
  step: string;
  practice: string;
  why: string;
}

const promptSteps: PromptStep[] = [
  {
    step: "1. 角色设定",
    practice: "用一句话告诉模型它是谁、它要做什么。例：`You are an expert UI designer…`",
    why: "Claude 和 GPT 都会优先遵循 system 角色"
  },
  {
    step: "2. 明确目标",
    practice: "指出最终产物格式（文本 / JSON / 代码片段）。例：`Return Figma-like JSON representing the UI.`",
    why: "减少模型\"发挥\""
  },
  {
    step: "3. 上下文输入",
    practice: "给足背景：产品定位、用户画像、已知约束。",
    why: "长上下文对 Claude / GPT 效果显著"
  },
  {
    step: "4. 分步思考",
    practice: "要求模型「逐步思考，再给结论」。例：`Think step-by-step, then output final answer only.`",
    why: "推理模型尤为受益"
  },
  {
    step: "5. 迭代 & 反馈",
    practice: "如果结果不理想：指出问题 → 添加示例 → 缩小范围。",
    why: "Prompt 设计是循环而非一次成型"
  }
];

interface ModelStrategy {
  type: string;
  examples: string[];
  strategies: string[];
  notes: string;
  icon: React.ReactNode;
}

const modelStrategies: ModelStrategy[] = [
  {
    type: "通用模型",
    examples: ["GPT-4o", "Claude Sonnet", "DeepSeek V3"],
    strategies: [
      "在对话开头统一设定角色",
      "在一个 prompt 里同时给目标 + 约束 + 示例"
    ],
    notes: "追求响应速度时，可删减示例数量。",
    icon: <MessageSquareText className="h-6 w-6" />
  },
  {
    type: "推理模型",
    examples: ["Claude Sonnet Thinking", "GPT o3", "DeepSeek R1", "Gemini 2.5 Pro"],
    strategies: [
      "提示语更加简洁，不要过分设计，只需要明确任务目标和需求，为推理模型预留发挥空间，限制太多反而影响其输出质量"
    ],
    notes: "这类模型慢，但擅长长链逻辑；给足推理空间。",
    icon: <Brain className="h-6 w-6" />
  },
  {
    type: "多模态模型",
    examples: ["GPT-4o", "Gemini"],
    strategies: [
      "上传 UI 参考图和界面草稿等，并要求模型\"参考图片设计和布局\""
    ],
    notes: "避免在同一轮里上传多张图片；分批更稳。",
    icon: <ImageIcon className="h-6 w-6" />
  }
];

const templateExample = `SYSTEM: You are a senior product engineer.
USER: Our goal ► Build a minimal "habit tracker" mobile UI.
Constraints ► Dark theme, ‎iOS-style padding, Chinese copy.
Deliverable ► Figma-like JSON.
Process ► Think step-by-step, output final JSON only.`;

export default function PromptDesignSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(templateExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            沟通是一门艺术
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            提示词（prompt）是你与模型之间重要的“接口”。掌握一些通用原则，并结合各类模型的差异，把「我想让边距再窄一点」这种朦胧的想法变成精确、可复现的指令。
          </p>
        </div>

        <div className="space-y-10">
          {/* 通用五步法 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">通用五步法</h3>
            <div className="overflow-x-auto">
              <Table className="border rounded-lg">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">步骤</TableHead>
                    <TableHead className="w-[400px]">关键做法</TableHead>
                    <TableHead>Why it matters</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {promptSteps.map((step, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{step.step}</TableCell>
                      <TableCell className="text-sm">{step.practice}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{step.why}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="h-px bg-border my-8" />

          {/* 针对不同模型类型的沟通策略 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">针对不同模型类型的沟通策略</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {modelStrategies.map((strategy, index) => (
                <Card key={index} className="overflow-hidden bg-card transition-all duration-200 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      {strategy.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{strategy.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {strategy.examples.map((example, i) => (
                        <Badge key={i} variant="outline" className="bg-muted/50">
                          {example}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {strategy.strategies.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                    <CardDescription className="pt-2 border-t border-border">
                      <span className="font-medium">注意事项：</span> {strategy.notes}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="h-px bg-border my-8" />

          {/* 快速模板 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">快速模板（复制即可用）</h3>
            <div className="relative bg-muted p-6 rounded-lg overflow-hidden">
              <div className="absolute top-4 right-4">
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                  aria-label="Copy to clipboard"
                >
                  {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>
              <pre className="text-sm font-mono whitespace-pre-wrap break-all overflow-x-auto">
                {templateExample}
              </pre>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 