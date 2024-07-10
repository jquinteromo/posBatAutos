// subcomponente iconos de navegacion menu lateral
function Iconsnav({ icon, label, labelhidden, onMenuItems }: { icon: string, label: string, labelhidden: string, onMenuItems: () => void }) {

    // funcion que le permite a cada icono cerrar y abrir el menu lateral
    const handleClick = () => {
        onMenuItems()
    }

    return (
        // contenido de cada item de navegacion lateral
        <div className="flex flex-row">
            <i onClick={handleClick}>
                <img className="w-7" src={icon} />
            </i>

            <h5 className={`${labelhidden} ml-5 text-base`} >
                {label}
            </h5>
        </div>
    )
}

export default Iconsnav