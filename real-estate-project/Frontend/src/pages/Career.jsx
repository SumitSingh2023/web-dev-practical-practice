import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Rocket, Briefcase } from "lucide-react";

const Career = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-12 py-30 md:py-38 bg-gradient-to-b from-gray-100 to-white pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Join <span className="text-[#afdd51]">Suggestic Buildcon</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg text-gray-600 max-w-3xl"
        >
          Be part of a visionary team shaping the future of real estate across Rajasthan & Delhi NCR.
        </motion.p>
      </section>

      {/* Why Join Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
        >
          <Users className="w-12 h-12 text-[#afdd51] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Collaborative Culture</h3>
          <p className="text-gray-600">
            Work with passionate professionals who believe in teamwork, innovation, and shared success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
        >
          <Rocket className="w-12 h-12 text-[#afdd51] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Growth Opportunities</h3>
          <p className="text-gray-600">
            Elevate your career in a company that nurtures talent and rewards dedication with advancement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
        >
          <Building2 className="w-12 h-12 text-[#afdd51] mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Legacy of Excellence</h3>
          <p className="text-gray-600">
            Join a brand with 20+ years of proven leadership in delivering landmark real estate projects.
          </p>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Current Openings</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sales Executive", loc: "Jaipur", type: "Full-time" },
              { title: "Project Manager", loc: "Delhi NCR", type: "Full-time" },
              { title: "Customer Relations Officer", loc: "Udaipur", type: "Full-time" },
            ].map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <Briefcase className="w-10 h-10 text-[#afdd51] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.loc}</p>
                <p className="text-sm text-gray-500 mb-4">{job.type}</p>
                <a
                  href="/apply"
                  className="relative inline-block px-6 py-2 font-semibold rounded-full overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-[#afdd51] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative text-black group-hover:text-black">Apply Now</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Your Future with <span className="text-[#afdd51]">Suggestic?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We’re always looking for passionate individuals who share our commitment to excellence and innovation.
        </p>
        <a
          href="/contact"
          className="relative inline-block px-10 py-3 font-semibold rounded-full overflow-hidden group shadow-lg hover:shadow-[#afdd51]/50 transition-all duration-500"
        >
          <span className="absolute inset-0 bg-[#afdd51] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative text-white group-hover:text-black">Send Your Resume</span>
        </a>
      </section>
    </div>
  );
};

export default Career;
