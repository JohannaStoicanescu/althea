import { FiPhoneCall } from "react-icons/fi";
import altheaLogo from "./assets/altheaLogo.png";
import icon1 from "./assets/icon1.png";

const Footer = () => {
  return (
    <footer className="flex flex-col small:flex-row small:justify-between items-center small:items-end px-4 pb-24 pt-16 lg:py-24 lg:px-32 relative overflow-hidden	">
      <div>
        <img src={altheaLogo} alt="Althea logo" className="w-28 ml-6" />
        <p className="text-gray-500 max-w-72 my-4">
          Gérez votre entreprise de services à la personne en toute simplicité
        </p>
        <div className="flex items-center">
          <div className="w-9">
            <FiPhoneCall className="text-[color:--primary-color]" />
          </div>
          <a
            href="tel:+33663722417"
            className="hover:text-[color:--tertiary-color] cursor-pointer transition-all relative z-10"
          >
            Nous appeler
          </a>
        </div>
      </div>
      <p className="text-gray-500 mt-10 small:mt-0">© 2024 Althéa.</p>
      <div className="absolute -bottom-20 -left-5 rotate-12 z-0">
        <img src={icon1} alt="icon1" className="w-72" />
      </div>
    </footer>
  );
};

export default Footer;
