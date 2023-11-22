import { useReducer } from 'react'
import axios from 'axios'

import ProductContext from '../Product/ProductContext'
import ProductReducer from "../Product/ProductReducer"

export const ProductState = (props) => {

    const initialState = {
        mugs: [],
        mug: [{
            id_: "",
            name: "",
            price: "",
            image: ""
        }]
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getMug = async (id) => {

        const res = await axiosClient.get(`/get-mug/${id}`)

        const mug = res.data.mug

        dispatch({
            type: "GET_MUG",
            payload: mug
        })

        return mug

    }


    const getMugs = async () => {

        const res = await axiosClient.get("/get-mugs")

        dispatch({
            type: "GET_MUGS",
            payload: res.data.mugs
        })

    }

    const getPreferenceCheckoutMP = async (dataform) => {

        console.log("dataform:", dataform)

        const res = await axiosClient.post("/mercadopago", dataform)

        return res.data.checkoutId

    }


    return (
        <ProductContext.Provider
            value={{
                mugs: globalState.mugs,
                mug: globalState.mug,
                getMug,
                getMugs,
                getPreferenceCheckoutMP       
            }}
        >
            { props.children }
        </ProductContext.Provider>
    )

}


export default ProductState