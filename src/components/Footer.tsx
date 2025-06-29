export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo & Heading */}
        <div className="col-span-1">
          <h1 className="text-lime-400 font-bold text-xl mb-6">DEVLOP.ME</h1>
          <h2 className="text-4xl font-bold">As you can</h2>
        </div>

        {/* Say hello */}
        <div className="text-sm space-y-2">
          <p className="text-gray-400">Say hello</p>
          <p>HELLO@DEVLOP.ME.COM</p>
          <p>MAHBUBUL@ME.COM</p>
          <p className="mt-4 text-gray-400">Call</p>
          <p>+784549 4981 00</p>
          <p>+8845 0100 211</p>
        </div>

        {/* Menu */}
        <div className="text-sm space-y-2">
          <p className="text-gray-400">Menu</p>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>PORTFOLIO</p>
          <p>BLOG</p>
        </div>

        {/* Social */}
        <div className="text-sm space-y-2">
          <p className="text-gray-400">Social</p>
          <p>TWITTER</p>
          <p>INSTAGRAM</p>
          <p>FACEBOOK</p>
          <p>BEHANCE</p>
          <p>DRIBBBLE</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <span className="font-bold text-white">BESNIK</span>
        <span>© devlop.me 2022</span>
        <span>PRIVACY - TERMS</span>
      </div>
    </footer>
  );
}
