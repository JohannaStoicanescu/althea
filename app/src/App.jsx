import reactLogo from "./assets/react.svg";
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
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <nav className="flex justify-between items-center sm:px-32 px-4 py-5 bg-[color:--secondary-color]">
        <img src={altheaLogo} alt="React Logo" className="w-28" />
        <ul className="flex justify-around items-center text-[color:--secondary-text-color]">
          <li className="mx-4 cursor-pointer hover:text-[color:--tertiary-color]">
            Notre solution
          </li>
          <li className="mx-4 cursor-pointer hover:text-[color:--tertiary-color]">
            À propos
          </li>
        </ul>
      </nav>
      {/**
       * SECTION1
       */}
      <section className="flex flex-col items-center bg-[color:--secondary-color] text-center">
        <div className="pt-28 pb-12">
          <div>
            <h3 className="font-semibold text-6xl">La solution de gestion</h3>
            <div className="flex justify-center items-center font-semibold text-6xl">
              <p>de</p>
              <h3 className="text-[color:--primary-color] font-semibold text-6xl m-2">
                services à la personne
              </h3>
            </div>
            <p className="m-6 text-[color:--secondary-text-color]">
              Althéa est votre solution tout-en-un pour optimiser vos plannings,
              <br />
              simplifier vos facturations et suivre vos intervenants en temps
              réel.
            </p>
          </div>
          <div className="m-6">
            <button
              className="text-white border border-[color:--primary-color] bg-[color:--primary-color] rounded-md py-3 px-6 mx-3 cursor-pointer hover:border-[color:--tertiary-color] hover:bg-[--secondary-color] hover:text-[color:--tertiary-color] transition-all"
              onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
        <div className="relative w-screen pt-80">
          <img
            src={maquette}
            alt="Maquette"
            className="w-5/12 absolute bottom-0 m-auto left-0 right-0"
          />
        </div>
      </section>
      {/**
       * SECTION2
       */}
      <section className="flex flex-col justify-center items-center">
        <div className="text-center py-20">
          <p className="text-[color:--primary-color] font-medium py-2">
            Notre solution
          </p>
          <h3 className="font-semibold text-5xl">
            Gérer une entreprise de services
            <br /> à la personne n'a jamais été aussi simple
          </h3>
          <p className="text-gray-500 py-6">
            Que vous gériez une petite structure ou un grand réseau, notre outil
            <br /> vous accompagne dans toutes les étapes de votre activité :
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-80 p-8 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 bg-white text-[color:--primary-color] p-3 rounded-2xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-2xl font-semibold mt-7 mb-3">
              Planification facile
            </p>
            <p className="text-gray-500">
              Organisez les plannings de vos <br /> intervenants en quelques
              clics.
            </p>
          </div>
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-80 p-8 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 bg-white text-[color:--primary-color] p-3 rounded-2xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-2xl font-semibold mt-7 mb-3">
              Suivi en temps réel
            </p>
            <p className="text-gray-500">Grâce à la télégestion, suivez</p>
            <p className="text-gray-500">les interventions</p>
            <p className="text-gray-500">directement depuis votre</p>
            <p className="text-gray-500">tableau de bord.</p>
          </div>
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-80 p-8 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 bg-white text-[color:--primary-color] p-3 rounded-2xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-2xl font-semibold mt-7 mb-3">Facturation</p>
            <p className="text-gray-500">Créez vos devis et factures en</p>
            <p className="text-gray-500">un instant et assurez un suivi</p>
            <p className="text-gray-500">précis des paiements.</p>
          </div>
          <div className="flex flex-col items-start bg-gray-100 rounded-2xl w-80 p-8 m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 bg-white text-[color:--primary-color] p-3 rounded-2xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-2xl font-semibold mt-7 mb-3">
              Conformité assurée
            </p>
            <p className="text-gray-500">Respectez facilement les</p>
            <p className="text-gray-500">exigences réglementaires</p>
            <p className="text-gray-500">(CESU, déclarations URSSAF,</p>
            <p className="text-gray-500">etc.)</p>
          </div>
        </div>

        <div className="text-center py-20">
          <p className="text-[color:--primary-color] font-medium py-2">
            Pour l'entreprise
          </p>
          <h3 className="font-semibold text-5xl">
            Gagnez du temps et
            <br /> renforcez la satisfaction client
          </h3>
          <p className="text-gray-500 py-6">
            Transformez votre façon de travailler grâce à un logiciel pensé
            <br /> pour réduire la complexité de vos tâches quotidiennes.
          </p>
        </div>

        <div className="flex justify-around items-center">
          <div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="font-semibold text-2xl ml-8">Gagnez du temps </h3>
            </div>
            <p className="text-gray-500 my-6">
              Automatisez les tâches administratives comme la <br />
              planification, la facturation et le suivi des paiements. <br />
              Réduisez les erreurs humaines et consacrez plus de temps
              <br /> au développement de votre activité.
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="font-semibold text-2xl ml-8">
                Améliorez votre rentabilité
              </h3>
            </div>
            <p className="text-gray-500 my-6">
              Optimisez la gestion de vos ressources grâce à une vision <br />
              claire des plannings et des coûts. Diminuez les temps morts
              <br /> et maximisez l’utilisation de vos équipes.
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              <h3 className="font-semibold text-2xl ml-8">
                Renforcez la satisfaction client
              </h3>
            </div>
            <p className="text-gray-500 my-6">
              Offrez un service de qualité grâce à une organisation fluide.
              <br />
              Communiquez efficacement avec vos clients, respectez <br />
              leurs préférences et répondez rapidement à leurs besoins.
            </p>
          </div>
          <img src={image1} alt="" className="w-1/3" />
        </div>

        <div className="text-center py-20">
          <p className="text-[color:--primary-color] font-medium py-2">
            Pour les professionnels de la santé
          </p>
          <h3 className="font-semibold text-5xl">
            Concentrez vous
            <br /> sur vos clients
          </h3>
          <p className="text-gray-500 py-6">
            Gagnez du temps et créez un environnement de travail <br /> organisé
            et efficace.
          </p>
        </div>

        <div className="flex justify-around items-center pb-24">
          <img src={image2} alt="" className="w-2/6" />
          <div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="font-semibold text-2xl ml-8">
                Gestion multi-métiers
              </h3>
            </div>
            <p className="text-gray-500 my-6">
              Assistance à la personne, ménage, garde d'enfants...
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="font-semibold text-2xl ml-8">
                Messagerie et suivi des appels
              </h3>
            </div>
            <p className="text-gray-500 my-6">
              Chat en temps réel pour une satisfaction client maximale
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 bg-[color:--secondary-color] text-[color:--primary-color] p-1 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              <h3 className="font-semibold text-2xl ml-8">Télégestion </h3>
            </div>
            <p className="text-gray-500 my-6">
              Permettez à vos équipes de pointer leurs interventions en <br />
              temps réel via une application mobile.
            </p>
          </div>
        </div>
      </section>
      {/**
       * SECTION
       */}
      <section className=" bg-[#f9f4ff] p-32">
        <div className="grid grid-cols-2 pb-28">
          <div>
            <p className="text-[color:--primary-color] font-medium py-2">
              À propos d’Althéa
            </p>
            <h3 className="font-semibold text-5xl">
              Une solution pensée <br /> pour répondre à vos <br />
              problématiques
            </h3>
            <p className="text-gray-500 py-6 mb-9">
              Althéa est une solution en cours de développement. <br />
              Nous prenons le temps d’étudier les principaux défis rencontrés
              par
              <br />
              les entreprises de services à la personne pour créer la solution
              la
              <br />
              plus adaptée aux défis moderne du secteur
            </p>
          </div>
          <img src={image3} alt="" className="rounded-xl" />
        </div>
        <div className="flex flex-col ">
          <div className="text-center pb-4">
            <p className="text-[color:--primary-color] font-medium py-2">
              Notre objectif
            </p>
            <h3 className="font-semibold text-5xl">
              Créer la solution la plus complète <br />
              et la plus intuitive du marché
            </h3>
            <p className="py-6">
              Vous proposer une gamme variée et adaptée <br /> de services
              d’aide à domicile, incluant :
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="bg-white rounded-2xl w-96 p-10 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-7 mb-3">
                Aide à domicile
              </p>
              <p className="text-gray-500">
                Ménage, préparation des repas, courses, etc
              </p>
            </div>
            <div className="bg-white rounded-2xl w-96 p-10 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-7 mb-3">
                Auxiliaire de vie
              </p>
              <p className="text-gray-500">
                Spécialisé dans l’accompagnement des personnes en perte
                d’autonomie
              </p>
            </div>
            <div className="bg-white rounded-2xl w-96 p-10 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-7 mb-3">Aide ménagère</p>
              <p className="text-gray-500">
                Nettoyage, la lessive, et l’entretien de la maison
              </p>
            </div>
            <div className="bg-white rounded-2xl w-96 p-10 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-7 mb-3">
                Infirmier(e) libérale
              </p>
              <p className="text-gray-500">
                Intervenant à domicile pour des soins médicaux prescrits
              </p>
            </div>
            <div className="bg-white rounded-2xl w-96 p-10 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-7 mb-3">
                Infirmier(e) Diplômé(e) d’État
              </p>
            </div>
            <div className="bg-white rounded-2xl w-96 p-10 m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 bg-blue-100 text-[--primary-color] p-3 rounded-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-2xl font-semibold mt-7 mb-3">
                Autre professionnels
              </p>
            </div>
          </div>
        </div>
      </section>
      {/**
       * FOOTER
       */}

      <div id="contact-section">
        <FormSection />
      </div>
    </>
  );
}

export default App;
