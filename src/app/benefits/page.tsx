import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits of A2 Cowdung Vermicompost | Bhoonidhi Organics',
  description: 'Discover the superior benefits of pure Indian A2 cowdung vermicompost. Rich in nutrients, natural growth hormones, and beneficial microorganisms for optimal plant growth.',
  keywords: 'A2 cowdung vermicompost benefits, organic farming, soil fertility, natural fertilizer, Indian A2 cowdung, plant growth, soil health',
  openGraph: {
    title: 'Benefits of A2 Cowdung Vermicompost | Bhoonidhi Organics',
    description: 'Discover the superior benefits of pure Indian A2 cowdung vermicompost. Rich in nutrients, natural growth hormones, and beneficial microorganisms for optimal plant growth.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bhoonidhi Organics'
  }
};

export default function Benefits() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Benefits of A2 Cowdung Vermicompost
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Discover why our pure Indian A2 cowdung vermicompost is superior
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12">
              {/* Benefit Section 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    {/* Add relevant image here */}
                  </div>
                </div>
                <div className="lg:order-1">
                  <h2 className="text-2xl font-bold text-gray-900">Superior Nutrient Content</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Vermicompost made from Indian A2 cowdung is rich in essential plant nutrients including nitrogen, 
                    phosphorus, and potassium. It also contains vital micronutrients and beneficial microorganisms 
                    that enhance soil fertility and plant growth.
                  </p>
                </div>
              </div>

              {/* Benefit Section 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    {/* Add relevant image here */}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Natural Plant Growth Hormones</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Indian A2 cowdung contains natural growth hormones and beneficial enzymes that stimulate 
                    plant growth and improve crop yield. These natural compounds are preserved through our 
                    careful vermicomposting process.
                  </p>
                </div>
              </div>

              {/* Benefit Section 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    {/* Add relevant image here */}
                  </div>
                </div>
                <div className="lg:order-1">
                  <h2 className="text-2xl font-bold text-gray-900">Improved Soil Structure</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Our vermicompost improves soil structure, water retention capacity, and aeration. 
                    It helps in reducing soil erosion and creates a better environment for root development.
                  </p>
                </div>
              </div>

              {/* Additional Benefits List */}
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Benefits</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white">✓</span>
                    <span className="ml-3 text-gray-700">100% organic and chemical-free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white">✓</span>
                    <span className="ml-3 text-gray-700">Enhances disease resistance in plants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white">✓</span>
                    <span className="ml-3 text-gray-700">Promotes beneficial soil microorganisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white">✓</span>
                    <span className="ml-3 text-gray-700">Long-lasting soil improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 