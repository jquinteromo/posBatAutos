
// componente define los pedidos
function Orders() {
    // variable almacena los regsitros de nuestra tabla funciona por el momento como base de datos
    const Pedidos = [
        { id: 10101010, date: "00/00/0000", state: "Cancelado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Reembolsado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Pendiente de pago", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },
        { id: 10101010, date: "00/00/0000", state: "Completado", billing: "Completa", Total: "$200.000" },


    ]


    return (
        // div almacena nuestra barra de busqueda y el titulo pedidos
        <div className="font-Inter">
            <div className="flex items-center flex-wrap  w-full h-20 mx-auto">
                <h1 className="max-sm:ml-2 ml-8 mb-1  ">Pedidos</h1>
                <div className="w-full absolute flex-wrap flex justify-center">
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="inline-block  text-gray-400 pl-2 max-sm:pl-4  pt-1 absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" max-sm:left-[12rem] size-6 absolute top-1 left-[22rem] ">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                            </svg>
                        </span>

                        <input className="pb-1 max-sm:w-56 max-sm:ml-2  placeholder:italic placeholder:text-slate-400 block bg-white w-96  border-gray-500 rounded-2xl border  py-1 pl-9 pr-3  shadow-sm focus:outline-none sm:text-sm" placeholder="Search" type="text" name="search" />

                    </label>
                </div>
            </div>
            {/* este div almacena nuestros filtros  */}
            <div className="flex flex-wrap items-center max-sm:text-[10px] h-14 w-full ">
                <ul className="flex  flex-row gap-32 max-sm:gap-3">
                    <li className="flex   ml-14 max-sm:ml-0 max-sm:pl-2 "> Todos<span className="ml-1 border-r-[1px] border-black pr-1 font-bold">1</span></li>
                    <li className="flex  max-sm:pl-2"><span className="max-sm:hidden"><img className="h-5 w-5 mt-1 mr-1" src="/src/components/Orders/Icons-Orders/pendientepago.png" /></span> pendiente de pago<span className="font-bold ml-1  border-r-[1px] border-black pr-1">1</span></li>
                    <li className="flex  max-sm:pl-2"><span className="max-sm:hidden"><img className="h-5 w-5 mt-1 mr-1" src="/src/icons/VerificationIcon.png" /></span> Completado<span className="font-bold ml-1 border-r-[1px] border-black pr-1">1</span></li>
                    <li className="flex  max-sm:pl-2"><span className="max-sm:hidden"><img className="h-4 w-4 mt-1 mr-1" src="/src/components/Orders/Icons-Orders/Cancel.png" /></span> Cancelado<span className="font-bold ml-1 border-r-[1px] border-black pr-1">1</span></li>
                    <li className="flex flex-wrap  max-sm:pl-2"><span className="max-sm:hidden"><img className="h-6 w-6 mr-1" src="/src/components/Orders/Icons-Orders/Reembolsado.png" /></span> Reembolsado<span className="font-bold ml-1 border-r-[1px] border-black pr-1">1</span></li>
                </ul>
            </div>

            {/* tabla de pedidos definida */}
            <div className="mx-auto overflow-y-auto max-h-[23rem]  max-sm:max-h-[100rem]">
                <table className="mt-10 w-full border-collapse ">
                    <thead className="">
                        <tr className="max-sm:text-xs  border-y  ">
                            <th className="h-16 max-sm:h-10  ">
                                Pedido
                            </th>
                            <th>
                                Fecha
                            </th>
                            <th>
                                Estado
                            </th>
                            <th>
                                Facturación
                            </th>
                            <th>
                                Total
                            </th>
                            <th>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* rrecoremos las columnas y agregamos nuestros registros de la variable Pedidos */}
                        {Pedidos.map((register) => (

                            <tr className={`max-sm:text-[10px] border-y `}>
                                <td className="h-12 text-center bt">
                                    <input className="mr-2 " type="checkbox"></input>
                                    {register.id}
                                </td>
                                <td className="text-center pl-2 pr-2">
                                    {register.date}
                                </td>
                                <td className={`font-bold pl-2 pr-2 text-center ${register.state === "Cancelado" ? 'text-red-900' : register.state === "Reembolsado" ? "text-orange-500" : register.state === "Completado" ? "text-green-500" : register.state === "Pendiente de pago" ? 'text-red-500' : ''}`}>
                                    {register.state}
                                </td>
                                <td className=" text-center">
                                    {register.billing}
                                </td>
                                <td className="text-center">
                                    {register.Total}
                                </td>
                                <td className="flex h-12 justify-center items-center ">
                                    <img className="max-sm:h-4 max-sm:w-4 h-7  w-7" src="/src/components/Orders/Icons-Orders/eliminar.png" />
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

            {/* botones de navegacion funcionan para nuestra paginacion en caso de suma de mas de 10 Pedidos */}
            <div className="flex justify-center items-center gap-2 max-sm:mt-3   w-full h-[4.5rem] ">
                <button className=" py-2 px-2 border-2 rounded-md text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-sky-500 size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </button>
                <button className=" py-1 px-3 border-2 rounded-md text-gray-400">1</button>
                <button className="py-1 px-3 border-2 rounded-md text-gray-400">2</button>
                <button className="py-1 px-3 border-2 rounded-md text-gray-400">3</button>
                <button className=" py-2 px-2 border-2 rounded-md text-gray-400"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold size-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
                <button className="absolute right-20 h-8 w-44 max-[390px]:bg-black max-sm:right-4 max-sm:bottom-16 max-sm:w-24 max-sm:text-xs bg-sky-500 rounded-sm text-white" >Facturar Pedido</button>
            </div>
        </div >

    )
}

export default Orders