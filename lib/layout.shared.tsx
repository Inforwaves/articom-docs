import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Github, MessageSquare, Zap } from 'lucide-react';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-bold">
          <Image 
            src="/darkArticom.svg" 
            alt="Articom AI" 
            width={120} 
            height={32}
            className="dark:hidden"
          />
          <Image 
            src="/lightArticom.svg" 
            alt="Articom AI" 
            width={120} 
            height={32}
            className="hidden dark:block"
          />
        </span>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        icon: <BookOpen className="w-4 h-4" />,
        active: 'nested-url',
      },
      {
        text: 'API Reference',
        url: '/docs/api-reference',
        icon: <Zap className="w-4 h-4" />,
      },
      {
        text: 'GitHub',
        url: 'https://github.com/Inforwaves/articom-docs',
        icon: <Github className="w-4 h-4" />,
        external: true,
      },
    ],
    githubUrl: 'https://github.com/Inforwaves/articom-docs',
  };
}
