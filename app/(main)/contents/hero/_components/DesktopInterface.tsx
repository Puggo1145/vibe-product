import React from 'react';

export default function DesktopInterface() {
  return (
    <div className="w-full h-full flex flex-col bg-white text-slate-800 overflow-hidden">
      {/* Top Menu Bar */}
      <div className="h-7 bg-slate-100 flex items-center justify-between px-3 border-b border-slate-200 py-2">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-center flex-1">Vibe Dashboard</div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-[20%] bg-slate-900 text-white p-3 flex flex-col">
          <div className="text-sm font-semibold mb-4 text-white">VibeTools</div>
          
          {/* Navigation Menu */}
          <nav className="flex-1">
            <ul className="space-y-1 text-[10px]">
              <li className="flex items-center p-2 bg-slate-800 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Dashboard
              </li>
              <li className="flex items-center p-2 text-slate-300 hover:bg-slate-800 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Projects
              </li>
              <li className="flex items-center p-2 text-slate-300 hover:bg-slate-800 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Calendar
              </li>
              <li className="flex items-center p-2 text-slate-300 hover:bg-slate-800 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                Messages
              </li>
              <li className="flex items-center p-2 text-slate-300 hover:bg-slate-800 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Settings
              </li>
            </ul>
          </nav>
          
          {/* User Profile */}
          <div className="mt-auto pt-3 border-t border-slate-700 flex items-center">
            <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-white text-[8px] font-bold">VP</div>
            <div className="ml-2 text-[8px]">
              <div className="font-medium">Vibe Pro</div>
              <div className="text-slate-400">Admin</div>
            </div>
          </div>
        </div>
        
        {/* Main Dashboard */}
        <div className="flex-1 p-4 overflow-auto bg-slate-50">
          {/* Header & Search */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold text-slate-800">Dashboard</h1>
            <div className="relative">
              <input type="text" className="text-xs pl-7 pr-2 py-1 rounded-md border border-slate-300 bg-white w-40" placeholder="Search..." />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-400 absolute left-2 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {['Projects', 'Tasks', 'Team', 'Budget'].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                <div className="text-[8px] text-slate-500 mb-1">{item}</div>
                <div className="flex justify-between items-end">
                  <div className="text-lg font-bold text-slate-800">{12 + i * 4}</div>
                  <div className={`text-[8px] ${i % 2 === 0 ? 'text-slate-700' : 'text-slate-600'}`}>
                    +{4 + i}% {i % 2 === 0 ? '↑' : '→'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project Progress */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-semibold text-slate-800">Project Progress</h2>
              <select className="text-[8px] border border-slate-200 rounded px-1">
                <option>This Week</option>
              </select>
            </div>
            
            {/* Project List */}
            <div className="space-y-3">
              {['Website Redesign', 'Mobile App Development', 'Marketing Campaign', 'Data Analysis'].map((project, i) => (
                <div key={i} className="flex items-center text-[10px]">
                  <div className="w-1/3 text-slate-700">{project}</div>
                  <div className="w-1/3 px-2">
                    <div className="h-1.5 rounded-full bg-slate-100">
                      <div 
                        className={`h-full rounded-full ${
                          i === 0 ? 'bg-slate-700' : 
                          i === 1 ? 'bg-slate-600' : 
                          i === 2 ? 'bg-slate-500' : 
                          'bg-slate-400'
                        }`} 
                        style={{width: `${(i+1) * 20}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className="w-1/6 text-slate-600">{(i+1) * 20}%</div>
                  <div className="w-1/6 text-right text-slate-500">{5-i} days left</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-semibold text-slate-800">Recent Activity</h2>
              <button className="text-[8px] text-slate-600">View All</button>
            </div>
            
            <div className="space-y-2">
              {[
                { user: 'Alex', action: 'completed task', target: 'Homepage Design', time: '2h ago' },
                { user: 'Sara', action: 'commented on', target: 'Mobile App Wireframes', time: '3h ago' },
                { user: 'Tom', action: 'updated', target: 'Project Timeline', time: '5h ago' },
                { user: 'Lisa', action: 'created', target: 'New Marketing Plan', time: '6h ago' }
              ].map((activity, i) => (
                <div key={i} className="flex text-[8px] py-1 border-b border-slate-100 last:border-0">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white font-semibold text-[6px] mr-2">
                    {activity.user.substring(0, 1)}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">{activity.user}</span> {activity.action}{' '}
                    <span className="text-slate-700">{activity.target}</span>
                    <div className="text-slate-400 text-[6px]">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 