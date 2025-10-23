import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Leaf, Award } from "lucide-react";

const Resourses = () => {
  return (
    <div className="bg-white text-black pt-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36 bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/70 before:z-0">
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            About Suggestic Buildcon Pvt. Ltd.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Building Trust, Creating Lifestyles — Since 2015.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Established in 2015, <span className="font-semibold text-[#afdd51]">Suggestic Buildcon Pvt. Ltd.</span> has emerged as a
            trusted name in the real estate landscape of Rajasthan and Delhi NCR.
            With over two decades of excellence, we specialize in creating
            high-quality, sustainable residential, commercial, and integrated township projects that redefine modern living.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { title: "10+ Years", subtitle: "of Experience", icon: <Award className="w-10 h-10 text-[#afdd51]" /> },
            { title: "10,000+", subtitle: "Happy Clients", icon: <Users className="w-10 h-10 text-[#afdd51]" /> },
            { title: "Sustainable", subtitle: "Developments", icon: <Leaf className="w-10 h-10 text-[#afdd51]" /> },
            { title: "Transparent", subtitle: "Commitment", icon: <Building2 className="w-10 h-10 text-[#afdd51]" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our vision is to redefine modern living by designing spaces that are
            sustainable, future-ready, and community-focused. We believe in
            creating environments where families thrive, businesses prosper, and
            lifestyles evolve — all built on a foundation of transparency and trust.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Suggestic?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "10+ Years of Expertise",
              desc: "Deep-rooted knowledge and proven execution capability in the real estate sector.",
            },
            {
              title: "10,000+ Clients",
              desc: "A vast and growing family of happy property owners who trust our legacy.",
            },
            {
              title: "Focus on Sustainability",
              desc: "We integrate eco-friendly practices in every development for a greener future.",
            },
            {
              title: "Commitment to Transparency",
              desc: "Honest communication and ethical dealings from concept to completion.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white shadow-md p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#afdd51]">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Don’t Just Build Properties — We Build Trust.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Ready to experience real estate that’s rooted in integrity, quality, and innovation?
        </p>
        <a
          href="/contact"
          className="relative inline-block px-8 py-3 font-semibold rounded-full overflow-hidden group shadow-lg hover:shadow-[#afdd51]/50 transition-all duration-500"
        >
          <span className="absolute inset-0 bg-[#afdd51] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative text-black group-hover:text-black">
            Contact Us
          </span>
        </a>
      </section>
    </div>
  );
};

export default Resourses;
