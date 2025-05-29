import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Apex Builder GmbH</title>
        <meta
          name="description"
          content="Contact Apex Builder GmbH — location and contact form."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Together
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to discuss your next construction
            project.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about your project? Fill out the form below and our
              team will get back to you within 24 hours.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Office
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Musterstraße 123, 10115 Berlin, Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+49 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">info@apexbuilder.de</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Apex Builder Location"
                src="https://www.google.com/maps?q=Berlin,+Germany&output=embed"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-20 hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Business Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Main Office</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">
                Emergency Service
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>24/7 Support</span>
                  <span className="text-blue-600 font-medium">
                    +49 123 456 7891
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
