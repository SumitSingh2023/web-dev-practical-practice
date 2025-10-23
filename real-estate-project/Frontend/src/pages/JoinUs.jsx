import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Rocket } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="bg-white text-black pt-25">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/70 before:z-0">
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Join Our Real Estate Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-200 leading-relaxed"
          >
            Build a future with a team that values your passion, creativity, and dedication.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Why Join Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re more than a real estate brand — we’re a family that grows together, learns together, and builds dreams together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-10 h-10 text-[#afdd51]" />,
              title: "Collaborative Culture",
              desc: "Work with professionals who value your ideas and creativity.",
            },
            {
              icon: <Building2 className="w-10 h-10 text-[#afdd51]" />,
              title: "Modern Workspaces",
              desc: "Enjoy inspiring workspaces designed to help you thrive.",
            },
            {
              icon: <Award className="w-10 h-10 text-[#afdd51]" />,
              title: "Career Growth",
              desc: "We provide the tools, mentorship, and space to grow your career.",
            },
            {
              icon: <Rocket className="w-10 h-10 text-[#afdd51]" />,
              title: "Innovation & Vision",
              desc: "Be part of projects that redefine how people live and work.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-gray-50 shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Whether you’re a sales expert, architect, or creative thinker — your place is here with us.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#9cca45] transition-all duration-300 "
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default JoinUs;
