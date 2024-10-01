import { Instagram, Linkedin, Github } from "lucide-react" 

export const Footer = () => {
  return (
    <>
    <footer className="bg-sky-500 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Pexinxa</h2>
          <p>Contato</p>
          <p>Av. Humb Gabriel, 1360 - Res. Olivo Benassi, Marão - SP 15990-519</p>
          <p>(16) 2016-2694</p>
          <p>contato@pexinxa.com.br</p>
        </div>
        <div className="flex space-x-4">
          <Instagram className="w-6 h-6" />
          <Linkedin className="w-6 h-6" />
          <Github className="w-6 h-6" />
        </div>
      </div>
    </footer>
    </>
  )
}
export default Footer;
