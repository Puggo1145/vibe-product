import React from 'react';
import XPostCard from './_components/XPostCard';
import DistanceDescription from './_components/DistanceDescription';

export default function VibeCodingIntroduction() {
    return (
        <section className="relative py-32 px-4 overflow-hidden">
            {/* Section Title - First Part */}
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-16">
                编程有了
                <span className="relative inline-block ml-4">
                    <span className="relative z-10 text-primary">&quot;氛围感&quot;</span>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full"></div>
                </span>
            </h2>

            {/* X Post Card */}
            <XPostCard />

            {/* Distance Description Component */}
            <DistanceDescription />
        </section>
    );
} 