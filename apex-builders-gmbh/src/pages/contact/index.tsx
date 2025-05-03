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

      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Apex Builder GmbH
            </h1>
            <p className="text-gray-600 mb-6">
              Lets talk about your construction project. Use the form or find
              us on the map.
            </p>

            <div className="mb-6">
              <p className="text-gray-800 font-medium">Address:</p>
              <p className="text-gray-600">
                Musterstraße 123, 10115 Berlin, Germany
              </p>
              <p className="text-gray-600 mt-2">Phone: +49 123 456 7890</p>
              <p className="text-gray-600">Email: info@apexbuilder.de</p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Google Maps Iframe */}
          <div className="w-full h-[400px] rounded overflow-hidden shadow">
            <iframe
              title="Apex Builder Location"
              src="https://www.google.com/maps?q=Berlin,+Germany&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
