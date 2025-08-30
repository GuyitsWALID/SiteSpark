import { supabase } from '@/lib/supabase';
import { getUser } from '@/lib/supabase';

interface Props {
  params: Promise<{ siteId: string; pageId: string }>;
}

export default async function Editor({ params }: Props) {
  const { siteId, pageId } = await params;

  const user = await getUser();

  if (!user) {
    return <div>Please sign in</div>;
  }

  // Fetch site
  const { data: site } = await supabase
    .from('sites')
    .select('*')
    .eq('id', siteId)
    .eq('user_id', user.id)
    .single();

  if (!site) {
    return <div>Site not found</div>;
  }

  // Fetch pages
  const { data: pages } = await supabase
    .from('pages')
    .select('*')
    .eq('site_id', siteId)
    .order('order');

  // Fetch current page
  const { data: currentPage } = await supabase
    .from('pages')
    .select('*')
    .eq('id', pageId)
    .single();

  // Fetch blocks
  const { data: blocks } = await supabase
    .from('blocks')
    .select('*')
    .eq('page_id', pageId)
    .order('order');

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Left Sidebar - Site Structure */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <div className="space-y-2">
            {pages?.map(page => (
              <a
                key={page.id}
                href={`/editor/${siteId}/${page.id}`}
                className={`block p-2 rounded ${page.id === pageId ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              >
                {page.title}
              </a>
            ))}
            <button className="w-full p-2 text-left text-blue-600 hover:bg-gray-100 rounded">
              + Add Page
            </button>
          </div>
        </div>
      </div>

      {/* Center - Preview */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">{site.title || 'Untitled Site'}</h1>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded">Preview</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Publish</button>
          </div>
        </header>

        <div className="flex-1 p-8 bg-white m-4 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-8">{currentPage?.title}</h1>
          {blocks?.map(block => (
            <div key={block.id} className="mb-8 p-4 border rounded">
              {/* Render block */}
              {block.type === 'text' && <p>{block.content?.text || 'Text block'}</p>}
              {block.type === 'link' && (
                <a href={block.content?.url} className="text-blue-600 hover:underline">
                  {block.content?.label || 'Link'}
                </a>
              )}
              {/* Add edit controls */}
              <div className="mt-2 space-x-2">
                <button className="text-sm text-gray-500">Edit</button>
                <button className="text-sm text-gray-500">Delete</button>
              </div>
            </div>
          ))}
          <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded text-gray-500 hover:text-gray-700">
            + Add Block
          </button>
        </div>
      </div>

      {/* Right Inspector */}
      <div className="w-80 bg-white border-l">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Inspector</h2>
          <p className="text-gray-600">Select a block to edit its properties.</p>
        </div>
      </div>
    </div>
  );
}
