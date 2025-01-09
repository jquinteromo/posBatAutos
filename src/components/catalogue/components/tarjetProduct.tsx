import { useState } from "react"
import { useEffect } from "react"

type Product = {
    imgProduct: string
    descriptionProduct: string
    priceProduct: string
    discountproduct: string

}

// subcomponetne tarjeta de producto define cada prducto
function TarjetProduct({ sendDataProduct, imgProduct, descriptionProduct, priceProduct, discountproduct }:
    { sendDataProduct: (product: Product | null) => void, imgProduct: string, descriptionProduct: string, priceProduct: string, discountproduct: string }) {


    const [selecProduct, setSelecProduct] = useState<Product | null>(null)

    function handleProductClick(Producto: Product) {
        setSelecProduct(Producto)

    }

    useEffect(() => {
        if (selecProduct) {
            sendDataProduct(selecProduct)
            console.log(selecProduct)
        }
    }, [selecProduct])




    return (
        // contenido del producto como su imagen caracteristica etc

        <div className="   h-80 max-sm:h-56 max-sm:w-32 max-sm:ml-1  ml-6 w-56 pl-4  bg-slate-200 rounded-lg">
            <div className="flex justify-center">
                <img className="rounded h-44 w-52 max-sm:h-20 max-sm:w-24" src={imgProduct} />
            </div>
            <div className="mt-5 ">
                <div>
                    <div className="text-xs text-slate-600 uppercase font-bold tracking-wider max-sm:text-xs">{descriptionProduct}</div>
                    <div className="font-bold text-slate-700 leading-snug">
                        <a className="hover:underline">{priceProduct}</a>
                    </div>
                    <div className="mt-2 text-sm text-lime-600 ">{discountproduct}</div>
                    <div className="flex justify-center max-sm:my-0  my-5">
                        <button onClick={() => handleProductClick({ imgProduct, descriptionProduct, priceProduct, discountproduct })} className="hover:bg-sky-700 rounded-xl bg-sky-400 h-7 max-sm:h-5 text-white text-sm max-sm:w-24 w-36 max-sm:text-xs max-sm:mr-4 max-sm:mt-3">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TarjetProduct