import Header from '@/components/Header';

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Admissions
          </h1>

          {/* Welcome Section */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our vibrant learning community where every student is empowered to excel academically and grow personally.
            </p>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Submit Application</h3>
                <p className="text-gray-600">Complete the online application form</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Documentation</h3>
                <p className="text-gray-600">Provide required documents and records</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Assessment</h3>
                <p className="text-gray-600">Complete placement assessment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Decision</h3>
                <p className="text-gray-600">Receive admission decision</p>
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Required Documents</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Completed application form</li>
                <li>• Previous academic records</li>
                <li>• Teacher recommendations</li>
                <li>• Birth certificate</li>
                <li>• Immunization records</li>
                <li>• Proof of residence</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Important Dates</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Application Opens: September 1</li>
                <li>• Early Decision: December 15</li>
                <li>• Regular Decision: March 1</li>
                <li>• Financial Aid Deadline: April 1</li>
                <li>• Enrollment Deadline: May 1</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text">Ready to Apply?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Start your journey with us today
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
