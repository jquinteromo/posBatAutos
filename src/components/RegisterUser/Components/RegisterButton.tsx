interface handleSubmitForms {
    handleSubmitForms: () => void
}

const RegisterButton = ({ handleSubmitForms }: handleSubmitForms) => {
    return (<div>
        <button
            onClick={handleSubmitForms}
            className="text-xs h-8 w-28 rounded-xl bg-black hover:bg-sky-400 hover:text-black text-white  px-4"
        >
            Registrarse
        </button>
        <p className="mt-3 text-sm h-3">¿ya tienes una cuenta? <a className="text-sm underline">inicia sesion</a></p>
    </div>
    );
};

export default RegisterButton;