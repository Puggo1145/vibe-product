import { useState, useEffect } from 'react';
import { Moon, Sun, Home, Calendar, Play, Pause, SkipBack, SkipForward, Menu, User, Clock, Award, Settings, ArrowLeft, Heart, Bell, Search } from 'lucide-react';

export default function MeditationApp() {
  const [currentPage, setCurrentPage] = useState('session');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [currentScene, setCurrentScene] = useState('nature');
  const [currentMode, setCurrentMode] = useState('sleep');
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [showMenu, setShowMenu] = useState(false);
  
  // 格式化时间为 MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // 播放/暂停时更新进度
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
        setProgress(() => (timer / 600) * 100);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer]);
  
  // 场景数据
  const scenes = {
    nature: {
      name: '自然放松',
      description: '聆听大自然的声音，让自己放松下来',
      color: 'from-indigo-900 via-purple-900 to-purple-950',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad'
    },
    rain: {
      name: '雨声助眠',
      description: '舒缓的雨声帮助您快速入睡',
      color: 'from-blue-900 via-blue-800 to-blue-950',
      image: 'https://images.unsplash.com/photo-1501691223387-dd0500403074'
    },
    forest: {
      name: '森林漫步',
      description: '在郁郁葱葱的森林中平静心灵',
      color: 'from-green-900 via-green-800 to-green-950',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b'
    },
    beach: {
      name: '海滩冥想',
      description: '海浪声让您的思绪随波逐流',
      color: 'from-cyan-900 via-cyan-800 to-cyan-950',
      image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda'
    }
  };
  
  // 获取当前场景
  const currentSceneData = scenes[currentScene as keyof typeof scenes];
  
  // 侧边菜单
  const renderMenu = () => (
    <div className="absolute inset-0 flex z-50">
      <div 
        className="bg-black/40 flex-1"
        onClick={() => setShowMenu(false)}
      ></div>
      <div className="w-4/5 bg-indigo-950 h-full flex flex-col">
        <div className="p-6 flex items-center border-b border-indigo-800">
          <div className="h-14 w-14 rounded-full bg-indigo-600 flex items-center justify-center">
            <User className="h-8 w-8" />
          </div>
          <div className="ml-4">
            <h3 className="font-bold">张小冥</h3>
            <p className="text-xs text-indigo-300 mt-1">高级会员 · 已连续冥想14天</p>
          </div>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-6">
            <h4 className="text-indigo-400 text-xs font-medium mb-2">冥想</h4>
            <div className="space-y-2">
              {['每日精选', '睡眠', '专注', '减压', '冥想课程'].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center p-2 rounded hover:bg-indigo-900/50 cursor-pointer"
                  onClick={() => {
                    setCurrentPage('session');
                    setShowMenu(false);
                  }}
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-indigo-400 text-xs font-medium mb-2">个人</h4>
            <div className="space-y-2">
              {[
                { name: '我的收藏', icon: <Heart className="h-4 w-4 mr-3" /> },
                { name: '统计数据', icon: <Award className="h-4 w-4 mr-3" /> },
                { name: '设置', icon: <Settings className="h-4 w-4 mr-3" /> }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center p-2 rounded hover:bg-indigo-900/50 cursor-pointer"
                  onClick={() => {
                    if (item.name === '统计数据') setCurrentPage('stats');
                    setShowMenu(false);
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-indigo-800">
          <button className="w-full py-2 bg-indigo-700 rounded-full text-sm font-medium">
            升级至高级会员
          </button>
        </div>
      </div>
    </div>
  );
  
  // 冥想会话页面
  const renderSessionPage = () => (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={() => setShowMenu(true)}>
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">专注冥想</h1>
        <div 
          className="h-8 w-8 rounded-full bg-indigo-300/20 flex items-center justify-center cursor-pointer"
          onClick={() => setCurrentPage('profile')}
        >
          <User className="h-5 w-5" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Current Scene */}
        <div className={`relative w-full aspect-square max-w-[250px] rounded-full bg-gradient-to-br from-indigo-600/30 to-indigo-900/30 backdrop-blur-xl flex items-center justify-center border border-white/10`}>
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-center bg-cover opacity-40"></div>
          </div>
          
          <div className="z-10 flex flex-col items-center">
            <div className="text-xl font-light">{currentSceneData.name}</div>
            <div className="text-sm text-indigo-200 mt-1">{formatTime(timer)}</div>
            
            {/* Progress Ring */}
            <div className="mt-4 relative h-32 w-32 rounded-full border-8 border-indigo-800/40 flex items-center justify-center">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none"
                  stroke="rgba(129, 140, 248, 0.6)"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * progress / 100)}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-500 transition"
              >
                {isPlaying ? 
                  <Pause className="h-8 w-8" /> : 
                  <Play className="h-8 w-8 ml-1" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-8 w-full">
          <button 
            className="h-10 w-10 rounded-full bg-indigo-700/30 flex items-center justify-center"
            onClick={() => setTimer(Math.max(timer - 60, 0))}
          >
            <SkipBack className="h-5 w-5" />
          </button>
          
          <div className="w-full max-w-[180px] bg-indigo-700/30 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-400" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <button 
            className="h-10 w-10 rounded-full bg-indigo-700/30 flex items-center justify-center"
            onClick={() => setTimer(Math.min(timer + 60, 1200))}
          >
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        
        {/* Scene Selector */}
        <div className="mt-6 w-full">
          <h3 className="text-sm font-medium mb-3">选择场景</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(scenes).map(([key, scene]) => (
              <div 
                key={key}
                className={`rounded-lg p-3 cursor-pointer ${currentScene === key ? 'bg-indigo-700' : 'bg-indigo-900/50'}`}
                onClick={() => setCurrentScene(key)}
              >
                <div className="text-sm font-medium">{scene.name}</div>
                <div className="text-xs text-indigo-300 mt-1 truncate">{scene.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mood Selector */}
        <div className="flex justify-around w-full mt-6">
          <div 
            className={`flex flex-col items-center cursor-pointer ${currentMode === 'sleep' ? '' : 'opacity-70'}`}
            onClick={() => setCurrentMode('sleep')}
          >
            <div className={`h-12 w-12 rounded-full bg-indigo-700/50 flex items-center justify-center ${currentMode === 'sleep' ? 'border-2 border-indigo-500' : ''}`}>
              <Moon className="h-6 w-6" />
            </div>
            <span className="text-xs mt-1">睡眠</span>
          </div>
          
          <div 
            className={`flex flex-col items-center cursor-pointer ${currentMode === 'focus' ? '' : 'opacity-70'}`}
            onClick={() => setCurrentMode('focus')}
          >
            <div className={`h-12 w-12 rounded-full bg-indigo-700/30 flex items-center justify-center ${currentMode === 'focus' ? 'border-2 border-indigo-500' : ''}`}>
              <Sun className="h-6 w-6" />
            </div>
            <span className="text-xs mt-1">专注</span>
          </div>
          
          <div 
            className={`flex flex-col items-center cursor-pointer ${currentMode === 'yoga' ? '' : 'opacity-70'}`}
            onClick={() => setCurrentMode('yoga')}
          >
            <div className={`h-12 w-12 rounded-full bg-indigo-700/30 flex items-center justify-center ${currentMode === 'yoga' ? 'border-2 border-indigo-500' : ''}`}>
              <div className="h-6 w-6 flex items-center justify-center">
                🧘
              </div>
            </div>
            <span className="text-xs mt-1">瑜伽</span>
          </div>
        </div>
      </div>
    </>
  );
  
  // 发现页面
  const renderExplorePage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-indigo-800">
        <div className="flex items-center bg-indigo-800/50 rounded-full px-4 py-2">
          <Search className="h-4 w-4 text-indigo-300 mr-2" />
          <input 
            type="text" 
            placeholder="搜索冥想课程、音乐或教程" 
            className="bg-transparent border-none outline-none text-sm flex-1"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="font-medium mb-3">推荐课程</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { title: '入门冥想', duration: '5分钟', level: '初级' },
            { title: '减轻焦虑', duration: '10分钟', level: '中级' },
            { title: '提升专注力', duration: '15分钟', level: '中级' },
            { title: '深度睡眠', duration: '30分钟', level: '高级' }
          ].map((course, i) => (
            <div 
              key={i} 
              className="bg-indigo-900/50 rounded-lg p-3 cursor-pointer"
              onClick={() => {
                setCurrentPage('session');
                setTimer(parseInt(course.duration) * 60);
              }}
            >
              <div className="text-sm font-medium">{course.title}</div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-indigo-300">{course.duration}</span>
                <span className="text-xs px-2 py-0.5 bg-indigo-700 rounded-full">{course.level}</span>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="font-medium mb-3">冥想音乐</h3>
        <div className="space-y-3 mb-6">
          {[
            '自然之声合集', '深度冥想背景乐', '助眠白噪音', '专注力提升音乐'
          ].map((music, i) => (
            <div key={i} className="flex items-center bg-indigo-900/50 rounded-lg p-3 cursor-pointer">
              <div className="h-10 w-10 rounded bg-indigo-700 flex items-center justify-center mr-3">
                <Play className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium">{music}</div>
                <div className="text-xs text-indigo-300 mt-0.5">{Math.floor(20 + Math.random() * 40)}分钟</div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="font-medium mb-3">指导冥想</h3>
        <div className="space-y-3">
          {[
            { title: '正念呼吸', instructor: '王教练', duration: '10分钟' },
            { title: '身体扫描', instructor: '李教练', duration: '15分钟' },
            { title: '慈悲冥想', instructor: '张教练', duration: '20分钟' }
          ].map((guided, i) => (
            <div key={i} className="flex items-center bg-indigo-900/50 rounded-lg p-3 cursor-pointer">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-700 mr-3"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">{guided.title}</div>
                <div className="text-xs text-indigo-300">{guided.instructor} · {guided.duration}</div>
              </div>
              <Play className="h-5 w-5 text-indigo-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  // 统计页面
  const renderStatsPage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex items-center border-b border-indigo-800">
        <button 
          className="mr-3" 
          onClick={() => setCurrentPage('session')}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-medium">统计数据</h3>
      </div>
      
      <div className="p-4">
        <div className="bg-indigo-900/50 rounded-lg p-4 mb-6">
          <h4 className="text-sm font-medium mb-2">本周概览</h4>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">14</div>
              <div className="text-xs text-indigo-300 mt-1">冥想天数</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">5.2<span className="text-base">小时</span></div>
              <div className="text-xs text-indigo-300 mt-1">总时长</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">22.4<span className="text-base">分</span></div>
              <div className="text-xs text-indigo-300 mt-1">平均时长</div>
            </div>
          </div>
        </div>
        
        <h4 className="text-sm font-medium mb-3">每日冥想</h4>
        <div className="bg-indigo-900/50 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => (
              <div key={i} className="text-xs text-indigo-300">{day}</div>
            ))}
          </div>
          <div className="flex justify-between">
            {[30, 15, 25, 20, 35, 15, 25].map((height, i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className="w-6 bg-indigo-600 rounded-sm"
                  style={{ height: `${height}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        
        <h4 className="text-sm font-medium mb-3">冥想类型分布</h4>
        <div className="bg-indigo-900/50 rounded-lg p-4">
          <div className="space-y-3">
            {[
              { type: '睡眠冥想', percent: 45 },
              { type: '专注冥想', percent: 30 },
              { type: '减压冥想', percent: 15 },
              { type: '其他类型', percent: 10 }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">{item.type}</span>
                  <span className="text-xs">{item.percent}%</span>
                </div>
                <div className="h-2 bg-indigo-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-500"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  // 个人资料页面
  const renderProfilePage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex items-center border-b border-indigo-800">
        <button 
          className="mr-3" 
          onClick={() => setCurrentPage('session')}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-medium">个人资料</h3>
      </div>
      
      <div className="p-6 flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
          <User className="h-12 w-12" />
        </div>
        <h3 className="text-xl font-bold mt-4">张小冥</h3>
        <p className="text-indigo-300 mt-1">冥想爱好者 · 高级会员</p>
        
        <div className="flex gap-4 mt-6">
          <div className="h-20 w-20 bg-indigo-900/50 rounded-lg flex flex-col items-center justify-center">
            <Award className="h-6 w-6 text-yellow-500 mb-1" />
            <span className="text-xs">14天连续</span>
          </div>
          <div className="h-20 w-20 bg-indigo-900/50 rounded-lg flex flex-col items-center justify-center">
            <Clock className="h-6 w-6 text-indigo-400 mb-1" />
            <span className="text-xs">2.5小时记录</span>
          </div>
          <div className="h-20 w-20 bg-indigo-900/50 rounded-lg flex flex-col items-center justify-center">
            <Moon className="h-6 w-6 text-purple-400 mb-1" />
            <span className="text-xs">睡眠达人</span>
          </div>
        </div>
        
        <div className="w-full mt-8 space-y-3">
          <button className="w-full py-3 bg-indigo-900/50 rounded-lg flex items-center px-4">
            <Bell className="h-5 w-5 mr-3" />
            <span className="text-sm">通知设置</span>
          </button>
          <button className="w-full py-3 bg-indigo-900/50 rounded-lg flex items-center px-4">
            <Settings className="h-5 w-5 mr-3" />
            <span className="text-sm">应用设置</span>
          </button>
          <button className="w-full py-3 bg-indigo-900/50 rounded-lg flex items-center px-4">
            <Heart className="h-5 w-5 mr-3" />
            <span className="text-sm">我的收藏</span>
          </button>
        </div>
      </div>
    </div>
  );
  
  // 渲染当前页面内容
  const renderContent = () => {
    switch(currentPage) {
      case 'explore':
        return renderExplorePage();
      case 'stats':
        return renderStatsPage();
      case 'profile':
        return renderProfilePage();
      default:
        return renderSessionPage();
    }
  };
  
  return (
    <div className="w-full flex flex-col h-full bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-950 text-white overflow-hidden">
      {/* 侧边菜单 */}
      {showMenu && renderMenu()}
      
      {/* 主内容 */}
      <div className="flex-1 flex flex-col">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="h-16 bg-indigo-900/50 backdrop-blur-md border-t border-indigo-700/30 flex justify-around items-center">
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'session' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('session')}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">首页</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'explore' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('explore')}
        >
          <div className="h-6 w-6 flex items-center justify-center">
            🔍
          </div>
          <span className="text-xs mt-1">发现</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'stats' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('stats')}
        >
          <Calendar className="h-6 w-6" />
          <span className="text-xs mt-1">统计</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'profile' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('profile')}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">我的</span>
        </div>
      </div>
    </div>
  );
} 