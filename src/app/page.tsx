import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Premium Quality</span>
                <span className="block text-green-700">A2 Cowdung Vermicompost</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                100% natural and organic vermicompost made exclusively from Indian A2 cowdung.
                Enhance your soil fertility naturally with our premium vermicompost.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    href="/products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Our Vermicompost?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Made from pure Indian A2 cowdung, our vermicompost offers superior benefits
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Benefit 1 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        {/* Add icon here */}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Pure A2 Cowdung Based</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Made exclusively from Indian A2 cowdung, ensuring the highest quality and purity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        {/* Add icon here */}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Rich in Nutrients</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Contains essential nutrients and beneficial microorganisms for optimal plant growth
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        {/* Add icon here */}
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">100% Organic</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Chemical-free and eco-friendly, perfect for organic farming and gardening
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
