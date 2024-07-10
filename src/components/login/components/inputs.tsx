
//Subcmponente campo de ingreso de correo
export const InputEmail = () => {
    return (
        <input type="email" placeholder="Ingrese correo" className=" pb-2 pr-9  w-64 placeholder-black bg-transparent 
        pl-9 border-b-2 border-black ; focus:outline-none bg-contain  
        bg-left bg-no-repeat  text-xs h-8  " style={{ backgroundImage: 'url("/src/icons/User.png")' }} />
    )
}

//subcompoennte campo ingereso contraseña
export const InputPassword = () => {
    return (
        <input type="Password" placeholder="Ingrese contraseña" className=" w-64 placeholder-black bg-transparent
         pl-9 border-b-2 border-black ; focus:outline-none bg-contain
          bg-left bg-no-repeat text-xs h-8 " style={{ backgroundImage: 'url("/src/icons/password.png")' }} />
    )
}



