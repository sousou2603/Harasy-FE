import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card/card';
import { Input } from '@/components/ui/input/input';
import { branchesData, type Branch } from '@/data/branches';
import { Clock, Mail, MapPin, Phone, Plus, Search, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePrivate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [branches] = useState<Branch[]>(branchesData);
  const navigate = useNavigate();

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Hoạt động';
      case 'maintenance':
        return 'Bảo trì';
      case 'closed':
        return 'Đóng cửa';
      default:
        return 'Không xác định';
    }
  };

  const handleCardClick = (branchId: string) => {
    navigate(`/branch/${branchId}`);
  };

  return (
    <div className='container mx-auto py-5 space-y-6'>
      {/* Header */}
      <div className='space-y-4'>
        <h2 className='text-3xl font-bold text-white'>Chi Nhánh</h2>
        <div className='flex items-center justify-between space-x-4'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <Input
              placeholder='Tìm kiếm chi nhánh theo tên, địa chỉ hoặc thành phố...'
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className='pl-10 w-[450px]'
            />
          </div>
          <Button
            className='bg-[#FB8500] hover:bg-[#E67700] text-white'
            onClick={() => {
              console.log('Create event clicked');
            }}
          >
            <Plus className='w-4 h-4 mr-2' />
            Tạo chi nhánh
          </Button>
        </div>
      </div>

      {/* Branches Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredBranches.map((branch) => (
          <Card
            key={branch.id}
            className='overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-102 hover:border-[#FB8500] cursor-pointer'
            onClick={() => handleCardClick(branch.id)}
          >
            <div className='relative'>
              <img
                src={branch.image}
                alt={branch.name}
                className='w-full h-48 object-cover'
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/HRS.png';
                }}
              />
              <Badge className={`absolute top-3 right-3 ${getStatusColor(branch.status)}`}>
                {getStatusText(branch.status)}
              </Badge>
            </div>

            <CardHeader>
              <div className='flex items-start justify-between'>
                <div>
                  <CardTitle className='text-xl font-semibold'>{branch.name}</CardTitle>
                  <CardDescription className='mt-1'>{branch.description}</CardDescription>
                </div>
                <div className='flex items-center space-x-1'>
                  <Star className='w-4 h-4 text-yellow-400 fill-current' />
                  <span className='text-sm font-medium'>{branch.rating}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className='space-y-4 pb-6'>
              {/* Address */}
              <div className='flex items-start space-x-2'>
                <MapPin className='w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-sm font-medium'>{branch.address}</p>
                  <p className='text-sm text-muted-foreground'>{branch.city}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <Phone className='w-4 h-4 text-gray-400' />
                  <span className='text-sm'>{branch.phone}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='w-4 h-4 text-gray-400' />
                  <span className='text-sm'>{branch.email}</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className='flex items-start space-x-2'>
                <Clock className='w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0' />
                <div>
                  <p className='text-sm font-medium'>Giờ mở cửa</p>
                  <p className='text-sm text-muted-foreground'>Thứ 2-6: {branch.openingHours.weekdays}</p>
                  <p className='text-sm text-muted-foreground'>Thứ 7-CN: {branch.openingHours.weekends}</p>
                </div>
              </div>

              {/* Features */}
              {/* <div>
                <p className='text-sm font-medium mb-2'>Tiện ích</p>
                <div className='flex flex-wrap gap-1'>
                  {branch.features.map((feature, index) => (
                    <Badge key={index} variant='secondary' className='text-xs'>
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredBranches.length === 0 && (
        <div className='text-center py-12'>
          <div className='text-gray-400 mb-4'>
            <Search className='w-12 h-12 mx-auto' />
          </div>
          <h3 className='text-lg font-medium mb-2'>Không tìm thấy chi nhánh</h3>
          <p className='text-gray-600'>Hãy thử tìm kiếm với từ khóa khác</p>
        </div>
      )}
    </div>
  );
};

export default HomePrivate;
