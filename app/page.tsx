import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-indigo-900 leading-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Welcome to School App
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Your comprehensive solution for modern school management. Experience education transformed through technology.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-transparent bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:from-pink-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img src="/window.svg" alt="Features" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-500">Smart Dashboard</h3>
                <p className="text-gray-500">Manage everything from one place</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img src="/globe.svg" alt="Global" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-500">Global Access</h3>
                <p className="text-gray-500">Access from anywhere, anytime</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img src="/file.svg" alt="Reports" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-500">Easy Reports</h3>
                <p className="text-gray-500">Generate reports instantly</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img src="/vercel.svg" alt="Performance" className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-500">Fast Performance</h3>
                <p className="text-gray-500">Lightning-fast experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white py-16 transform skew-y-[-2deg] shadow-xl">
        <div className="container mx-auto px-4 transform skew-y-[2deg]">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Schools Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold">1000+</p>
              <p className="text-blue-200">Schools</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">50k+</p>
              <p className="text-blue-200">Teachers</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">500k+</p>
              <p className="text-blue-200">Students</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-blue-200">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* School Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Our School Environment</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Experience the modern learning environments and facilities that make our schools stand out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Modern Classroom"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Modern Classrooms</h3>
                <p className="text-sm">State-of-the-art learning spaces</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
            <img 
              src="https://media.istockphoto.com/id/506340238/photo/pc-room.jpg?s=612x612&w=0&k=20&c=hClJ3bjnW6n8gXSNbotpe520ofrREJYlJNMElU5CWJA=" 
              alt="Computer Lab"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Computer Labs</h3>
                <p className="text-sm">Digital learning facilities</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Library"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Modern Library</h3>
                <p className="text-sm">Extensive learning resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">Student Management</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Complete student profiles</li>
              <li>• Attendance tracking</li>
              <li>• Performance analytics</li>
              <li>• Behavioral records</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">Teacher Tools</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Lesson planning</li>
              <li>• Grade management</li>
              <li>• Resource sharing</li>
              <li>• Parent communication</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-600">Administration</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Financial management</li>
              <li>• Staff scheduling</li>
              <li>• Resource allocation</li>
              <li>• Report generation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text">Ready to Transform Your School?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of schools that have already modernized their management with School App
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white bg-opacity-95 text-indigo-600 rounded-lg font-semibold hover:bg-opacity-100 transition-all transform hover:scale-105 shadow-lg">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}