import { FaBullseye,FaCrown,FaUser, FaFileSignature,  FaMoneyCheckAlt, FaHandsHelping, FaGlobe, FaUserTie } from "react-icons/fa";
import Slider from "../Slider/Slider";
import Footer from "../Slider/Footer";
import { useTranslation } from "react-i18next";

const JobesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 text-white">
      <Slider />
      {/* En-tête */}
      <header className="bg-white shadow-md py-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-bold text-gray-900 text-center">{t('jobes.title')}</h1>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto py-16 px-4 space-y-16">
        {/* Section 1 - Introduction */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaHandsHelping className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">{t('jobes.about')}</h2>
          </div>
          <p className="leading-relaxed text-lg text-black">{t('jobes.about_text')}</p>
        </section>

        {/* Section 2 - Objectif */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaBullseye className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">{t('jobes.vision')}</h2>
          </div>
          <p className="leading-relaxed text-lg text-black">{t('jobes.vision_text')}</p>
        </section>

        {/* Section 3 - Hedefler */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaGlobe className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">{t('jobes.goals')}</h2>
          </div>
          <p className="leading-relaxed text-lg text-black">{t('jobes.goals_text')}</p>
        </section>

        {/* Section 4 - Membres de l&aposOrganisation */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
  <div className="flex items-center space-x-4 mb-8">
    <FaUserTie className="text-yellow-400 text-4xl" />
    <h2 className="text-4xl font-semibold text-gray-900">
      {t('jobes.members')}
    </h2>
  </div>

  {/* Grille pour organiser les membres */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Colonne 1: Président et Vice-président */}
    <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-2 mb-4">
        <FaCrown className="text-yellow-400 text-2xl" />
        <h3 className="text-2xl font-semibold text-white">
          {t('jobes.presidency')}
        </h3>
      </div>
      <ul className="space-y-4">
        <li className="text-lg text-white flex items-center space-x-2">
          <FaUser className="text-yellow-400 text-xl" />
          <span><strong>{t('jobes.president')}</strong></span>
        </li>
        <li className="text-lg text-white flex items-center space-x-2">
          <FaUser className="text-yellow-400 text-xl" />
          <span><strong>{t('jobes.vice_president')}</strong></span>
        </li>
      </ul>
    </div>

    {/* Colonne 2: SG et SG Adjoint */}
    <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-2 mb-4">
        <FaFileSignature className="text-yellow-400 text-2xl" />
        <h3 className="text-2xl font-semibold text-white">
          {t('jobes.secretariat')}
        </h3>
      </div>
      <ul className="space-y-4">
        <li className="text-lg text-white flex items-center space-x-2">
          <FaUserTie className="text-yellow-400 text-xl" />
          <span><strong>{t('jobes.sg')}</strong></span>
        </li>
        <li className="text-lg text-white flex items-center space-x-2">
          <FaUserTie className="text-yellow-400 text-xl" />
          <span><strong>{t('jobes.sg_assistant')}</strong></span>
        </li>
      </ul>
    </div>

    {/* Colonne 3: TG et TG Adjoint */}
    <div className="bg-gradient-to-br from-gray-800 to-gray-600 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-2 mb-4">
        <FaMoneyCheckAlt className="text-yellow-400 text-2xl" />
        <h3 className="text-2xl font-semibold text-white">
          {t('jobes.treasury')}
        </h3>
      </div>
      <ul className="space-y-4">
        <li className="text-lg text-white flex items-center space-x-2">
          <FaUser className="text-yellow-400 text-xl" />
          <span><strong>{t('jobes.tg')}</strong></span>
        </li>
        <li className="text-lg text-white flex items-center space-x-2">
          <FaUser className="text-yellow-400 text-xl" />
          <span><strong>{t('jobes.tg_assistant')}</strong></span>
        </li>
      </ul>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default JobesPage;
