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
    
    githubUrl: 'https://github.com/Inforwaves/articom-docs',
  };
}
