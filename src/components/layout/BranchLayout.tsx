import LogoLightFull from '@/assets/images/logos/harasylogo.png';
import { SidebarProvider } from '@/components/ui/sidebar/sidebar';
import { branchesData } from '@/data/branches';
import { Bell } from 'lucide-react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ProfileDropdown from '../kokonutui/profile-dropdown';
import { Button } from '../ui/button/button';
import { ScrollArea } from '../ui/scroll-area/scroll-area';
import { BranchSidebar } from './BranchSidebar';

export default function BranchLayout() {
  const { id } = useParams<{ id: string }>();
  const branch = branchesData.find((b) => b.id === id);

  return (
    <SidebarProvider>
      <div className='flex flex-col h-screen w-full'>
        {/* Header */}
        <header className='flex h-18 shrink-0 items-center gap-2 border-b border-[#2e2e2e] bg-[#141414] relative z-20'>
          <div className='flex items-center justify-between w-full px-6'>
            <div className='flex items-center gap-6'>
              <Link to='/home'>
                <img src={LogoLightFull} alt='Logo' className='h-14 cursor-pointer' />
              </Link>
              <div className='flex flex-col ml-4'>
                <div className='flex items-center gap-3'>
                  <h2 className='text-sm font-bold'>{branch?.name || 'Chi nhánh không tìm thấy'}</h2>
                </div>
                <span className='text-xs text-muted-foreground'>{branch?.address || 'Địa chỉ không xác định'}</span>
              </div>
            </div>
            <div className='flex items-center'>
              {/* {eventStatus === 'DRAFT' ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={'default'}
                      size={'sm'}
                      className='text-white text-sm bg-red-600 hover:bg-red-700 mr-6'
                    >
                      Thu hồi
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Xác nhận thu hồi chi nhánh?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Sau khi thu hồi, chi nhánh sẽ không còn xuất hiện trên trang chủ. Bạn có chắc không?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Huỷ</AlertDialogCancel>
                      <AlertDialogAction>Công bố</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Badge className='text-white bg-green-500 hover:bg-green-500 font-medium mr-6 pointer-events-none'>
                  Đã thu hồi
                </Badge>
              )} */}
              {/* <div className='h-6 w-0.5 bg-[#2e2e2e] mr-4'></div> */}
              <div className='flex items-center gap-2 mr-4'>
                <Button variant='ghost' size='icon'>
                  <Bell strokeWidth={1.5} className='size-5' />
                </Button>
              </div>
              <ProfileDropdown />
            </div>
          </div>
        </header>

        {/* Content area */}
        <div className='flex flex-1 overflow-hidden'>
          <BranchSidebar className='border-r border-[#2e2e2e]' />
          <ScrollArea className='flex-1 bg-[#1c1c1c]'>
            <main className='p-6'>
              <Outlet />
            </main>
          </ScrollArea>
        </div>
      </div>
    </SidebarProvider>
  );
}
