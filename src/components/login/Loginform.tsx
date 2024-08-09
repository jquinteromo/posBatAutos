import { LinkForgotMyPassword } from "./components/links"
import { InputEmail, InputPassword } from "./components/inputsAutentication";
import { HeadTitle, HeadTitleForm } from "./components/titles";
import { Linkregister, } from "./components/links";
import Loginbutton from "./components/LoginButton";
import { ScreenType } from "../../App";
import { useEffect, useState } from "react";
import axios from 'axios';


// definimos tipo da propiedades de los input
type FormDataType = {
    email: string,
    password: string
}

// por defecto las propiedades estaran vacias
const FormDataInit: FormDataType = {
    email: '',
    password: ''
}

//Definimos un componente que representa el login 
function Loginform({ }:
    { setScreenToShow: (e: ScreenType) => void }
) {
    // creamos un estado que alamcena las propiedades vacias
    const [formData, setformData] = useState<FormDataType>(FormDataInit)
    const [, setLoading] = useState<boolean>(false);


    useEffect(() => {
        console.log(formData);
    }, [formData])

    // definimos una funcion que va cambiando las propiedades por las nuevas ingresadas en los campos
    const handleChange = (name: string, value: string) => {
        setformData({
            ...formData,
            [name]: value
        })
    }

    //envia los datos ala api
    const handleSubmit = async () => {
        setLoading(true)
        console.log('Datos del formulario:', formData);
        console.log('La función handleSubmit ha sido llamada');
        try {
            // este metodo envia el nuevo objeto al endpoint 
            const response = await axios.post('http://localhost:3000/api/auth', formData)
            if (!formData) {
                console.log("datos vacios")
            }
            console.log('respuesta del servidor:', response.data)
        } catch (error) {
            console.error('error al iniciar sesion', error)
        } finally {
            setLoading(false)
        }
    }


    return (
        //cremos el formulario que permite validar datos registrados del usuario
        <form className="bg-sky-400">

            <div className=" grid place-items-center bg-sky-400   h-screen w-screen text-center  " >
                {/* //Añadimos subcomponente titulo del login */}
                <HeadTitle />

                <div className="max-sm:w-80  max-sm:mb-36 max-sm:text-left bg-white mb-16 mx-auto grid gap-y-4 justify-items-center grid-cols-1 w-[32rem] h-[25rem] rounded-xl">
                    {/* /*Añadimos subcomponente subtitulo de login */}
                    <HeadTitleForm />
                    <div className="grid gap-y-6">
                        {/* //Campo que nos permite ingreasar el correo */}
                        <InputEmail handleChange={handleChange} />
                        {/* //Campo que nos permite registrar la contraseña */}
                        <InputPassword handleChange={handleChange} />
                    </div>
                    <div className=" grid justify-items-start  mr-36">
                        {/* //Link que permite llevar una nueva pagina para registrarse */}
                        <Linkregister />
                        {/* //Link que nos ayuda si olvidamos nuestra contraseña como usuarios */}
                        <LinkForgotMyPassword />
                    </div>
                    {/* //subcomponente boton que nos permite validar datos ingresados  */}
                    <Loginbutton handleSubmitForm={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default Loginform;