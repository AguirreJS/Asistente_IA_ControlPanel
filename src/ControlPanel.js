import React, { useRef } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure ,Autocomplete, Checkbox ,Snippet, Input ,AutocompleteItem , Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {EyeFilledIcon} from "./scripts-next/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./scripts-next/EyeSlashFilledIcon";
import copyIcon from './icon/copiar.png';



const Control = () => {

  let Dominio = "https://www.asistente.intervia.com.ar:44300/webhook/"
  let DominioActual = "https://www.asistente.intervia.com.ar"
  let Tutorial = "https://www.youtube.com/watch?v=YWU0FoDkF-Q"

/////////////info


const IdentificacionTelefono = (
  <PopoverContent class="w-1/2">
    <div class="px-4 py-4">
      <div class="text-sm font-bold">¿Cuál es la función del ID de teléfono en la API de WhatsApp?</div>
      <div class="text-xs">
        El ID de teléfono es esencial cuando se utiliza la API de WhatsApp, ya que actúa como un identificador único para cada usuario, permitiendo a las empresas comunicarse de manera directa y personalizada. Este ID facilita el envío de mensajes automatizados, notificaciones, y respuestas rápidas basadas en la interacción del usuario. Además, asegura que la comunicación sea segura y llegue al destinatario correcto. En el contexto de la API de WhatsApp, el ID de teléfono ayuda a gestionar y organizar las conversaciones de manera eficiente, mejorando la experiencia de usuario y permitiendo un seguimiento preciso de las interacciones.
      </div>
    </div>
  </PopoverContent>
);




const TerminosYCondiciones = (
  <PopoverContent class="w-1/2">
    <div class="px-4 py-4">
      <div class="text-sm font-bold">¿Por qué son importantes los Términos y Condiciones?</div>
      <div class="text-xs">
        Los Términos y Condiciones son un contrato legal entre una empresa y sus usuarios que detalla cómo se manejarán los datos personales y qué derechos y responsabilidades tienen ambas partes. Este documento es crucial para proteger la privacidad y asegurar que tanto usuarios como la empresa comprendan cómo se utilizan y protegen los datos personales. A través de los Términos y Condiciones, se establecen las bases para un manejo seguro y transparente de la información, respetando las leyes de protección de datos y brindando a los usuarios el control sobre su propia información.
      </div>
    </div>
  </PopoverContent>
);




const Permanente= (
  <PopoverContent class="w-1/2">
<div class="px-4 py-4 ">
  <div class="text-sm font-bold ">¿Que es el token permanente?</div>
  <div class="text-xs">
  El "token permanente" para un webhook en la API de WhatsApp de Facebook es una especie de clave constante que se utiliza para mantener una conexión segura entre tu servidor y los servidores de WhatsApp/Facebook. Cuando configuras un webhook, le dices a WhatsApp/Facebook que te avise cuando suceda algo interesante, como recibir un nuevo mensaje en WhatsApp.  
   </div>
</div>
</PopoverContent>

);



const tokenverifi= (
  <PopoverContent class="w-1/2">
<div class="px-4 py-4 ">
  <div class="text-sm font-bold ">¿Que es el token de verificacion?</div>
  <div class="text-xs">
  El "Token de verificación" es como una palabra secreta que solo tú y el servicio de WhatsApp de Facebook conocen. Cuando WhatsApp toca el timbre, dice la palabra secreta y así tu programa sabe que realmente es WhatsApp quien está tocando y no un desconocido tratando de hacerse pasar por él. Esto ayuda a mantener seguros tus datos y los de tus usuarios.  </div>
</div>
</PopoverContent>

);




  const Webhook = (
    <PopoverContent class="w-1/2">
  <div class="px-4 py-4 ">
    <div class="text-sm font-bold ">¿Qué es un Webhook?</div>
    <div class="text-xs">
      Un webhook en la API de WhatsApp es una herramienta que permite a nuestra aplicación recibir notificaciones automáticas de eventos específicos, como mensajes entrantes. Al configurarlo, WhatsApp envía información directamente a nuestro servidor en tiempo real, facilitando una respuesta rápida y la integración con otros sistemas empresariales.
    </div>
  </div>
</PopoverContent>

  );

  const TiposdeCuentas = (
    <PopoverContent class="w-1/2">
  <div class="px-4 py-4 ">
    <div class="text-sm font-bold ">¿Que son los tipos de cuenta?</div>
    <div class="text-xs">

    Actualmente, contamos con un único modelo de asistente. No obstante, estamos desarrollando una variedad de tipos adicionales para garantizar que nuestros asistentes puedan adaptarse a una amplia gama de necesidades específicas.
    </div>
  </div>
</PopoverContent>

  );

  
  const linkWebhook = (
    <PopoverContent className="w-1/2">
      <div className="px-4 py-4">
        <div className="text-sm font-bold">¿Dónde pegarlo?</div>
        <div className="text-xs">
        Para configurar la API de WhatsApp en la plataforma de Facebook, debes iniciar sesión en Facebook para desarrolladores, acceder al dashboard de tu aplicación, seleccionar y configurar el producto 'WhatsApp', incluyendo la configuración de Webhooks y editar la URL de devolución de llamada del Webhook para que tu servidor pueda recibir mensajes y eventos de WhatsApp.
        </div>
      </div>
    </PopoverContent>
  );
  
  




    const handleSelectionChange = async (selectedKey) => {
        // Aquí asumimos que `selectedKey` es el valor seleccionado
   console.log("Seleccionado")
      };

    const asistente = [
        {label: "Asistente Clasico", value: "asistente", description: "El asistente responde a WP con el Spech indicado"},
      ];

      const [inputbewhook, seinputbewhook] = React.useState("");     

      const [isVisible, setIsVisible] = React.useState(false);

      const [value, setValue] = React.useState("");

      const [tkPermanente, settkPermanente] = React.useState("");

      const [Idphone, setIdphone] = React.useState("");

      const toggleVisibility = () => setIsVisible(!isVisible);

      const [isSelected, setIsSelected] = React.useState(false);


/////herramienta para copiar 
  const textoParaCopiarRef = useRef(null);

const copiarAlPortapapeles = () => {
  // Verifica que el navegador soporte esta funcionalidad
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textoParaCopiarRef.current.innerText)
      .then(() => {
        // Notificar al usuario que el texto se ha copiado, si es necesario
        console.log('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar texto: ', err);
      });
  } else {
    // Método alternativo para navegadores más antiguos
    const textarea = document.createElement('textarea');
    textarea.value = textoParaCopiarRef.current.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
};


const textoParaCopiarRef2 = useRef(null);

const copiarAlPortapapeles2 = () => {
  // Verifica que el navegador soporte esta funcionalidad
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textoParaCopiarRef2.current.innerText)
      .then(() => {
        // Notificar al usuario que el texto se ha copiado, si es necesario
        console.log('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar texto: ', err);
      });
  } else {
    // Método alternativo para navegadores más antiguos
    const textarea = document.createElement('textarea');
    textarea.value = textoParaCopiarRef2.current.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
};



{/* __________Boton de apertura ____________*/}

const {isOpen, onOpen, onClose} = useDisclosure();
const [size, setSize] = React.useState('md')

const handleOpen = (size) => {
  setSize(size)
  onOpen();
}



const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();

const [size2, setSize2] = React.useState('md');

const handleOpen2 = (size2) => {
  setSize2(size2);
  onOpen2(); // Aquí se cambió de onOpen a onOpen2
};



const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure();

const [size3, setSize3] = React.useState('md');

const handleOpen3 = (size3) => {
  setSize3(size3);
  onOpen3(); // Aquí se cambió de onOpen a onOpen2
};


const { isOpen: isOpen4, onOpen: onOpen4, onClose: onClose4 } = useDisclosure();

const [size4, setSize4] = React.useState('md');

const handleOpen4 = (size4) => {
  setSize4(size4);
  onOpen4(); // Aquí se cambió de onOpen a onOpen2
};



const { isOpen: isOpen5, onOpen: onOpen5, onClose: onClose5 } = useDisclosure();

const [size5, setSize5] = React.useState('md');

const handleOpen5 = (size5) => {
  setSize5(size5);
  onOpen5(); // Aquí se cambió de onOpen a onOpen2
};



const { isOpen: isOpen6, onOpen: onOpen6, onClose: onClose6 } = useDisclosure();

const [size6, setSize6] = React.useState('md');

const handleOpen6 = (size6) => {
  setSize6(size6);
  onOpen6(); // Aquí se cambió de onOpen a onOpen2
};


const { isOpen: isOpen7, onOpen: onOpen7, onClose: onClose7 } = useDisclosure();

const [size7, setSize7] = React.useState('md');

const handleOpen7 = (size7) => {
  setSize7(size7);
  onOpen7(); // Aquí se cambió de onOpen a onOpen2
};






{/* _________Renderizado  ____________*/}
  return (
<div className="flex flex-col justify-center items-center gap-4">
  
  <h3 className="text-2xl text-white bg-blue-500 rounded-lg p-4">Centro de Autenticación</h3>

{/* Inicio _:_______________________________________*/}

          <Button key={"2xl"} onPress={() => handleOpen("2xl")}>Seleccionar Tipo de cuienta</Button>

      <Modal 
        size={"2xl"} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Seleccionar tipo de cuenta. </ModalHeader>
              <ModalBody>
        
        
  <div className="flex items-center space-x-2"> 
        <Popover class="text-xs w-1/2" key={ "top end"} placement={"top end"} color="foreground">
          <PopoverTrigger>
            <Button color="primary" variant="flat" className="capitalize">
  Tipo de Cuetna
            </Button>
          </PopoverTrigger>
          {TiposdeCuentas}
        </Popover>

  <div className="w-full max-w-xs"> {/* Ajusta según sea necesario para el bloque Autocomplete */}
    <Autocomplete 
      onSelectionChange={handleSelectionChange}
      label="Seleccione Tipo de cuenta" 
      className="w-full"
    >
      {asistente.map((asistente) => (
        <AutocompleteItem key={asistente.value} value={asistente.value}>
          {asistente.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  </div>

  </div>




              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>






  
 {/* Fin ___________________________________________ */}


{/* Inicio _:_______________________________________*/}


<Button key={"2xl"} onPress={() => handleOpen2("2xl")}>Webhook</Button>


<Modal 
        size={"2xl"} 
        isOpen={isOpen2} 
        onClose={onClose2} 
      >
        <ModalContent>
          {(onClose2) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Webhook. </ModalHeader>
              <ModalBody>
        


  <Popover class="text-xs w-1/2" key={ "top end"} placement={"top end"} color="primary">
          <PopoverTrigger>
            <Button color="primary" variant="flat" className="capitalize">
Mas info Sobre Webhook
            </Button>
          </PopoverTrigger>
          {Webhook}
        </Popover>

  <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">
    <Input
      label="Webhook"
      placeholder="Link para insertar en WebHook"
      value={inputbewhook}
      onValueChange={seinputbewhook}
    />  
   
    </div>
   <div className="flex items-center space-x-2"> {/* Añade espacio entre elementos */}


        <Snippet >{Dominio}{inputbewhook}</Snippet>
  
</div>



  </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose2}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose2}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


  


 {/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}

<Button key={"2xl"} onPress={() => handleOpen3("2xl")}>Token de Verificacion</Button>




<Modal 
        size={"2xl"} 
        isOpen={isOpen3} 
        onClose={onClose3} 
      >
        <ModalContent>
          {(onClose3) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Token de Verificacion </ModalHeader>
              <ModalBody>


  <div className="flex items-center space-x-0 flex-wrap"> {/* Elimina espacio entre elementos y permite ajuste */}
  <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">

    <Popover class="text-xs w-1/2" key={"top end"} placement={"top end"} color="primary">
      <PopoverTrigger>
        <Button color="primary" variant="flat" className="capitalize">
        Mas info sobre Token de Verificacion
        </Button>
      </PopoverTrigger>
      {tokenverifi}
    </Popover>

    <Input
      label="Piense una contraseña única"
      variant="bordered"
      placeholder="Sin espacios"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />

  </div>
</div>


</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose3}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose3}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>




{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}


<Button key={"2xl"} onPress={() => handleOpen4("2xl")}> Tocken permanente de whatsap</Button>




<Modal 
        size={"2xl"} 
        isOpen={isOpen4} 
        onClose={onClose4} 
      >
        <ModalContent>
          {(onClose4) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tocken permanente de whatsapp </ModalHeader>
              <ModalBody>



<Popover class="text-xs w-1/2" key={ "top end"} placement={"top end"} color="primary">
          <PopoverTrigger>
            <Button color="primary" variant="flat" className="capitalize">
           Mas info Sobre Tocken permanente de whatsapp
            </Button>
          </PopoverTrigger>
          {Permanente}
        </Popover>

        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
  <Input
    className="w-[450px] flex-wrap" // Esto establecerá el ancho del input a 400px
    label="Ingrese Aqui El Token Permanente"
    placeholder="Suele tener esta forma = EAASbMC5ZC4ngBOzmYZBvdvSGFET5bFrKZBG1ZBgSYnfbNxqTHZCSm14SyeGVtatf7eDDX7g9isqCEwJHLoDCViB65IdMB5dYsgfZCIinOPIZB8ppnNZBQS59XsIR4I1U"
    value={tkPermanente}
    onValueChange={settkPermanente}
  />
</div>



</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose4}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose4}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}

<Button key={"2xl"} onPress={() => handleOpen5("2xl")}> Politicas de Privacidad </Button>




<Modal 
        size={"2xl"} 
        isOpen={isOpen5} 
        onClose={onClose5} 
      >
        <ModalContent>
          {(onClose5) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tocken permanente de whatsapp </ModalHeader>
              <ModalBody>



<Popover class="text-xs w-1/2" key={ "top end"} placement={"top end"} color="primary">
          <PopoverTrigger>
            <Button color="primary" variant="flat" className="capitalize">  
          Mas Info sobre Politicas del Sitio
            </Button>
          </PopoverTrigger>
          {TerminosYCondiciones}
        </Popover>


        <div className="flex flex-col gap-2">
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Acepto los temrinos y condiciones.
      </Checkbox>
    </div>




<div className="flex items-center space-x-2">
  <Popover class="text-xs w-1/2" key={"top end"} placement={"top end"} color="primary">
    <PopoverTrigger>
      <Button color="default" variant="flat" className="capitalize">
        <p ref={textoParaCopiarRef2} className="text-default-500 text-small">{DominioActual}/Policy</p>
      </Button>
    </PopoverTrigger>
    {linkWebhook}
  </Popover>


  <button onClick={copiarAlPortapapeles2} className="py-1 px-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 flex items-center text-xs">
    <img src={copyIcon} alt="Copiar" className="w-4 h-4" /> {/* Ajusta el tamaño de la imagen si es necesario */}
  </button>
</div>

</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose5}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose5}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}


<Button key={"2xl"} onPress={() => handleOpen6("2xl")}>  ID numero telefoico </Button>




<Modal 
        size={"2xl"} 
        isOpen={isOpen6} 
        onClose={onClose6} 
      >
        <ModalContent>
          {(onClose6) => (
            <>
              <ModalHeader className="flex flex-col gap-1">  ID numero telefoico </ModalHeader>
              <ModalBody>



  <Popover class="text-xs w-1/2" key={"top end"} placement={"top end"} color="primary">
    <PopoverTrigger>
      <Button color="primary" variant="flat" className="capitalize">
      ID numero telefoico
      </Button>
    </PopoverTrigger>
    {IdentificacionTelefono}
  </Popover>


  <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">
  <Input
    label="ID del Teléfono"
    placeholder="Ingrese el ID del teléfono"
    value={Idphone}
    onValueChange={setIdphone}
  />
</div>




</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose6}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose6}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}

<Button key={"2xl"} onPress={() => handleOpen7("2xl")}>  Tiempo de espera en cada mensaje</Button>

<Modal 
        size={"2xl"} 
        isOpen={isOpen7} 
        onClose={onClose7} 
      >
        <ModalContent>
          {(onClose7) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tiempo de espera en cada mensaje </ModalHeader>
              <ModalBody>

 
  <h1>Tiempo de espera en cada mensaje expresado en segundos </h1>
  <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">
    <Input
      label="Tiempo"
      placeholder="El tiempo debe estar expresado en segundos"
      value={value}
      onValueChange={setValue}
    />
  </div>




  </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose7}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose7}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>





  
{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}


<Button key={"2xl"} onPress={() => handleOpen7("2xl")}>  Tiempo de espera en cada mensaje</Button>

<Modal 
        size={"2xl"} 
        isOpen={isOpen7} 
        onClose={onClose7} 
      >
        <ModalContent>
          {(onClose7) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tiempo de espera en cada mensaje </ModalHeader>
              <ModalBody>




  <h1> Token de Open IA</h1>
  <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">
    <Input
      label="Email"
      placeholder="Enter your email"
      value={value}
      onValueChange={setValue}
    />
  </div>


  

  </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose7}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose7}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


  
{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}



  <h1> Token Asistente Open IA</h1>
  <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">
    <Input
      label="Email"
      placeholder="Enter your email"
      value={value}
      onValueChange={setValue}
    />
  </div>


  {/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}


  <h1> Limite de consumo en UDS</h1>
  <Input
          type="number"
          placeholder="0.00"
          labelPlacement="inside"
          className="flex w-1/5 flex-wrap md:flex-nowrap gap-4"
          endContent={
            <div className="flex w-1/5 flex-wrap md:flex-nowrap gap-4">
            <span className="flex w-1/5 flex-wrap md:flex-nowrap gap-4">$</span>
          </div>
          
          }
        />
        


</div>


  );
};

export default Control;