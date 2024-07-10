import Iconsnav from "./IconsNavegationMenu";

// subcomponente menu lateral desplegable
function NavigationMenu({ onMenu, hiddenicon, widthMenu, rotationicon, directionicons, labelhidden }:
    { onMenu: () => void, hiddenicon: string, widthMenu: string, rotationicon: string, directionicons: string, labelhidden: string }) {

    // variable que guarda las propiedades de  opcion del menu
    const IconsLabels: { icon: string, label: string, labelhidden: string }[] = [
        { icon: '/src/icons/Batcar.png', label: 'Marca de Baterias', labelhidden: `${labelhidden}` },
        { icon: '/src/icons/Ciudades.png', label: 'Ciudades', labelhidden: `${labelhidden}` },
        { icon: '/src/icons/Catalogo.png', label: 'Catalogos', labelhidden: `${labelhidden}` },
        { icon: '/src/icons/Coche.png', label: 'Vehiculos', labelhidden: `${labelhidden}` },
        { icon: '/src/icons/Mercado.png', label: 'Tiendas Oficiales', labelhidden: `${labelhidden}` },
        { icon: '/src/icons/Terminoscondiciones.png', label: 'Terminos y Condicones', labelhidden: `${labelhidden}` },
    ];

    // funcion que permite abrir el menu lateral
    const handleClick = () => {
        onMenu();
    };

    return (
        // contenido del menu lateral 
        <div className={`  ${widthMenu} h-screen bg-zinc-200 fixed text-xs px- flex flex-col  gap-10 max-sm:gap-16   ${directionicons}`} >
            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` ${rotationicon} size-8 mt-6`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            <div className="flex flex-row " >
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${hiddenicon} size-6`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>



                <div className={`${labelhidden} ml-2`}>
                    <div className="relative w-full ">
                        <div className=" flex absolute inset-0 items-center pl-3 pointer-events-none">
                            <span className="inline-block w-5 h-5 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </span>
                        </div>
                        <input type="text" className="w-full rounded-lg pl-10 py-2 focus:outline-none  " placeholder="Search here" />
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-10 max-sm:gap-16">
                {/* metodo map rrecore la variable que guarda las propiedades de los iconos y 
                los coloca dentro de este div de manera vertical */}
                {IconsLabels.map((itemNav) => (
                    <Iconsnav
                        key={itemNav.label}
                        icon={itemNav.icon}
                        label={itemNav.label}
                        labelhidden={itemNav.labelhidden} onMenuItems={handleClick}
                    />
                ))}
            </div>
        </div>
    )
}

// 
export default NavigationMenu
