import { FaBullseye, FaHandsHelping, FaGlobe, FaUserTie } from "react-icons/fa";
import Slider from "../Slider/Slider";
import Footer from "../Slider/Footer";

const JobesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Slider />
      {/* En-tête */}
      <header className="bg-white shadow-md py-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-bold text-gray-900 text-center">Hakkımızda</h1>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto py-16 px-4 space-y-16">
        {/* Section 1 - Introduction */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaHandsHelping className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">Biz kimiz ? </h2>
          </div>
          <p className="leading-relaxed text-lg text-gray-700">
            AL-İNFAK Organisation, savunmasız grupların yararına çeşitli türlerde yardımlar sağlamak amacıyla yeni kurulmuş, kar amacı gütmeyen ve siyasi olmayan bir dernektir.
          </p>
        </section>

        {/* Section 2 - Objectif */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaBullseye className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">VİZYONUMUZ</h2>
          </div>
          <p className="leading-relaxed text-lg text-gray-700">
            AL-INFAK Organisation, bilgi birikimi, verimliliği ve şeffaflığı sayesinde sosyal, insani ve kalkınma çalışmalarında Çad'da lider olmayı ve genel olarak Afrika'da kademeli olarak genişlemeyi arzulamaktadır.
          </p>
        </section>

        {/* Section 3 - Hedefler */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaGlobe className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">Hedefler</h2>
          </div>
          <p className="leading-relaxed text-lg text-gray-700">
            Ülkemizde ve yedi kıtada insanlığın hizmetinde bir organisation olmayı hedefliyoruz. Misyonumuz, hayır kurumlarını tam şeffaflık ve güven içinde yararlanıcılarına teslim etmektir.
          </p>
        </section>

        {/* Section 4 - Membres de l'Organisation */}
        <section className="bg-white shadow-lg p-8 rounded-lg">
          <div className="flex items-center space-x-4 mb-6">
            <FaUserTie className="text-yellow-400 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-900">Membres de l'Organisation</h2>
          </div>
          {/* Grille pour organiser les membres */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne 1: Président et Vice-président */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Présidence</h3>
              <ul className="space-y-2">
                <li className="text-lg text-gray-700"><strong>Président:</strong> Issa Abdraman Toukchi</li>
                <li className="text-lg text-gray-700"><strong>Vice-président:</strong> Soumaine Abdraman Saleh</li>
              </ul>
            </div>

            {/* Colonne 2: SG et SG Adjoint */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secrétariat Général</h3>
              <ul className="space-y-2">
                <li className="text-lg text-gray-700"><strong>SG:</strong> Saïd Daoud</li>
                <li className="text-lg text-gray-700"><strong>SG Adjoint:</strong> Zakaria Ibrahim</li>
              </ul>
            </div>

            {/* Colonne 3: TG et TG Adjoint */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trésorerie</h3>
              <ul className="space-y-2">
                <li className="text-lg text-gray-700"><strong>TG:</strong> Abdelkerim Abdrahman</li>
                <li className="text-lg text-gray-700"><strong>TG Adjoint:</strong> Ousman Addalil</li>
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
