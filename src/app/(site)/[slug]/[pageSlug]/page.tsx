import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { Site, Page, Block } from '@/lib/types';

interface Props {
  params: { slug: string; pageSlug: string };
}

export default async function PagePage({ params }: Props) {
  const { slug, pageSlug } = params;

  // Fetch site
  const { data: site } = await supabase
    .from('sites')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (!site) {
    notFound();
  }

  // Fetch page
  const { data: page } = await supabase
    .from('pages')
    .select('*')
    .eq('site_id', site.id)
    .eq('slug', pageSlug)
    .single();

  if (!page) {
    notFound();
  }

  // Fetch blocks
  const { data: blocks } = await supabase
    .from('blocks')
    .select('*')
    .eq('page_id', page.id)
    .order('order');

  // Fetch all pages for navigation
  const { data: pages } = await supabase
    .from('pages')
    .select('*')
    .eq('site_id', site.id)
    .order('order');

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{site.title || 'Site'}</h1>
            <div className="space-x-4">
              {pages?.map(p => (
                <a key={p.id} href={p.slug === 'home' ? `/${slug}` : `/${slug}/${p.slug}`} className="text-gray-600 hover:text-gray-900">
                  {p.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{page.title}</h1>
        {blocks?.map(block => (
          <div key={block.id} className="mb-8">
            {/* Render block based on type */}
            {block.type === 'text' && <p>{block.content?.text || 'Text block'}</p>}
            {block.type === 'link' && (
              <a href={block.content?.url} className="text-blue-600 hover:underline">
                {block.content?.label || 'Link'}
              </a>
            )}
            {/* Add more block types */}
          </div>
        ))}
      </main>
    </div>
  );
}
