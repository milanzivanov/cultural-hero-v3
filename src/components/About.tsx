"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PersonPanel from "./PersonPanel";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="relative w-full">
          <div className="relative z-10 mx-auto justify-center flex h-full items-center">
            <h2 className="text-pretty text-center p-5 text-2xl font-extrabold tracking-wide text-slate-200 lg:text-3xl">
              <span className="mb-0 block md:mb-2">Manifest </span>
              <span className="block">kulturnog heroja</span>
            </h2>
          </div>
          <div className="absolute md:rounded-3xl inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-45"></div>
        </div>

        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="relative z-10">
            <h2 className="text-center px-5 py-6 md:pb-8 md:pt-14 text-xl font-bold uppercase leading-6 tracking-wide text-gray-700 md:px-0 md:text-2xl">
              Kulturno-herojsku posadu čine
            </h2>

            <div>
              <motion.div
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* 1 */}
                <div className="mb-0 flex flex-col items-start rounded-none bg-slate-100 p-5 shadow-md md:rounded-md">
                  <PersonPanel
                    title="Aleksandar Radović"
                    jobTitle="Urednik tekstova"
                    imgSrc="https://ovkrqbwfxzmoblsaodse.supabase.co/storage/v1/object/public/cultural-hero-avatars/aeksandarAhab2.webp?t=2024-12-12T12%3A35%3A52.803Z"
                    altText="a. radovic personal image"
                    isActive={activeIndex === 0}
                    onShow={() => setActiveIndex(0)}
                  >
                    <div>
                      <p className="text-grey-700 word-wrap mb-5 text-sm md:text-md">
                        Viši diplomirani bibliotekar. Diplomirao na Filozofskom
                        fakultetu u Novom Sadu, Odsek Srpska književnost i jezik
                        (2000) stekavši zvanje profesor srpske književnosti i
                        jezika.
                      </p>

                      <p className="text-grey-700 text-sm md:text-md word-wrap mb-5">
                        U stručnoj periodici piše tekstove i prikaze knjiga iz
                        bibliotečko-informacione delatnosti. Zvanje diplomirani
                        bibliotekar-informatičar-master stiče jula 2010.
                        odbranivši rad Biblioteka Matice srpske (1826-1859) na
                        Filološkom fakultetu Univerziteta u Beogradu.
                      </p>

                      <small className="font-semibold text-gray-700">
                        araddovic@gmail.com
                      </small>
                    </div>
                  </PersonPanel>
                </div>

                {/* 2 */}
                <div className="flex flex-col items-start rounded-md bg-slate-100 p-5 shadow-md">
                  <PersonPanel
                    title="Miloš Zubac"
                    jobTitle="Urednik tekstova"
                    imgSrc="https://ovkrqbwfxzmoblsaodse.supabase.co/storage/v1/object/public/cultural-hero-avatars/milosZubac.webp?t=2024-12-12T12%3A36%3A32.246Z"
                    altText="m. zubac personal image"
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                  >
                    <div>
                      <p className="text-grey-700 text-sm md:text-md word-wrap mb-5">
                        Miloš Zubac je srpski književnik i muzičar iz Novog
                        Sada. Pesnik, esejista, kantautor i scenski pripovedač.
                        Pokretač je i jedan od aktera južnoslovenskog muzičkog
                        kolektiva Novi Odmetnici.
                      </p>

                      <p className="text-grey-700 word-wrap mb-5 text-sm md:text-md">
                        Samosvojan ali i saboran ‒ dosledno je naklonjen
                        stvaralačkim partnerstvima u književnosti i muzici.
                        Miloševe pesme izvodili su ili snimali brojni kantautori
                        i sastavi iz regiona.
                      </p>

                      <a
                        className="font-semibold text-gray-700"
                        href="https://miloszubac.blogspot.com/"
                        target="_blank"
                      >
                        <small>miloszubac.blogspot.com</small>
                      </a>
                    </div>
                  </PersonPanel>
                </div>

                {/* 3 */}
                <div className="flex flex-col items-start rounded-md bg-slate-100 p-5 shadow-md">
                  <PersonPanel
                    title="Vasilije Milnović"
                    jobTitle="Urednik tekstova"
                    imgSrc="https://ovkrqbwfxzmoblsaodse.supabase.co/storage/v1/object/public/cultural-hero-avatars/vasilijeTransparent.webp"
                    altText="v. milnovic personal image"
                    isActive={activeIndex === 2}
                    onShow={() => setActiveIndex(2)}
                  >
                    <div>
                      <p className="text-grey-700 text-sm md:text-md word-wrap mb-5">
                        Vasilije Milnović je rođen u Novom Sadu 1978. godine,
                        gde se i školovao. Doktorirao je na novosadskom
                        Filozofskom fakultetu na temu „Pitanje tradicije u
                        kontekstu srpske avangarde“.
                      </p>

                      <p className="text-grey-700 word-wrap mb-5 text-sm md:text-md">
                        Trenutno obavlja funkciju rukovodioca Centra za nauku
                        Univerzitetske biblioteke „Svetozar Marković“ u
                        Beogradu. Redovno objavljuje u stručnoj periodici radove
                        iz nauke o književnosti, ali i digitalne humanistike,
                        bibliotekarstva i informacionih nauka i Кnowledge
                        Management-a. Jedan je od osnivača portala{" "}
                        <span className="font-medium italic">
                          „Кulturni heroj“
                        </span>
                        .
                      </p>

                      <small className="font-semibold text-gray-700">
                        milnovic@unilib.rs
                      </small>
                    </div>
                  </PersonPanel>
                </div>

                {/* 4 */}
                <div className="flex flex-col items-start rounded-md bg-slate-100 p-5 shadow-md">
                  <PersonPanel
                    title=" Milan Živanov"
                    jobTitle="Developer & tehnička služba portala"
                    imgSrc="https://ovkrqbwfxzmoblsaodse.supabase.co/storage/v1/object/public/cultural-hero-avatars/milanTransparent.webp?t=2024-12-12T12%3A37%3A16.347Z"
                    altText="m. zivanov peronal image"
                    isActive={activeIndex === 3}
                    onShow={() => setActiveIndex(3)}
                  >
                    <div>
                      <p className="text-grey-700 text-sm md:text-md word-wrap mb-5">
                        Strukovni inženjer grafičkog inženjerstva sa primesama
                        dizajna. Diplomirao na Visokoj tehičkoj školi strukovnih
                        studija u Novom Sadu.
                      </p>

                      <p className="text-grey-700 word-wrap mb-5 text-sm md:text-md">
                        U slobodno vreme razvija portale/aplikacije/sajtove
                        poput Kulturnog heroja i uči tehnologije iz IT sfere
                        koje ga zanimaju...
                      </p>

                      <a
                        className="font-semibold text-gray-700"
                        href="https://milanzivanov.com"
                        target="_blank"
                      >
                        <small>milanzivanov.com</small>
                      </a>
                    </div>
                  </PersonPanel>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
