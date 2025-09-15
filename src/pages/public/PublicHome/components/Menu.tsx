import { ArrowRight, Leaf, Star } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Appetizers',
      items: [
        {
          name: 'Oysters Rockefeller',
          description: 'Fresh Blue Point oysters with creamed spinach and Pernod',
          price: '$18',
          signature: true,
        },
        {
          name: 'Foie Gras Terrine',
          description: 'House-made terrine with fig compote and brioche toast',
          price: '$28',
          vegetarian: false,
        },
      ],
    },
    {
      title: 'Main Courses',
      items: [
        {
          name: 'Wagyu Beef Tenderloin',
          description: 'A5 Japanese Wagyu with truffle mashed potatoes and seasonal vegetables',
          price: '$85',
          signature: true,
        },
        {
          name: 'Mediterranean Sea Bass',
          description: 'Pan-seared with olive tapenade and roasted tomato coulis',
          price: '$42',
          vegetarian: false,
        },
      ],
    },
    {
      title: 'Desserts',
      items: [
        {
          name: 'Chocolate Soufflé',
          description: 'Dark chocolate soufflé with vanilla bean ice cream',
          price: '$16',
          signature: true,
        },
        {
          name: 'Seasonal Fruit Tart',
          description: "Pastry cream tart with chef's selection of seasonal fruits",
          price: '$14',
          vegetarian: true,
        },
      ],
    },
  ];

  return (
    <section id='menu' className='py-20 bg-gradient-to-b from-black to-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-light text-white mb-4'>
            Our <span className='text-[#FB8500]'>Menu</span>
          </h2>
          <div className='w-16 h-1 bg-[#FB8500] mx-auto mb-6'></div>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            A carefully curated selection of our signature dishes, crafted with the finest ingredients and attention to
            detail
          </p>
        </div>

        {/* Menu Categories */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className='bg-gray-900/50 border border-gray-800 rounded-lg p-8'>
              <h3 className='text-2xl font-light text-white mb-8 text-center'>{category.title}</h3>

              <div className='space-y-8'>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className='relative'>
                    <div className='flex items-start justify-between mb-2'>
                      <div className='flex items-center space-x-2'>
                        <h4 className='text-white font-medium text-lg'>{item.name}</h4>
                        {item.signature && <Star className='w-4 h-4 text-[#FB8500] fill-current' />}
                        {item.vegetarian && <Leaf className='w-4 h-4 text-green-500' />}
                      </div>
                      <span className='text-[#FB8500] font-semibold text-lg'>{item.price}</span>
                    </div>
                    <p className='text-gray-400 text-sm leading-relaxed'>{item.description}</p>

                    {itemIndex < category.items.length - 1 && <div className='mt-6 border-b border-gray-700'></div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Menu CTA */}
        <div className='text-center'>
          <div className='bg-black/50 border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-light text-white mb-4'>Full Menu Available</h3>
            <p className='text-gray-300 mb-6'>
              Discover our complete seasonal menu with wine pairings and tasting options
            </p>
            <button className='inline-flex items-center space-x-2 bg-[#FB8500] hover:bg-[#E07600] text-black font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105'>
              <span>View Full Menu</span>
              <ArrowRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
