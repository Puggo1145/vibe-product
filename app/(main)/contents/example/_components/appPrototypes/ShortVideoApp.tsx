import { useState } from 'react';
import { Heart, MessageCircle, Share2, Plus, Home, Search, User, Music, Bell, ArrowLeft, Send } from 'lucide-react';

export default function ShortVideoApp() {
  const [currentPage, setCurrentPage] = useState('feed');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  
  // 短视频数据
  const videos = [
    { 
      id: 1, 
      user: 'vibe_product', 
      description: 'AI辅助下的产品原型设计是如此简单高效 #product #design #AI', 
      likes: '45.2k', 
      comments: '1024',
      music: '原声 - Vibe产品设计原声带 • 热门BGM'
    },
    { 
      id: 2, 
      user: 'ui_designer', 
      description: '这是一个美观实用的移动端界面设计 #UI #移动端 #设计灵感', 
      likes: '23.4k', 
      comments: '638',
      music: 'GALA - 追梦赤子心 (抖音热歌)'
    },
    { 
      id: 3, 
      user: 'tech_geek', 
      description: '看看AI如何帮我在10分钟内创建一个完整的网站原型 #AI辅助开发 #原型设计', 
      likes: '56.1k', 
      comments: '1542',
      music: 'Imagine Dragons - Believer (电子版)'
    }
  ];
  
  // 当前视频
  const currentVideo = videos[currentVideoIndex];
  
  // 处理视频滑动
  const handleSwipeUp = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsLiked(false);
    }
  };
  
  const handleSwipeDown = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setIsLiked(false);
    }
  };
  
  // 渲染视频页面
  const renderFeedPage = () => (
    <div className="relative flex-1">
      {/* 顶部渐变 */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10" />
      
      {/* 视频背景 */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/60 z-10 cursor-pointer"
        onClick={() => {
          // 一半概率上滑，一半概率下滑
          if (Math.random() > 0.5) {
            handleSwipeUp();
          } else {
            handleSwipeDown();
          }
        }}
      />
      
      {/* 右侧控制栏 */}
      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-6 z-20">
        <div className="flex flex-col items-center">
          <button 
            className={`bg-gray-900/50 rounded-full p-2 ${isLiked ? 'text-red-500' : 'text-white'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className="h-7 w-7" fill={isLiked ? "#ef4444" : "none"} />
          </button>
          <span className="text-xs mt-1">{isLiked ? (parseInt(currentVideo.likes) + 1).toString() : currentVideo.likes}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <button 
            className="bg-gray-900/50 rounded-full p-2"
            onClick={() => setShowComments(true)}
          >
            <MessageCircle className="h-7 w-7" />
          </button>
          <span className="text-xs mt-1">{currentVideo.comments}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <button className="bg-gray-900/50 rounded-full p-2">
            <Share2 className="h-7 w-7" />
          </button>
          <span className="text-xs mt-1">分享</span>
        </div>
        
        <div className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-orange-400 animate-pulse">
        </div>
      </div>
      
      {/* 底部信息 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center border-2 border-white">
            <User className="h-5 w-5" />
          </div>
          <span className="font-bold">@{currentVideo.user}</span>
          <button className="text-xs border border-pink-500 text-pink-500 rounded-full px-3 py-0.5">
            关注
          </button>
        </div>
        
        <p className="mt-2 text-sm">
          {currentVideo.description}
        </p>
        
        <div className="flex items-center gap-2 mt-2">
          <Music className="h-4 w-4" />
          <div className="flex-1 text-xs">
            <p className="animate-marquee whitespace-nowrap">
              {currentVideo.music}
            </p>
          </div>
        </div>
      </div>
      
      {/* 评论弹窗 */}
      {showComments && (
        <div className="absolute inset-0 bg-black/90 z-30 flex flex-col">
          <div className="p-4 flex items-center border-b border-gray-800">
            <button 
              className="mr-3"
              onClick={() => setShowComments(false)}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-medium">评论 ({currentVideo.comments})</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <div className={`h-8 w-8 rounded-full flex-shrink-0 ${['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'][i % 5]}`}>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">用户{i + 1}</span>
                    <span className="text-xs text-gray-400">{i}小时前</span>
                  </div>
                  <p className="text-sm mt-1">
                    {[
                      "这个效果太酷了，请问是怎么做到的？",
                      "学到了，AI确实能大大提升工作效率！",
                      "支持原创，期待更多类似的内容👍",
                      "这个界面设计得真漂亮，能分享一下设计思路吗？",
                      "太实用了，我也想学习这个技术！"
                    ][i]}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-gray-400">点赞 {Math.floor(Math.random() * 100)}</span>
                    <span className="text-xs text-gray-400">回复</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-gray-800 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-purple-500 flex-shrink-0"></div>
            <input 
              type="text" 
              placeholder="添加评论..." 
              className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-sm border-none outline-none"
            />
            <button className="text-primary">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
  // 渲染发现页面
  const renderExplorePage = () => (
    <div className="flex-1 p-4 overflow-y-auto">
      <h3 className="font-medium mb-4">发现</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {[
          '热门挑战', '美食探店', '旅行日记', 
          '学习笔记', '生活妙招', '科技动态'
        ].map((tag, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-3 flex items-center justify-between cursor-pointer">
            <span className="text-sm">{tag}</span>
            <span className="text-xs text-gray-400">热门</span>
          </div>
        ))}
      </div>
      
      <h3 className="font-medium mt-6 mb-3">推荐关注</h3>
      
      <div className="space-y-3">
        {[
          { name: 'vibe_product', desc: '产品设计专家', followers: '12.5k' },
          { name: 'tech_geek', desc: '科技数码达人', followers: '45.2k' },
          { name: 'ui_designer', desc: 'UI设计师', followers: '78.3k' }
        ].map((creator, i) => (
          <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 rounded-full ${['bg-teal-500', 'bg-blue-500', 'bg-purple-500'][i % 3]}`}></div>
              <div>
                <p className="text-sm font-medium">@{creator.name}</p>
                <p className="text-xs text-gray-400">{creator.desc} · {creator.followers}粉丝</p>
              </div>
            </div>
            <button className="text-xs border border-pink-500 text-pink-500 rounded-full px-3 py-1">
              关注
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
  // 渲染消息页面
  const renderMessagesPage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h3 className="font-medium">消息通知</h3>
      </div>
      
      <div className="p-4 flex gap-4 border-b border-gray-800">
        <button className="px-3 py-1 border-b-2 border-pink-500 text-sm">互动消息</button>
        <button className="px-3 py-1 text-sm text-gray-400">系统通知</button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {[
          { user: 'ui_designer', action: '点赞了你的视频', time: '1小时前' },
          { user: 'tech_geek', action: '评论了你的视频', time: '2小时前' },
          { user: 'vibe_fan', action: '关注了你', time: '5小时前' },
          { user: 'design_pro', action: '分享了你的视频', time: '昨天' },
          { user: 'product_manager', action: '点赞了你的评论', time: '昨天' }
        ].map((notification, i) => (
          <div key={i} className="flex items-center gap-3 p-4 border-b border-gray-800">
            <div className={`h-10 w-10 rounded-full ${['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'][i % 5]}`}></div>
            <div className="flex-1">
              <p className="text-sm"><span className="font-medium">@{notification.user}</span> {notification.action}</p>
              <p className="text-xs text-gray-400">{notification.time}</p>
            </div>
            <div className="h-12 w-12 bg-gray-800 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // 渲染个人页面
  const renderProfilePage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-6 flex flex-col items-center border-b border-gray-800">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-4 border-black"></div>
        <h3 className="text-lg font-bold mt-3">@my_profile</h3>
        <p className="text-sm text-gray-400 mt-1">产品设计爱好者 | AI实践派</p>
        
        <div className="flex gap-6 mt-4">
          <div className="flex flex-col items-center">
            <p className="font-bold">48</p>
            <p className="text-xs text-gray-400">关注</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">2,380</p>
            <p className="text-xs text-gray-400">粉丝</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">12.5k</p>
            <p className="text-xs text-gray-400">获赞</p>
          </div>
        </div>
        
        <button className="mt-4 w-full py-2 rounded-full bg-pink-600 text-sm font-medium">
          编辑资料
        </button>
      </div>
      
      <div className="flex border-b border-gray-800">
        <button className="flex-1 py-3 border-b-2 border-pink-500 text-sm font-medium">作品</button>
        <button className="flex-1 py-3 text-sm text-gray-400">收藏</button>
        <button className="flex-1 py-3 text-sm text-gray-400">喜欢</button>
      </div>
      
      <div className="flex-1 p-1">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-800 flex items-center justify-center">
              <div className="h-6 w-6 opacity-50">
                {i % 3 === 0 ? <Heart /> : i % 3 === 1 ? <Music /> : <MessageCircle />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  // 渲染当前页面
  const renderContent = () => {
    switch(currentPage) {
      case 'explore':
        return renderExplorePage();
      case 'messages':
        return renderMessagesPage();
      case 'profile':
        return renderProfilePage();
      default:
        return renderFeedPage();
    }
  };
  
  return (
    <div className="w-full flex flex-col h-full bg-black text-white overflow-hidden">
      {/* 页面头部 (只在特定页面显示) */}
      {currentPage === 'feed' && (
        <div className="p-3 flex justify-between items-center z-20">
          <div className="flex gap-3">
            <button className="text-lg font-medium">关注</button>
            <button className="text-lg font-medium text-white/60">推荐</button>
          </div>
          <Bell className="h-5 w-5" />
        </div>
      )}
      
      {/* 主要内容区域 */}
      {renderContent()}
      
      {/* 底部导航 */}
      <div className="h-14 bg-black border-t border-gray-800 flex justify-around items-center px-2">
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'feed' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('feed')}
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">首页</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'explore' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('explore')}
        >
          <Search className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">发现</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <div className="h-8 w-8 flex items-center justify-center rounded bg-gradient-to-r from-blue-500 to-pink-500">
            <Plus className="h-5 w-5 text-white" />
          </div>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'messages' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('messages')}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">消息</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'profile' ? '' : 'opacity-60'}`}
          onClick={() => setCurrentPage('profile')}
        >
          <User className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">我的</span>
        </div>
      </div>
    </div>
  );
} 