import { ScreenType } from "../../../App";

// definicion subcomponente modal carrito de compras
function Modal({ VisibilityModal, closeModal, setScreenToShow }: { VisibilityModal: string, closeModal: () => void, setScreenToShow: (e: ScreenType) => void }) {
    // funcion que permite cerrar el modal
    function OnCloseModals() {
        closeModal()
    }

    const handleorder = () => {
        setScreenToShow("order")
    };

    const totalproductos = 1
    return (
        // contenido del modal como productos añadidos total de producots añadidos entre otros datos
        <div className={`${VisibilityModal}  fixed bg-black bg-opacity-80 w-full h-full  flex justify-center `}>
            <div className={` ${VisibilityModal}   max-sm:w-full max-sm:h-3/4 bg-slate-50 w-3/4 h-3/4  `} >
                <div className="flex justify-end mx-5 my-1">
                    <img onClick={OnCloseModals} src="/src/icons/closemodal.png" className=" w-8" />
                </div>
                <h1 className={` flex flex-row  max-sm:text-xs text-sm text-green-500 justify-center max-sm:ml-20 gap-2 `}>
                    <img className="max-sm:h-3 max-sm:w-3 h-6 w-6" src="/src/icons/VerificationIcon.png" />
                    Productos añadidos al carrito de compras
                </h1>

                <div className="flex flex-row h-full my-10 " >
                    <div className="max-sm:pl-16 max-sm:w-96 pl-5 ml-4 w-2/4 h-2/3 overflow-y-auto max-h-300   ">
                        <ul className="  overflow-y:auto  flex flex-col gap-6">
                            <li className="mt-3 flex flex-row items-center max-sm: max-sm:gap-1 gap-12">
                                <img className=" w-14 h-20 " src="/src/icons/vartablu.jpg"></img>

                                <div className="max-sm:w-20 flex flex-col gap-2">
                                    <h1 className="text-xs font-bold">Bateria varta blueLstv4</h1>
                                    <p className="text-xs text-zinc-500"><span className="font-bold">ID:</span> 312321321</p>
                                    <span className="flex justify-center w-20 text-orange-500 border-sky-400 border-l border-r border-t border-b  rounded-xl text-xs px-3 py-1">$200.499</span>
                                </div>

                                <div className="flex flex-row gap-4  right-28 items-center ">
                                    <button className="">
                                        <img src="/src/icons/restar.png" className="w-5 h-5" />
                                    </button>
                                    <span>0</span>
                                    <button className="">
                                        <img src="/src/icons/anadir.png" className="w-5 h-5" />
                                    </button>
                                </div>

                            </li>

                        </ul>

                    </div>
                    <hr className="flex  mx-auto max-sm:mr-5 w-0.5 h-80 bg-gray-200 border-none" />
                    <div className="flex flex-col gap-5 max-w-md h-2/3 max-sm:lowercase max-sm:text-xs max-sm:w-16 max-sm:h-16 max-sm:mr-5 mr-auto ">
                        <h1 className="text-xs font-bold">
                            HAY <span className="">{totalproductos}</span> PRODUCTOS AÑADIDOS  EN SU CARRITO DE COMPRAS
                        </h1>
                        <hr className="flex mt-2 mx-auto  w-4/5 h-px bg-gray-200 border-none" />
                        <h2 className="font-bold">Precio Total de productos Añadidos: X</h2>
                        <h2 className="font-bold">Total Impuestos incluidos: X</h2>
                        <div className="text-xs flex items-end max-sm:mt-28 max-sm:w-20 justify-end h-44">
                            <button onClick={handleorder} className="hover:bg-sky-700 max-sm:h-10 max-sm:mr-2 bg-sky-400 h-7 w-36 rounded-xl text-white">Enviar  a facturacion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal
