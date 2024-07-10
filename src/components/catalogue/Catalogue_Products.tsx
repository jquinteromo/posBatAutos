import NavigationMenu from "./components/NavigationMenu";
import NavigationBar from "./components/NavigationBar";
import TarjetProduct from "./components/tarjetProduct";
import { useState } from "react";
import Modal from "./components/Modal";
import { ScreenType } from "../../App";

// componente almacena las tarjetas de productos de un catalogo
function Catalogue_Products({ setScreenToShow }:
    { setScreenToShow: (e: ScreenType) => void }
) {

    //cada estado genera un cambio sobre los subcomponentes del componente padre
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [menuWidth, setMenuWidth] = useState<string>("w-20")
    const [rotationicondisplay, setrotationicondisplay] = useState<string>("")
    const [lefticosn, setlefticosn] = useState<string>("items-center")
    const [hiddenlabel, sethiddenlabel] = useState<string>("hidden")
    const [hiddenIconSearch, sethiddenIconSearch] = useState<string>("")

    const [modalVisible, setModalVisible] = useState('invisible');

    //como lo dice su nombre funcion que nos permite abrir un modal
    const abrirModal = () => {
        setModalVisible('visible');
    };
    //funcion que nos permite cerra un modal
    const cerrarModal = () => {
        setModalVisible('invisible');
    };

    //funcion que nos permite cerrar y abrir el menu lateral a base del mismo boton
    const toogleMenu: () => void = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            setMenuWidth("w-60")
        } else {
            setMenuWidth("w-20")

        }
        sethiddenIconSearch(isOpen ? "" : "hidden")
        sethiddenlabel(isOpen ? "hidden" : "")
        setrotationicondisplay(isOpen ? "" : " ml-48 rotate-180")
        setlefticosn(isOpen ? "items-center" : "items-start pl-5")
    };


    //variable nos guarda las propiedades de el subcomponente renderizado tarjeta producto
    const TarjetProducts: { imgProduct: string, descriptionProduct: string, priceProduct: string, discountproduct: string }[] = [
        { imgProduct: '/src/icons/vartablu.jpg', descriptionProduct: 'Bateria varta blueLstv4', priceProduct: '$200.499', discountproduct: '10% Descuento' },
        { imgProduct: '/src/icons/vartawhit.png', descriptionProduct: 'Bateria varta Silver Dinamic', priceProduct: '$230.499', discountproduct: '10% Descuento' },
        { imgProduct: '/src/icons/vartablac.png', descriptionProduct: 'Bateria varta F5 Black', priceProduct: '$250.599', discountproduct: '10% Descuento' },
        { imgProduct: '/src/icons/VartaSilver.png', descriptionProduct: 'Bateria Silver 42!STV5', priceProduct: '$545.000', discountproduct: '10% Descuento' }
    ]


    return (
        <div className="">
            <div className="flex justify-center w-full fixed h-10">
                {/* Renderizamos subcomponente rendrizado "modal" */}
                <Modal
                    setScreenToShow={setScreenToShow}
                    closeModal={cerrarModal}
                    VisibilityModal={modalVisible}

                />

            </div>
            {/* Renderizamos subcomponente renderizado navegacion de menu lateral */}
            <NavigationMenu
                widthMenu={menuWidth}
                onMenu={toogleMenu}
                rotationicon={rotationicondisplay}
                directionicons={lefticosn}
                labelhidden={hiddenlabel}
                hiddenicon={hiddenIconSearch}
            />
            {/* Renderizamos barra de navegacion horizontal */}
            <NavigationBar
                onModal={abrirModal} />
            <div className="ml-24 h-svh flex flex-row max-sm:grid max-sm:ml-20 grid-cols-2 max-sm:gap-1 gap-12 items-center pb-20 75">
                {/* Renderizamos subcomponente tarjeta de producto y pasamos propiedades de la variable tajetProducts */}
                {TarjetProducts.map((PropProduct) => (
                    <TarjetProduct
                        key={PropProduct.descriptionProduct}
                        imgProduct={PropProduct.imgProduct}
                        descriptionProduct={PropProduct.descriptionProduct}
                        priceProduct={PropProduct.priceProduct}
                        discountproduct={PropProduct.discountproduct} />
                ))}

            </div>

        </div>)
}

export default Catalogue_Products;