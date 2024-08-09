interface InputProps {
    handleChanges: (name: string, value: string) => void
}


//Subcmponente campo de ingreso de correo
export const InputEmail = ({ handleChanges }: InputProps) => {
    return (
        <input
            name="email_register"
            type="email"
            placeholder="Ingrese correo"
            className="pb-2 pr-9 w-64 placeholder-black bg-transparent pl-9 border-b-2 border-black focus:outline-none bg-contain bg-left bg-no-repeat text-xs h-8"
            style={{ backgroundImage: 'url("/src/icons/User.png")' }}
            onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                handleChanges(name, value)
            }}
        />
    )
}

//subcompoennte campo ingereso contraseña
export const InputPassword = ({ handleChanges }: InputProps) => {
    return (
        <input
            name="password_register"
            type="Password"
            placeholder="Ingrese contraseña"
            className=" w-64 placeholder-black bg-transparent pl-9 border-b-2 border-black ; focus:outline-none bg-contain bg-left bg-no-repeat text-xs h-8 "
            style={{ backgroundImage: 'url("/src/icons/password.png")' }}
            onChange={(e) => {
                const name = e.target.name
                const value = e.target.value
                handleChanges(name, value)
            }}
        />
    )
}


