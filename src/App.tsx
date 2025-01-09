import { useState } from "react";
import Loginform from "./components/login/Loginform"
import Register from "./components/RegisterUser/Register";
import Orders from "./components/Orders/Orders";
import Catalogue_Products from "./components/catalogue/Catalogue_Products";
import "./styles/globals.css"
import Price from "./components/Price/Componentes/Price";



export type ScreenType = "login" | "catalogue" | "order" | "Register" | "price"

function App() {

  const [screenToShow, setScreenToShow] = useState<ScreenType>("login")

  return (
    <div>


      {screenToShow === "login" && <Loginform setScreenToShow={setScreenToShow} />}

      {screenToShow === "catalogue" && <Catalogue_Products setScreenToShow={setScreenToShow} />}

      {screenToShow === "order" && <Orders />}

      {screenToShow === "Register" && <Register />}

      {screenToShow === "price" && <Price />}



    </div>
  );
}

export default App