import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 0,
        banner: (
          <div className="rounded-lg bg-linear-to-r from-primary/10 to-purple-500/10 p-3 text-sm">
            <p className="font-semibold">🎉 New Feature!</p>
            <p className="text-xs text-muted-foreground mt-1">
              Voice agents now support 30+ languages
            </p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
