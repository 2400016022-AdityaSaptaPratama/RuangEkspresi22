import logo1 from "../images/logo1.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO KIRI */}
        <div className="flex items-center gap-3">
          <img
            src={logo1}
            alt="Logo"
            className="h-8 w-auto object-contain"
          />

          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-blue-700">ruang</p>
            <p className="text-[13px] font-semibold text-blue-700">ekspresi</p>
          </div>
        </div>

        {/* MENU */}
       <ul className="flex items-center gap-8 text-gray-600 text-sm font-medium">
  <li><a href="#home" className="hover:text-blue-600">Home</a></li>
  <li><a href="#about" className="hover:text-blue-600">About</a></li>
  <li><a href="#program" className="hover:text-blue-600">Program</a></li>
  <li><a href="#project" className="hover:text-blue-600">Project</a></li>
  <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
  <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
</ul>


      </div>
    </nav>
  );
}
