export default function Header() {
  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <img src="/vercel.svg" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                School App
              </span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="/academics" className="text-gray-600 hover:text-blue-600 transition-colors">
                Academics
              </a>
              <a href="/admissions" className="text-gray-600 hover:text-blue-600 transition-colors">
                Admissions
              </a>
              <a href="/campus-life" className="text-gray-600 hover:text-blue-600 transition-colors">
                Campus Life
              </a>
              <a href="/events" className="text-gray-600 hover:text-blue-600 transition-colors">
                Events
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all">
              Student Portal
            </button>
            <button className="px-4 py-2 text-sm border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Parent Portal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
