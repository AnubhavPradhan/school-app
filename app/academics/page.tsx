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
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Core Subjects</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mathematics</li>
                  <li>• Science</li>
                  <li>• English Language Arts</li>
                  <li>• Social Studies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Specialty Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• STEM Education</li>
                  <li>• Arts & Music</li>
                  <li>• Foreign Languages</li>
                  <li>• Physical Education</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Support */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Academic Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Tutoring</h3>
                <p>One-on-one and group tutoring available for all subjects</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Learning Center</h3>
                <p>Resource center with academic support specialists</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Study Groups</h3>
                <p>Peer-led study groups and academic workshops</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
