import { InputEmail } from "./Components/InputsRegister"
import { InputPassword } from "./Components/InputsRegister"
import { HeadTitle } from "../login/components/titles"
import { HeadTitleForm } from "./Components/titles"
import RegisterButton from "./Components/RegisterButton"
import { useEffect, useState } from "react"
import axios from 'axios';

type FormDataType = {
    email_register: string,
    password_register: string
}

// por defecto las propiedades estarán vacías
const FormDataInit: FormDataType = {
    email_register: '',
    password_register: ''
}

function Register() {
    const [formData, setformData] = useState<FormDataType>(FormDataInit);
    const [, setLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log(formData);
    }, [formData])

    // Definimos una función que va cambiando las propiedades por las nuevas ingresadas en los campos
    const handleChanges = (name: string, value: string) => {
        setformData({
            ...formData,
            [name]: value
        })
    }

    // Envía los datos a la API
    const handleSubmits = async () => {
        setLoading(true)
        console.log('Datos del formulario:', formData);
        console.log('La función handleSubmit ha sido llamada');
        try {
            // Este método envía el nuevo objeto al endpoint 
            const response = await axios.post('http://localhost:3000/api/record', formData)
            if (!formData) {
                console.log("datos vacíos")
            }
            console.log('Respuesta del servidor:', response.data)
        } catch (error) {
            console.error('Error al iniciar sesión', error)
        } finally {
            setLoading(false)
        }
    }

    return <form className="bg-sky-400">
        <div className="grid place-items-center bg-sky-400 h-screen w-screen text-center">
            {/* Añadimos subcomponente título del login */}
            <HeadTitle />

            <div className="max-sm:w-80 max-sm:mb-36 max-sm:text-left bg-white mb-16 mx-auto grid justify-items-center grid-cols-1 w-[32rem] h-[26rem] rounded-xl">
                {/* Añadimos subcomponente subtítulo de login */}
                <HeadTitleForm />

                <div className="grid gap-y-3">
                    <InputEmail handleChanges={handleChanges} />
                    <InputPassword handleChanges={handleChanges} />
                </div>

                <RegisterButton handleSubmitForms={handleSubmits} />
            </div>
        </div>
    </form>
}

export default Register;
