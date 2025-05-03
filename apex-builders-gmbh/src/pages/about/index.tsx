import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Apex Builder GmbH</title>
        <meta
          name="description"
          content="Learn more about Apex Builder GmbH, a trusted construction company in Germany."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Apex Builder GmbH
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Building the future with precision, purpose, and passion. Trusted by
          clients across Germany for durable, high-quality construction.
        </p>
      </section>

      {/* About Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Who We Are
        </h2>
        <p className="mb-4 text-gray-700">
          Based in Germany, Apex Builder GmbH has decades of combined experience
          in residential, commercial, and industrial construction. We are
          committed to building long-term value for our clients by combining
          innovation, safety, and top-tier craftsmanship.
        </p>
        <p className="mb-4 text-gray-700">
          From small-scale renovations to large development projects, we ensure
          every build is executed with precision, transparency, and efficiency.
        </p>

        {/* Features/Values Section */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-white border rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Craftsmanship
            </h3>
            <p className="text-gray-600">
              Every detail matters — we use proven methods and premium materials
              on every project.
            </p>
          </div>
          <div className="p-6 bg-white border rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Client-Centered
            </h3>
            <p className="text-gray-600">
              Transparent communication, customized solutions, and
              satisfaction-focused service.
            </p>
          </div>
          <div className="p-6 bg-white border rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              On-Time Delivery
            </h3>
            <p className="text-gray-600">
              Efficient project management to keep your timelines on track
              without compromise.
            </p>
          </div>
          <div className="p-6 bg-white border rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Safety First
            </h3>
            <p className="text-gray-600">
              Strict adherence to safety standards for both our workers and your
              property.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Want to work with us?
          </h3>
          <p className="text-gray-600 mb-6">
            Get in touch to discuss your next construction project. Were ready
            to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </main>
    </>
  );
}
