import { Sidebar, SidebarContent, SidebarTrigger, useSidebar } from '@/components/ui/sidebar/sidebar';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import NavSimple from '../ui/sidebar/nav/nav-simple';

interface BranchSidebarProps {
  className?: string;
}

export function BranchSidebar({ className }: BranchSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  // Centralized state management for all navigation components
  const [activeMenu, setActiveMenu] = useState<string | null>('Tổng quan');

  const handleOpenChange = (title: string, isOpen: boolean) => {
    setActiveMenu(isOpen ? title : null);
  };

  return (
    <Sidebar collapsible={'offcanvas'} variant='sidebar' className={cn('top-[70px] h-[calc(100svh-70px)]', className)}>
      <div className='absolute z-50 -right-4 top-[2.5%]'>
        <SidebarTrigger
          className={cn(
            'hover:bg-transparent p-0 h-8 w-4 flex items-center justify-center',
            'border-t border-r border-b rounded-l-none border-[#2e2e2e]'
          )}
        >
          {isCollapsed ? <ChevronRight className='h-4 w-4' /> : <ChevronLeft className='h-4 w-4' />}
        </SidebarTrigger>
      </div>
      <SidebarContent
        className='scroll-smooth md:scroll-auto overflow-y-auto
  [&::-webkit-scrollbar]:w-0.5
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 gap-0 pt-2'
      >
        <NavSimple />
      </SidebarContent>
    </Sidebar>
  );
}
