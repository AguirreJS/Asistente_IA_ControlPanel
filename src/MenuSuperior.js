import React from "react";
import { Chip } from "@nextui-org/react";

const Menu = () => {
  // Las opciones del menú podrían venir de una lista/array si necesitas dinamismo
  const menuOptions = ["Inicio", "Servicios", "Nosotros", "Contacto"];

  return (
    <>

      <nav className="flex justify-between items-center p-4 fixed w-full z-10 top-0 bg-black" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)' }}>       
        <div>
          <img src="https://www.asistente.intervia.com.ar/login/static/media/Intervia_inicio.816b27c7fd58d4fd6772.png" alt="Intervia Logo" className="h-12"/>
        </div>

        <ul className="flex space-x-4">
          {menuOptions.map((option, index) => (
            <li key={index}>
              {/* Aquí corregimos para pasar 'option', la opción actual del array */}
              <Chip
                variant="shadow"
                className="bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 text-white"
              >
                {option}
              </Chip>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
