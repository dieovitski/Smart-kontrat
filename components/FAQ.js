import React, { useState } from "react";
import Head from "next/head";
export default function MyApp() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

  return (
    <div id="faq">
      <div class=" flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
        <div class="md:py-36 py-20">
          <h1
            role="heading"
            class="xl:text-6xl md:text-4xl text-xl font-bold leading-10 text-white"
          >
            Sıkça Sorulan Sorular 
          </h1>
        </div>
        <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
          <div class="bg-white shadow rounded p-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                NFT nedir? 
                </h2>
              </div>
              <button
                onClick={() => setFaq1(!faq1)}
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq1 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {faq1 && (
              <ul class="">
                <li>
                  <p class="text-base leading-normal text-gray-600 mt-4">
                  NFT, kullanıcıların satın alabileceği, sahip olabileceği ve ticaret yapabileceği, blok zinciri tarafından yönetilen mülkiyete sahip benzersiz, dijital bir öğe olan "Fungible olmayan jeton" anlamına gelir. Bazı NFT'ler dijital sanat işlevi görse de, web sitelerine, etkinlik biletlerine, oyun öğelerine ve fiziksel nesneler için sahiplik kayıtlarına özel erişim gibi ek avantajlar da sunabilirler. Bunu, türünün tek örneği "üyelere özel" bir kart olarak da hizmet edebilecek benzersiz bir sanat eseri olarak düşünün. 
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div class="bg-white shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                NFT'yi nasıl satın alabilirim? 
                </h2>
              </div>
              <button
                onClick={() => {
                  setFaq2(!faq2);
                }}
                data-menu
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq2 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq2 && (
              <ul>
                <li>
                  <p class="text-base leading-normal text-gray-600 mt-4 ">
                  Bir cüzdana ihtiyacın var! Chrome/Brave tarayıcısı veya mobil uygulaması için metamask.io uzantısını indirin. Bilginize, gaz fiyatlarıyla ilgili her işlemle ilgili bir ücret olacaktır. 
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div class="bg-white shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                Aynı anda kaç yuz satın alabilirim? 
                </h2>
              </div>
              <button
                onClick={() => {
                  setFaq3(!faq3);
                }}
                data-menu
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq3 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq3 && (
              <ul>
                <li>
                  <p class="text-base leading-normal text-gray-600 mt-4 ">
                  İşlem başına 5 limit ile istediğiniz kadar satın alabilirsiniz. 
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}