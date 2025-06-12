
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function BasharExoticPets() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-green-800 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bashar Exotic Pets</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Pets</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Bashar Exotic Pets</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Discover and own well-bred parrots, pigeons, dogs, chickens, ducks, and more. Your home for trusted, healthy, and exotic domestic pets.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-6">About Us</h3>
        <p className="text-gray-700 leading-relaxed">
          Bashar Exotic Pets is a reputable agricultural poultry farm that specializes in breeding and supplying a wide range of exotic and domestic pets. We are passionate about providing healthy and friendly animals that become part of your family.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-10 text-center">Our Pets</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Parrots", image: "🦜" },
            { name: "Pigeons", image: "🐦" },
            { name: "Dogs", image: "🐶" },
            { name: "Chickens", image: "🐔" },
            { name: "Ducks", image: "🦆" },
            { name: "Other Pets", image: "🐾" },
          ].map((pet, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-5xl mb-4">{pet.image}</div>
                <h4 className="text-xl font-medium">{pet.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-6 text-center">Contact Us</h3>
        <p className="text-center text-gray-700 mb-4">
          📞 +2348037136208 | +2349022831110<br />
          📧 <a href="mailto:bashexoticpets@gmail.com" className="text-green-800 hover:underline">bashexoticpets@gmail.com</a><br />
          💬 <a href="https://wa.me/2349022831110" target="_blank" className="text-green-800 hover:underline">WhatsApp: 09022831110</a>
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="mailto:bashexoticpets@gmail.com" className="text-green-800 hover:text-green-600">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-green-800 hover:text-green-600">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center">
          <Button>Send Us a Message</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Bashar Exotic Pets. All rights reserved.
      </footer>
    </div>
  );
}
