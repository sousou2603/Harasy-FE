'use client';

import { type LucideIcon, LayoutDashboard, Ticket, UserCircle2 } from 'lucide-react';

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar/sidebar';
import { Link, useLocation } from 'react-router-dom';

type SimpleItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

export function NavSimple({ items }: { items?: SimpleItem[] }) {
  const location = useLocation();

  const navItems: SimpleItem[] = items || [
    { title: 'Tổng quan', url: '/events/overview', icon: LayoutDashboard },
    { title: 'Người dùng', url: '/events/users', icon: UserCircle2 },
    { title: 'Vé', url: '/events/ticket-manager', icon: Ticket },
  ];

  return (
    <SidebarGroup>
      <SidebarMenu>
        {navItems.map((item) => {
          const isActive = location.pathname === item.url;
          const Icon = item.icon;
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                <Link to={item.url}>
                  {Icon && <Icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default NavSimple;
