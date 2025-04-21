import React from 'react';
import DeviceFrame from './_components/DeviceFrame';
import AppInterface from './_components/AppInterface';
import DesktopInterface from './_components/DesktopInterface';
import WebInterface from './_components/WebInterface';

// Note: Background placeholders are now removed as we use DeviceFrames for the main visual

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen 
        text-center overflow-hidden px-4 py-24 pb-72">
            {/* Main Content Area - ensure it's above the frames */}
            {/* Slogan */}
            <div className="flex flex-col items-center gap-2 mb-16">
                <div className='flex'>
                    <span className="text-5xl md:text-6xl font-bold tracking-tight bg-foreground 
                        text-transparent bg-clip-text drop-shadow-sm">
                        为所有的产品创造
                    </span>
                    <span className="text-5xl md:text-6xl font-bold tracking-tight 
                    px-4 py-2 border-2 bg-foreground/10 rounded-2xl transform -translate-x-3 -translate-y-3 rotate-6
                    hover:bg-foreground/20 transition-all duration-100 hover:scale-105">
                        精彩
                    </span>
                </div>
                <p className="text-muted-foreground text-xl">
                    学习使用 vibe coding 快速搭建产品原型
                </p>
            </div>

            {/* Container for positioned frames */}
            <div className="w-full flex justify-center items-baseline relative">
                <DeviceFrame type="desktop" className="w-[860px] h-fit transform -translate-x-3 -rotate-6 opacity-90">
                    <DesktopInterface />
                </DeviceFrame>
                <DeviceFrame type="app" className="z-10 w-[360px] h-fit relative transform translate-y-4">
                    <AppInterface />
                </DeviceFrame>
                <DeviceFrame type="web" className="w-[850px] h-fit transform translate-x-3 rotate-6 opacity-90">
                    <WebInterface />
                </DeviceFrame>
            </div>
        </section>
    );
} 