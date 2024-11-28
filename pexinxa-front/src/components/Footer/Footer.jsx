import { Instagram, Linkedin, Github } from "lucide-react";
const logoFooter = "/PexinxaFooter.png";

export const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img src={logoFooter} alt="logo" className="w-48 h-auto" />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <p className="font-bold text-lg">Contato</p>
          <p>Av. Humb Gabriel, 1360 - Res. Olivo Benassi, Matão - SP 15990-519</p>
          <p>(16) 2016-2694</p>
          <p>contato@pexinxa.com.br</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-lg mb-4">Mídias sociais</p>
          <div className="flex space-x-4">
            <Instagram className="w-6 h-6 text-white" />
            <Linkedin className="w-6 h-6 text-white" />
            <Github className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
