import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PAUDWebsite = () => {
  return (
    <div className="font-fredoka min-h-screen">
      {/* Header */}
      <Navbar></Navbar>

      {/* Hero Section - Full Width Background */}
      <section className="bg-card-belajar py-16 pt-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/images/artikel1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <p className="flex items-center text-sm mb-2 text-gray-400">
                    <img className="w-5 mr-2" src="/images/calendar.png" alt=""/>
                    Apr 2, 2025
                </p>

                <a href="#">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Outbound Cah Cilik-Cilik</h3>
                </a>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Peserta didik PAUD telah melaksanakan Outbound bersama-sama di Boyolali, Jawa Tengah pada 2 April 2025
                </p>
                
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                  Baca selengkapnya
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                    >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <p className="flex items-center mt-3 text-sm text-gray-400">
                    <img className="w-6 mr-1" src="/images/account_circle.png" alt=""/>
                    Opal Gua
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default PAUDWebsite;
