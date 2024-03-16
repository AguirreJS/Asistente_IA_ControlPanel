import React, { useRef ,  useState } from 'react';
import { Chip , Card, CardBody , Table, TableHeader, TableColumn, TableBody, TableRow, TableCell , Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure ,Autocomplete, Checkbox ,Snippet, Input ,AutocompleteItem , Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {EyeFilledIcon} from "./scripts-next/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./scripts-next/EyeSlashFilledIcon";
import copyIcon from './icon/copiar.png';



const Control = () => {

  let Dominio = "https://www.asistente.intervia.com.ar:44300/webhook/"
  let DominioActual = "https://www.asistente.intervia.com.ar"
  let Tutorial = "https://www.youtube.com/watch?v=YWU0FoDkF-Q"

 {/*____________ Funciones recopiladoras ___________________________________________ */}

  const [selectedOption, setSelectedOption] = useState(null); // Estado local para almacenar la opción seleccionada

  const handleChange = (selected) => {
    setSelectedOption(selected); // Actualiza el estado con la opción seleccionada
  };


  const [selectedOption2, setSelectedOption2] = useState(null);
  const [inputbewhook2, setInputbewhook] = useState(""); // Estado local para el valor del input

  const handleChange2 = (selected2) => {
    setSelectedOption2(selected2);
  };



function procesadorSeleccion(content , type ){

  console.log(content + type)

}


{/* Fin _:_______________________________________*/}


/////////////info

const Limite = (
  <PopoverContent class="w-1/2">
    <div class="px-4 py-4">
      <div class="text-sm font-bold">¿Por qué es importante establecer un límite de gasto en cada chat para evitar abusos de uso?</div>
      <div class="text-xs">
        Es crucial establecer un límite de gasto en cada chat al utilizar la API de OpenAI para evitar abusos de uso y garantizar la equidad en el acceso a los recursos. Este límite de gasto asegura que un solo chat no pueda agotar rápidamente los créditos disponibles al realizar demasiadas solicitudes en una misma conversación. Además, al establecer este límite, se promueve un uso responsable de los recursos de la API, evitando que un usuario monopolice la capacidad de procesamiento y afecte negativamente a otros usuarios que también necesitan acceder a los servicios de OpenAI. En resumen, el establecimiento de un límite de gasto por chat es fundamental para mantener un equilibrio justo en el uso de la API y garantizar que todos los usuarios puedan beneficiarse de manera adecuada de los servicios ofrecidos por OpenAI.
      </div>
    </div>
  </PopoverContent>
);

const TokenAsistente = (
  <PopoverContent class="w-1/2">
    <div class="px-4 py-4">
      <div class="text-sm font-bold">¿Por qué es importante el token de identificación para el asistente en OpenAI usando la API?</div>
      <div class="text-xs">
        El token de identificación es crucial al utilizar la API de OpenAI, ya que actúa como una clave única para cada asistente o aplicación que accede a los servicios de inteligencia artificial. Este token permite a OpenAI rastrear y controlar el uso de su API, garantizando la seguridad y la integridad de los servicios proporcionados. Además, el token de identificación permite a OpenAI implementar políticas de uso justo y gestionar la carga de trabajo en sus servidores, asegurando un rendimiento óptimo para todos los usuarios. En resumen, el token de identificación es esencial para autorizar y controlar el acceso a la poderosa funcionalidad de la API de OpenAI, garantizando una experiencia de usuario segura y eficiente.
      </div>
    </div>
  </PopoverContent>
);


const TokenIA = (
  <PopoverContent class="w-1/2">
    <div class="px-4 py-4">
      <div class="text-sm font-bold">¿Por qué es importante el token de IA para usar la API de OpenAI?</div>
      <div class="text-xs">
        El token de IA es fundamental al utilizar la API de OpenAI, ya que sirve como una forma de identificación única para cada usuario o aplicación que accede a los servicios de inteligencia artificial. Este token permite a OpenAI rastrear y controlar el uso de su API, garantizando la seguridad y la integridad de los servicios proporcionados. Además, el token de IA permite a OpenAI implementar políticas de uso justo y gestionar la carga de trabajo en sus servidores, lo que asegura un rendimiento óptimo para todos los usuarios. En resumen, el token de IA es esencial para autorizar y controlar el acceso a la potente funcionalidad de la API de OpenAI, garantizando una experiencia de usuario segura y eficiente.
      </div>
    </div>
  </PopoverContent>
);


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


const { isOpen: isOpen8, onOpen: onOpen8, onClose: onClose8 } = useDisclosure();

const [size8, setSize8] = React.useState('md');

const handleOpen8 = (size8) => {
  setSize8(size8);
  onOpen8(); // Aquí se cambió de onOpen7 a onOpen8
};

const { isOpen: isOpen9, onOpen: onOpen9, onClose: onClose9 } = useDisclosure();

const [size9, setSize9] = React.useState('md');

const handleOpen9 = (size9) => {
  setSize9(size9);
  onOpen9(); // Aquí se cambió de onOpen8 a onOpen9
};

const { isOpen: isOpen10, onOpen: onOpen10, onClose: onClose10 } = useDisclosure(); // Cambiado isOpen9 a isOpen10

const [size10, setSize10] = React.useState('md'); // Cambiado size9 a size10

const handleOpen10 = (size10) => { // Cambiado handleOpen9 a handleOpen10
  setSize10(size10);
  onOpen10(); // Cambiado de onOpen9 a onOpen10
};



{/* _________Renderizado  ____________*/}
  return (
<div className="flex flex-col justify-center items-center gap-4">

<Card className='w-full text-center'>
      <CardBody className='w-full text-center'>
        <p className='w-full text-center'>Centro de Autenticación</p>
      </CardBody>
    </Card>
   
    <Table>
  <TableHeader>
    <TableColumn className="text-center w-1/3">PLATAFORMA</TableColumn>
    <TableColumn className="text-center w-1/3">TIPO</TableColumn>
    <TableColumn className="text-center w-1/3">STATUS</TableColumn>
  </TableHeader>
  <TableBody>
    <TableRow key="1">
      <TableCell className="text-center">Asistente</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen("2xl")} fullWidth>
          Seleccionar Tipo de cuenta
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="2">
      <TableCell className="text-center">Whatsapp</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen2("2xl")} fullWidth>
          Webhook
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="3">
      <TableCell className="text-center">Whatsapp</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen3("2xl")} fullWidth>
          Token de Verificacion
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="4">
      <TableCell className="text-center">Whatsapp</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen4("2xl")} fullWidth>
          Tocken permanente de whatsapp
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="5">
      <TableCell className="text-center">Whatsapp</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen5("2xl")} fullWidth>
          Politicas de Privacidad
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="6">
      <TableCell className="text-center">Whatsapp</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen6("2xl")} fullWidth>
          ID numero telefoico
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="7">
      <TableCell className="text-center">Asistente</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen7("2xl")} fullWidth>
          Tiempo de espera en cada mensaje
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="8">
      <TableCell className="text-center">Open IA</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen8("2xl")} fullWidth>
          Token de Open IA
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="9">
      <TableCell className="text-center">Open IA</TableCell>
      <TableCell className="text-center">
        <Button key={"2xl"} color="primary" onPress={() => handleOpen9("2xl")} fullWidth>
          Token Asistente Open IA
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip>
      </TableCell>
    </TableRow>
    <TableRow key="10">
      <TableCell className="text-center">Asistente</TableCell>
      <TableCell className="text-center"><Button key={"2xl"} color="primary" onPress={() => handleOpen10("2xl")} fullWidth>Limite de Consumo</Button></TableCell>
      <TableCell className="text-center"> <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          New
        </Chip> </TableCell>
    </TableRow>
  </TableBody>
</Table>



{/* Inicio _:_______________________________________*/}

<Modal 
      size={"2xl"} 
      isOpen={isOpen} 
      onClose={onClose} 
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">Seleccionar tipo de cuenta. </ModalHeader>
            <ModalBody>
              <div className="flex items-center space-x-2"> 
                <Popover class="text-xs w-1/2" key={ "top end"} placement={"top end"} color="primary">
                  <PopoverTrigger>
                    <Button color="primary" variant="flat" className="capitalize">
                      Mas Info
                    </Button>
                  </PopoverTrigger>
                  {TiposdeCuentas}
                </Popover>
                <div className="w-full max-w-xs"> {/* Ajusta según sea necesario para el bloque Autocomplete */}
                  <Autocomplete 
                    onSelectionChange={handleChange}
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
              <Button color="primary" onPress={() => {
                procesadorSeleccion(selectedOption , 0); // Imprime la opción seleccionada en la consola
                onClose(); // Cierra el modal
              }}>
                Listo
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>





  
 {/* Fin ___________________________________________ */}


{/* Inicio _:_______________________________________*/}
<Modal 
      size={"2xl"} 
      isOpen={isOpen2} 
      onClose={onClose2} 
    >
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <ModalContent>
          {(onClose2) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Webhook.</ModalHeader>
              <ModalBody>
                <Input
                  label="Webhook"
                  placeholder="Link para insertar en WebHook"
                  value={inputbewhook2}
                  onValueChange={(value) => setInputbewhook(value)} // Actualiza el estado del input
                />  
                <Snippet>{Dominio}{inputbewhook}</Snippet>
                <Popover class="text-xs w-1/2" key={ "top end"} placement={"top end"} color="primary">
                  <PopoverTrigger>
                    <Button color="primary" variant="flat" className="capitalize">Mas info</Button>
                  </PopoverTrigger>
                  {Webhook}
                </Popover>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose2}>Close</Button>
                <Button color="primary" onPress={() => {
                  procesadorSeleccion(inputbewhook, 1);
                  handleChange2(inputbewhook); // Llama a handleChange2 con el valor actual del input
                  onClose2();
                }}>Listo</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </div>
    </Modal>


  


 {/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}






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
                  Listo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>




{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}







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
                  Listo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}






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
                  Listo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}





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
                  Listo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}



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
                  Listo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>





  
{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}




<Modal 
        size={"2xl"} 
        isOpen={isOpen8} 
        onClose={onClose8} 
      >
        <ModalContent>
          {(onClose8) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Token de Open IA</ModalHeader>
              <ModalBody>






              <Popover class="text-xs w-1/2" key={"top end"} placement={"top end"} color="primary">
    <PopoverTrigger>
      <Button color="primary" variant="flat" className="capitalize">
Mas info sobre Token Open IA
      </Button>
    </PopoverTrigger>
    {
      TokenIA
    }
  </Popover>


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
                <Button color="danger" variant="light" onPress={onClose8}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose8}>
                  Listo
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



  
{/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}



<Modal 
  size={"2xl"} 
  isOpen={isOpen9} 
  onClose={onClose9} 
>
  <ModalContent>
    {(onClose9) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Token Asistente Open IA</ModalHeader>
        <ModalBody>
         

          <Popover class="text-xs w-1/2" key={"top end"} placement={"top end"} color="primary">
            <PopoverTrigger>
              <Button color="primary" variant="flat" className="capitalize">
                Más info  Token Asistente Open IA
              </Button>
            </PopoverTrigger>
            {TokenAsistente}
          </Popover>

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
          <Button color="danger" variant="light" onPress={onClose9}>
            Close
          </Button>
          <Button color="primary" onPress={onClose9}>
            Listo
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>



  {/* Fin ___________________________________________ */}

{/* Inicio _:_______________________________________*/}



<Modal 
  size={"2xl"} 
  isOpen={isOpen10} 
  onClose={onClose10} 
>
  <ModalContent>
    {(onClose10) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Limite de Consumo</ModalHeader>
        <ModalBody>
          <Popover class="text-xs w-1/2" key={"top end"} placement={"top end"} color="primary">
            <PopoverTrigger>
              <Button color="primary" variant="flat" className="capitalize">
              Limite de Consumo
              </Button>
            </PopoverTrigger>
            {Limite}
          </Popover>

          <div className="flex flex-col items-center gap-2 w-full md:w-auto max-w-[240px]">
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
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose10}>
            Close
          </Button>
          <Button color="primary" onPress={onClose10}>
            Listo
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>


        


</div>


  );
};

export default Control;