import React from 'react';

export default function AppInterface() {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Status bar */}
      <div className="flex justify-between items-center px-3 py-2 text-[10px] text-slate-600 bg-blue-500">
        <div className='text-white'>9:41</div>
        <div className="flex space-x-1">
          <div className="w-3 h-2 bg-white rounded-sm"></div>
          <div className="w-3 h-2 bg-white rounded-sm"></div>
          <div className="w-3 h-2 bg-white rounded-sm"></div>
        </div>
      </div>

      {/* Chat header */}
      <div className="flex justify-between items-center px-4 py-3 bg-blue-500 text-white">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <div className="ml-2 flex items-center">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div className="ml-1.5">
              <div className="text-sm font-medium">Team Vibe</div>
              <div className="text-[8px] opacity-80">5 members • 3 online</div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 bg-slate-50 space-y-3">
        {/* Date divider */}
        <div className="flex justify-center">
          <div className="text-[9px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">Today</div>
        </div>

        {/* System message */}
        <div className="flex justify-center">
          <div className="text-[9px] bg-blue-100 text-blue-700 px-2 py-1 rounded">
            Alex added Sarah to the group
          </div>
        </div>

        {/* Messages from others */}
        <div className="flex items-end space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-[8px] flex items-center justify-center">
            A
          </div>
          <div className="max-w-[70%]">
            <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 text-[10px] text-left">
              Hey team! I just pushed the new UI components to our repository.
            </div>
            <div className="text-left text-[8px] text-slate-500 ml-1 mt-0.5">9:30 AM</div>
          </div>
        </div>

        <div className="flex items-end space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-[8px] flex items-center justify-center">
            S
          </div>
          <div className="max-w-[70%]">
            <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 text-[10px] text-left">
              Great work! The new components look really clean.
            </div>
            <div className="text-left text-[8px] text-slate-500 ml-1 mt-0.5">9:32 AM</div>
          </div>
        </div>

        <div className="flex items-end space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-[8px] flex items-center justify-center">
            D
          </div>
          <div className="max-w-[70%]">
            <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 text-[10px] text-left">
              I'm having some issues with the responsive design. Could you help me later?
            </div>
            <div className="text-left text-[8px] text-slate-500 ml-1 mt-0.5">9:34 AM</div>
          </div>
        </div>

        {/* Your messages */}
        <div className="flex flex-row-reverse items-end space-x-reverse space-x-1">
          <div className="max-w-[70%]">
            <div className="bg-blue-500 text-white rounded-2xl rounded-br-none px-3 py-2 text-[10px] text-left">
              Sure David, I can help you with that. Let's set up a quick call at 2pm?
            </div>
            <div className="text-left text-[8px] text-slate-500 mr-1 mt-0.5 text-right">9:36 AM</div>
          </div>
        </div>

        <div className="flex items-end space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-[8px] flex items-center justify-center">
            D
          </div>
          <div className="max-w-[70%]">
            <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 text-[10px] text-left">
              Perfect, thanks!
            </div>
            <div className="text-left text-[8px] text-slate-500 ml-1 mt-0.5">9:37 AM</div>
          </div>
        </div>

        <div className="flex items-end space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-[8px] flex items-center justify-center">
            S
          </div>
          <div className="max-w-[70%]">
            <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 text-[10px] text-left">
              I'll join the call too. Also, I've added some new mockups to our Figma project 🎨
            </div>
            <div className="text-left text-[8px] text-slate-500 ml-1 mt-0.5">9:38 AM</div>
          </div>
        </div>

        <div className="flex flex-row-reverse items-end space-x-reverse space-x-1">
          <div className="max-w-[70%]">
            <div className="bg-blue-500 text-white rounded-2xl rounded-br-none px-3 py-2 text-[10px] text-left">
              Awesome! Looking forward to seeing them. I think we're making great progress with the project 🚀
            </div>
            <div className="text-left text-[8px] text-slate-500 mr-1 mt-0.5 text-right">9:40 AM</div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-end space-x-1.5">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-[8px] flex items-center justify-center">
            A
          </div>
          <div className="bg-white rounded-2xl rounded-bl-none px-3 py-2 text-left">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Message input */}
      <div className="px-3 py-2 bg-white border-t border-slate-200 flex items-center space-x-2">
        <button className="p-1.5 rounded-full text-slate-400 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[10px] text-slate-400">Type a message...</div>
        <button className="p-1.5 rounded-full text-slate-400 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-1.5 rounded-full text-white bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
} 