"use client"

import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

// Post content in English and Chinese
export default function XPostCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
        >
            <div className='h-[483px]'>
                <div className="relative max-w-xl w-full border border-border rounded-xl p-4 bg-card shadow-sm">
                    {/* Tweet Header */}
                    <div className="flex items-center gap-4 mb-3">
                        <Avatar className='size-12'>
                            <AvatarImage src="https://pbs.twimg.com/profile_images/1296667294148382721/9Pr6XrPB_400x400.jpg" />
                        </Avatar>
                        <div>
                            <div className="flex items-center">
                                <span className="font-bold text-foreground">Andrej Karpathy</span>
                                <span className="text-muted-foreground ml-2">@karpathy · Feb 3</span>
                            </div>
                        </div>
                    </div>

                    {/* Tweet Content */}
                    <div className="mb-4 text-foreground whitespace-pre-wrap">
                        我称这类全新的编程方式为「vibe coding」，就是完全跟着感觉走，放飞自我，指数式爆改，甚至忘了自己在写代码。
                        这之所以可能，是因为现在的 LLM（比如搭配 Claude Sonnet 的 Cursor Composer）已经太强了。
                        我现在几乎不碰键盘，直接用 SuperWhisper 跟 Composer 说话。
                        我会提出一些懒得动手的请求，比如「把侧边栏的 padding 减半」这种蠢萌的指令。
                        我总是直接点「全部接受」，连 diff 都不看。报错了我就复制粘贴进去，也不解释，通常它就能修好。
                        代码常常长得比我能轻松理解的规模还大，我得认真读一会儿才行。
                        有时候 AI 修不了 bug，我就绕过去，或者随便试点别的改动，bug 也就神奇地消失了。
                        用在周末做着玩的 side project 还挺行的，说它是「写代码」其实不太准确，更像是「看见什么说什么，跑一下再贴一下」，但它真的，大多数时候，都能跑。
                    </div>

                    {/* Tweet Stats */}
                    <div className="flex text-muted-foreground text-sm mt-4 pt-4 border-t border-border">
                        <div className="mr-4">
                            <span className="font-medium">1.3K</span> 回复
                        </div>
                        <div className="mr-4">
                            <span className="font-medium">4.9K</span> 转发
                        </div>
                        <div className="mr-4">
                            <span className="font-medium">29K</span> 喜欢
                        </div>
                        <div>
                            <span className="font-medium">4.9M</span> 浏览
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 