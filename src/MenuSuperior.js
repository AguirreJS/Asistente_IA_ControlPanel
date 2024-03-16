import React from "react";
import { Chip } from "@nextui-org/react";

const Menu = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 fixed w-full z-10 top-0 bg-black" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)' }}>
        <div>
          <img src="https://www.asistente.intervia.com.ar/login/static/media/Intervia_inicio.816b27c7fd58d4fd6772.png" alt="Intervia Logo" className="h-12"/>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="url_del_sitio_de_inicio">
              <Chip
                variant="shadow"
                className="bg-gradient-to-br from-blue-500 to-cyan-400 border-small border-white/50 shadow-cyan-500/30 text-white"
              >
                Inicio
              </Chip>
            </a>
          </li>
          <li>
            <a href="url_del_sitio_de_servicios">
              <Chip
                variant="shadow"
                className="bg-gradient-to-br from-blue-500 to-cyan-400 border-small border-white/50 shadow-cyan-500/30 text-white"
              >
                Servicios
              </Chip>
            </a>
          </li>
          <li>
            <a href="url_del_sitio_de_nosotros">
              <Chip
                variant="shadow"
                className="bg-gradient-to-br from-blue-500 to-cyan-400 border-small border-white/50 shadow-cyan-500/30 text-white"
              >
                Nosotros
              </Chip>
            </a>
          </li>
          <li>
            <a href="url_del_sitio_de_contacto">
              <Chip
                variant="shadow"
                className="bg-gradient-to-br from-blue-500 to-cyan-400 border-small border-white/50 shadow-cyan-500/30 text-white"
              >
                Contacto
              </Chip>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
