interface LoginButtonProps {
    handleSubmitForm: () => void
}

const LoginButton = ({ handleSubmitForm }: LoginButtonProps) => {
    return (
        <button
            className="text-xs h-8 w-28 rounded-xl bg-black hover:bg-sky-400 hover:text-black text-white py-2 px-4"
            onClick={handleSubmitForm}
        >
            Ingresar
        </button>
    );
};

export default LoginButton;