import { LinkForgotMyPassword } from "./components/links"
import { InputEmail, InputPassword } from "./components/inputs";
import { HeadTitle, HeadTitleForm } from "./components/titles";
import { Linkregister, } from "./components/links";
import Loginbutton from "./components/Loginbutton";
import { ScreenType } from "../../App";

//Definimos un componente que representa el login 
function Loginform({ setScreenToShow }:
    { setScreenToShow: (e: ScreenType) => void }
) {


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
                        <InputEmail />
                        {/* //Campo que nos permite registrar la contraseña */}
                        <InputPassword />
                    </div>
                    <div className=" grid justify-items-start  mr-36">
                        {/* //Link que permite llevar una nueva pagina para registrarse */}
                        <Linkregister />
                        {/* //Link que nos ayuda si olvidamos nuestra contraseña como usuarios */}
                        <LinkForgotMyPassword />
                    </div>
                    {/* //subcomponente boton que nos permite validar datos ingresados  */}
                    <Loginbutton setScreenToShow={setScreenToShow} />
                </div>
            </div>
        </form>
    )
}

export default Loginform;