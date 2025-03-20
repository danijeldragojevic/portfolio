import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-highlight" size={24} />,
      label: "Email",
      value: "me@danijeldragojevic.com",
      link: "mailto:me@danijeldragojevic.com",
    },
    {
      icon: <Phone className="text-highlight" size={24} />,
      label: "Phone",
      value: "+38766875791",
      link: "tel:+38766875791",
    },
    {
      icon: <MapPin className="text-highlight" size={24} />,
      label: "Location",
      value: "Banja Luka, Bosnia and Herzegovina",
      link: null,
    },
  ];

  const [mailtoData, setMailtoData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleMailtoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:me@danijeldragojevic.com?subject=${encodeURIComponent(
      `${mailtoData.subject} from ${mailtoData.name}`
    )}&body=${encodeURIComponent(mailtoData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-darkCard">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-highlight/80 mb-2">
            Get In Touch
          </span>
          <h2 className="section-heading">Contact Me</h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold text-darkText mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-highlight/10 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-darkSubtle">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-darkText hover:text-highlight transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-darkText">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold text-darkText mb-6">
              Send Me a Message
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-darkSubtle block mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-darkBg border border-white/10 rounded-lg focus:outline-none focus:border-highlight/50 text-darkText"
                  placeholder="Your Name"
                  value={mailtoData.name}
                  onChange={(e) =>
                    setMailtoData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm text-darkSubtle block mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-darkBg border border-white/10 rounded-lg focus:outline-none focus:border-highlight/50 text-darkText"
                  placeholder="Message Subject"
                  value={mailtoData.subject}
                  onChange={(e) =>
                    setMailtoData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm text-darkSubtle block mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-darkBg border border-white/10 rounded-lg focus:outline-none focus:border-highlight/50 text-darkText resize-none"
                  placeholder="Your Message"
                  value={mailtoData.message}
                  onChange={(e) =>
                    setMailtoData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                ></textarea>
              </div>

              <button
                onClick={handleMailtoClick}
                className="px-6 py-3 bg-highlight text-darkBg font-medium rounded-lg hover:bg-highlight/90 transition-colors flex items-center"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
