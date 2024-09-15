
import PropTypes from "prop-types";  // Import PropTypes
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";

// Composant réutilisable pour chaque réseau social
const SocialIcon = ({ Icon, name, color }) => {
  return (
    <div className="group flex items-center space-x-4">
      <div className={`text-yellow group-hover:${color} transition-colors duration-300`}>
        <Icon size={20} />
      </div>
      <span className="hidden group-hover:block text-lg font-semibold text-gray-800">
        {name}
      </span>
    </div>
  );
};

// Définir les types des props avec PropTypes
SocialIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,  // Icon doit être un composant React
  name: PropTypes.string.isRequired,       // name doit être une chaîne de caractères
  color: PropTypes.string.isRequired,      // color doit être une chaîne de caractères
};

// Page principale avec la liste des réseaux sociaux
const ReseauSocio = () => {
  // Tableau de données des réseaux sociaux
  const socialMedias = [
    { name: "Instagram", Icon: FaInstagram, color: "text-pink-600" },
    { name: "TikTok", Icon: FaTiktok, color: "text-black" },
    { name: "Facebook", Icon: FaFacebookF, color: "text-blue-600" },
    { name: "YouTube", Icon: FaYoutube, color: "text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-grey flex items-center justify-end">
      {/* Barre latérale */}
      <div className="fixed  left-0 top-1/3 space-y-8">
        {socialMedias.map((social, index) => (
          <SocialIcon 
            key={index} 
            Icon={social.Icon} 
            name={social.name} 
            color={social.color} 
          />
        ))}
      </div>
    </div>
  );
};

export default ReseauSocio;
