import Navbar from '@/components/Navbar';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Premium A2 Cowdung Vermicompost Products | Bhoonidhi Organics',
  description: 'Shop our range of premium A2 cowdung vermicompost products. Available in various sizes from 5kg bags to bulk tonnes for farmers. 100% organic and natural.',
  keywords: 'buy vermicompost, organic fertilizer, A2 cowdung compost, garden products, farm fertilizer, bulk vermicompost, organic farming products',
  openGraph: {
    title: 'Buy Premium A2 Cowdung Vermicompost Products | Bhoonidhi Organics',
    description: 'Shop our range of premium A2 cowdung vermicompost products. Available in various sizes from 5kg bags to bulk tonnes for farmers. 100% organic and natural.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bhoonidhi Organics'
  }
};

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Home Garden Pack',
      weight: '5 kg',
      price: '₹250',
      transport: '₹100',
      description: 'Perfect for home gardens and indoor plants. Rich in nutrients and easy to use.',
      features: [
        'Ideal for potted plants and small gardens',
        'Easy-to-use package',
        'Rich in micronutrients',
        'Promotes healthy growth',
        'Transport charge: ₹100 per bag'
      ]
    },
    {
      id: 2,
      name: 'Farm Pack',
      weight: '20 kg',
      price: '₹400',
      transport: '₹100',
      description: 'Larger pack for farms and extensive gardens. Premium quality vermicompost.',
      features: [
        'Suitable for larger gardens',
        'High nutrient content',
        'Improves soil structure',
        'Enhanced crop yield',
        'Transport charge: ₹100 per bag'
      ]
    },
    {
      id: 3,
      name: 'Farmer Bulk Pack',
      weight: 'Tonnes',
      price: 'Contact for Pricing',
      description: 'Bulk quantities for agricultural needs. Best rates for farmers.',
      features: [
        'Available in tonnes',
        'Top soil rejuvenation',
        'Rich in micronutrients',
        'Improves soil fertility',
        'Enhanced water retention',
        'Promotes beneficial soil microorganisms'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Premium quality vermicompost made from pure Indian A2 cowdung
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden"
                >
                  <div className="p-8 flex-1">
                    <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden mb-6">
                      {/* Add product image here */}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className="mt-2 text-gray-500">{product.description}</p>
                    
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-lg text-gray-500">/{product.weight}</span>
                      {product.transport && (
                        <p className="text-sm text-gray-500 mt-1">+ {product.transport} transport per bag</p>
                      )}
                    </div>

                    <ul className="mt-6 space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">
                            ✓
                          </span>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="block w-full bg-green-600 text-center py-3 px-4 rounded-md text-white font-medium hover:bg-green-700"
                    >
                      {product.id === 3 ? 'Get Bulk Quote' : 'Contact for Purchase'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bulk Orders Section */}
          <div className="mt-16 bg-green-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Farmer Special Bulk Orders</h2>
              <p className="mt-4 text-lg text-gray-700">
                We offer special rates for farmers requiring bulk quantities. Our vermicompost helps in:
              </p>
              <ul className="mt-6 text-left max-w-2xl mx-auto space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">✓</span>
                  <span className="ml-3 text-gray-700">Top soil rejuvenation and improved soil structure</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">✓</span>
                  <span className="ml-3 text-gray-700">Enhanced water retention capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">✓</span>
                  <span className="ml-3 text-gray-700">Rich in essential micronutrients and beneficial bacteria</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">✓</span>
                  <span className="ml-3 text-gray-700">Increased crop yield and better produce quality</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-block bg-green-600 py-3 px-8 rounded-md text-white font-medium hover:bg-green-700"
              >
                Contact for Bulk Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 