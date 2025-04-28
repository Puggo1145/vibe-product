import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, Settings, Clock, List, Calendar, BarChart, Bell, CheckCircle, Menu, Plus, MoreVertical, User, ChevronLeft, Edit } from 'lucide-react';

export default function PomodoroApp() {
  const [currentPage, setCurrentPage] = useState('timer');
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(65);
  const [mode, setMode] = useState('work');
  const [timer, setTimer] = useState(1476); // 24:36 in seconds
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(0);
  
  // 格式化时间
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // 播放/暂停时更新计时
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          const newTime = prevTimer - 1;
          // 更新进度
          if (mode === 'work') {
            setProgress((newTime / 1500) * 100);
          } else if (mode === 'break') {
            setProgress((newTime / 300) * 100);
          } else {
            setProgress((newTime / 900) * 100);
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timer, mode]);
  
  // 切换模式时重置计时器
  useEffect(() => {
    if (mode === 'work') {
      setTimer(1500); // 25分钟
    } else if (mode === 'break') {
      setTimer(300); // 5分钟
    } else {
      setTimer(900); // 15分钟
    }
    setProgress(100);
    setIsActive(false);
  }, [mode]);
  
  // 获取颜色
  const getColor = () => {
    if (mode === 'work') return { bg: 'from-red-500 to-red-600', accent: 'bg-red-500' };
    if (mode === 'break') return { bg: 'from-green-500 to-green-600', accent: 'bg-green-500' };
    return { bg: 'from-blue-500 to-blue-600', accent: 'bg-blue-500' };
  };
  
  // 任务数据
  const tasks = [
    { id: 1, name: '编写产品原型页面', completed: false, pomodoros: 2, totalPomodoros: 4 },
    { id: 2, name: '处理用户反馈', completed: true, pomodoros: 3, totalPomodoros: 3 },
    { id: 3, name: '优化应用性能', completed: false, pomodoros: 0, totalPomodoros: 5 },
    { id: 4, name: '设计新的功能', completed: false, pomodoros: 1, totalPomodoros: 3 },
    { id: 5, name: '更新文档', completed: false, pomodoros: 0, totalPomodoros: 2 }
  ];
  
  // 计时器页面
  const renderTimerPage = () => (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">专注计时</h1>
        <button className="h-8 w-8 flex items-center justify-center bg-gray-800 rounded-full">
          <Settings className="h-4 w-4" />
        </button>
      </div>

      {/* Timer Circle */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="relative mb-8">
          <div className="flex space-x-4">
            <button 
              onClick={() => setMode('work')}
              className={`px-4 py-1 rounded-full text-sm font-medium ${mode === 'work' ? 'bg-red-500' : 'bg-gray-800'}`}
            >
              工作
            </button>
            <button 
              onClick={() => setMode('break')}
              className={`px-4 py-1 rounded-full text-sm font-medium ${mode === 'break' ? 'bg-green-500' : 'bg-gray-800'}`}
            >
              休息
            </button>
            <button 
              onClick={() => setMode('longBreak')}
              className={`px-4 py-1 rounded-full text-sm font-medium ${mode === 'longBreak' ? 'bg-blue-500' : 'bg-gray-800'}`}
            >
              长休息
            </button>
          </div>
        </div>

        <div className="relative">
          <div className={`h-60 w-60 rounded-full bg-gradient-to-br ${getColor().bg} bg-opacity-10 flex items-center justify-center`}>
            <div className="h-52 w-52 rounded-full bg-gray-900 flex items-center justify-center">
              {/* Progress Circle */}
              <svg className="absolute inset-0 h-60 w-60" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none"
                  stroke="rgba(200, 200, 200, 0.1)"
                  strokeWidth="3"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none"
                  stroke={mode === 'work' ? 'rgba(239, 68, 68, 0.8)' : mode === 'break' ? 'rgba(34, 197, 94, 0.8)' : 'rgba(59, 130, 246, 0.8)'}
                  strokeWidth="3"
                  strokeDasharray="282.7"
                  strokeDashoffset={282.7 - (282.7 * progress / 100)}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              <div className="z-10 text-center">
                <div className="text-4xl font-bold tracking-tighter">
                  {formatTime(timer)}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  剩余时间
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button 
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center"
              onClick={() => {
                setIsActive(false);
                if (mode === 'work') {
                  setTimer(1500);
                } else if (mode === 'break') {
                  setTimer(300);
                } else {
                  setTimer(900);
                }
                setProgress(100);
              }}
            >
              <SkipForward className="h-5 w-5" />
            </button>
            <button 
              className={`h-14 w-14 rounded-full ${getColor().accent} flex items-center justify-center`}
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
            </button>
          </div>
        </div>

        {/* Task Section */}
        <div className="w-full mt-16 bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-medium">当前任务</h2>
            <div className="text-xs text-gray-400">2/6 完成</div>
          </div>
          
          <div className="space-y-3">
            {tasks.filter((_, i) => i < 2).map((task, i) => (
              <div 
                key={task.id} 
                className={`flex items-center p-2 ${selectedTask === i ? 'bg-gray-700' : 'bg-gray-700/50'} rounded-lg cursor-pointer`}
                onClick={() => setSelectedTask(i)}
              >
                <div className={`h-5 w-5 rounded-full border-2 ${task.completed ? 'bg-green-500 border-green-500' : i === 0 ? 'border-red-500' : 'border-gray-500'} mr-3 flex items-center justify-center`}>
                  {task.completed && <CheckCircle className="h-4 w-4 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm">{task.name}</div>
                  <div className="text-xs text-gray-400">已完成 {task.pomodoros} 个番茄钟 (共 {task.totalPomodoros})</div>
                </div>
                {i === 0 && (
                  <div className="text-xs font-medium bg-red-500/20 text-red-500 rounded px-2 py-0.5">
                    进行中
                  </div>
                )}
              </div>
            ))}
            
            <button 
              className="w-full py-2 mt-2 rounded-lg border border-dashed border-gray-600 text-gray-400 text-sm flex items-center justify-center"
              onClick={() => setOpenTaskForm(true)}
            >
              <Plus className="h-4 w-4 mr-1" /> 添加新任务
            </button>
          </div>
        </div>
      </div>
      
      {/* 任务表单弹窗 */}
      {openTaskForm && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 z-30">
          <div className="bg-gray-800 w-full max-w-md rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">添加新任务</h3>
              <button onClick={() => setOpenTaskForm(false)}>
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">任务名称</label>
                <input 
                  type="text" 
                  placeholder="输入任务名称" 
                  className="w-full bg-gray-700 rounded-lg px-3 py-2 text-sm border-none outline-none"
                />
              </div>
              
              <div>
                <label className="text-xs text-gray-400 mb-1 block">预计番茄数</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button key={num} className="h-8 w-8 rounded-full bg-gray-700 mr-2 text-sm">
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-xs text-gray-400 mb-1 block">备注</label>
                <textarea 
                  placeholder="添加备注" 
                  className="w-full bg-gray-700 rounded-lg px-3 py-2 text-sm border-none outline-none resize-none"
                  rows={3}
                ></textarea>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button 
                  className="flex-1 py-2 bg-gray-700 rounded-lg text-sm"
                  onClick={() => setOpenTaskForm(false)}
                >
                  取消
                </button>
                <button 
                  className="flex-1 py-2 bg-red-600 rounded-lg text-sm font-medium"
                  onClick={() => setOpenTaskForm(false)}
                >
                  保存
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
  // 任务列表页面
  const renderTasksPage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h2 className="font-medium">任务列表</h2>
        <div className="flex items-center">
          <button className="mr-3">
            <MoreVertical className="h-5 w-5" />
          </button>
          <button 
            className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center"
            onClick={() => setOpenTaskForm(true)}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4 pb-2 flex space-x-4 border-b border-gray-700">
        <button className="py-1 px-3 border-b-2 border-red-500 text-sm">今天</button>
        <button className="py-1 px-3 text-sm text-gray-400">计划中</button>
        <button className="py-1 px-3 text-sm text-gray-400">已完成</button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-sm text-gray-400 mb-2">进行中</h3>
            <div className="space-y-3">
              {tasks.filter(task => !task.completed).map(task => (
                <div key={task.id} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full border-2 border-gray-500 mr-3"></div>
                    <p className="text-sm flex-1">{task.name}</p>
                    <button>
                      <Edit className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2 pl-8">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-400">{task.pomodoros}/{task.totalPomodoros}</span>
                    </div>
                    {task.id === 1 && (
                      <div className="text-xs font-medium bg-red-500/20 text-red-500 rounded px-2 py-0.5">
                        进行中
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-400 mb-2">已完成</h3>
            <div className="space-y-3">
              {tasks.filter(task => task.completed).map(task => (
                <div key={task.id} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-green-500 border-2 border-green-500 mr-3 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm flex-1 line-through text-gray-400">{task.name}</p>
                    <button>
                      <Edit className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex items-center mt-2 pl-8">
                    <Clock className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-400">{task.pomodoros}/{task.totalPomodoros}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // 统计数据页面
  const renderStatsPage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h2 className="font-medium">统计分析</h2>
        <Menu className="h-5 w-5" />
      </div>
      
      <div className="p-4">
        <div className="bg-gray-800 rounded-xl p-4 mb-5">
          <h3 className="text-sm mb-3">本周概览</h3>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">25</div>
              <div className="text-xs text-gray-400 mt-1">番茄钟</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">12.5<span className="text-sm">小时</span></div>
              <div className="text-xs text-gray-400 mt-1">总时长</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">15</div>
              <div className="text-xs text-gray-400 mt-1">任务完成</div>
            </div>
          </div>
        </div>
        
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm">每日番茄数</h3>
            <div className="text-xs text-gray-400">本周</div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex justify-between mb-2">
              {['一', '二', '三', '四', '五', '六', '日'].map((day, i) => (
                <div key={i} className="text-xs text-gray-400">{day}</div>
              ))}
            </div>
            <div className="flex justify-between items-end h-32">
              {[3, 5, 2, 6, 4, 2, 3].map((count, i) => (
                <div 
                  key={i} 
                  className={`w-7 rounded-t ${i === 3 ? 'bg-red-500' : 'bg-gray-600'}`}
                  style={{ height: `${count * 10}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm">专注时间分布</h3>
            <div className="text-xs text-gray-400">本周</div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="space-y-4">
              {[
                { category: '产品开发', percent: 45, color: 'bg-red-500' },
                { category: '设计工作', percent: 25, color: 'bg-blue-500' },
                { category: '学习', percent: 20, color: 'bg-green-500' },
                { category: '其他', percent: 10, color: 'bg-yellow-500' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm">{item.category}</div>
                    <div className="text-sm">{item.percent}%</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // 设置页面
  const renderSettingsPage = () => (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex items-center border-b border-gray-700">
        <button 
          className="mr-3"
          onClick={() => setCurrentPage('timer')}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="font-medium">设置</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-3">时长设置</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm">工作时长</label>
                  <span className="text-sm">25分钟</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="60" 
                  defaultValue="25"
                  className="w-full"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm">短休息时长</label>
                  <span className="text-sm">5分钟</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  defaultValue="5"
                  className="w-full"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm">长休息时长</label>
                  <span className="text-sm">15分钟</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  defaultValue="15"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-3">自动化</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="text-sm">自动开始休息</div>
                <div className="h-5 w-10 bg-gray-700 rounded-full relative">
                  <div className="h-4 w-4 absolute right-1 top-0.5 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="text-sm">自动开始工作</div>
                <div className="h-5 w-10 bg-red-500 rounded-full relative">
                  <div className="h-4 w-4 absolute right-1 top-0.5 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="text-sm">每4个番茄后长休息</div>
                <div className="h-5 w-10 bg-red-500 rounded-full relative">
                  <div className="h-4 w-4 absolute right-1 top-0.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-400 mb-3">提醒</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="text-sm">声音提醒</div>
                <div className="h-5 w-10 bg-red-500 rounded-full relative">
                  <div className="h-4 w-4 absolute right-1 top-0.5 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="text-sm">通知提醒</div>
                <div className="h-5 w-10 bg-red-500 rounded-full relative">
                  <div className="h-4 w-4 absolute right-1 top-0.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // 渲染当前页面
  const renderContent = () => {
    switch(currentPage) {
      case 'tasks':
        return renderTasksPage();
      case 'stats':
        return renderStatsPage();
      case 'settings':
        return renderSettingsPage();
      default:
        return renderTimerPage();
    }
  };

  return (
    <div className="w-full flex flex-col h-full bg-gray-900 text-white overflow-hidden">
      {renderContent()}

      {/* Bottom Navigation */}
      <div className="h-16 bg-gray-800 flex justify-around items-center px-2">
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'timer' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('timer')}
        >
          <Clock className="h-6 w-6" />
          <span className="text-xs mt-1">计时器</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'tasks' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('tasks')}
        >
          <List className="h-6 w-6" />
          <span className="text-xs mt-1">任务</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'stats' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('stats')}
        >
          <Calendar className="h-6 w-6" />
          <span className="text-xs mt-1">统计</span>
        </div>
        <div 
          className={`flex flex-col items-center cursor-pointer ${currentPage === 'settings' ? '' : 'opacity-50'}`}
          onClick={() => setCurrentPage('settings')}
        >
          <BarChart className="h-6 w-6" />
          <span className="text-xs mt-1">分析</span>
        </div>
      </div>
    </div>
  );
}