// components/HeroSection.jsx
import { FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#d2f6ef] via-white to-lime-300 text-black font-sans px-6">
      
      {/* Left Vertical Social Bar */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        <a href="#" className="text-xl"><FaInstagram /></a>
        <a href="#" className="bg-black text-white p-1 rounded"><FaFacebookF /></a>
        <div className="w-px h-12 bg-black"></div>
        <span className="-rotate-90 text-sm">@williamrey</span>
      </div>

      {/* Main Content - Start aligned */}
      <div className="max-w-5xl w-full my-20 mx-auto flex flex-col items-start">
        {/* Heading Block */}
        <div className="inline-block p-6 rounded-md">
          <h1 className="text-5xl md:text-6xl font-semibold leading-snug text-start">
            <span className="text-black">Trusted </span>
            <span className="bg-black text-white px-3 py-1 rounded">Partner</span>{' '}
            for <br />
            <span className="text-black">Your Website </span>
            <span className="bg-black text-white px-3 py-1 rounded">Develop.</span>
          </h1>
        </div>

        {/* Paragraph - also left aligned */}
        <p className="mt-6 text-base md:text-lg text-gray-800 text-start">
          Building the world’s best marketing websites for over a decade. <br />
          Your trusted partner for strategy, design, and dev.
        </p>

        {/* Centered Button Only */}
        <div className="mt-8 w-full flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-full transition hover:bg-black hover:text-white">
            <FaPhoneAlt />
            <span className="relative text-sm md:text-base font-medium">
              Schedule a Call
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500"></span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
