'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SiteSparkHorizontal } from '@/components/ui';

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: string;
  thumbnail: string;
  colors: string[];
  features: string[];
  isPro?: boolean;
}

const templates: Template[] = [
  {
    id: 'modern-fashion',
    name: 'Modern Fashion',
    category: 'Fashion & Beauty',
    description: 'Sleek design perfect for fashion brands and influencers',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop',
    colors: ['#1f2937', '#6b7280', '#f9fafb'],
    features: ['Product Gallery', 'Shop Links', 'Social Media', 'Contact Form']
  },
  {
    id: 'music-artist',
    name: 'Music Artist',
    category: 'Music & Entertainment',
    description: 'Perfect for musicians, DJs, and music producers',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop',
    colors: ['#7c3aed', '#3b82f6', '#f8fafc'],
    features: ['Music Player', 'Tour Dates', 'Streaming Links', 'Fan Newsletter']
  },
  {
    id: 'business-coach',
    name: 'Business Coach',
    category: 'Business & Consulting',
    description: 'Professional layout for coaches and consultants',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face',
    colors: ['#0ea5e9', '#0d9488', '#f0f9ff'],
    features: ['Booking Calendar', 'Testimonials', 'Services List', 'Free Resources'],
    isPro: true
  },
  {
    id: 'fitness-coach',
    name: 'Fitness Coach',
    category: 'Health & Fitness',
    description: 'Dynamic design for fitness professionals',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&crop=face',
    colors: ['#dc2626', '#ea580c', '#fef2f2'],
    features: ['Workout Plans', 'Progress Tracking', 'Nutrition Guide', 'Community']
  },
  {
    id: 'photographer',
    name: 'Photography Portfolio',
    category: 'Creative & Portfolio',
    description: 'Showcase your photography work professionally',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop',
    colors: ['#374151', '#6b7280', '#ffffff'],
    features: ['Photo Gallery', 'Client Portal', 'Booking System', 'Print Shop']
  },
  {
    id: 'tech-startup',
    name: 'Tech Startup',
    category: 'Technology',
    description: 'Modern design for SaaS and tech companies',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=400&fit=crop',
    colors: ['#4f46e5', '#3b82f6', '#f8fafc'],
    features: ['Product Demo', 'Feature List', 'Pricing Plans', 'Contact Sales'],
    isPro: true
  },
  {
    id: 'food-blogger',
    name: 'Food Blogger',
    category: 'Food & Lifestyle',
    description: 'Appetizing design for food bloggers and chefs',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-9dcb94e6b02a?w=300&h=400&fit=crop',
    colors: ['#f59e0b', '#ef4444', '#fffbeb'],
    features: ['Recipe Cards', 'Cooking Videos', 'Restaurant Links', 'Newsletter']
  },
  {
    id: 'content-creator',
    name: 'Content Creator',
    category: 'Social Media',
    description: 'Versatile template for influencers and creators',
    preview: '/api/placeholder/300/400',
    thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616c0d12c3c?w=300&h=400&fit=crop&crop=face',
    colors: ['#ec4899', '#8b5cf6', '#fdf2f8'],
    features: ['Social Feed', 'Brand Partnerships', 'Media Kit', 'Analytics']
  }
];

const categories = [
  'All Templates',
  'Fashion & Beauty',
  'Music & Entertainment', 
  'Business & Consulting',
  'Health & Fitness',
  'Creative & Portfolio',
  'Technology',
  'Food & Lifestyle',
  'Social Media'
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Templates');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = selectedCategory === 'All Templates' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const handleUseTemplate = (template: Template) => {
    // Navigate to editor with template
    window.location.href = `/editor/new?template=${template.id}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <SiteSparkHorizontal size="md" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                Dashboard
              </Link>
              <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                My Sites
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Template</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional templates designed to convert visitors into customers. Customize colors, content, and layout to match your brand.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Pro Badge */}
              {template.isPro && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    PRO
                  </span>
                </div>
              )}

              {/* Template Preview */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={template.thumbnail} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedTemplate(template)}
                    className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-50"
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{template.name}</h3>
                  <div className="flex space-x-1">
                    {template.colors.map((color, index) => (
                      <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                  {template.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{template.features.length - 2} more
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => handleUseTemplate(template)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Template Preview Modal */}
        {selectedTemplate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex">
                {/* Preview */}
                <div className="flex-1 bg-gray-100 p-8">
                  <div className="bg-white rounded-xl shadow-lg max-w-sm mx-auto">
                    <img 
                      src={selectedTemplate.thumbnail} 
                      alt={selectedTemplate.name}
                      className="w-full h-96 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900">{selectedTemplate.name}</h4>
                      <p className="text-sm text-gray-600">{selectedTemplate.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Details */}
                <div className="w-80 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedTemplate.name}</h3>
                    <button 
                      onClick={() => setSelectedTemplate(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{selectedTemplate.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features Included:</h4>
                    <ul className="space-y-2">
                      {selectedTemplate.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Color Palette:</h4>
                    <div className="flex space-x-2">
                      {selectedTemplate.colors.map((color, index) => (
                        <div key={index} className="w-8 h-8 rounded-lg shadow-sm border border-gray-200" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleUseTemplate(selectedTemplate)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
                  >
                    Use This Template
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
