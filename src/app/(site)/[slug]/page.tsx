import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

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

// Mock data - in production this would come from database
const mockSites: { [key: string]: SiteData } = {
  'modernfashion': {
    id: '1',
    title: 'Modern Fashion',
    description: 'Discover the latest fashion trends',
    subdomain: 'modernfashion',
    template: 'modern-fashion',
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
        type: 'profile',
        content: {
          avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop&crop=face',
          name: 'Modern Fashion',
          bio: 'Discover the latest fashion trends and timeless pieces for every occasion. ✨',
          verified: true
        },
        settings: { marginBottom: 32 },
        order: 1
      },
      {
        id: '2',
        type: 'links',
        content: {
          links: [
            { title: '✨ New Collection', url: 'https://example.com/collection', style: 'primary' },
            { title: '🛍️ Shop Now', url: 'https://example.com/shop', style: 'secondary' },
            { title: '📏 Size Guide', url: 'https://example.com/size-guide', style: 'outline' },
            { title: '⭐ Customer Reviews', url: 'https://example.com/reviews', style: 'outline' }
          ]
        },
        settings: { marginBottom: 32 },
        order: 2
      },
      {
        id: '3',
        type: 'gallery',
        content: {
          images: [
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop',
            'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop'
          ]
        },
        settings: { marginBottom: 32 },
        order: 3
      },
      {
        id: '4',
        type: 'social',
        content: {
          platforms: [
            { name: 'Instagram', url: 'https://instagram.com/modernfashion', icon: 'instagram' },
            { name: 'TikTok', url: 'https://tiktok.com/@modernfashion', icon: 'tiktok' },
            { name: 'Facebook', url: 'https://facebook.com/modernfashion', icon: 'facebook' },
            { name: 'Pinterest', url: 'https://pinterest.com/modernfashion', icon: 'pinterest' }
          ]
        },
        settings: { marginBottom: 32 },
        order: 4
      },
      {
        id: '5',
        type: 'text',
        content: {
          text: 'Follow us for daily style inspiration and be the first to know about exclusive deals! 💝',
          align: 'center'
        },
        settings: { marginBottom: 16 },
        order: 5
      }
    ]
  },
  'alexrivera': {
    id: '2',
    title: 'Alex Rivera',
    description: 'Singer-songwriter',
    subdomain: 'alexrivera',
    template: 'music-artist',
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
        type: 'profile',
        content: {
          avatar: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=face',
          name: 'Alex Rivera',
          bio: 'Singer-songwriter creating music that moves the soul. New album "Midnight Dreams" out now! 🎵',
          verified: true
        },
        settings: { marginBottom: 32 },
        order: 1
      },
      {
        id: '2',
        type: 'links',
        content: {
          links: [
            { title: '🎵 Latest Album - Midnight Dreams', url: 'https://spotify.com/album/123', style: 'primary' },
            { title: '🎤 Book Concert Tickets', url: 'https://ticketmaster.com/alex-rivera', style: 'secondary' },
            { title: '🎧 Listen on Spotify', url: 'https://spotify.com/alexrivera', style: 'outline' },
            { title: '📺 Watch on YouTube', url: 'https://youtube.com/alexrivera', style: 'outline' },
            { title: '📱 TikTok', url: 'https://tiktok.com/@alexrivera', style: 'outline' }
          ]
        },
        settings: { marginBottom: 32 },
        order: 2
      },
      {
        id: '3',
        type: 'social',
        content: {
          platforms: [
            { name: 'Spotify', url: 'https://spotify.com/alexrivera', icon: 'spotify' },
            { name: 'Instagram', url: 'https://instagram.com/alexrivera', icon: 'instagram' },
            { name: 'YouTube', url: 'https://youtube.com/alexrivera', icon: 'youtube' },
            { name: 'TikTok', url: 'https://tiktok.com/@alexrivera', icon: 'tiktok' }
          ]
        },
        settings: { marginBottom: 32 },
        order: 3
      }
    ]
  }
};

export default async function SitePage({ params }: Props) {
  const { slug } = await params;

  // In production, fetch from database
  const site = mockSites[slug];

  if (!site) {
    notFound();
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        backgroundColor: site.theme.backgroundColor,
        fontFamily: site.theme.fontFamily
      }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <SiteRenderer site={site} />
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6">
          <a 
            href="https://sitespark.co" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Made with SiteSpark
          </a>
        </div>
      </div>
    </div>
  );
}

function SiteRenderer({ site }: { site: SiteData }) {
  return (
    <div className="space-y-8">
      {site.blocks.map((block) => {
        const marginBottom = block.settings.marginBottom || 24;
        
        switch (block.type) {
          case 'profile':
            return (
              <div key={block.id} className="text-center" style={{ marginBottom }}>
                <div className="relative inline-block mb-4">
                  <img
                    src={(block.content as ProfileContent).avatar}
                    alt={(block.content as ProfileContent).name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100"
                  />
                  {(block.content as ProfileContent).verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <h1 
                  className="text-2xl font-bold mb-2"
                  style={{ color: site.theme.textColor }}
                >
                  {(block.content as ProfileContent).name}
                </h1>
                <p className="text-gray-600 leading-relaxed">{(block.content as ProfileContent).bio}</p>
              </div>
            );
            
          case 'links':
            return (
              <div key={block.id} className="space-y-4" style={{ marginBottom }}>
                {(block.content as LinksContent).links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full p-4 rounded-2xl text-center font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                      link.style === 'primary' 
                        ? 'text-white shadow-md'
                        : link.style === 'secondary'
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'border-2 border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    style={link.style === 'primary' ? {
                      background: `linear-gradient(135deg, ${site.theme.primaryColor}, ${site.theme.secondaryColor})`
                    } : {}}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            );
            
          case 'social':
            return (
              <div key={block.id} className="flex justify-center space-x-4" style={{ marginBottom }}>
                {(block.content as SocialContent).platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-110"
                    title={platform.name}
                  >
                    {getSocialIcon(platform.icon)}
                  </a>
                ))}
              </div>
            );
            
          case 'gallery':
            return (
              <div key={block.id} className="grid grid-cols-2 gap-3" style={{ marginBottom }}>
                {(block.content as GalleryContent).images.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            );
            
          case 'text':
            return (
              <div 
                key={block.id} 
                className={`text-${(block.content as TextContent).align || 'center'}`}
                style={{ marginBottom }}
              >
                <p className="text-gray-600 leading-relaxed">{(block.content as TextContent).text}</p>
              </div>
            );
            
          default:
            return null;
        }
      })}
    </div>
  );
}

function getSocialIcon(platform: string) {
  switch (platform) {
    case 'instagram':
      return (
        <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'tiktok':
      return (
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'spotify':
      return (
        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'pinterest':
      return (
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
  }
}
