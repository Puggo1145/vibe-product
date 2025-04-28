import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
interface ModelInfo {
    name: string;
    type: string;
    description: string;
}

interface ModelCategory {
    provider: string;
    logo: string;
    models: ModelInfo[];
}

const modelCategories: ModelCategory[] = [
    {
        provider: "Claude",
        logo: "/models/claude-logo.svg",
        models: [
            {
                name: "Claude 3.7 Sonnet",
                type: "通用模型",
                description: "全能型模型，代码能力出色，速度与质量平衡",
            },
            {
                name: "Claude 3.7 Sonnet Thinking",
                type: "推理模型",
                description: "专注于复杂推理任务，提供详细思考过程",
            },
        ],
    },
    {
        provider: "Gemini",
        logo: "/models/gemini-logo.svg",
        models: [
            {
                name: "Gemini 2.5 Pro",
                type: "推理模型",
                description: "强大的推理能力与快速响应速度的平衡",
            },
        ],
    },
    {
        provider: "GPT",
        logo: "/models/openai-logo.svg",
        models: [
            {
                name: "GPT 4.1",
                type: "通用模型",
                description: "OpenAI最强通用模型，代码和创意能力均衡",
            },
            {
                name: "GPT o3",
                type: "推理模型",
                description: "专注于推理和多步思考，适合复杂问题解决",
            },
            {
                name: "GPT o4 mini",
                type: "推理模型",
                description: "提供类似o3的推理能力，成本更低",
            },
            {
                name: "GPT 4o",
                type: "通用模型",
                description: "平衡速度与质量的通用模型",
            },
            {
                name: "GPT 4o mini",
                type: "轻量模型",
                description: "快速响应的轻量级模型，适合简单任务",
            },
        ],
    },
    {
        provider: "Deepseek",
        logo: "/models/deepseek-logo.svg",
        models: [
            {
                name: "Deepseek V3",
                type: "通用模型",
                description: "专注于代码理解与生成的通用模型",
            },
            {
                name: "Deepseek R1",
                type: "推理模型",
                description: "专注于逻辑推理与问题解决",
            },
        ],
    },
];

interface ModelTypeInfo {
    type: string;
    description: string;
    capabilities: string;
    icon: React.ReactNode;
}

const modelTypes: ModelTypeInfo[] = [
    {
        type: "通用模型",
        description: "能力全面；速度与质量平衡；适合大多数通用编程任务",
        capabilities: "代码解释、代码补全、代码生成、代码重构与优化等",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
        ),
    },
    {
        type: "推理模型",
        description: "专注于逻辑推理、复杂问题求解和多步思考；速度较慢，质量较高",
        capabilities: "复杂算法设计、复杂问题解决、调试与错误定位等",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
            </svg>
        ),
    },
    {
        type: "轻量模型",
        description: "参数量小；速度极快，质量一般。适用于极为简单的任务",
        capabilities: "代码补全、简单指令理解问答",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
        ),
    },
    {
        type: "多模态模型",
        description: "能够处理图像等多模态数据",
        capabilities: "界面到代码生成",
        icon: <ImageIcon />,
    },
];

export default function ModelsSection() {
    return (
        <section className="max-w-7xl mx-auto py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        了解你的搭档
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        市面上的模型五花八门，选择起来让人犯难<br />
                        不过只要了解每个模型的特点和适用场景，就能帮你高效地完成任务
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 mb-12">
                    {modelTypes.map((type, index) => (
                        <Card key={index} className="overflow-hidden transform transition-all duration-200 hover:shadow-lg hover:translate-y-[-2px]">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="rounded-full p-2 bg-primary/10 text-primary">
                                    {type.icon}
                                </div>
                                <div>
                                    <CardTitle className="text-xl">{type.type}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm text-muted-foreground mb-2">
                                    {type.description}
                                </CardDescription>
                                <div className="rounded-lg bg-muted p-3 mt-3">
                                    <p className="text-sm font-medium">适用场景:</p>
                                    <p className="text-sm text-muted-foreground">{type.capabilities}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Tabs defaultValue="Claude" className="w-full">
                    <div className="mb-6 flex justify-center">
                        <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                            {modelCategories.map((category) => (
                                <TabsTrigger key={category.provider} value={category.provider}>
                                    {category.provider}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {modelCategories.map((category) => (
                        <TabsContent key={category.provider} value={category.provider} className="mt-0">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {category.models.map((model, index) => (
                                    <Card key={index} className="relative transform transition-all duration-200 hover:shadow-lg hover:translate-y-[-2px]">
                                        <Image
                                            src={category.logo}
                                            alt={category.provider}
                                            width={48}
                                            height={48}
                                            className="absolute -top-6 right-6"
                                        />
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">{model.name}</CardTitle>
                                            <Badge variant="outline">
                                                {model.type}
                                            </Badge>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-sm text-muted-foreground">
                                                {model.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
} 