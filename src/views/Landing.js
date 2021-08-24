import React, { useState } from "react";
import { send } from "emailjs-com";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import Galery from "components/Galery.js";

export default function Landing() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_phsb3gd",
      "template_xci03ga",
      toSend,
      "user_wGKNvLoWgd57cQk5sg5OI"
    )
      .then((res) => {
        console.log("SUCCESS! ", res.status, res.text);
        console.log("CEK ", res);
      })
      .catch((err) => {
        console.log("FAILED ", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <p className="mt-4 text-lg text-gray-300">
                    PT. Bams Agency Indonesia adalah perusahaan swasta yang
                    didirikan pada tahun 2020. Pada pendiriannya, perusahaan
                    mengamankan dan mengkonsolidasikan portofolio kepemilikan
                    saham yang terdiversifikasi. Perusahaan sekarang memainkan
                    peran aktif dalam merangsang dan membimbing pengembangan
                    perusahaan pelanggannya, semua entitas mapan dan spesialis
                    terkemuka di bidangnya masing-masing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Kami berpikir untuk jangka panjang
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Kami terlibat dalam pengambilan keputusan yang bijaksana
                      dan percaya bahwa hasil yang unggul harus mendorong
                      keputusan kami.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Kami bekerja sama untuk mencapai tujuan bersama.
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Kami menunjukkan rasa hormat dan kerendahan hati terhadap
                      satu sama lain dan klien kami. Kami percaya dalam
                      menciptakan lingkungan kerja yang mendukung yang mendorong
                      kerja tim, kolegialitas, dan komunikasi yang efektif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Kami berusaha untuk keunggulan{" "}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Kami melakukan upaya ekstra, mempraktikkan peningkatan
                      berkelanjutan, dan tetap fleksibel untuk beradaptasi
                      dengan keadaan yang berubah.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Visi Kami
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  <ul>
                    <li>Menjadi mitra terpercaya bagi klien kami</li>
                    <li>
                      Menjadi pemimpin yang disegani dalam manajemen aset global
                    </li>
                  </ul>
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Misi Kami</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Untuk menambah nilai dengan manajemen portofolio aktif untuk
                    membantu klien kami mencapai tujuan keuangan jangka panjang
                    mereka. Kami mencapai ini melalui strategi investasi kami,
                    mengikuti nilai-nilai dan prinsip-prinsip investasi kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Bentuk Kerjasama</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Berikut beberapa bentuk kerja sama BAMS AGENCY dengan
                  perusahaan lain
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="rounded-lg h-72 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://ih1.redbubble.net/image.86288047.9243/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Shooting Stars
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-red-600	inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="rounded-lg h-72 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://ih1.redbubble.net/image.86288047.9243/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Shooting Stars
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-red-600	inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="rounded-lg h-72 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://ih1.redbubble.net/image.86288047.9243/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Shooting Stars
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-red-600	inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="rounded-lg h-72 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://ih1.redbubble.net/image.86288047.9243/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                  Shooting Stars
                </h2>
                <p class="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
                <a class="text-red-600	inline-flex items-center mt-3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  STRATEGI PERTUMBUHAN
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  BAGAIMANA KITA MENCAPAI
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Kami menerapkan manajemen aktif untuk mencari nilai terbaik
                  bagi klien kami. Analisis menyeluruh dan kerangka nilai
                  relatif kami mengarah pada keyakinan dalam pilihan kami, yang
                  dapat menghasilkan hasil yang terfokus.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  BAGAIMANA KITA BEKERJA
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Kami secara kolektif mengasah ide melalui penyerbukan silang
                  tanpa batas di seluruh tim kami untuk penilaian yang lebih
                  baik dan hasil yang kompetitif.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  BAGAIMANA KITABERFIKIR{" "}
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Kami membawa perspektif yang lebih fleksibel daripada yang
                  lain. Kami melihat peluang yang lebih luas dan melihat
                  melampaui batasan konvensional untuk menemukan nilai
                  tersembunyi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          value={toSend.from_name}
                          onChange={handleChange}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Full Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                          name="message"
                          defaultValue={toSend.message}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          onClick={onSubmit}
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
