// pages/about.js

"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase } from "react-icons/fa";

// Fix for marker icons not displaying correctly in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-6 min-h-screen space-y-16">
      {/* Company Description */}
      <motion.section
        className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About Our Company
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Mitrana Textile Ltd. is committed to leading in international trade
          and logistics, offering innovative and reliable solutions tailored to
          client needs. We are driven by a dedication to quality, integrity, and
          excellence.
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-5xl mx-auto bg-white rounded-xl p-10 shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alice Chen",
              position: "CEO",
              avatar:
                "https://i.postimg.cc/Pf3pLjHh/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg",

              description:
                "Alice leads the team with over 20 years of experience in international logistics.",
            },
            {
              name: "Bob Lee",
              position: "CTO",
              avatar:
                "https://i.postimg.cc/jdb9JG4g/shipman-northcutt-sg-ZX15-Da8-YE-unsplash.jpg",
              description:
                "Bob drives tech innovation, enhancing client experiences and system reliability.",
            },
            {
              name: "Sarah Liu",
              position: "COO",
              avatar:
                "https://i.postimg.cc/c4Fm4j98/yogendra-singh-Hrp-YHch-Kb5-Y-unsplash.jpg",
              description:
                "Sarah optimizes our operational processes, ensuring efficiency and quality.",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className=" rounded-full mb-6 border-4 border-blue-500"
              />
              <h3 className="flex items-center text-2xl font-medium text-gray-800 mb-2">
                <FaUser className="mr-2 text-blue-600" />
                {member.name}
              </h3>
              <p className="flex items-center text-blue-600 text-lg mb-4">
                <FaBriefcase className="mr-2" />
                {member.position}
              </p>
              <p className="text-gray-700 text-center px-4">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">
          Our Location
        </h2>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={[25.0007758, 121.4930989]}
            zoom={15}
            className="w-full h-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.0007758, 121.4930989]}>
              <Popup>Our Office Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.section>

      {/* Contact Us Form */}
      <motion.section
        className="max-w-3xl mx-auto bg-white rounded-xl p-10 shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.section>
    </div>
  );
};

export default AboutPage;
