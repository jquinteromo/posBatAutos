import { useState } from "react";


function Price(

) {
    const [isOpen, setIsOpen] = useState("invisible")

    const openModalPrice = () => {
        setIsOpen("visible")
    }

    const closeModalPrice = () => {
        setIsOpen("invisible")
    }

    return (<div>
        <div className={`${isOpen}  w-3/5 h-96 bg-gray-100 absolute my-20 mx-64`} >
            <div className="flex justify-between px-4">
                <h1 className="text-gray-700 ml-5 mt-2">Agrega productos a cotización</h1>
                <h1 onClick={closeModalPrice} className="cursor-pointer text-slate-600 mt-3">X</h1>
            </div>

            <div className="flex row-auto gap-5 list-none mt-6 ">
                <table className=" border-collapse table-auto w-full ">
                    <thead className="">
                        <tr>
                            <th className=" w-80 text-sm  font-medium  pl-24  pb-3 text-black  text-left">Codigo</th>
                            <th className=" w-80  text-sm  font-medium  pl-24  pb-3 text-black  text-left">Descripción</th>
                            <th className=" w-80  text-sm  font-medium  pl-24  pb-3 text-black  text-left">Precio</th>
                            <th className=" w-80  text-sm  font-medium  pl-24  pb-3 text-black  text-left">Cantidad</th>
                            <th className=" w-80  text-sm  font-medium  pl-24  pb-3 text-black  text-left "></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td className="border-b border-t pb-3  border-gray-300  text pt-3  text-xs pl-24 text-slate-700 dark:text-slate-800">0012</td>
                            <td className="border-b border-t pb-3 border-gray-300  text pt-3  text-xs pl-24 text-slate-500 dark:text-slate-800">Bateria varta blueLstv4</td>
                            <td className="border-b border-t pb-3 border-gray-300  text pt-3  text-xs pl-24 text-slate-500 dark:text-slate-800">$200.499</td>
                            <td className="border-b border-t pb-3 border-gray-300  text pt-3  text-xs pl-24 text-slate-500 dark:text-slate-800">1</td>
                            <td className="border-b border-t pb-3 border-gray-300  text pt-3  text-xs pl-24  text-slate-500 dark:text-slate-800">  <input value={"Agregar"} className=" bg-blue-900 text-white font-bold py-2 px-1 rounded-sm mr-2" type="button"></input></td>
                        </tr>


                    </tbody>
                </table>

            </div>
        </div>
        <div>
            <div className="w-48  h-20 mt-5 ml-3">
                <img className="w-full h-full object-cover " src="/src/icons/IconBatremark.png"></img>
            </div>

            <div className="w-full h-12  mx flex  justify-between py-2" >
                <h1 className="ml-9">Crea tu cotización</h1>

                <div className="pr-14 ">
                    <label className="mr-3 text-gray-600 font-bold" >Nombre</label>
                    <input className="mt-1 mr-16  py-1 outline-none pl-4 border border-gray-600 rounded-sm" type="text"></input>
                    <label className="mr-3 text-gray-600 font-bold">Correo</label>
                    <input className=" py-1 outline-none pl-4 border border-gray-600 rounded-sm" type="text"></input>
                </div>

            </div>

            <div className="my-5  w-full flex raw gap-10">
                <input placeholder="Busca por codigo o nombre" className="outline-none placeholder-gray-500 text-base py-2 w-72 pl-14 ml-9 rounded-sm bg-gray-300" type="search"></input>
                <input onClick={openModalPrice} value={"Buscar"} className="outline-none cursor-pointer w-20 py-2 rounded-sm text-white bg-cyan-700" type="button"></input>
            </div>

            <div className="mt-10">
                <table className=" border-collapse table-auto w-full ">
                    <thead>
                        <tr>
                            <th className=" w-80 bg-white border-b text-sm border-gray-400 font-medium  pl-24  pb-3 text-black  text-left">Cantidad</th>
                            <th className=" w-60 border-b text-sm border-gray-400 font-medium p-4 pt-0 pb-3  text-black text-left">Codigo</th>
                            <th className=" w-60 border-b text-sm border-gray-400 font-medium p-4 pt-0 pb-3  text-black text-left">Descripción</th>
                            <th className=" w-60 border-b text-sm border-gray-400 font-medium p-4 pr-8 pt-0 pb-3 text-black text-left">Precio Unid</th>
                            <th className=" w-60 border-b  border-gray-400 font-medium p-4 pr-8 pt-0 pb-3 text-black text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white ">
                        <tr>
                            <td className="border-b pb-3 border-gray-400 font-bold text pt-3  text-sm pl-24 text-slate-500 dark:text-slate-600">1</td>
                            <td className="border-b border-gray-400 text-sm  p-4 text-slate-500 dark:text-slate-600">0012</td>
                            <td className="border-b border-gray-400 text-sm p-4 pr-8 text-slate-500 dark:text-slate-600">Bateria varta blueLstv4</td>
                            <td className="border-b border-gray-400 text-sm p-4 text-slate-500 dark:text-slate-600">$200.499</td>
                            <td className="border-b border-gray-400 text-sm p-4 pr-8 font-bold text-slate-500 dark:text-slate-600">$200.499 <span className="font-bold text-sm text-red-500 pl-10">X</span></td>
                        </tr>
                        <tr>
                            <td className="border-b pb-3 border-gray-400 font-bold text pt-3  text-sm pl-24 text-black ">Total:<span className="ml-4">$200.499</span></td>
                            <td className="border-b pb-3 border-gray-400 font-bold text pt-3  text-sm pl-8 text-slate-500 dark:text-slate-600"></td>
                            <td className="border-b border-gray-400 text-sm  p-4 text-slate-500 dark:text-slate-600"></td>
                            <td className="border-b border-gray-400 text-sm p-4 pr-8 text-slate-500 dark:text-slate-600"></td>
                            <td className="border-b border-gray-400 text-sm p-4 text-slate-500 dark:text-slate-600"></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="mt-3 w-full flex justify-end">
                <input className="text-center text-sm mr-6 h-8 w-32 font-bold cursor-pointer text-white bg-blue-900" type="button" value={"Enviar Cotización"}></input>
            </div>

        </div>
    </div>)
}

export default Price;