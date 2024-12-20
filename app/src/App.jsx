import { FaHandsHelping } from "react-icons/fa";
import { TbNurse, TbNurseFilled, TbFileInvoice } from "react-icons/tb";
import { TbMoodSmileBeam } from "react-icons/tb";
import { MdAccessTime } from "react-icons/md";
import { LiaUserCheckSolid } from "react-icons/lia";
import { LuMailCheck } from "react-icons/lu";
import { MdOutlineConnectedTv } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { HiUsers } from "react-icons/hi2";
import { GrDocumentTime } from "react-icons/gr";
import { FaRegCheckCircle, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";

import altheaLogo from "./assets/altheaLogo.png";
import maquette from "./assets/maquette.png";
import icon1 from "./assets/icon1.png";
import icon3 from "./assets/icon3.png";
import icon3bis from "./assets/icon3bis.png";
import icon4 from "./assets/icon4.png";
import icon2 from "./assets/icon2.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

import FormSection from "./FormSection";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="w-screen">
      <nav className="flex justify-between items-end sm:px-32 px-4 py-5 bg-[color:--secondary-color]">
        <img src={altheaLogo} alt="React Logo" className="w-20 small:w-28" />
        <ul className="flex justify-around items-center text-[color:--secondary-text-color] text-sm">
          <li
            onClick={() =>
              document
                .getElementById("solution-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mx-4 cursor-pointer hover:text-[color:--tertiary-color]"
          >
            Notre solution
          </li>
          <li
            onClick={() =>
              document
                .getElementById("about-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mx-4 cursor-pointer hover:text-[color:--tertiary-color]"
          >
            À propos
          </li>
        </ul>
      </nav>
      {/**
       * SECTION1
       */}
      <section className="flex flex-col items-start md:items-center bg-[color:--secondary-color] relative overflow-hidden">
        <div className="px-4 pt-28 pb-12">
          <div className="md:text-center">
            <h3 className="font-semibold text-4xl small:text-5xl sm:text-6xl">
              La solution de gestion de
              <p className="text-[color:--primary-color] font-semibold text-4xl small:text-5xl sm:text-6xl m-2">
                services à la personne
              </p>
            </h3>

            <p className="my-6 text-[color:--secondary-text-color] max-w-xl">
              Althéa est votre solution tout-en-un pour optimiser vos plannings,
              simplifier vos facturations et suivre vos intervenants en temps
              réel.
            </p>
          </div>
          <div className="md:m-6 md:text-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="text-white border border-[color:--primary-color] bg-[color:--primary-color] rounded-md py-3 px-6 cursor-pointer hover:border-[color:--tertiary-color] hover:bg-[--secondary-color] hover:text-[color:--tertiary-color] transition-all"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
        <div className="w-screen pt-5 bg-[color:--secondary-color]">
          <div className="w-10/12 sm:w-5/12 m-auto left-0 right-0 rounded-t-2xl relative z-10">
            <img className="rounded-xl" src={maquette} alt="Maquette" />
          </div>
          <div className="absolute z-0 -left-10 -bottom-5 lg:-bottom-10 rotate-12 opacity-10">
            <img
              src={icon1}
              alt=""
              className="w-72 md:w-96 lg:w-110 xl:w-128"
            />
          </div>
          <div className="absolute z-0 opacity-10 -right-10 bottom-0 md:bottom-28 lg:bottom-40 large:bottom-48 xl:bottom-60">
            <img
              src={icon2}
              alt=""
              className="w-72 md:w-96 lg:w-110 xl:w-150"
            />
          </div>
        </div>
      </section>
      {/**
       * SECTION2
       */}
      <section className="flex flex-col justify-center items-center px-4">
        <div
          id="solution-section"
          className="flex flex-col justify-center items-start sm:items-center py-20"
        >
          <p className="text-[color:--primary-color] font-medium py-2">
            Notre solution
          </p>
          <h3 className="font-semibold text-3xl small:text-4xl sm:text-5xl sm:text-center max-w-4xl">
            Gérer une entreprise de services à la personne n'a jamais été aussi
            simple
          </h3>
          <p className="text-gray-500 py-6 sm:text-center max-w-lg">
            Que vous gériez une petite structure ou un grand réseau, notre outil
            vous accompagne dans toutes les étapes de votre activité :
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-full sm:w-80 p-8 my-4 sm:m-4">
            <FaRegCalendarAlt className="size-16 bg-white text-[--primary-color] p-3 rounded-2xl" />
            <p className="text-2xl font-semibold mt-7 mb-3">
              Planification facile
            </p>
            <p className="text-gray-500">
              Organisez les plannings de vos intervenants en quelques clics.
            </p>
          </div>
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-full sm:w-80 p-8 my-4 sm:m-4">
            <GrDocumentTime className="size-16 bg-white text-[--primary-color] p-3 rounded-2xl" />
            <p className="text-2xl font-semibold mt-7 mb-3">
              Suivi en temps réel
            </p>
            <p className="text-gray-500">
              Grâce à la télégestion, suivez les interventions directement
              depuis votre tableau de bord.
            </p>
          </div>
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-full sm:w-80 p-8 my-4 sm:m-4">
            <TbFileInvoice className="size-16 bg-white text-[--primary-color] p-3 rounded-2xl" />
            <p className="text-2xl font-semibold mt-7 mb-3">Facturation</p>
            <p className="text-gray-500">
              Créez vos devis et factures en un instant et assurez un suivi
              précis des paiements.
            </p>
          </div>
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-full sm:w-80 p-8 my-4 sm:m-4">
            <FaRegCheckCircle className="size-16 bg-white text-[--primary-color] p-3 rounded-2xl" />
            <p className="text-2xl font-semibold mt-7 mb-3">
              Conformité assurée
            </p>
            <p className="text-gray-500">
              Respectez facilement les exigences réglementaires (CESU,
              déclarations URSSAF, etc.)
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start sm:items-center py-20">
          <p className="text-[color:--primary-color] font-medium py-2">
            Pour l'entreprise
          </p>
          <h3 className="font-semibold text-3xl small:text-4xl sm:text-5xl sm:text-center max-w-2xl">
            Gagnez du temps et renforcez la satisfaction client
          </h3>
          <p className="text-gray-500 py-6 sm:text-center max-w-lg">
            Transformez votre façon de travailler grâce à un logiciel pensé pour
            réduire la complexité de vos tâches quotidiennes.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-around items-center">
          <div className="mt-4">
            <div className="flex items-center">
              <MdAccessTime className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full" />
              <h3 className="font-semibold text-2xl ml-8">Gagnez du temps </h3>
            </div>
            <p className="text-gray-500 my-6 max-w-md">
              Automatisez les tâches administratives comme la planification, la
              facturation et le suivi des paiements. Réduisez les erreurs
              humaines et consacrez plus de temps au développement de votre
              activité.
            </p>
            <div className="flex items-center">
              <SlGraph className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full" />
              <h3 className="font-semibold text-2xl ml-8">
                Améliorez votre rentabilité
              </h3>
            </div>
            <p className="text-gray-500 my-6 max-w-md">
              Optimisez la gestion de vos ressources grâce à une vision claire
              des plannings et des coûts. Diminuez les temps morts et maximisez
              l’utilisation de vos équipes.
            </p>
            <div className="flex items-center">
              <TbMoodSmileBeam className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full" />
              <h3 className="font-semibold text-2xl ml-8">
                Renforcez la satisfaction client
              </h3>
            </div>
            <p className="text-gray-500 my-6 max-w-md">
              Offrez un service de qualité grâce à une organisation fluide.
              Communiquez efficacement avec vos clients, respectez leurs
              préférences et répondez rapidement à leurs besoins.
            </p>
          </div>
          <div className="w-full small:w-3/4 mb-8 sm:mb-4 sm:w-1/3 relative">
            <img
              src={icon2}
              alt=""
              className="w-40 sm:w-24 md:w-40 absolute -bottom-9 sm:-bottom-5 md:-bottom-9 -right-0"
            />
            <img src={image1} alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start sm:items-center py-20">
          <p className="text-[color:--primary-color] font-medium py-2 text-center">
            Pour les professionnels de la santé
          </p>
          <h3 className="font-semibold text-3xl small:text-4xl sm:text-5xl sm:text-center max-w-lg">
            Concentrez vous sur vos clients
          </h3>
          <p className="text-gray-500 py-6 sm:text-center max-w-96">
            Gagnez du temps et créez un environnement de travail organisé et
            efficace.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center pb-24">
          <div className="w-full small:w-3/4 mb-8 sm:mb-4 sm:w-1/3 relative">
            <img
              src={icon3}
              alt=""
              className="absolute -bottom-11 -left-4 sm:-bottom-5 md:-bottom-11 w-24 sm:w-12 md:w-24 "
            />
            <img src={image2} alt="" className="" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <LiaUserCheckSolid className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full" />
              <h3 className="font-semibold text-2xl ml-8">
                Gestion multi-métiers
              </h3>
            </div>
            <p className="text-gray-500 my-6">
              Assistance à la personne, ménage, garde d'enfants...
            </p>
            <div className="flex items-center">
              <LuMailCheck className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full" />
              <h3 className="font-semibold text-2xl ml-8">
                Messagerie et suivi des appels
              </h3>
            </div>
            <p className="text-gray-500 my-6">
              Chat en temps réel pour une satisfaction client maximale
            </p>
            <div className="flex items-center">
              <MdOutlineConnectedTv className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full" />
              <h3 className="font-semibold text-2xl ml-8">Télégestion </h3>
            </div>
            <p className="text-gray-500 my-6 max-w-md">
              Permettez à vos équipes de pointer leurs interventions en temps
              réel via une application mobile.
            </p>
          </div>
        </div>
      </section>
      {/**
       * SECTION
       */}
      <section
        id="about-section"
        className=" bg-[#f9f4ff] p-4 py-32 sm:p-12 md:p-32"
      >
        <div className="lg:grid lg:grid-cols-2 pb-28">
          <div>
            <p className="text-[color:--primary-color] font-medium py-2">
              À propos d’Althéa
            </p>
            <h3 className="font-semibold text-3xl small:text-4xl sm:text-5xl max-w-lg">
              Une solution pensée pour répondre à vos problématiques
            </h3>
            <p className="text-gray-500 py-6 mb-9 max-w-xl">
              Althéa est une solution en cours de développement. Nous prenons le
              temps d’étudier les principaux défis rencontrés par les
              entreprises de services à la personne pour créer la solution la
              plus adaptée aux défis moderne du secteur.
            </p>
          </div>
          <img src={image3} alt="" className="rounded-xl lg:m-4" />
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col justify-center items-start sm:items-center pb-4">
            <p className="text-[color:--primary-color] font-medium py-2 sm:text-center">
              Notre objectif
            </p>
            <h3 className="font-semibold text-3xl small:text-4xl sm:text-5xl sm:text-center max-w-3xl">
              Créer la solution la plus complète et la plus intuitive du marché
            </h3>
            <p className="text-gray-500 py-6 sm:text-center max-w-md">
              Vous proposer une gamme variée et adaptée de services d’aide à
              domicile, incluant :
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="bg-white rounded-2xl w-full my-4 sm:m-4 sm:w-96 p-10">
              <FaHandsHelping className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl" />
              <p className="text-2xl font-semibold mt-7 mb-3">
                Aide à domicile
              </p>
              <p className="text-gray-500">
                Ménage, préparation des repas, courses, etc
              </p>
            </div>
            <div className="bg-white rounded-2xl w-full my-4 sm:m-4 sm:w-96 p-10">
              <FaHandHoldingMedical className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl" />
              <p className="text-2xl font-semibold mt-7 mb-3">
                Auxiliaire de vie
              </p>
              <p className="text-gray-500">
                Spécialisé dans l’accompagnement des personnes en perte
                d’autonomie
              </p>
            </div>
            <div className="bg-white rounded-2xl w-full my-4 sm:m-4 sm:w-96 p-10">
              <MdOutlineCleaningServices className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl" />

              <p className="text-2xl font-semibold mt-7 mb-3">Aide ménagère</p>
              <p className="text-gray-500">
                Nettoyage, la lessive, et l’entretien de la maison
              </p>
            </div>
            <div className="bg-white rounded-2xl w-full my-4 sm:m-4 sm:w-96 p-10">
              <TbNurse className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl" />
              <p className="text-2xl font-semibold mt-7 mb-3">
                Infirmier(e) libérale
              </p>
              <p className="text-gray-500">
                Intervenant à domicile pour des soins médicaux prescrits
              </p>
            </div>
            <div className="bg-white rounded-2xl w-full my-4 sm:m-4 sm:w-96 p-10">
              <TbNurseFilled className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl" />
              <p className="text-2xl font-semibold mt-7 mb-3">
                Infirmier(e) Diplômé(e) d’État
              </p>
            </div>
            <div className="bg-white rounded-2xl w-full my-4 sm:m-4 sm:w-96 p-10">
              <HiUsers className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl" />
              <p className="text-2xl font-semibold mt-7 mb-3">
                Autre professionnels
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="contact-section">
        <FormSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
