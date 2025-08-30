'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SiteSparkHorizontal } from '@/components/ui';

interface ProfileContent {
  avatar: string;
  name: string;
  bio: string;
  verified?: boolean;
}

interface LinksContent {
  links: Array<{
    title: string;
    url: string;
    icon?: string;
    style?: string;
  }>;
}

interface SocialContent {
  platforms: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

interface TextContent {
  text: string;
  align?: 'left' | 'center' | 'right';
}

interface ImageContent {
  src: string;
  alt: string;
  caption?: string;
}

interface VideoContent {
  src: string;
  title?: string;
  thumbnail?: string;
}

interface ContactContent {
  email?: string;
  phone?: string;
  address?: string;
}

interface GalleryContent {
  images: string[];
}

type BlockContent = ProfileContent | LinksContent | SocialContent | TextContent | ImageContent | VideoContent | ContactContent | GalleryContent;

interface Block {
  id: string;
  type: 'profile' | 'links' | 'social' | 'text' | 'image' | 'video' | 'contact' | 'gallery';
  content: BlockContent;
  settings: {
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: number;
    padding?: number;
    marginBottom?: number;
  };
  order: number;
}

interface SiteData {
  id: string;
  title: string;
  description: string;
  subdomain: string;
  template: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
  };
  blocks: Block[];
}

const templates = {
  'modern-fashion': {
    name: 'Modern Fashion',
    theme: {
      primaryColor: '#1f2937',
      secondaryColor: '#6b7280',
      backgroundColor: '#f9fafb',
      textColor: '#111827',
      fontFamily: 'Inter'
    },
    blocks: [
      {
        id: '1',
        type: 'profile' as const,
        content: {
          avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop&crop=face',
          name: 'Modern Fashion',
          bio: 'Discover the latest fashion trends and timeless pieces for every occasion.',
          verified: true
        },
        settings: { marginBottom: 24 },
        order: 1
      },
      {
        id: '2',
        type: 'links' as const,
        content: {
          links: [
            { title: 'New Collection', url: '#', style: 'primary', icon: '✨' },
            { title: 'Shop Now', url: '#', style: 'secondary', icon: '🛍️' },
            { title: 'Size Guide', url: '#', style: 'outline', icon: '📏' },
            { title: 'Customer Reviews', url: '#', style: 'outline', icon: '⭐' }
          ]
        },
        settings: { marginBottom: 24 },
        order: 2
      },
      {
        id: '3',
        type: 'gallery' as const,
        content: {
          images: [
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop'
          ]
        },
        settings: { marginBottom: 24 },
        order: 3
      },
      {
        id: '4',
        type: 'social' as const,
        content: {
          platforms: [
            { name: 'Instagram', url: '#', icon: 'instagram' },
            { name: 'TikTok', url: '#', icon: 'tiktok' },
            { name: 'Facebook', url: '#', icon: 'facebook' }
          ]
        },
        settings: { marginBottom: 24 },
        order: 4
      }
    ]
  },
  'music-artist': {
    name: 'Music Artist',
    theme: {
      primaryColor: '#7c3aed',
      secondaryColor: '#3b82f6',
      backgroundColor: '#f8fafc',
      textColor: '#1e293b',
      fontFamily: 'Inter'
    },
    blocks: [
      {
        id: '1',
        type: 'profile' as const,
        content: {
          avatar: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=face',
          name: 'Alex Rivera',
          bio: 'Singer-songwriter creating music that moves the soul. New album out now!',
          verified: true
        },
        settings: { marginBottom: 24 },
        order: 1
      },
      {
        id: '2',
        type: 'links' as const,
        content: {
          links: [
            { title: 'Latest Album', url: '#', style: 'primary', icon: '🎵' },
            { title: 'Concert Tickets', url: '#', style: 'secondary', icon: '🎤' },
            { title: 'Spotify', url: '#', style: 'outline', icon: '🎧' },
            { title: 'YouTube Music', url: '#', style: 'outline', icon: '📺' }
          ]
        },
        settings: { marginBottom: 24 },
        order: 2
      }
    ]
  },
  'business-coach': {
    name: 'Business Coach',
    theme: {
      primaryColor: '#0ea5e9',
      secondaryColor: '#0d9488',
      backgroundColor: '#f0f9ff',
      textColor: '#0c4a6e',
      fontFamily: 'Inter'
    },
    blocks: [
      {
        id: '1',
        type: 'profile' as const,
        content: {
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
          name: 'Sarah Johnson',
          bio: 'Transform your business with proven strategies. Book a free consultation today!',
          verified: true
        },
        settings: { marginBottom: 24 },
        order: 1
      },
      {
        id: '2',
        type: 'links' as const,
        content: {
          links: [
            { title: 'Book Consultation', url: '#', style: 'primary', icon: '📅' },
            { title: 'Free Resources', url: '#', style: 'secondary', icon: '📚' },
            { title: 'Success Stories', url: '#', style: 'outline', icon: '🌟' },
            { title: 'LinkedIn', url: '#', style: 'outline', icon: '💼' }
          ]
        },
        settings: { marginBottom: 24 },
        order: 2
      }
    ]
  }
};

function NewEditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template') || 'modern-fashion';
  
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [subdomain, setSubdomain] = useState('');

  useEffect(() => {
    const template = templates[templateId as keyof typeof templates];
    if (template) {
      setSiteData({
        id: 'new',
        title: template.name,
        description: `My ${template.name} Link in Bio`,
        subdomain: '',
        template: templateId,
        theme: template.theme,
        blocks: template.blocks
      });
      setSubdomain(template.name.toLowerCase().replace(/\s+/g, ''));
    }
  }, [templateId]);

  const addBlock = (type: Block['type']) => {
    if (!siteData) return;
    
    const newBlock: Block = {
      id: Date.now().toString(),
      type,
      content: getDefaultContent(type),
      settings: { marginBottom: 24 },
      order: siteData.blocks.length + 1
    };
    
    setSiteData({
      ...siteData,
      blocks: [...siteData.blocks, newBlock]
    });
  };

  const deleteBlock = (blockId: string) => {
    if (!siteData) return;
    
    setSiteData({
      ...siteData,
      blocks: siteData.blocks.filter(block => block.id !== blockId)
    });
  };

  const getDefaultContent = (type: Block['type']) => {
    switch (type) {
      case 'links':
        return { links: [{ title: 'New Link', url: '#', style: 'primary', icon: '🔗' }] };
      case 'text':
        return { text: 'Add your text here...', align: 'center' };
      case 'social':
        return { platforms: [] };
      case 'contact':
        return { email: '', phone: '', location: '' };
      case 'gallery':
        return { images: [] };
      default:
        return {};
    }
  };

  const saveSite = async () => {
    if (!siteData || !subdomain.trim()) {
      alert('Please enter a subdomain');
      return;
    }

    setIsSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to the live site
      const finalSubdomain = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '');
      router.push(`/dashboard?published=${finalSubdomain}`);
    } catch (error) {
      console.error('Error saving site:', error);
      alert('Error saving site. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!siteData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading template...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Editor Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <SiteSparkHorizontal size="sm" />
            <button
              onClick={() => router.back()}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Title</label>
              <input
                type="text"
                value={siteData.title}
                onChange={(e) => setSiteData({ ...siteData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Link</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  sitespark.co/
                </span>
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your-name"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blocks List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Page Blocks</h3>
            
            {siteData.blocks.map((block) => (
              <div
                key={block.id}
                onClick={() => setSelectedBlock(block.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedBlock === block.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{getBlockIcon(block.type)}</span>
                    <span className="text-sm font-medium capitalize">{block.type}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBlock(block.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            
            {/* Add Block Button */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Add Block</h4>
              <div className="grid grid-cols-2 gap-2">
                {['links', 'text', 'social', 'gallery', 'contact'].map((type) => (
                  <button
                    key={type}
                    onClick={() => addBlock(type as Block['type'])}
                    className="p-2 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-lg mb-1">{getBlockIcon(type as Block['type'])}</div>
                    <div className="text-xs text-gray-600 capitalize">{type}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {isPreviewMode ? 'Edit Mode' : 'Preview'}
          </button>
          
          <button
            onClick={saveSite}
            disabled={isSaving}
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg disabled:opacity-50 transition-all"
          >
            {isSaving ? 'Publishing...' : 'Publish Site'}
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
            <SitePreview siteData={siteData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewEditor() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <NewEditorContent />
    </Suspense>
  );
}

function getBlockIcon(type: Block['type']) {
  const icons = {
    profile: '👤',
    links: '🔗',
    social: '📱',
    text: '📝',
    image: '🖼️',
    video: '🎥',
    contact: '📞',
    gallery: '🖼️'
  };
  return icons[type] || '📄';
}

function SitePreview({ siteData }: { siteData: SiteData }) {
  return (
    <div className="space-y-6">
      {siteData.blocks.map((block) => {
        switch (block.type) {
          case 'profile':
            return (
              <div key={block.id} className="text-center">
                <img
                  src={(block.content as ProfileContent).avatar}
                  alt={(block.content as ProfileContent).name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h1 className="text-xl font-bold text-gray-900 mb-1">
                  {(block.content as ProfileContent).name}
                  {(block.content as ProfileContent).verified && <span className="text-blue-500 ml-1">✓</span>}
                </h1>
                <p className="text-gray-600 text-sm">{(block.content as ProfileContent).bio}</p>
              </div>
            );
            
          case 'links':
            return (
              <div key={block.id} className="space-y-3">
                {(block.content as LinksContent).links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`block w-full p-3 rounded-xl text-center font-medium transition-all ${
                      link.style === 'primary' 
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : link.style === 'secondary'
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'border-2 border-gray-200 text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.title}
                  </a>
                ))}
              </div>
            );
            
          case 'social':
            return (
              <div key={block.id} className="flex justify-center space-x-4">
                {(block.content as SocialContent).platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-lg">{getSocialIcon(platform.name)}</span>
                  </a>
                ))}
              </div>
            );
            
          case 'gallery':
            return (
              <div key={block.id} className="grid grid-cols-3 gap-2">
                {(block.content as GalleryContent).images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            );
            
          default:
            return <div key={block.id} className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
              {block.type} block
            </div>;
        }
      })}
    </div>
  );
}

function getSocialIcon(platform: string) {
  const icons: { [key: string]: string } = {
    instagram: '📷',
    tiktok: '🎵',
    facebook: '👍',
    twitter: '🐦',
    linkedin: '💼',
    youtube: '📺'
  };
  return icons[platform.toLowerCase()] || '🔗';
}
