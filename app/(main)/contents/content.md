# Vibe Product：用 vibe coding 快速搭建产品原型
这是 vibe product 的内容文档，你需要根据文档内容，设计出对应的界面。\
设计风格为 Linear Style，简洁、现代、美观。Dark Mode 为默认主题，已开启。在需要的时候使用 shadcn 组件库。\
样式定义在 app/globals.css 文件中。你可以参考已有的 section 理解网站设计风格

# 1. Hero
一个 Hero 板块，要能够吸引用户，用于展示完成网站内容学习后可以创造出来的成果！
### 标题
- slogan: 分为两部分，"为所有的产品创造" + "精彩"，其中"精彩"有特殊背景、旋转、偏移等视觉效果突出。
- slogan 下方有副标题："学习使用 vibe coding 快速搭建产品原型"

### 设计
- 在 slogan 下方横向排列三个美观的产品界面原型，分别为 Desktop、App、Web，界面有不同的尺寸和轻微旋转、透明度变化，App 居中并置于最上层。

设备 wrapper 尺寸:
- App: 393 X 852
- Web: 1440 X 1024
- Desktop: 1512 X 982

# 2. Vibe Coding Introduction
1. 标题：编程变成了一种‘氛围感’

2. 做一个 X post 的卡片，内容是 Andrej Karpathy 第一次提出 vibe coding 这个说法的来源 post \
发布者：Andrej Karpathy @karpathy · Feb 3\
头像：https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg\
内容：There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept All" always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or webapp, but it's not really coding - I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.\
回复：1.3K\
转发：4.9K\
喜欢：29K\
趋势：4.9M\

3. 文本：也就少了“距离感”

4. 文本下方有一个描述文本，包含以下内容：
- 在传统开发流程中，从想法到产品之间，总有一段距离。
- 过去，如果你不会写代码、不会设计交互、不会找人协作，你很难把一个 idea 实现为产品。许多优秀的想法，因为缺少实现能力，只能停留在一纸文档或 PPT 中。
- 而在 AI 编程出现后，这段距离被压缩为「对话」的长度。你可以直接向 AI 描述你的想法，让它帮你实现。
- 我们正在进入一个「想什么就做什么」的时代：你不需要知道“padding 是什么”，只要你能描述出“我想让这个边变窄一点”，在大多数情况下，AI 都能帮你做到。

5. 一个 AI 编程交互 mock 体验 interface
展示一个高保真的小红书 App 原型 Demo，包含首页信息流、探索、个人主页等典型社交媒体功能，风格高度还原小红书，现代、简洁。
右侧为 AI 聊天交互区，用户输入 prompt 后，用户气泡才会出现在界面上，AI 会模拟生成产品界面的过程（分步骤动画），最终展示高保真 App 原型。
输入区为大号输入框，底部左侧显示模型名称（如 Claude 3.5 Sonnet），右下角为嵌入式发送按钮，整体风格与 Linear/小红书风格一致。
交互流程：用户点击发送后，prompt 以气泡形式出现在右侧，AI 以分步动画展示生成过程，最后展示产品原型。
用户 prompt 仅在点击发送后显示。
发送按钮不可用状态有视觉反馈。
AI 生成过程有分步进度动画。
产品原型为高保真小红书界面，包含顶部导航、信息流、底部导航等。

# 3. AI Coding Tools
1. 标题：选对工具，一切都很简单

2. 文本：
根据你的需求，选择一个最适合你的 AI 编程工具

3. 各种 AI 编程工具的分类：
- 场景：我想构建出完整的产品 \
类别：AI IDE \
描述：AI IDE 在传统编程专用的 IDE 基础上，添加了如 AI 代码补全 和 Agent 模式等 AI 功能，功能更丰富、更复杂、更完整，可以与代码无缝融合，能够实现 AI 和人工之间的平衡协作
产品：Cursor, Windsurf

- 场景：我想快速构建出产品原型界面 \
类别：AI 界面生成工具 \
描述：更为简单的原型设计工具，描述你的产品功能或界面，即可快速生成产品原型界面，支持多种风格
产品：V0.dev, Builder.io

- 场景：我想完全摆烂 \
类别：AI Agent 平台 \
描述：输入你对产品的构思，剩下的所有工作全部交给 AI Agent 帮你完成，直接交付成品。这类平台的 Agent 通常可以使用各种工具，帮你从 0 到 1 构建出一个产品。但还处于较为早期的阶段，效果并没有十分理想
产品：Replit, Manus, Devin

# 4. Models
1. 标题：了解你的搭档

2. 文本：
市面上的模型五花八门，选择起来让人犯难 \
不过只要了解每个模型的特点和适用场景，就能更高效地完成你的任务 \

3. 介绍模型类型
- 通用模型：能力全面；速度与质量平衡；适合大多数通用编程任务
    - 代码解释、代码补全、代码生成、代码重构与优化等
- 推理模型：专注于逻辑推理、复杂问题求解和多步思考；速度较慢，质量较高
    - 复杂算法设计、复杂问题解决、调试与错误定位等
- 轻量模型：参数量小；速度极快，质量一般。适用于极为简单的任务
    - 代码补全、简单指令理解问答
- 多模态模型：能够处理图像等多模态数据
    - 界面到代码生成

4. 模型
- Claude:
    - Claude 3.7 Sonnet (通用模型 / 能力最强)
    - Claude 3.7 Sonnet Thinking （推理模型 / 能力较强）
- Gemini:
    - Gemini 2.5 Pro （推理模型 / 能力较强 / 速度快）
- GPT
    - GPT 4.1 （通用模型）
    - GPT o3 （推理模型）
    - GPT o4 mini （推理模型 / o3 平替）
    - GPT 4o （通用模型）
    - GPT 4o mini （轻量模型）
- Deepseek:
    - Deepseek V3 （通用模型）
    - Deepseek R1 （推理模型）

# 5. Prompt Design
1. 标题：沟通是一门艺术

2. 文本：
提示词（prompt）是你与模型之间重要的“接口”。掌握一些通用原则，再结合各类模型的差异，把「我想让边距再窄一点」这种朦胧的想法变成精确、可复现的指令。

---

### 5.1 通用五步法

| 步骤 | 关键做法 | Why it matters |
|------|-----------|----------------|
| **1. 角色设定** | 用一句话告诉模型它是谁、它要做什么。例：`You are an expert UI designer…` | Claude 和 GPT 都会优先遵循 system 角色 |
| **2. 明确目标** | 指出最终产物格式（文本 / JSON / 代码片段）。例：`Return Figma-like JSON representing the UI.` | 减少模型“发挥” |
| **3. 上下文输入** | 给足背景：产品定位、用户画像、已知约束。 | 长上下文对 Claude / GPT 效果显著 |
| **4. 分步思考** | 要求模型「逐步思考，再给结论」。例：`Think step-by-step, then output final answer only.` | 推理模型尤为受益 |
| **5. 迭代 & 反馈** | 如果结果不理想：指出问题 → 添加示例 → 缩小范围。 | Prompt 设计是循环而非一次成型 |

---

### 5.2 针对不同模型类型的沟通策略

| 模型类型 | 推荐策略 | 注意事项 |
|---------|---------|---------|
| **通用模型**<br/>(GPT-4o, Claude Sonnet, DeepSeek V3) | - 在对话开头统一设定角色。- 在一个 prompt 里同时给目标 + 约束 + 示例。 | 追求响应速度时，可删减示例数量。 |
| **推理模型**<br/>(Claude Sonnet Thinking, GPT o3, DeepSeek R1, Gemini 2.5 Pro) | - 不要设计提示词，为推理模型预留发挥空间，限制太多反而影响其输出质量 | 这类模型慢，但擅长长链逻辑；给足推理空间。 |
| **多模态模型**<br/>(GPT-4o, Gemini) | - 上传 UI 参考图和界面草稿等，并要求模型“参考图片设计和布局” | 避免在同一轮里上传多张图片；分批更稳。 |

---

### 5.3 快速模板（复制即可用）

```text
SYSTEM: You are a senior product engineer.
USER: Our goal ► Build a minimal “habit tracker” mobile UI.
Constraints ► Dark theme, ‎iOS-style padding, Chinese copy.
Deliverable ► Figma-like JSON.
Process ► Think step-by-step.
```

# 6. example
1. 标题：一个产品原型，就这么简单！

横向展示一些产品原型，每个原型下方有对应的 prompt 和模型类型。都使用 DeviceFrame type="mobile" 组件完成。

2. 样例提示词：
我想要开发一个 [xxx] app，将其输出为一个高保真的原型图设计，请根据以下规范完成：
1. 产品设计：分析产品的主要功能和需求，确定核心功能
2. UI 设计：保证设计符合目标人群的喜好和使用习惯、符合移动端的设计规范，使用现代的 UI 元素，注重产品体验和视觉
3. mock 内容：适当使用图片、icon 等元素填充产品原型的内容，增加真实感
4. 输出：
- 根据功能拆分代码文件，注重模块化，每个页面有一个独立的文件
- 使用一个统一的 frame 包裹所有页面，并支持通过导航栏跳转

3. 示例 App：
- youtube 风视频流媒体 app
- 短视频 app
- 冥想专注 app
- 番茄时钟 app
