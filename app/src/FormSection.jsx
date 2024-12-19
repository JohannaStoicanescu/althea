import ContactForm from "./ContactForm";

const FormSection = () => {
  return (
    <section className="bg-white pt-28 lg:px-32 px-4">
      <p className="text-[color:--primary-color] font-medium py-2">Contact</p>
      <h3 className="font-semibold text-5xl">Intéressés ?</h3>
      <div className="flex">
        <p className="font-semibold text-5xl mr-2">Nous avons </p>
        <p className="font-semibold text-5xl text-[color:--primary-color]">
          besoin de vous.
        </p>
      </div>
      <p className="text-gray-500 py-6 mb-9">
        Rejoignez nous pour co-construire la solution parfaite pour les
        <br /> entreprises de services à la personne.
      </p>
      <div className="grid lg:grid-cols-2 pb-28">
        <div className="flex flex-col items-start pt-20">
          <div className="flex justify-start items-start">
            <div className="bg-gray-100 p-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 text-[color:--primary-color]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </div>
            <div className="pl-6">
              <p className="mb-2">Téléphone</p>
              <p className="text-[color:--secondary-text-color]">
                06 37 43 33 19
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start my-9">
            <div className="bg-gray-100 p-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9 text-[color:--primary-color]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </div>
            <div className="pl-6">
              <p className="mb-2">Email Address</p>
              <p className="text-[color:--secondary-text-color]">
                barthelemyguillou@orange.fr
              </p>
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
