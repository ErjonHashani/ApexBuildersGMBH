import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/images/hero-1.jpg";
import project1Image from "@/assets/images/project-1.jpg";
import project2Image from "@/assets/images/project-2.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative py-32 px-4 text-center h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with refined overlay */}
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
            className="object-cover"
            quality={100}
            priority
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50"></div>
        </motion.div>

        {/* Content with refined spacing and typography */}
        <div className="relative z-10 max-w-6xl mx-auto text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-amber-400 uppercase bg-gray-900/50 rounded-full mb-4">
              Excellence Since 1985
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building <span className="text-amber-400">Tomorrow&apos;s</span>
              <br />
              Landmarks Today
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Apex Builders GmbH delivers innovative construction solutions with
            uncompromising quality and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center">
              Get a Free Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="ml-2 inline-block"
              >
                &rarr;
              </motion.span>
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg">
              Our Projects
            </button>
          </motion.div>
        </div>

        {/* Decorative bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-2 bg-amber-400"
          initial={{ height: 0 }}
          animate={{ height: 8 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase">
              What We Offer
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Our Construction Services
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Construction",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                description:
                  "Office buildings, retail spaces, and industrial facilities with cutting-edge design",
              },
              {
                title: "Residential Building",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
                description:
                  "Custom homes and apartment complexes tailored to your lifestyle",
              },
              {
                title: "Renovations",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                ),
                description:
                  "Modernization and restoration of existing structures with precision craftsmanship",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-100"
              >
                <div className="bg-amber-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-100 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center transition-all duration-300">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Our Portfolio
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "City Center Office Tower",
                description:
                  "32-story commercial building completed in 2022 with LEED Platinum certification",
                stats: [
                  { value: "32", label: "Floors" },
                  { value: "2022", label: "Completed" },
                  { value: "LEED", label: "Platinum" },
                ],
                image: project1Image,
                alt: "City Center Office Tower construction site",
              },
              {
                title: "Lakeside Residential Complex",
                description:
                  "Luxury waterfront apartments with 85 units and premium amenities",
                stats: [
                  { value: "85", label: "Units" },
                  { value: "2021", label: "Completed" },
                  { value: "5★", label: "Amenities" },
                ],
                image: project2Image,
                alt: "Lakeside Residential Complex exterior view",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-amber-600">
                          {stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                    View Case Study
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Construction Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Our team of construction experts is ready to bring your vision
                to life with precision and excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-medium shadow-lg hover:shadow-xl">
                  Request Consultation
                </button>
                <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-600 transition font-medium">
                  Call Now: +49 123 456 789
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
