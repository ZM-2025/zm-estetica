
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";

export default function ZMPaginaWeb() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-pink-100 p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center text-pink-700">
          ZM Medicina Estética Avanzada
        </h1>
        <p className="text-center mt-2 text-lg">
          Belleza realzada con ciencia y pasión
        </p>
      </header>

      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">
              Sobre Nosotras
            </h2>
            <p>
              Somos médicas estéticas apasionadas por el arte de realzar la belleza natural. En ZM, unimos conocimiento, experiencia y tecnología para ofrecerte los mejores resultados.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Servicios</h2>
            <ul className="list-disc list-inside">
              <li>Aplicación de bótox</li>
              <li>Rellenos con ácido hialurónico</li>
              <li>Láser estético</li>
              <li>Diseño de cejas y micropigmentación</li>
              <li>Sueroterapia: complejo B y vitamina C</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">
              Galería
            </h2>
            <p>
              Próximamente podrás ver el antes y después de nuestros tratamientos más solicitados.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">Agendar tu cita</h2>
        <p className="mb-4">Escríbenos directamente por WhatsApp para programar tu procedimiento</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
          <a href="https://wa.me/573103103972" target="_blank" rel="noopener noreferrer">
            Agendar por WhatsApp
          </a>
        </Button>
      </section>

      <footer className="bg-pink-100 p-4 mt-6 text-center text-pink-700">
        <p>ZM Medicina Estética Avanzada © 2025</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://instagram.com/" target="_blank">
            <Instagram />
          </a>
          <a href="tel:+573103103972">
            <Phone />
          </a>
        </div>
      </footer>
    </div>
  );
}
