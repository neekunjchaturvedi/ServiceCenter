import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Screen Repair",
    description: "Fix cracked or damaged screens",
    icon: "📱",
  },
  {
    id: 2,
    name: "Battery Replacement",
    description: "Replace old or faulty batteries",
    icon: "🔋",
  },
  {
    id: 3,
    name: "Software Issues",
    description: "Resolve software-related problems",
    icon: "💻",
  },
  {
    id: 4,
    name: "Water Damage Repair",
    description: "Fix water-damaged devices",
    icon: "💧",
  },
  {
    id: 5,
    name: "Camera Repair",
    description: "Repair faulty cameras",
    icon: "📷",
  },
  {
    id: 6,
    name: "Charging Port Repair",
    description: "Fix charging port issues",
    icon: "🔌",
  },
];

function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="mb-4">{service.description}</p>
            <Link
              to="/booking"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Book This Service
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
