'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SiteSparkLogo, SiteSparkIcon } from '@/components/ui';

interface Site {
  id: string;
  title: string;
  subdomain: string;
  template: string;
  published: boolean;
  views: number;
  clicks: number;
  updatedAt: string;
  thumbnail: string;
}

function DashboardContent() {
  const [isSignedIn, setIsSignedIn] = useState(true); // Set to true for demo
  const [activeTab, setActiveTab] = useState('sites');
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);
  const searchParams = useSearchParams();
  const publishedSite = searchParams.get('published');

  useEffect(() => {
    if (publishedSite) {
      setShowPublishSuccess(true);
      setTimeout(() => setShowPublishSuccess(false), 5000);
    }
  }, [publishedSite]);

  // Enhanced mock sites data
  const [sites, setSites] = useState<Site[]>([
    {
      id: '1',
      title: 'Modern Fashion',
      subdomain: 'modernfashion',
      template: 'modern-fashion',
      published: true,
      views: 1247,
      clicks: 89,
      updatedAt: '2 hours ago',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop'
    },
    {
      id: '2', 
      title: 'Alex Rivera Music',
      subdomain: 'alexrivera',
      template: 'music-artist',
      published: true,
      views: 856,
      clicks: 67,
      updatedAt: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Business Coach Sarah',
      subdomain: 'sarahcoach',
      template: 'business-coach',
      published: false,
      views: 0,
      clicks: 0,
      updatedAt: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=200&fit=crop'
    }
  ]);

  const togglePublish = (siteId: string) => {
    setSites(sites.map(site => 
      site.id === siteId 
        ? { ...site, published: !site.published, updatedAt: 'just now' }
        : site
    ));
  };

  const deleteSite = (siteId: string) => {
    if (confirm('Are you sure you want to delete this site? This action cannot be undone.')) {
      setSites(sites.filter(site => site.id !== siteId));
    }
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <SiteSparkIcon size="xl" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to SiteSpark</h1>
              <p className="text-gray-600">Sign in to start building your link in bio</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => setIsSignedIn(true)}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Continue with Google
              </button>
              
              <button 
                onClick={() => setIsSignedIn(true)}
                className="w-full py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Continue with Email
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Banner */}
      {showPublishSuccess && (
        <div className="bg-green-500 text-white text-center py-3 px-4">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>🎉 Your site is live at: <strong>sitespark.co/{publishedSite}</strong></span>
            <a href={`/${publishedSite}`} target="_blank" className="underline hover:no-underline">
              View Site
            </a>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="mr-8">
                <SiteSparkLogo size="md" />
              </Link>
              <nav className="hidden md:flex space-x-8">
                <button
                  onClick={() => setActiveTab('sites')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'sites' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-4' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  My Sites
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'analytics' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-4' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'settings' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-4' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Settings
                </button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/templates"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Create New Site
              </Link>
              <div className="relative">
                <button className="w-8 h-8 bg-gray-300 rounded-full"></button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'sites' && (
          <div>
            {/* Sites Overview */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">My Sites</h1>
                <Link 
                  href="/templates"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create New Site
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">{sites.length}</p>
                      <p className="text-gray-600 text-sm">Total Sites</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">
                        {sites.reduce((total, site) => total + site.views, 0).toLocaleString()}
                      </p>
                      <p className="text-gray-600 text-sm">Total Views</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">
                        {sites.reduce((total, site) => total + site.clicks, 0)}
                      </p>
                      <p className="text-gray-600 text-sm">Total Clicks</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">
                        {sites.length > 0 ? Math.round((sites.reduce((total, site) => total + site.clicks, 0) / sites.reduce((total, site) => total + site.views, 0)) * 100) || 0 : 0}%
                      </p>
                      <p className="text-gray-600 text-sm">Click Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sites Grid */}
            {sites.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No sites yet</h3>
                <p className="text-gray-600 mb-6">Create your first link in bio site in minutes</p>
                <Link 
                  href="/templates"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create Your First Site
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sites.map((site) => (
                  <div key={site.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={site.thumbnail}
                        alt={site.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          site.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {site.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{site.title}</h3>
                          <p className="text-sm text-gray-600">sitespark.co/{site.subdomain}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-900">{site.views.toLocaleString()}</p>
                          <p className="text-xs text-gray-600">Views</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-900">{site.clicks}</p>
                          <p className="text-xs text-gray-600">Clicks</p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 mb-4">Updated {site.updatedAt}</p>

                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/editor/${site.id}/home`}
                          className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center text-sm font-medium"
                        >
                          Edit
                        </Link>
                        
                        {site.published && (
                          <Link
                            href={`/${site.subdomain}`}
                            target="_blank"
                            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                          >
                            View
                          </Link>
                        )}
                        
                        <button
                          onClick={() => togglePublish(site.id)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            site.published
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                        >
                          {site.published ? 'Unpublish' : 'Publish'}
                        </button>
                        
                        <button
                          onClick={() => deleteSite(site.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Analytics Coming Soon</h3>
                <p className="text-gray-600">Get insights into your site performance, visitor behavior, and more.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Subscription</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Free Plan</p>
                    <p className="text-sm text-gray-600">1 site, basic features</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Upgrade to Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

