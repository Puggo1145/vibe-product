import { useState } from 'react';
import { Search, Mic, Bell, User, Home, Compass, PlaySquare, Clock, ThumbsUp, ArrowLeft, MoreVertical, Share, MessageSquare } from 'lucide-react';

export default function YoutubeApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // 渲染不同页面的内容
  const renderContent = () => {
    switch(currentPage) {
      case 'video':
        return renderVideoPage();
      case 'explore':
        return renderExplorePage();
      case 'subscriptions':
        return renderSubscriptionsPage();
      case 'history':
        return renderHistoryPage();
      default:
        return renderHomePage();
    }
  };
  
  // 首页内容
  const renderHomePage = () => (
    <>
      {/* Featured Video */}
      <div className="p-2">
        <div 
          className="relative aspect-video bg-[#333] rounded-md overflow-hidden cursor-pointer"
          onClick={() => setCurrentPage('video')}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <div className="h-0 w-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-medium text-sm">如何使用AI快速构建产品原型</h3>
          <div className="flex items-center mt-1">
            <div className="h-6 w-6 rounded-full bg-teal-500"></div>
            <p className="text-xs text-gray-400 ml-2">Vibe产品 • 3.2万次观看 • 2小时前</p>
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="p-2 space-y-3">
        {[
          { title: 'AI产品设计工具流：从想法到实现', views: '2.1万', time: '3天前' },
          { title: '使用Claude 3.7构建完整Web应用', views: '1.5万', time: '1周前' },
          { title: '产品原型设计最佳实践分享', views: '4.7万', time: '2周前' }
        ].map((video, i) => (
          <div key={i} className="flex gap-2 cursor-pointer" onClick={() => setCurrentPage('video')}>
            <div className="relative w-32 aspect-video bg-[#333] rounded-md">
              <div className="absolute bottom-1 right-1 bg-black/70 text-xs px-1 rounded">
                4:25
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-medium leading-tight">{video.title}</h4>
              <p className="text-xs text-gray-400 mt-1">Vibe产品</p>
              <p className="text-xs text-gray-400">{video.views}次观看 • {video.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  
  // 视频播放页面
  const renderVideoPage = () => (
    <div className="flex flex-col">
      {/* Video Header with back button */}
      <div className="bg-[#212121] p-2 flex items-center">
        <button 
          className="mr-2" 
          onClick={() => setCurrentPage('home')}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h3 className="text-sm font-medium">正在播放</h3>
      </div>
      
      {/* Video Player */}
      <div className="relative aspect-video bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          {isPlaying ? (
            <button 
              className="h-16 w-16 rounded-full bg-black/30 flex items-center justify-center"
              onClick={() => setIsPlaying(false)}
            >
              <div className="h-10 w-1.5 bg-white mx-0.5"></div>
              <div className="h-10 w-1.5 bg-white mx-0.5"></div>
            </button>
          ) : (
            <button 
              className="h-16 w-16 rounded-full bg-black/30 flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              <div className="h-0 w-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2"></div>
            </button>
          )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
          <div className="h-full bg-red-600 w-1/3"></div>
          <div className="absolute bottom-0 left-1/3 h-3 w-3 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
        </div>
      </div>
      
      {/* Video Info */}
      <div className="p-3">
        <h3 className="font-medium">如何使用AI快速构建产品原型</h3>
        <p className="text-xs text-gray-400 mt-1">3.2万次观看 • 2小时前</p>
        
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <ThumbsUp className="h-5 w-5" />
            <span className="text-[10px] mt-1">2.5k</span>
          </div>
          <div className="flex flex-col items-center opacity-70">
            <MessageSquare className="h-5 w-5" />
            <span className="text-[10px] mt-1">128</span>
          </div>
          <div className="flex flex-col items-center opacity-70">
            <Share className="h-5 w-5" />
            <span className="text-[10px] mt-1">分享</span>
          </div>
          <div className="flex flex-col items-center opacity-70">
            <MoreVertical className="h-5 w-5" />
            <span className="text-[10px] mt-1">更多</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-teal-500 mr-3"></div>
            <div>
              <p className="text-sm font-medium">Vibe产品</p>
              <p className="text-xs text-gray-400">58.6万位订阅者</p>
            </div>
          </div>
          <button 
            className={`px-4 py-1.5 rounded-full text-xs font-medium ${isSubscribed ? 'bg-gray-700 text-gray-300' : 'bg-red-600'}`}
            onClick={() => setIsSubscribed(!isSubscribed)}
          >
            {isSubscribed ? '已订阅' : '订阅'}
          </button>
        </div>
      </div>
      
      {/* Comments */}
      <div className="p-3 border-t border-gray-800">
        <h4 className="text-sm mb-3">评论 (128)</h4>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex-shrink-0"></div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-medium">用户1234</p>
              <p className="text-xs text-gray-400">2小时前</p>
            </div>
            <p className="text-xs mt-1">这个教程太实用了，已经按照视频做出了自己的第一个产品原型！</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // 发现页面
  const renderExplorePage = () => (
    <div className="p-3">
      <h3 className="font-medium mb-4">探索</h3>
      <div className="grid grid-cols-2 gap-3">
        {['趋势', '音乐', '游戏', '新闻', '学习', '电影'].map((category, i) => (
          <div key={i} className="bg-[#333] p-3 rounded-lg cursor-pointer">
            <h4 className="font-medium text-sm">{category}</h4>
          </div>
        ))}
      </div>
      
      <h3 className="font-medium mt-5 mb-3">热门视频</h3>
      <div className="space-y-3">
        {['每日精选', '音乐排行榜', '游戏热点'].map((section, i) => (
          <div key={i} className="bg-[#333] aspect-video rounded-lg flex items-center justify-center cursor-pointer">
            <h4 className="font-medium text-sm">{section}</h4>
          </div>
        ))}
      </div>
    </div>
  );
  
  // 订阅页面
  const renderSubscriptionsPage = () => (
    <div className="p-3">
      <h3 className="font-medium mb-4">订阅内容</h3>
      <div className="flex gap-3 overflow-x-auto py-2">
        {['Vibe产品', 'AI频道', '设计师日常', '编程学习', '产品经理'].map((channel, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center">
            <div className={`h-14 w-14 rounded-full flex items-center justify-center ${['bg-teal-500', 'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-yellow-500'][i % 5]}`}>
            </div>
            <p className="text-xs mt-1 whitespace-nowrap">{channel}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 space-y-3">
        {[
          { title: '今日更新：AI工具使用技巧', channel: 'Vibe产品', time: '1小时前' },
          { title: '如何利用Claude进行创意写作', channel: 'AI频道', time: '3小时前' },
          { title: '设计系统搭建全攻略', channel: '设计师日常', time: '1天前' }
        ].map((video, i) => (
          <div key={i} className="flex gap-2 cursor-pointer" onClick={() => setCurrentPage('video')}>
            <div className="w-32 aspect-video bg-[#333] rounded-md flex-shrink-0"></div>
            <div>
              <h4 className="text-xs font-medium">{video.title}</h4>
              <p className="text-xs text-gray-400 mt-1">{video.channel}</p>
              <p className="text-xs text-gray-400">{video.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // 历史页面
  const renderHistoryPage = () => (
    <div className="p-3">
      <h3 className="font-medium mb-4">观看历史</h3>
      <div className="space-y-3">
        {[
          { title: '如何使用AI快速构建产品原型', channel: 'Vibe产品', time: '今天' },
          { title: 'Claude 3.7使用指南', channel: 'AI频道', time: '昨天' },
          { title: '产品交互设计最佳实践', channel: '设计师日常', time: '3天前' },
          { title: 'React性能优化技巧', channel: '编程学习', time: '上周' },
          { title: '从0到1打造爆款产品', channel: '产品经理', time: '2周前' }
        ].map((video, i) => (
          <div key={i} className="flex gap-2 cursor-pointer" onClick={() => setCurrentPage('video')}>
            <div className="w-24 aspect-video bg-[#333] rounded-md flex-shrink-0"></div>
            <div className="flex-1">
              <h4 className="text-xs font-medium">{video.title}</h4>
              <p className="text-xs text-gray-400">{video.channel} • {video.time}</p>
            </div>
            <button className="self-start text-gray-400">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className="w-full flex flex-col h-full bg-[#121212] text-white overflow-hidden">
      {/* Header */}
      {currentPage === 'home' && (
        <div className="flex items-center justify-between p-2 bg-[#212121]">
          <div className="flex items-center">
            <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">YouTube</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#333] rounded-full px-3 py-1">
              <Search className="h-4 w-4 text-gray-400" />
              <input className="bg-transparent border-none outline-none w-24 text-xs ml-1" placeholder="搜索" />
            </div>
            <Mic className="h-5 w-5 text-gray-300" />
            <Bell className="h-5 w-5 text-gray-300" />
            <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#212121] p-2 flex justify-around">
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'home' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('home')}
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] mt-1">首页</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'explore' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('explore')}
        >
          <Compass className="h-5 w-5" />
          <span className="text-[10px] mt-1">探索</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'subscriptions' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('subscriptions')}
        >
          <PlaySquare className="h-5 w-5" />
          <span className="text-[10px] mt-1">订阅</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'history' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('history')}
        >
          <Clock className="h-5 w-5" />
          <span className="text-[10px] mt-1">历史</span>
        </div>
        <div className="flex flex-col items-center opacity-60 cursor-pointer">
          <ThumbsUp className="h-5 w-5" />
          <span className="text-[10px] mt-1">收藏</span>
        </div>
      </div>
    </div>
  );
} 