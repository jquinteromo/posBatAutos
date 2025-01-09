import { useState } from "react";

type Product = {
    imgProduct: string;
    descriptionProduct: string;
    priceProduct: string;
    discountproduct: string;
};

type selecProduct = {
    selecProduct: Product
}



function AddedProduct({ selecProduct }: selecProduct) {

    const [counterProduct, setcounterProduct] = useState(0)

    function descarga() {
        setcounterProduct(counterProduct + 1)
    }

    function decraseCounter() {
        setcounterProduct(counterProduct - 1)
    }

    return (<div >


        <ul className="  overflow-y:auto  flex flex-col gap-6">
            <li className="mt-3 flex flex-row items-center max-sm: max-sm:gap-1 gap-12">

                <img className=" w-14 h-20 " src={selecProduct.imgProduct}></img>

                <div className="max-sm:w-20 flex flex-col gap-2">
                    <h1 className="text-xs font-bold">{selecProduct.descriptionProduct}</h1>
                    <p className="text-xs text-zinc-500"><span className="font-bold">ID:</span> 312321321</p>
                    <span className="flex justify-center w-20 text-orange-500 border-sky-400 border-l border-r border-t border-b  rounded-xl text-xs px-3 py-1">{selecProduct.priceProduct}</span>
                </div>

                <div className="flex flex-row gap-4  right-28 items-center ">
                    <button onClick={decraseCounter} className="">
                        <img src="/src/icons/restar.png" className="w-5 h-5" />
                    </button>
                    <span>{counterProduct}</span>
                    <button onClick={descarga} className="">
                        <img src="/src/icons/anadir.png" className="w-5 h-5" />
                    </button>
                </div>

            </li>

        </ul>

    </div>)

}

export default AddedProduct