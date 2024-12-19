import altheaLogo from "./assets/altheaLogo.png";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="flex flex-col justify-around">
        <img src={altheaLogo} alt="" className="m-5 w-28" />
        <p className="text-gray-500">
          Gérez votre entreprise de services à la personne en toute simplicité
        </p>
        <div>
          <p>Nous appeler</p>
        </div>
      </div>
      <div>
        <p>Notre solution</p>
        <p>Planification</p>
        <p>Suivi des équipes</p>
        <p>Facturation</p>
      </div>
    </footer>
  );
};

export default Footer;
