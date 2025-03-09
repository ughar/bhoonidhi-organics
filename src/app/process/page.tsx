import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Vermicomposting Process | Bhoonidhi Organics',
  description: 'Learn about our premium vermicomposting process. From collection of pure Indian A2 cowdung to quality control, discover how we create the highest quality vermicompost.',
  keywords: 'vermicomposting process, A2 cowdung composting, organic farming process, quality vermicompost, Indian A2 cowdung, sustainable farming',
  openGraph: {
    title: 'Our Vermicomposting Process | Bhoonidhi Organics',
    description: 'Learn about our premium vermicomposting process. From collection of pure Indian A2 cowdung to quality control, discover how we create the highest quality vermicompost.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bhoonidhi Organics'
  }
};

export default function Process() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Premium Vermicomposting Process
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              How we transform pure Indian A2 cowdung into nutrient-rich vermicompost
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                      {/* Add relevant image here */}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-green-600 mr-4">1</span>
                      <h2 className="text-2xl font-bold text-gray-900">Collection of Pure A2 Cowdung</h2>
                    </div>
                    <p className="mt-4 text-lg text-gray-500">
                      We carefully source A2 cowdung exclusively from Indian cow breeds. Our cows are maintained 
                      in a natural environment and fed organic fodder to ensure the highest quality raw material 
                      for vermicomposting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                      {/* Add relevant image here */}
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-green-600 mr-4">2</span>
                      <h2 className="text-2xl font-bold text-gray-900">Pre-Composting</h2>
                    </div>
                    <p className="mt-4 text-lg text-gray-500">
                      The collected cow dung undergoes initial decomposition in a controlled environment. 
                      This process helps break down complex organic matter and prepares it for the earthworms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                      {/* Add relevant image here */}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-green-600 mr-4">3</span>
                      <h2 className="text-2xl font-bold text-gray-900">Vermicomposting</h2>
                    </div>
                    <p className="mt-4 text-lg text-gray-500">
                      Special earthworm species are introduced to the pre-composted material. These worms 
                      process the cow dung, enriching it with enzymes, hormones, and beneficial microorganisms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="aspect-w-3 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                      {/* Add relevant image here */}
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-green-600 mr-4">4</span>
                      <h2 className="text-2xl font-bold text-gray-900">Quality Control</h2>
                    </div>
                    <p className="mt-4 text-lg text-gray-500">
                      The final product undergoes rigorous quality testing to ensure optimal nutrient content, 
                      moisture levels, and beneficial microorganism population. Only the highest quality 
                      vermicompost is packaged for our customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Assurance Box */}
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Quality Commitment</h3>
                <p className="text-lg text-gray-700">
                  At Bhoonidhi Organics, we maintain strict quality standards throughout our vermicomposting 
                  process. Our facility follows organic farming guidelines, ensuring that no chemical 
                  additives are used at any stage. Each batch is carefully monitored and tested to deliver 
                  consistent, high-quality vermicompost to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 