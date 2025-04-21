"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductLogos } from './ProductLogos';

interface ToolCardProps {
  category: string;
  description: string;
  products: string[];
  icon: React.ReactNode;
}

// Type for supported product keys
type ProductKey = keyof typeof ProductLogos;

export default function ToolCard({ category, description, products, icon }: ToolCardProps) {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-border bg-background/50 backdrop-blur-sm h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background/80 z-0" />

      <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          {/* Icon with background */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
            <div className="relative z-10 w-16 h-16 flex items-center justify-center text-primary">
              {icon}
            </div>
          </div>
        </div>

        {/* Category */}
        <h3 className="text-3xl font-bold mb-4">{category}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8 flex-grow">{description}</p>

        {/* Products */}
        <div className="space-y-6 mt-auto">
          <h4 className="font-medium text-primary">推荐产品</h4>
          
          {/* Product logos - horizontal layout */}
          <div className="flex gap-8 items-center flex-wrap">
            {products.map((product, index) => {
              // Type check to ensure product exists in ProductLogos
              const isValidProduct = product in ProductLogos;
              const LogoComponent = isValidProduct 
                ? ProductLogos[product as ProductKey] 
                : null;
              
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center gap-3 cursor-pointer"
                  onMouseEnter={() => setActiveProduct(product)}
                  onMouseLeave={() => setActiveProduct(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`relative p-4 rounded-xl ${activeProduct === product ? 'bg-primary/10' : 'bg-background hover:bg-primary/5'} transition-colors duration-300 border border-border/40`}>
                    <div className="text-primary hover:text-primary/80 transition-colors">
                      {LogoComponent && <LogoComponent size={56} />}
                    </div>
                  </div>
                  <span className="text-sm font-medium">{product}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 