import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/images/hero-1.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative py-20 px-4 text-center h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with parallax effect */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            alt="Construction site with heavy machinery"
            fill
            className="object-cover brightness-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Content with staggered animations */}
        <div className="relative z-10 max-w-4xl mx-auto text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Building the <span className="text-amber-400">Future</span> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            Apex Builders GmbH - Quality construction since 1985
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg">
              Get a Free Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="ml-2 inline-block"
              >
                &rarr;
              </motion.span>
            </button>
          </motion.div>
        </div>

        {/* Construction elements animation */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-16 bg-amber-700/20"
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
      </motion.section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Construction Services
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Commercial Construction",
            "Residential Building",
            "Renovations",
          ].map((service, index) => (
            <motion.div
              key={service}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                {service === "Commercial Construction"
                  ? "Office buildings, retail spaces, and industrial facilities"
                  : service === "Residential Building"
                  ? "Custom homes and apartment complexes"
                  : "Modernization and restoration of existing structures"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {["City Center Office Tower", "Lakeside Residential Complex"].map(
            (project, index) => (
              <motion.div
                key={project}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="h-48 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                  {/* Project image placeholder - replace with actual images */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                <p className="text-gray-600 mb-4">
                  {project === "City Center Office Tower"
                    ? "32-story commercial building completed in 2022"
                    : "Luxury waterfront apartments with 85 units"}
                </p>
                <button className="text-amber-600 hover:underline font-medium">
                  View Case Study
                </button>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Contact Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-amber-600 text-white text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Our team of construction experts is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium">
              Request Consultation
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-amber-600 transition font-medium">
              Call Now: +49 123 456 789
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
