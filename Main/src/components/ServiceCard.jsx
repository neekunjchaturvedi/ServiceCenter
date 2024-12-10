import { Link } from "react-router-dom";

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to="/booking" className="text-blue-600 hover:underline">
        Book Now
      </Link>
    </div>
  );
}

export default ServiceCard;
