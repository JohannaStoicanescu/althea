import { LuMail } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

import ContactForm from "./ContactForm";

const FormSection = () => {
  return (
    <section className="bg-white pt-28 lg:px-32 px-4">
      <p className="text-[color:--primary-color] font-medium py-2">Contact</p>
      <h3 className="font-semibold text-3xl small:text-4xl sm:text-5xl">
        Intéressés ?
      </h3>
      <div className="sm:flex">
        <p className="font-semibold  text-3xl small:text-4xl sm:text-5xl mr-2">
          Nous avons
        </p>
        <p className="font-semibold  text-3xl small:text-4xl sm:text-5xl text-[color:--primary-color]">
          besoin de vous.
        </p>
      </div>
      <p className="text-gray-500 py-6 mb-9">
        Rejoignez nous pour co-construire la solution parfaite pour les
        entreprises de services à la personne.
      </p>
      <div className="grid lg:grid-cols-2 pb-28">
        <div className="flex flex-col items-start pt-12">
          <div className="flex justify-start items-start">
            <div className="bg-gray-100 p-4 rounded-md">
              <FiPhoneCall className="size-9 text-[color:--primary-color]" />
            </div>
            <div className="pl-6">
              <p className="mb-2">Téléphone</p>
              <a
                href="tel:+33767300833"
                className="text-[color:--secondary-text-color] hover:text-[color:--tertiary-color] transition-all"
              >
                +33 7 67 30 08 33
              </a>
              <p className="text-[color:--secondary-text-color]"></p>
            </div>
          </div>
          <div className="flex justify-center items-start my-9">
            <div className="bg-gray-100 p-4 rounded-md">
              <LuMail className="size-9 text-[color:--primary-color]" />
            </div>
            <div className="pl-6">
              <p className="mb-2">Adress E-mail</p>
              <a
                href="mailto:althea.assistance.pro@gmail.com"
                className="text-[color:--secondary-text-color] hover:text-[color:--tertiary-color] transition-all"
              >
                althea.assistance.pro@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
