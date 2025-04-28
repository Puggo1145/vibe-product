import React from 'react';
import YoutubeApp from './appPrototypes/YoutubeApp';
import ShortVideoApp from './appPrototypes/ShortVideoApp';
import MeditationApp from './appPrototypes/MeditationApp';
import PomodoroApp from './appPrototypes/PomodoroApp';
import DeviceFrame from '../../hero/_components/DeviceFrame';
import { Badge } from "@/components/ui/badge";

interface AppShowcaseProps {
  appId: string;
  model: string;
}

export default function AppShowcase({ appId, model }: AppShowcaseProps) {
  // 根据appId渲染不同的应用原型
  const renderApp = () => {
    switch (appId) {
      case 'youtube':
        return <YoutubeApp />;
      case 'shortvideo':
        return <ShortVideoApp />;
      case 'meditation':
        return <MeditationApp />;
      case 'pomodoro':
        return <PomodoroApp />;
      default:
        return <YoutubeApp />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[393px]">
        <DeviceFrame
          type="app"
          className="w-full transform transition-all duration-500 hover:shadow-xl"
        >
          {renderApp()}
        </DeviceFrame>
        
        <div className="text-center mt-4">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {model}
          </Badge>
        </div>
      </div>
    </div>
  );
} 