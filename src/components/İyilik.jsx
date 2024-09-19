import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const IyilikHaritasi = () => {
  const tchadCoordinates = [15.4542, 18.7322]; // Coordonnées du Tchad

  return (
    <div className="flex flex-col items-center h-96 bg-white">
      
      <div className="w-full md:w-full h-96 shadow-lg rounded-lg overflow-hidden border border-gray-300 ">
        <MapContainer
          center={tchadCoordinates}
          zoom={1}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={tchadCoordinates}>
            <Popup>
              Bienvenue au Tchad ! <br /> Voici une action de bienveillance.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default IyilikHaritasi;
