import { Instagram, Linkedin, Github, MapPin, Phone, Mail } from "lucide-react";
const logoFooter = "/PexinxaFooter.png";

export const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <img src={logoFooter} alt="logo" className="w-48 h-auto" />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <p className="font-bold text-xl ">Contato :</p>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-white" />
            <p className="font-montserrat font-medium">Av. Humb Gabriel, 1360 - Res. Olivo Benassi, Matão - SP 15990-519</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-white"/>
            <p className="font-montserrat font-medium">(16) 2016-2694</p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-white" />
            <p className="font-montserrat font-medium">contato@pexinxa.com.br</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-lg mb-4">Mídias sociais</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/fatecmatao" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-white transition-all hover:-translate-y-2" />
            </a>
            <a href="https://www.linkedin.com/school/fatecmatao/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-white transition-all hover:-translate-y-2" />
            </a>
            <a href="https://github.com/IcaroBellem" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-white transition-all hover:-translate-y-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
