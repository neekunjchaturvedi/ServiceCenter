import React from "react";

function ContactUs() {
  const contacts = [
    {
      id: 1,
      method: "Phone",
      icon: "📞",
      description: "Call us directly for immediate support.",
      action: "tel:+919542678368",
      actionText: "Call Now",
    },
    {
      id: 2,
      method: "Email",
      icon: "✉️",
      description: "Send us an email and we'll get back to you soon.",
      action: "mailto:audiowitheris@gmail.com",
      actionText: "Email Us",
    },
    {
      id: 3,
      method: "WhatsApp",
      icon: "💬",
      description: "Chat with us on WhatsApp for quick help.",
      action: "https://wa.me/+919542678368",
      actionText: "Chat on WhatsApp",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-4xl mb-4">{contact.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{contact.method}</h3>
            <p className="mb-4">{contact.description}</p>
            <a
              href={contact.action}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.actionText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
