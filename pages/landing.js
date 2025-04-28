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
        {/* Hero Section senza immagine di sfondo */}
        <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen-75 bg-blueGray-800">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <h1 className="text-white font-semibold text-5xl">{t('hero_title')}</h1>
                <p className="mt-4 text-lg text-blueGray-200">{t('hero_subtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {/* Card 1 */}
              <div className="w-full md:w-4/12 px-4 text-center">
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
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{t('feature_3_title')}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">{t('feature_3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{t('about_title')}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">{t('about_subtitle')}</p>
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
            {/* Team Cards */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 text-center">
                <Image
                  alt="Doctor 1"
                  src="/img/team-1-800x800.jpg"
                  className="shadow-lg rounded-full mx-auto mb-4"
                  width={150}
                  height={150}
                />
                <h5 className="text-xl font-semibold">Dr. Laura Bianchi</h5>
                <p className="text-blueGray-400">Dermatologa</p>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <Image
                  alt="Doctor 2"
                  src="/img/team-2-800x800.jpg"
                  className="shadow-lg rounded-full mx-auto mb-4"
                  width={150}
                  height={150}
                />
                <h5 className="text-xl font-semibold">Dr. Marco Rossi</h5>
                <p className="text-blueGray-400">Ricercatore AI</p>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <Image
                  alt="Doctor 3"
                  src="/img/team-3-800x800.jpg"
                  className="shadow-lg rounded-full mx-auto mb-4"
                  width={150}
                  height={150}
                />
                <h5 className="text-xl font-semibold">Dr.ssa Chiara Verdi</h5>
                <p className="text-blueGray-400">Specialista Skin Care</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
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
