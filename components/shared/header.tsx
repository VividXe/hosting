import { Menu, Phone } from "lucide-react";

function Header() {
  return (
    <div className="bg-blue-900 p-10 text-white flex justify-between items-center">
      <a href="/home" className="hover:text-slate-500">
        HOSTIT
      </a>
      <div className="lg:flex gap-5 hidden">
        <a href="/home" className="hover:text-slate-500">
          Home
        </a>
        <a href="/about" className="hover:text-slate-500">
          About
        </a>
        <a href="/blog" className="hover:text-slate-500">
          Services
        </a>
        <a href="/admin" className="hover:text-slate-500">
          Pricing
        </a>
        <a href="/contact" className="hover:text-slate-500">
          Contact Us
        </a>
      </div>
      <div className="lg:flex items-center gap-5 hidden">
        <a href="/login">
          <Phone size={20} />
        </a>
        <a href="/signup">Call:+919873645635</a>
      </div>
      <div className="lg:hidden flex hover:bg-slate-500 cursor-pointer rounded-full p-5">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
