import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Bhoonidhi Organics',
  description: 'Get in touch with Bhoonidhi Organics for premium vermicompost products. Contact us for orders, bulk purchases, or any queries about our organic farming solutions.',
  keywords: 'contact Bhoonidhi Organics, vermicompost orders, bulk orders, organic farming support, customer service',
  openGraph: {
    title: 'Contact Us | Bhoonidhi Organics',
    description: 'Get in touch with Bhoonidhi Organics for premium vermicompost products. Contact us for orders, bulk purchases, or any queries about our organic farming solutions.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bhoonidhi Organics'
  }
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Get in touch with us for orders or any queries about our products
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                    Interested In
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option>Home Garden Pack (5 kg - ₹250)</option>
                    <option>Farm Pack (20 kg - ₹400)</option>
                    <option>Farmer Bulk Pack (Contact for Pricing)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Your message or specific requirements"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                  <div className="mt-3 text-gray-500">
                    <p>Bhoonidhi Organics</p>
                    <p>Gulgunjan halli, Halubhavipalya</p>
                    <p>Bengaluru, Karnataka 562130</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                  <div className="mt-3 space-y-2 text-gray-500">
                    <p>Phone: +919901977988</p>
                    <p>Email: thebhoonidhiorganics@gmail.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <div className="mt-3 space-y-2 text-gray-500">
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">
                        ✓
                      </span>
                      <span className="ml-3 text-gray-700">Premium quality vermicompost</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">
                        ✓
                      </span>
                      <span className="ml-3 text-gray-700">Pure Indian cow dung based</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-white shrink-0">
                        ✓
                      </span>
                      <span className="ml-3 text-gray-700">Excellent customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 