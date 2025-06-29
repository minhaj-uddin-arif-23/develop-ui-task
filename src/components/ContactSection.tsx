import { FaPhoneAlt, FaPaperPlane, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-white via-white to-lime-300 rounded-[2rem] px-8 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <button className="border px-4 py-1 rounded-full text-black">↡ Contact</button>
          <h2 className="text-4xl md:text-5xl font-bold">
            Interested in{" "}
            <span className="bg-black text-white px-2 py-1 rounded">work</span> together?
          </h2>
          <p className="text-gray-700 max-w-md">
            We start every new client interaction with an in-depth discovery call where we get to know each other.
          </p>
          <button className="border-2 border-black px-6 py-2 rounded-full flex items-center gap-2">
            <FaPhoneAlt /> Schedule a Call
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 bg-black text-white p-8 rounded-2xl space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-lime-300 py-2 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Describe your project"
            className="w-full bg-transparent border-b border-gray-600 py-2 placeholder-gray-400 resize-none focus:outline-none"
          
          ></textarea>

          <div className="flex items-center gap-4">
            <button className="border px-5 py-1 rounded-full flex items-center gap-2">
              <FaPaperPlane /> Send
            </button>
            <span>or</span>
            <button className="border px-5 py-1 rounded-full">Contact me</button>
          </div>

          <div className="pt-6 flex items-center justify-between text-sm text-gray-400">
            <span>@williamrey</span>
            <div className="flex gap-4 text-white text-lg">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
