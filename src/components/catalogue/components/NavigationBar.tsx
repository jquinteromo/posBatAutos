// subcomponente barra de navegacion horizontal
function NavigationBar({ onModal }: { onModal: () => void }) {

    // funcion que nos permite abrr el modal
    function OnModal() {
        onModal()
    }

    return (
        // contenido de la barra de navegacion como los botones de navegacion etc
        <div className="  flex h-20 bg-sky-400 justify-end   text-white tex">

            <ul className=" max-sm:space-x-3  flex space-x-28 ">
                <li className="flex my-auto  mr-16">  <img className="w-52 h-24 max-sm:ml-20 max-sm:w-14 max-sm:h-16  " src="/src/icons/IconBatAutos.png"></img></li>

                <div className="flex items-center gap-40 max-sm:gap-4   max-sm:text-xs ">
                    <li className="flex ">inicio</li>
                    <li className="flex ">Contacto</li>
                    <li className="flex max-sm:w-24">Sobre Nosotros</li>
                    <li className=" max-sm:pr-3 pr-20 ">
                        <svg onClick={OnModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-7 size-6 max-sm:right-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5
                         14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </li>
                </div>
            </ul>
        </div >

    )
}

export default NavigationBar