import {NextUIProvider} from "@nextui-org/system";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Control from "./ControlPanel";
import Menu from "./MenuSuperior"
import TutorialModule from "./tutorial";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <TutorialModule></TutorialModule>
      <Menu/>
      <div className="bg-black flex items-center justify-center pt-40 px-40 ">
      <div className="bg-black border p-20 w-full max-w-4xl rounded-md">
    <Control/>
  </div>
</div>



    </NextUIProvider>
  </React.StrictMode>
);
