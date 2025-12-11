import React, { useState } from "react";


// HERO IMAGE
import gambar1 from "../assets/images/gambar1.png";

// PILAR
import pilar1 from "../assets/images/pilar1.png";
import pilar2 from "../assets/images/pilar2.png";
import pilar3 from "../assets/images/pilar3.png";
import pilar4 from "../assets/images/pilar4.png";

// JADWAL PROGRAM
import kalender from "../assets/images/kalender.png";
import jam from "../assets/images/jam.png";

// PROGRAM 4 CARD
import komen from "../assets/images/komen.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";


import arahkiri from "../assets/images/arahkiri.png";
import arahkanan from "../assets/images/arahkanan.png";
import arahAtas from "../assets/images/arahAtas.png";

// TEAM PHOTO (Contoh)
import fotobudi from "../assets/images/fotobudi.png";

import ruangekspresi from "../assets/images/ruangekspresi.png";
import lokasi from "../assets/images/lokasi.png";
import pesan from "../assets/images/pesan.png";
import telepon from "../assets/images/telepon.png";

export default function HomePage() {

  // Slider Image List (WAJIB di sini)
  const images = [gambar1, fotobudi, fotobudi];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const projects = [
  {
    category: "UI/UX Design",
    title: "Creative Portfolio Platform",
    desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
    members: [
      { name: "Budi Santoso", role: "Frontend Developer" },
      { name: "Budi Santoso", role: "UI Designer" },
      { name: "Budi Santoso", role: "Project Manager" },
    ],
    image: gambar1,
    btnLabel: "Live Demo",
  },
  {
    category: "Web Development",
    title: "Learning Management System",
    desc: "Platform pembelajaran internal dengan fitur raport dan gamifikasi prestasi",
    members: [
      { name: "Budi Santoso", role: "Backend Developer" },
      { name: "Budi Santoso", role: "Frontend Developer" },
      { name: "Budi Santoso", role: "Project Manager" },
    ],
    image: fotobudi,
    btnLabel: "Preview",
  },
  {
    category: "Mobile Development",
    title: "Productivity Task App",
    desc: "Aplikasi mobile untuk task grouping, reminders, dan project tracking",
    members: [
      { name: "Budi Santoso", role: "Mobile Developer" },
      { name: "Budi Santoso", role: "UI/UX Designer" },
      { name: "Budi Santoso", role: "Project Manager" },
    ],
    image: fotobudi,
    btnLabel: "Open App",
  },
];

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

 
  return (
    <main className="pt-16">

      {/* ========================== HERO SECTION ========================== */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
              <span className="text-blue-700">RUANG EKSPRESI</span>
              <span className="text-gray-800"> : Wadah</span>
              <br />
              <span className="text-gray-800">kreatif & Kompetitif</span>
              <br />
              <span className="text-gray-800">Mahasiswa</span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-6 py-2 rounded-full bg-yellow-100 text-sm text-gray-800">Ideation</span>
              <span className="px-6 py-2 rounded-full bg-green-100 text-sm text-gray-800">Creation</span>
              <span className="px-6 py-2 rounded-full bg-sky-100 text-sm text-gray-800">Collaboration</span>
              <span className="px-6 py-2 rounded-full bg-pink-100 text-sm text-gray-800">Guidance & Support</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-sm lg:max-w-md">
              <img
                src={gambar1}
                alt="Gambar Hero"
                className="w-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================== EMPAT PILAR ========================== */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Empat Pilar <span className="text-blue-700">Ruang Ekspresi</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa
            melalui pendekatan holistik dan kolaboratif.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {/* PILAR */}            
            <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src={pilar1} alt="Pilar 1" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Ideation</h3>
              <p className="text-gray-600 text-sm">
                Membantu mahasiswa menggali ide kreatif sebagai langkah awal inovasi.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src={pilar2} alt="Pilar 2" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Creation</h3>
              <p className="text-gray-600 text-sm">
                Mendukung proses produksi karya mahasiswa secara maksimal.
              </p>
            </div>

            <div className="p-6 bg-sky-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src={pilar3} alt="Pilar 3" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-sky-700 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Membangun kolaborasi lintas bidang untuk memperkuat jejaring kreatif.
              </p>
            </div>

            <div className="p-6 bg-pink-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src={pilar4} alt="Pilar 4" className="w-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Guidance & Support</h3>
              <p className="text-gray-600 text-sm">
                Pendampingan dan dukungan dari mentor berpengalaman.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================== JADWAL & PROGRAM ========================== */}
      <section id="program" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Jadwal & <span className="text-blue-700">Program Kegiatan</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill setiap Sabtu.
          </p>

          {/* Card Jadwal */}
          <div className="bg-white shadow-lg rounded-2xl p-8 mt-12">

            {/* Label “Setiap Sabtu” */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <img src={kalender} alt="Kalender" className="h-6" />
              <span className="text-blue-700 font-semibold text-lg">Setiap Sabtu</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Sesi Pagi */}
              <div className="p-6 rounded-xl shadow-md border border-blue-100 bg-linear-to-r from-green-100 to-blue-50 text-left">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Sesi Pagi</h3>
                <div className="flex items-center gap-2">
                  <img src={jam} alt="Jam" className="h-5" />
                  <span className="font-bold text-blue-700">09.00 – 12.00 WIB</span>
                </div>
                <p className="text-gray-700 text-sm mt-3">
                  Workshop, Career Talks, dan Extra Classes intensif
                </p>
              </div>

              {/* Sesi Sore */}
              <div className="p-6 rounded-xl shadow-md border border-blue-100 bg-linear-to-r from-yellow-100 to-green-100 text-left">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">Sesi Sore</h3>
                <div className="flex items-center gap-2">
                  <img src={jam} alt="Jam" className="h-5" />
                  <span className="font-bold text-blue-700">16.00 – 19.00 WIB</span>
                </div>
                <p className="text-gray-700 text-sm mt-3">
                  Project Work, Mentoring, dan Collaboration Session
                </p>
              </div>

            </div>
          </div>

          {/* 4 CARD PROGRAM */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="p-6 rounded-xl shadow-md bg-yellow-100 border border-yellow-200">
              <img src={komen} alt="Career Talks" className="h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">Career Talks</h3>
              <p className="text-gray-600 text-sm mt-2">
                Sesi sharing dari praktisi industri dan alumni sukses.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-green-100 border border-green-200">
              <img src={logo2} alt="Extra Classes" className="h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">Extra Classes</h3>
              <p className="text-gray-600 text-sm mt-2">
                Kelas tambahan skill development dan workshop teknis.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-blue-100 border border-blue-200">
              <img src={logo3} alt="Project Work" className="h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">Project Work</h3>
              <p className="text-gray-600 text-sm mt-2">
                Mengerjakan project nyata dengan bimbingan mentor.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md bg-pink-100 border border-pink-200">
              <img src={logo4} alt="Mentoring" className="h-10 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">Mentoring</h3>
              <p className="text-gray-600 text-sm mt-2">
                Sesi konsultasi personal dengan mentor berpengalaman.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ===================== SHOWCASE STUDENT PROJECTS ===================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Showcase <span className="text-blue-700">Student Projects</span>
          </h2>

          <p className="text-gray-600 max-w-lg mx-auto mt-4 text-sm md:text-base">
            Karya–karya inovatif yang telah dihasilkan oleh mahasiswa
            dalam program Ruang Ekspresi
          </p>
          </div>
          </section>

  <section id="project" className="bg-white px-6 pb-24">
  <div className="max-w-6xl mx-auto py-12">

    {/* WRAPPER BACKGROUND CREAM */}
    <div className="bg-[#FFF7ED] p-10 rounded-2xl">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="relative text-left">

          {/* CATEGORY */}
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
            {projects[index].category}
          </span>

          {/* TITLE */}
          <h3 className="text-3xl font-bold mt-4 text-gray-800">
            {projects[index].title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-2">
            {projects[index].desc}
          </p>

          {/* TEAM TITLE */}
          <h4 className="font-semibold text-gray-900 mt-6">Tim Pembuat :</h4>

          {/* TEAM LIST */}
          <div className="mt-4 space-y-4">
            {projects[index].members.map((m, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={fotobudi} className="h-10 w-10 border rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{m.name}</p>
                  <p className="text-xs text-gray-600">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <img src={arahAtas} className="h-4" alt="icon" />
            {projects[index].btnLabel}
          </button>
        </div>

        {/* RIGHT SIDE IMAGE SLIDER */}
        <div className="relative flex justify-center items-center">

          {/* BUTTON LEFT */}
          <button
            onClick={prevImage}
            className="absolute left-[-650px] top-1/2 -translate-y-1/2"
          >
            <img src={arahkiri} className="h-10 hover:scale-125 transition cursor-pointer" />
          </button>

          {/* IMAGE */}
          <img
            src={projects[index].image}
            className="rounded-2xl border border-pink-300 p-2 w-full max-w-lg shadow-md transition-all duration-300"
          />

          {/* BUTTON RIGHT */}
          <button
            onClick={nextImage}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2"
          >
            <img src={arahkanan} className="h-10 hover:scale-125 transition cursor-pointer" />
          </button>
        </div>

      </div>

    </div> {/* END BACKGROUND CREAM WRAPPER */}

  </div>
</section>


<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="overflow-x-auto scrollbar-hidden py-4">
      <div className="grid grid-rows-2 grid-flow-col gap-6">

        {[
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Fasilitas mentoringnya sangat membantu. Banyak insight yang membuka cara pikir baru.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Kegiatannya terstruktur dan seru. Banyak output karya nyata dan kolaboratif.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Banyak teman baru dan pengalaman leadership yang saya dapatkan.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Saya jadi lebih percaya diri untuk presentasi dan berkolaborasi.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Lingkungannya positif dan suportif, cocok untuk berkembang.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Kegiatan workshopnya memberi banyak pengalaman langsung yang bisa diterapkan.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Relasi yang saya dapatkan sangat mendukung karier saya ke depan.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Mentornya sangat membantu dan mengarahkan dengan sabar.",
          },
          {
            nama: "Budi Santoso",
            jurusan: "Mahasiswa Sistem Informasi",
            text:
              "Saya mendapatkan pengalaman teamwork yang profesional dan terarah.",
          },
        ].map((d, i) => (
          <div
            key={i}
            className="min-w-[350px] bg-white shadow-md p-6 rounded-2xl border border-gray-100 flex gap-4 items-start"
          >
            <img
              src={fotobudi}
              alt="foto mahasiswa"
              className="w-14 h-14 rounded-full object-cover border"
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-800">{d.nama}</h3>
              <p className="text-sm text-blue-700 font-medium mb-2">{d.jurusan}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{d.text}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

{/* ========================= FOOTER DI SINI ========================= */}
<footer id="contact" className="bg-[#1F6FB7] text-white py-16 px-6 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* LOGO + DESKRIPSI */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <img src={ruangekspresi} alt="logo" className="h-12" />
        <h2 className="text-xl font-semibold">ruang ekspresi</h2>
      </div>

      <p className="text-sm leading-relaxed max-w-sm">
        Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
        mengembangkan potensi melalui ideation, creation,
        collaboration, dan guidance.
      </p>

      <div className="mt-4 space-y-3 text-sm">

        <div className="flex gap-1 items-center">
          <img src={lokasi} className="h-7 w-auto" />
          <p className="text-white leading-tight">
            Jl. Ringroad Selatan, Kragilan, Tamantirto,
            Kasihan, Bantul, Daerah Istimewa Yogyakarta 55191
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img src={pesan} className="h-5" />
          <p>ruang_ekspresi@webmail.ucad.ac.id</p>
        </div>

        <div className="flex items-center gap-3">
          <img src={telepon} className="h-5" />
          <p>(0274) 511830</p>
        </div>

      </div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Program</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* PROGRAMS */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Programs</h3>
      <ul className="space-y-2 text-sm">
        <li>Career Talks</li>
        <li>Extra Classes</li>
        <li>Project Work</li>
        <li>Mentoring</li>
      </ul>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
    © 2025 Ruang Ekspresi | All Rights Reserved
  </div>
</footer>







</main>
);
}