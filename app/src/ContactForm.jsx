import { useRef, useState } from "react";
import { PiInfoBold } from "react-icons/pi";

const ContactForm = () => {
  const form = useRef();
  const [info1, useInfo1] = useState(false);
  const [info2, useInfo2] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const back_end_url =
      process.env.BACKEND_URL || "https://api.althea-assistance.fr";
    fetch(`${back_end_url}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        role: "",
        origin: "site web",
        text: e.target.text.value,
        consentToEmails: e.target.consentToEmails.checked,
      }),
    });
    // We'll come back to this later
    // emailjs.sendForm(
    //   "service_stw5o3t",
    //   "template_vs15elp",
    //   form.current,
    //   "xx2HzIcm5a-qDtGjH"
    // );

    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col  border border-slate-200 rounded-xl p-10"
    >
      <label htmlFor="email">Votre adresse e-mail</label>
      <input
        id="email"
        type="email"
        placeholder="exemple@gmail.com"
        className="border border-slate-200 rounded-md my-3 py-2 px-5 hover:border-[color:--tertiary-color] focus:border-[color:--secondary-color] transition-all"
      />
      <label htmlFor="text" className="mt-2" >
        Dites-nous tout
      </label>
      <textarea
        id="text"
        type="text"
        maxLength={1000}
        placeholder="Expliquez-nous brièvement les problèmes auxquels vous faites face au quotidien..."
        className="border border-slate-200 rounded-md my-3 py-2 px-5 h-36  hover:border-[color:--tertiary-color] focus:border-[color:--secondary-color] transition-all"
      />
      <div className="flex items-center">
        <label className="flex items-center text-gray-400 mb-1">
          <input id="consentToEmails" type="checkbox" className="mr-2 " />
          <p>Je souhaite être notifié des avancées d’Althéa par e-mail.</p>
        </label>
        <div onClick={() => useInfo1(!info1)} className="w-6">
          <PiInfoBold className="ml-1 text-[color:--primary-color] hover:text-[color:--tertiary-color] cursor-pointer" />
        </div>
      </div>
      {info1 && (
        <div
          onClick={() => useInfo1(false)}
          className="flex items-center bg-[color:--secondary-color] my-2 p-4 rounded-lg contain-inline-size cursor-pointer"
        >
          <div className="mr-6 w-9">
            <PiInfoBold className="text-[color:--primary-color]" />
          </div>
          <p className="text-gray-500 text-sm">
            En cochant cette case, vous acceptez de recevoir nos emails
            d'information sur Althéa et ses services. Vous pouvez vous
            désinscrire à tout moment en nous envoyant un e-mail.
          </p>
        </div>
      )}
      <div className="flex items-center">
        <label className="flex items-center text-gray-400">
          <input type="checkbox" required className="mr-2" />
          <p>
            J’accepte les conditions générales et la politique de
            confidentialité.
          </p>
        </label>
        <div onClick={() => useInfo2(!info2)} className="w-6">
          <PiInfoBold className="ml-1 text-[color:--primary-color] hover:text-[color:--tertiary-color] cursor-pointer" />
        </div>
      </div>
      {info2 && (
        <div
          onClick={() => useInfo2(false)}
          className="flex items-center bg-[color:--secondary-color] my-2 p-4 rounded-lg contain-inline-size cursor-pointer"
        >
          <div className="mr-6 w-9">
            <PiInfoBold className="text-[color:--primary-color]" />
          </div>
          <p className="text-gray-500 text-sm">
            Vos données resteront confidentielles et ne seront utilisées que
            pour vous répondre.
          </p>
        </div>
      )}
      <button
        type="submit"
        onSubmit={(e) => e.preventDefault()}
        className="text-white border border-[color:--primary-color] bg-[color:--primary-color] rounded-md py-3 px-6 mt-4 cursor-pointer hover:border-[color:--tertiary-color] hover:bg-white hover:text-[color:--tertiary-color] transition-all"
      >
        Envoyer Message
      </button>
    </form>
  );
};

export default ContactForm;
