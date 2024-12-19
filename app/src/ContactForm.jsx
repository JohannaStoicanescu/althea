import { useRef } from "react";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const back_end_url = process.env.BACKEND_URL || "https://api.althea-assistance.fr";
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
      <label htmlFor="text" className="mt-2">
        Dites nous tout
      </label>
      <textarea
        id="text"
        type="text"
        maxLength={1000}
        placeholder="Expliquez-nous brièvement les problèmes auxquels vous faites face au quotidien..."
        className="border border-slate-200 rounded-md my-3 py-2 px-5 h-36  hover:border-[color:--tertiary-color] focus:border-[color:--secondary-color] transition-all"
      />
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
