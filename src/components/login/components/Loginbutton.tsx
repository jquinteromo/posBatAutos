import { ScreenType } from "../../../App";
//subcomponente boton valida datos ingreesados con propiedad que nos permiter 
//cambiar de pagina al dar click
const LoginButton = ({ setScreenToShow }: { setScreenToShow: (e: ScreenType) => void }) => {

    //Funcion que nos permite cambiar de pagina cuando se da click
    const handleLogin = () => {
        setScreenToShow("catalogue")
    };

    return (
        <button
            className="text-xs h-8 w-28 rounded-xl bg-black hover:bg-sky-400 hover:text-black text-white py-2 px-4"
            onClick={handleLogin}
        >
            Ingresar
        </button>
    );
};

export default LoginButton;