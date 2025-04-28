import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Image from "next/image";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <>
      <Navbar transparent />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/landing.jpg')", // Usa immagine esistente
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
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

        {/* About Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{t('about_title')}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {t('about_subtitle')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Image
                  alt="About"
                  src="/img/img-1-1000x600.jpg"
                  className="max-w-full rounded-lg shadow-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">{t('team_title')}</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">{t('team_subtitle')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 relative block bg-blueGray-800">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">{t('final_cta_title')}</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">{t('final_cta_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">{t('contact_title')}</h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">{t('contact_subtitle')}</p>
                    <form>
                      <div className="relative w-full mb-3 mt-8">
                        <input type="text" placeholder="Nome Completo" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <input type="email" placeholder="Email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full" />
                      </div>
                      <div className="relative w-full mb-3">
                        <textarea rows="4" placeholder="Scrivi il tuo messaggio..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full" />
                      </div>
                      <div className="text-center mt-6">
                        <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg w-full">
                          {t('button_send')}
                        </button>
                      </div>
                    </form>
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
