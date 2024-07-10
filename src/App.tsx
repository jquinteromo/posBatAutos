import { useState } from "react";
import Loginform from "./components/login/Loginform"
import Orders from "./components/Orders/Orders";
import Catalogue_Products from "./components/catalogue/Catalogue_Products";
import "./styles/globals.css"

export type ScreenType = "login" | "catalogue" | "order"

function App() {

  const [screenToShow, setScreenToShow] = useState<ScreenType>("login")

  return (
    <div>
      {
        screenToShow === "login" &&
        <Loginform setScreenToShow={setScreenToShow} />
      }

      {screenToShow === "catalogue" && <Catalogue_Products setScreenToShow={setScreenToShow} />}

      {screenToShow === "order" && <Orders />}
    </div>
  );
}

export default App