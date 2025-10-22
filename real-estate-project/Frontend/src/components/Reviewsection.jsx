import React from "react";

const reviews = [
  {
    name: "Manish Bansal – Faridabad",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Buying a plot through Suggestic Buildcon was the best decision I made. The team guided me throughout and delivered exactly what they promised!",
  },
  {
    name: "Rahul Rathi – Gurugram",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I had my doubts at first, but their professionalism and transparency won me over. The entire process was smooth and stress-free.",
  },
  {
    name: "Neha & Rajat – Jaipur",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "We’re so happy with our new plot! The location, value, and support made our experience wonderful from start to finish.",
  },
  {
    name: "Sandeep Verma – Lucknow",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    text: "Suggestic Buildcon truly understands customer needs. They helped me find the perfect investment opportunity with complete clarity.",
  },
  {
    name: "Anita Sharma – Delhi",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "The team was super helpful and patient throughout. I’m extremely satisfied with their services and property options.",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Trusted by Investors, Loved by Families
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-3 object-cover"
              />
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {review.name}
              </h4>

              {/* Stars */}
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < review.rating ? "#fbbf24" : "#e5e7eb"}
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.086 2.243a1 1 0 00-.364 1.118l1.18 3.63c.3.921-.755 1.688-1.54 1.118l-3.086-2.243a1 1 0 00-1.176 0l-3.086 2.243c-.784.57-1.838-.197-1.539-1.118l1.18-3.63a1 1 0 00-.364-1.118L2.518 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.18-3.63z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;


