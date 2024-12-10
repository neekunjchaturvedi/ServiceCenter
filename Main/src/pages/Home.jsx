import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import ReviewSlider from "../components/ReviewSlider";
import ContactUs from "../components/ContactUs";

function Home() {
  const services = [
    {
      title: "Screen Repair",
      description: "Fix cracked or damaged screens",
      icon: "📱",
    },
    {
      title: "Water Damage",
      description: "Repair water-damaged devices",
      icon: "💧",
    },
    {
      title: "Hardware Damage",
      description: "Fix various hardware issues",
      icon: "🔧",
    },
    {
      title: "Battery Replacement",
      description: "Replace old or faulty batteries",
      icon: "🔋",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to ErisTech
      </h1>
      <p className="text-xl text-center mb-12">
        Get your mobile device fixed at your doorstep
      </p>

      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="mb-16">
        <ReviewSlider />
      </div>

      <div className="bg-blue-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to get your device fixed?
        </h2>
        <p className="text-xl mb-8">
          Book a service now and our expert technicians will come to you!
        </p>
        <Link
          to="/booking"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </div>
      <ContactUs />
    </div>
  );
}

export default Home;
