import React from 'react';

export default function WebInterface() {
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center">
          <div className="font-bold text-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">VibeLearn</div>
          <div className="hidden sm:flex ml-8 space-x-6 text-[10px]">
            <a href="#" className="text-slate-900 font-medium">Courses</a>
            <a href="#" className="text-slate-500 hover:text-slate-700">Tutorials</a>
            <a href="#" className="text-slate-500 hover:text-slate-700">Community</a>
            <a href="#" className="text-slate-500 hover:text-slate-700">Resources</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="text-[10px] py-1 px-3 pl-8 border border-slate-200 rounded-full w-40 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <button className="text-[10px] py-1 px-4 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-6 px-6 flex flex-col md:flex-row items-center bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="md:w-1/2 md:pr-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Learn to Vibe Code</h1>
          <p className="text-[10px] text-slate-600 mb-4">Master the art of coding with our interactive courses, expert instructors, and hands-on projects.</p>
          <div className="flex space-x-3">
            <button className="text-[8px] py-1 px-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">Explore Courses</button>
            <button className="text-[8px] py-1 px-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition">Watch Demo</button>
          </div>
          <div className="flex items-center mt-4 text-[8px]">
            <div className="flex -space-x-1 mr-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full border-[1.5px] border-white bg-slate-200"></div>
              ))}
            </div>
            <span className="text-slate-600">Join 10,000+ learners</span>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-800 text-[8px] text-slate-400 p-2 flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="p-4 text-[10px]">
              <div className="text-xs font-mono text-slate-800 mb-1">// Learn to code with Vibe</div>
              <div className="font-mono text-left">
                <span className="text-purple-600">function</span> <span className="text-yellow-600">learnToCode</span>() {'{'}
                <div className="pl-4">
                  <span className="text-purple-600">const</span> skills = [<span className="text-green-600">'HTML'</span>, <span className="text-green-600">'CSS'</span>, <span className="text-green-600">'JavaScript'</span>];
                </div>
                <div className="pl-4">
                  <span className="text-purple-600">let</span> experience = <span className="text-blue-600">0</span>;
                </div>
                <div className="pl-4">
                  <span className="text-orange-600">while</span> (experience {'<'} <span className="text-blue-600">100</span>) {'{'}
                </div>
                <div className="pl-8">
                  skills.<span className="text-yellow-600">forEach</span>(skill {'=>'} {'{'})
                </div>
                <div className="pl-12">
                  <span className="text-teal-600">practice</span>(skill);
                </div>
                <div className="pl-12">
                  experience++;
                </div>
                <div className="pl-8">{'})'}</div>
                <div className="pl-4">{'}'}</div>
                <div className="pl-4">
                  <span className="text-purple-600">return</span> <span className="text-green-600">'Vibe Coding Master'</span>;
                </div>
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="px-6 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900">Featured Courses</h2>
          <a href="#" className="text-[10px] text-teal-500 hover:text-teal-600">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: 'Web Development Fundamentals', level: 'Beginner', lessons: 42, rating: 4.9 },
            { title: 'Responsive Design Mastery', level: 'Intermediate', lessons: 28, rating: 4.8 },
            { title: 'JavaScript Frameworks', level: 'Advanced', lessons: 36, rating: 4.7 }
          ].map((course, i) => (
            <div key={i} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition">
              <div className={`h-2 ${
                i === 0 ? 'bg-blue-500' : 
                i === 1 ? 'bg-purple-500' : 
                'bg-teal-500'
              }`}></div>
              <div className="p-4">
                <div className="text-[10px] text-slate-500 mb-1">{course.level} • {course.lessons} Lessons</div>
                <h3 className="text-sm font-semibold mb-2">{course.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 ${j < Math.floor(course.rating) ? 'text-yellow-400' : 'text-slate-200'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[8px] text-slate-500 ml-1">{course.rating}</span>
                  </div>
                  <button className="text-[8px] py-1 px-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50 transition">Enroll</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Testimonials & Stats */}
      <div className="px-6 py-4 bg-slate-50 mt-auto">
        <div className="flex justify-between text-[8px] text-slate-600">
          <div>👨‍💻 500+ Courses</div>
          <div>👩‍🏫 50+ Expert Instructors</div>
          <div>🌎 Students from 120+ Countries</div>
          <div>⭐ 4.8 Average Rating</div>
        </div>
      </div>
    </div>
  );
} 