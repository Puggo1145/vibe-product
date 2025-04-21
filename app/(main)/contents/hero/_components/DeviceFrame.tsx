import React from 'react';
import { cn } from "@/lib/utils"; // Assuming you have this utility from shadcn init

type DeviceType = 'app' | 'web' | 'desktop';

interface DeviceFrameProps {
  type: DeviceType;
  children?: React.ReactNode;
  className?: string;
}

const dimensions: Record<DeviceType, { width: number; height: number; }> = {
  app:     { width: 393, height: 852 },
  web:     { width: 1440, height: 1024 },
  desktop: { width: 1512, height: 982 },
};

export default function DeviceFrame({ type, children, className }: DeviceFrameProps) {
  const { width, height } = dimensions[type];
  const aspectRatio = width / height;

  return (
    <div
      className={cn(
        'relative border border-border/80 bg-card/30 rounded-lg shadow-md overflow-hidden shrink-0 origin-top',
        className
      )}
    >
      {/* Inner div to maintain aspect ratio */}
      <div style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }} className="relative">
          {/* Content goes here, absolutely positioned to fill the frame */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              {children || `${type} (${width}x${height})`}
          </div>
      </div>
    </div>
  );
} 