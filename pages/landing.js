import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar transparent />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 bg-blueGray-800">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">{t('hero_title')}</h1>
                  <p className="mt-4 text-lg text-blueGray-200">{t('hero_subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16" style={{ transform: "translateZ(0)" }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 2560 100">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        {/* Features Section */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">

              {/* Card 1 */}
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-dna"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{t('feature_1_title')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{t('feature_1_desc')}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{t('feature_2_title')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{t('feature_2_desc')}</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      <i className="fas fa-file-medical"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{t('feature_3_title')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{t('feature_3_desc')}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer Section */}
      </main>
      <Footer />
    </>
  );
}
