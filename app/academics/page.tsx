import Header from '@/components/Header';

export default function Academics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Academic Programs
          </h1>
          
          {/* Programs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Elementary Education</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive foundation in core subjects with emphasis on creativity and critical thinking.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Grades K-5</li>
                <li>• Small class sizes</li>
                <li>• Personalized attention</li>
                <li>• Interactive learning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Middle School</h3>
              <p className="text-gray-600 mb-4">
                Engaging curriculum that prepares students for high school success.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Grades 6-8</li>
                <li>• Advanced courses</li>
                <li>• STEM focus</li>
                <li>• Leadership development</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">High School</h3>
              <p className="text-gray-600 mb-4">
                College preparatory curriculum with diverse academic opportunities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Grades 9-12</li>
                <li>• AP/IB Programs</li>
                <li>• College counseling</li>
                <li>• Career guidance</li>
              </ul>
            </div>
          </div>

          {/* Curriculum Highlights */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Curriculum Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 text-center">Core Subjects</h3>
                <ul className="space-y-2 text-gray-600 text-center">
                  <li>• Mathematics</li>
                  <li>• Science</li>
                  <li>• Computer Science</li>
                  <li>• Social Studies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 text-center">Specialty Programs</h3>
                <ul className="space-y-2 text-gray-600 text-center">
                  <li>• STEM Education</li>
                  <li>• Arts & Music</li>
                  <li>• Foreign Languages</li>
                  <li>• Physical Education</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Academic Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">Tutoring</h3>
                <p className="text-gray-600"> One-on-one and group tutoring available for all subjects</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">Learning Center</h3>
                <p className="text-gray-600">Resource center with academic support specialists</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-indigo-700">Study Groups</h3>
                <p className="text-gray-600">Peer-led study groups and academic workshops</p>
              </div>
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
