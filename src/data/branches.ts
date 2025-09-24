export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  openingHours: {
    weekdays: string;
    weekends: string;
  };
  features: string[];
  rating: number;
  status: 'active' | 'maintenance' | 'closed';
}

export const branchesData: Branch[] = [
  {
    id: '1',
    name: 'Harasy Hồ Chí Minh',
    address: '123 Nguyễn Huệ, Quận 1',
    city: 'TP. Hồ Chí Minh',
    phone: '028 1234 5678',
    email: 'hcm@harasy.com',
    image: '/src/assets/images/HCM.png',
    description: 'Chi nhánh chính tại trung tâm thành phố Hồ Chí Minh, phục vụ các món ăn cao cấp.',
    openingHours: {
      weekdays: '10:00 - 22:00',
      weekends: '10:00 - 23:00',
    },
    features: ['Parking', 'WiFi', 'Air Conditioning', 'Private Rooms'],
    rating: 4.8,
    status: 'active',
  },
  {
    id: '2',
    name: 'Harasy Hà Nội',
    address: '456 Lê Lợi, Hoàn Kiếm',
    city: 'Hà Nội',
    phone: '024 9876 5432',
    email: 'hanoi@harasy.com',
    image: '/src/assets/images/HRS.png',
    description: 'Chi nhánh tại thủ đô Hà Nội với phong cách phục vụ truyền thống và hiện đại.',
    openingHours: {
      weekdays: '10:00 - 22:00',
      weekends: '10:00 - 23:00',
    },
    features: ['Parking', 'WiFi', 'Air Conditioning', 'Garden View'],
    rating: 4.7,
    status: 'active',
  },
  {
    id: '3',
    name: 'Harasy Đà Nẵng',
    address: '789 Bạch Đằng, Hải Châu',
    city: 'Đà Nẵng',
    phone: '0236 5555 7777',
    email: 'danang@harasy.com',
    image: '/src/assets/images/HRS2.png',
    description: 'Chi nhánh ven biển với view đẹp và không gian thoáng mát.',
    openingHours: {
      weekdays: '10:00 - 22:00',
      weekends: '10:00 - 23:00',
    },
    features: ['Beach View', 'WiFi', 'Air Conditioning', 'Outdoor Seating'],
    rating: 4.9,
    status: 'active',
  },
  {
    id: '4',
    name: 'Harasy Nha Trang',
    address: '321 Trần Phú, Lộc Thọ',
    city: 'Nha Trang',
    phone: '0258 1111 2222',
    email: 'nhatrang@harasy.com',
    image: '/src/assets/images/HRS.jpg',
    description: 'Chi nhánh resort với không gian nghỉ dưỡng và ẩm thực cao cấp.',
    openingHours: {
      weekdays: '10:00 - 22:00',
      weekends: '10:00 - 23:00',
    },
    features: ['Resort Style', 'WiFi', 'Air Conditioning', 'Pool View'],
    rating: 4.6,
    status: 'active',
  },
  {
    id: '5',
    name: 'Harasy Cần Thơ',
    address: '654 Nguyễn Văn Cừ, Ninh Kiều',
    city: 'Cần Thơ',
    phone: '0292 3333 4444',
    email: 'cantho@harasy.com',
    image: '/src/assets/images/HCM.png',
    description: 'Chi nhánh tại miền Tây với đặc sản địa phương và không gian ấm cúng.',
    openingHours: {
      weekdays: '10:00 - 22:00',
      weekends: '10:00 - 23:00',
    },
    features: ['Local Cuisine', 'WiFi', 'Air Conditioning', 'Traditional Decor'],
    rating: 4.5,
    status: 'maintenance',
  },
  {
    id: '6',
    name: 'Harasy Huế',
    address: '987 Lê Lợi, Thành phố Huế',
    city: 'Huế',
    phone: '0234 7777 8888',
    email: 'hue@harasy.com',
    image: '/src/assets/images/HRS.png',
    description: 'Chi nhánh tại cố đô với phong cách cổ điển và ẩm thực cung đình.',
    openingHours: {
      weekdays: '10:00 - 22:00',
      weekends: '10:00 - 23:00',
    },
    features: ['Royal Cuisine', 'WiFi', 'Air Conditioning', 'Historic Setting'],
    rating: 4.7,
    status: 'active',
  },
];
