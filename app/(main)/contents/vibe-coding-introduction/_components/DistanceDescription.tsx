"use client"

import React from 'react';
import { motion } from 'framer-motion';
import PromptToProductDemo from './PromptToProductDemo';

const distanceItems = [
    "在传统的软件开发流程中，从想法到产品之间，总有一段距离。",
    "过去，如果你不会写代码、不会设计交互、不会找人协作，你很难把一个 idea 实现为产品。许多优秀的想法，因为缺少实现能力，只能停留在一纸文档或 PPT 中。",
    "而在 AI 编程出现后，这段距离被压缩为「对话」的长度。你可以直接向 AI 描述你的想法，让它帮你实现。",
    "我们正在进入一个「想什么就做什么」的时代：你不需要知道\"padding 是什么\"，只要你能描述出\"我想让这个边变窄一点\"，在大多数情况下，AI 都能帮你做到。"
];

export default function DistanceDescription() {
    return (
        <div className="flex flex-col gap-16 items-center mt-28">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-7xl font-bold text-center">
                    也就少了
                    <span className="relative inline-block ml-4">
                        <span className="relative z-10 text-primary">"距离感"</span>
                        <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full"></div>
                    </span>
                </h2>
            </motion.div>

            {/* Simple Text List */}
            <ul className="mx-auto mb-20 space-y-8">
                {distanceItems.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-muted-foreground'>{item}</p>
                    </motion.li>
                ))}
            </ul>

            {/* Prompt to Product Demo */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full mb-24"
            >
                <PromptToProductDemo />
            </motion.div>
        </div>
    );
} 