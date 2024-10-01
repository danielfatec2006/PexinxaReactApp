import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { db } from "../firebase/config"; 
import { doc, setDoc } from "firebase/firestore"; 

export const CookieCard = () => {
  const [showCookieCard, setShowCookieCard] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowCookieCard(true);
    }
  }, []);

  const handleAccept = async () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    document.cookie = "cookieName=cookieValue; SameSite=None; Secure";
    setShowCookieCard(false); 

    try {
      const userId = "user-unique-id"; 
      await setDoc(doc(db, "cookieConsents", userId), {
        consent: "accepted",
        date: new Date().toISOString(),
      });
      console.log("Consentimento registrado com sucesso!");
    } catch (error) {
      console.error("Erro ao registrar consentimento: ", error);
    }
  };

  if (!showCookieCard) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-100 p-4 border border-gray-300 shadow-lg rounded-md flex justify-between items-center">
      <p className="text-gray-800">Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.</p>
      <div className="flex space-x-4">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition"
          onClick={handleAccept}
        >
          Aceitar Todos
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition"
          onClick={handleAccept}
        >
          Dispensar
        </button>
      </div>
    </div>
  );
};

export default CookieCard;
