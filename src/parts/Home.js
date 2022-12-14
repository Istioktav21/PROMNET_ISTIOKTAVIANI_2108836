/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import BuildWebsite from 'assets/images/Depan.png';

export default function Home() {
  return (
    <section className="home">
      <Fade bottom>
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            HI!
            {' '}
            <br />
            I am Isti Oktaviani
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
            Saya merupakan seorang Mahasiswi di Jurusan Pendidikan Ilmu Komputer
            angkatan 2021 di Universitas Pendidikan Indonesia.
          </p>

          <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-blue rounded-lg shadow-2xl hover:bg-dark-theme-blue transition duration-200">
            Selengkapnya
            <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src={BuildWebsite} alt="Build Website" />
        </div>
      </Fade>
    </section>
  );
}
