import Link from 'next/link';
import { SiteSparkHorizontal } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Floating Navigation */}
      
        <div className=" my-4 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl px-8 py-4 shadow-xl shadow-gray-900/10 mx-auto animate-fade-in-down">
          <div className="flex items-center justify-between w-full">
            <SiteSparkHorizontal size="lg" />
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Features
              </Link>
              <Link href="#templates" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Templates
              </Link>
              <Link href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Use Cases
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </Link>
            </div>
            <Link href="/dashboard" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
              Get Started Free
            </Link>
          </div>
        </div>
      

      {/* Hero Section */}
      <section className="px-4 pt-24 pb-16 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400 to-blue-500 rounded-full opacity-15 animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200">
              🚀 Transform your bio link in minutes
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Create and customize<br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              your link in bio
            </span><br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">in minutes</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, 
            podcast, events and more. It all comes together in a link in bio landing page 
            designed to convert.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link 
              href="/dashboard" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Get started for free
              <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 bg-white">
              Watch demo
            </button>
          </div>

          {/* Floating Phone Mockup */}
          <div className="relative mx-auto max-w-sm animate-float">
            <div className="relative bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-[2rem] p-6 min-h-[600px]">
                {/* Profile Section */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Alex Rodriguez</h3>
                  <p className="text-gray-600">Digital Creator</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-center shadow-sm">
                    <span className="text-white font-semibold">Latest YouTube Video</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-center shadow-sm">
                    <span className="text-white font-semibold">New Podcast Episode</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-center shadow-sm">
                    <span className="text-white font-semibold">Free Resource Download</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-center shadow-sm">
                    <span className="text-white font-semibold">Online Course - $99</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Use Cases Section */}
      <section id="use-cases" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Perfect for every
              <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent"> creator</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From musicians to entrepreneurs, SiteSpark adapts to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content Creator */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creators</h3>
                <p className="text-gray-600 mb-6">Share your latest videos, podcasts, and exclusive content. Drive engagement and grow your audience.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Video galleries</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Exclusive content</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Fan engagement tools</li>
                </ul>
              </div>
            </div>

            {/* E-commerce */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Sellers</h3>
                <p className="text-gray-600 mb-6">Showcase products, process payments, and manage your entire business from one link.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Product catalogs</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Payment processing</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Order management</li>
                </ul>
              </div>
            </div>

            {/* Service Providers */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Providers</h3>
                <p className="text-gray-600 mb-6">Accept bookings, showcase your work, and manage client relationships seamlessly.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Online booking</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Portfolio showcase</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Client management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Templates Gallery */}
      <section id="templates" className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Choose from
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> stunning templates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional designs that convert visitors into customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Fashion Brand Template */}
            <div className="group relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="relative bg-white rounded-xl p-4 mb-4 shadow-md overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-center mb-2">MODERN FASHION</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-800 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">New Collection</div>
                    <div className="bg-gray-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Shop Now</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 mt-3">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center" alt="Fashion 1" className="w-full h-12 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100&h=100&fit=crop&crop=center" alt="Fashion 2" className="w-full h-12 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop&crop=center" alt="Fashion 3" className="w-full h-12 object-cover rounded" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fashion Brand</h3>
                  <p className="text-sm text-gray-600">Perfect for clothing brands and fashion influencers</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Use Template
                </button>
              </div>
            </div>

            {/* Music Artist Template */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="relative bg-white rounded-xl p-4 mb-4 shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&crop=center" alt="Alex Rivera" className="w-16 h-16 rounded-lg mx-auto mb-3 object-cover" />
                  <h4 className="font-bold text-center mb-2">ALEX RIVERA</h4>
                  <div className="space-y-2">
                    <div className="bg-purple-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Latest Album</div>
                    <div className="bg-indigo-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Concert Tickets</div>
                  </div>
                  <div className="flex justify-center space-x-2 mt-3">
                    <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=50&h=50&fit=crop&crop=center" alt="Album 1" className="w-6 h-6 rounded object-cover" />
                    <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=50&h=50&fit=crop&crop=center" alt="Album 2" className="w-6 h-6 rounded object-cover" />
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=50&h=50&fit=crop&crop=center" alt="Album 3" className="w-6 h-6 rounded object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Music Artist</h3>
                  <p className="text-sm text-gray-600">Showcase music, tours, and connect with fans</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Use Template
                </button>
              </div>
            </div>

            {/* Business Coach Template */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="relative bg-white rounded-xl p-4 mb-4 shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" alt="Sarah Johnson" className="w-16 h-16 rounded-lg mx-auto mb-3 object-cover" />
                  <h4 className="font-bold text-center mb-2">SARAH JOHNSON</h4>
                  <div className="space-y-2">
                    <div className="bg-blue-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Book Consultation</div>
                    <div className="bg-teal-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Free Resources</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mt-3 text-center text-xs text-gray-600">
                    Transform Your Business
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Business Coach</h3>
                  <p className="text-sm text-gray-600">Professional services and consulting</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Use Template
                </button>
              </div>
            </div>

            {/* Fitness Coach Template */}
            <div className="group relative bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="relative bg-white rounded-xl p-4 mb-4 shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face" alt="Mike Training" className="w-16 h-16 rounded-lg mx-auto mb-3 object-cover" />
                  <h4 className="font-bold text-center mb-2">MIKE TRAINING</h4>
                  <div className="space-y-2">
                    <div className="bg-red-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Workout Plans</div>
                    <div className="bg-orange-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Nutrition Guide</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mt-3 text-center text-xs text-gray-600">
                    Join 5k+ Members
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fitness Coach</h3>
                  <p className="text-sm text-gray-600">Health and wellness programs</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Use Template
                </button>
              </div>
            </div>

            {/* Photographer Template */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="relative bg-white rounded-xl p-4 mb-4 shadow-md overflow-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-slate-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-center mb-2">LENS STUDIO</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-700 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Portfolio</div>
                    <div className="bg-slate-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Book Session</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 mt-3">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&crop=center" alt="Portrait 1" className="w-full h-12 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=100&h=100&fit=crop&crop=center" alt="Portrait 2" className="w-full h-12 object-cover rounded" />
                    <img src="https://images.unsplash.com/photo-1506629905607-ce7c0d4cd4d4?w=100&h=100&fit=crop&crop=center" alt="Portrait 3" className="w-full h-12 object-cover rounded" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Photographer</h3>
                  <p className="text-sm text-gray-600">Showcase work and book clients</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Use Template
                </button>
              </div>
            </div>

            {/* Tech Startup Template */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="relative bg-white rounded-xl p-4 mb-4 shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-center mb-2">TECHFLOW</h4>
                  <div className="space-y-2">
                    <div className="bg-indigo-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Live Demo</div>
                    <div className="bg-blue-600 rounded-lg py-2 px-3 text-center text-sm font-medium text-white">Get Started</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mt-3 text-center text-xs text-gray-600">
                    AI-Powered Solutions
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tech Startup</h3>
                  <p className="text-sm text-gray-600">SaaS and technology companies</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/templates" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Browse All Templates
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Track your success with
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> powerful analytics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor revenue, track engagement, and optimize your content with real-time insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Tracking</h3>
                  <p className="text-gray-600">Monitor your earnings across all products and services with detailed sales analytics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visitor Insights</h3>
                  <p className="text-gray-600">Understand your audience with detailed visitor analytics and engagement metrics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Optimization</h3>
                  <p className="text-gray-600">Get actionable insights to improve your conversion rates and engagement.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Revenue Card */}
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-100">Total Earnings</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                    <div className="text-3xl font-bold">$2,362</div>
                    <div className="text-green-100 text-sm">+18% this month</div>
                  </div>

                  {/* Clickthrough Rate */}
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-100">Clickthrough Rate</span>
                      <span className="text-2xl font-bold">43,500</span>
                    </div>
                    <div className="w-full bg-blue-500 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>

                  {/* Track Plays */}
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-purple-100">Track Plays</div>
                        <div className="text-2xl font-bold">643</div>
                      </div>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Visits Map */}
                  <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-indigo-100">New York, USA</div>
                        <div className="text-2xl font-bold">960</div>
                        <div className="text-indigo-100 text-sm">Visits</div>
                      </div>
                      <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perfect for every type of creator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re selling products, booking services, or building your brand, SiteSpark helps you convert more visitors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>, 
                title: 'Artists & Designers', 
                description: 'Showcase your portfolio and sell artwork directly' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, 
                title: 'Fitness Coaches', 
                description: 'Book personal training sessions and sell programs' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" /></svg>, 
                title: 'Musicians', 
                description: 'Promote your music and sell concert tickets' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, 
                title: 'Photographers', 
                description: 'Display your best work and book photo shoots' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, 
                title: 'Content Creators', 
                description: 'Monetize your audience with multiple revenue streams' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, 
                title: 'Food Bloggers', 
                description: 'Share recipes and promote cooking classes' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" /></svg>, 
                title: 'Consultants', 
                description: 'Book discovery calls and showcase expertise' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>, 
                title: 'E-commerce', 
                description: 'Drive traffic to your online store and products' 
              }
            ].map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300 group">
                <div className="text-gray-600 mb-4 group-hover:text-blue-600 transition-colors duration-300 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600">Perfect to get started</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Single page site
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic link blocks
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SiteSpark branding
                </li>
              </ul>
              <Link href="/dashboard" className="w-full block text-center py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Get started free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$19</div>
                <p className="text-gray-600">Per month, billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited pages
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All business widgets
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom domain & QR codes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Export & white-label
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Remove branding
                </li>
              </ul>
              <Link href="/dashboard" className="w-full block text-center py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                Start 7-day free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-20 bg-gray-50 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by creators worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how SiteSpark transformed their online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "SiteSpark transformed my Instagram link into a real business. I'm now booking 3x more sessions and my revenue has doubled!",
                author: "Sarah Chen",
                role: "Portrait Photographer",
                avatar: "/api/placeholder/48/48"
              },
              {
                quote: "Finally, a bio link that actually converts. My coaching business has never been better - 40% increase in consultations.",
                author: "Marcus Johnson", 
                role: "Business Coach",
                avatar: "/api/placeholder/48/48"
              },
              {
                quote: "The booking integration is seamless. My clients love how professional everything looks and it's so easy to use.",
                author: "Emma Rodriguez",
                role: "Wedding Planner", 
                avatar: "/api/placeholder/48/48"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-600 to-purple-700 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to upgrade your bio link?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who&apos;ve already transformed their online presence with SiteSpark.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Start building for free
            </Link>
            <Link 
              href="#templates"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore templates
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 bg-gray-900 text-white sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <SiteSparkHorizontal size="md" />
              </div>
              <p className="text-gray-400 max-w-md">
                Transform your bio link into a powerful mini-website that converts visitors into customers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#templates" className="hover:text-white transition-colors">Templates</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2025 SiteSpark. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
