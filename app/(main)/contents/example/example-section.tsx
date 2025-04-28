'use client';

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Film, Video, Flame } from "lucide-react";
import AppShowcase from "./_components/AppShowcase";

interface AppExample {
  id: string;
  name: string;
  description: string;
  prompt: string;
  model: string;
  icon: React.ReactNode;
}

const appExamples: AppExample[] = [
  {
    id: "youtube",
    name: "视频流媒体",
    description: "YouTube风格的视频平台，支持视频推荐、订阅频道和评论互动",
    prompt: "我想要开发一个YouTube风格的视频流媒体app，将其输出为一个高保真的原型图设计，请根据以下规范完成：\n1. 产品设计：分析产品的主要功能和需求，确定核心功能\n2. UI 设计：保证设计符合目标人群的喜好和使用习惯、符合移动端的设计规范，使用现代的 UI 元素，注重产品体验和视觉\n3. mock 内容：适当使用图片、icon 等元素填充产品原型的内容，增加真实感\n4. 输出：\n- 根据功能拆分代码文件，注重模块化，每个页面有一个独立的文件\n- 使用一个统一的 frame 包裹所有页面，并支持通过导航栏跳转",
    model: "Claude 3.7 Sonnet",
    icon: <Film className="h-5 w-5" />
  },
  {
    id: "shortvideo",
    name: "短视频",
    description: "类似抖音/TikTok的短视频应用，支持滑动切换和互动功能",
    prompt: "我想要开发一个短视频app，将其输出为一个高保真的原型图设计，请根据以下规范完成：\n1. 产品设计：分析产品的主要功能和需求，确定核心功能\n2. UI 设计：保证设计符合目标人群的喜好和使用习惯、符合移动端的设计规范，使用现代的 UI 元素，注重产品体验和视觉\n3. mock 内容：适当使用图片、icon 等元素填充产品原型的内容，增加真实感\n4. 输出：\n- 根据功能拆分代码文件，注重模块化，每个页面有一个独立的文件\n- 使用一个统一的 frame 包裹所有页面，并支持通过导航栏跳转",
    model: "GPT-4o",
    icon: <Video className="h-5 w-5" />
  },
  {
    id: "meditation",
    name: "冥想专注",
    description: "帮助用户放松身心、专注冥想的健康类应用",
    prompt: "我想要开发一个冥想专注app，将其输出为一个高保真的原型图设计，请根据以下规范完成：\n1. 产品设计：分析产品的主要功能和需求，确定核心功能\n2. UI 设计：保证设计符合目标人群的喜好和使用习惯、符合移动端的设计规范，使用现代的 UI 元素，注重产品体验和视觉\n3. mock 内容：适当使用图片、icon 等元素填充产品原型的内容，增加真实感\n4. 输出：\n- 根据功能拆分代码文件，注重模块化，每个页面有一个独立的文件\n- 使用一个统一的 frame 包裹所有页面，并支持通过导航栏跳转",
    model: "Gemini 2.5 Pro",
    icon: <Flame className="h-5 w-5" />
  },
  {
    id: "pomodoro",
    name: "番茄时钟",
    description: "结合番茄工作法的时间管理工具，帮助用户提高效率",
    prompt: "我想要开发一个番茄时钟app，将其输出为一个高保真的原型图设计，请根据以下规范完成：\n1. 产品设计：分析产品的主要功能和需求，确定核心功能\n2. UI 设计：保证设计符合目标人群的喜好和使用习惯、符合移动端的设计规范，使用现代的 UI 元素，注重产品体验和视觉\n3. mock 内容：适当使用图片、icon 等元素填充产品原型的内容，增加真实感\n4. 输出：\n- 根据功能拆分代码文件，注重模块化，每个页面有一个独立的文件\n- 使用一个统一的 frame 包裹所有页面，并支持通过导航栏跳转",
    model: "Claude 3.7 Sonnet",
    icon: <Clock className="h-5 w-5" />
  }
];

export default function ExampleSection() {
  const [selectedExample, setSelectedExample] = useState(appExamples[0].id);
  const [showFullPrompt, setShowFullPrompt] = useState<string | null>(null);
  
  const selectedApp = appExamples.find(app => app.id === selectedExample) || appExamples[0];

  return (
    <section className="w-full py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            一个产品原型，就这么简单！
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            从创意到实现，只需一个精确的描述。探索下方示例，感受AI如何快速生成产品原型。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side: Device frames */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <AppShowcase appId={selectedApp.id} model={selectedApp.model} />
          </div>

          {/* Right side: App selection and prompt */}
          <div className="flex-1">
            <Tabs defaultValue={appExamples[0].id} onValueChange={setSelectedExample}>
              <TabsList className="grid grid-cols-4 mb-6">
                {appExamples.map((app) => (
                  <TabsTrigger key={app.id} value={app.id} className="flex items-center gap-2">
                    {app.icon}
                    <span className="hidden sm:inline">{app.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {appExamples.map((app) => (
                <TabsContent key={app.id} value={app.id} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      {app.icon}
                    </div>
                    <h3 className="text-xl font-bold">{app.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground">{app.description}</p>
                  
                  <Card className="mt-4">
                    <CardContent className="pt-6">
                      <h4 className="text-sm font-medium mb-2">提示词：</h4>
                      <div className="relative bg-muted/50 rounded-md p-4">
                        <pre className="text-xs leading-relaxed font-mono whitespace-pre-wrap">
                          {showFullPrompt === app.id ? app.prompt : `${app.prompt.substring(0, 150)}...`}
                        </pre>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <Badge variant="outline">{app.model}</Badge>
                      <button 
                        onClick={() => setShowFullPrompt(showFullPrompt === app.id ? null : app.id)}
                        className="text-xs text-primary hover:underline"
                      >
                        {showFullPrompt === app.id ? "收起详情" : "查看完整提示词"}
                      </button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
} 