import LogoLightFull from '@/assets/images/logos/harasylogo.png';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar/sidebar';
import { cn } from '@/lib/utils';
import { Bell, ChartColumnBig } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../kokonutui/profile-dropdown';
import { Button } from '../ui/button/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu/navigation-menu';
import { ScrollArea } from '../ui/scroll-area/scroll-area';

type ListItemProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'title' | 'href'> & {
  title: React.ReactNode;
  to: string;
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, to, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={to}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen w-full'>
      <SidebarProvider>
        <SidebarInset>
          <header className='flex h-18 shrink-0 items-center gap-2 border-b border-[#2e2e2e] bg-[#141414] relative z-20'>
            <div className='flex items-center justify-between w-full px-6'>
              <div className='flex items-center gap-12'>
                <img src={LogoLightFull} alt='Logo' className='h-14' />
                <NavigationMenu className='ml-4' viewport={false}>
                  <NavigationMenuList className='gap-4'>
                    <NavigationMenuItem className='bg-transparent'>
                      <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                        <Link to='/Home'>Trang chủ</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='bg-transparent'>
                      <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                        <Link to='/Home'>Thống kê</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='bg-transparent'>
                      <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                        <Link to='/Home'>Phân quyền</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className='flex items-center'>
                {/* <div className='h-6 w-0.5 bg-[#2e2e2e] mr-4'></div> */}
                <div className='flex items-center gap-2 mr-4'>
                  <Button variant='ghost' size='icon'>
                    <ChartColumnBig strokeWidth={1.5} className='size-5' />
                  </Button>
                  <Button variant='ghost' size='icon'>
                    <Bell strokeWidth={1.5} className='size-5' />
                  </Button>
                </div>
                <ProfileDropdown />
              </div>
            </div>
          </header>
          <div className='flex flex-1 overflow-hidden'>
            <ScrollArea className='flex-1 bg-[#1c1c1c]'>
              <main className='p-6'>{children}</main>
            </ScrollArea>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
