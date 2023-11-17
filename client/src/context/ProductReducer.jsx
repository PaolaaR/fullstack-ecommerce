const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_MUGS":
            return {
                ...globalState,
                guitars: action.payload,
                guitar: [{
                    id_: "",
                    name: "",
                    price: "",
                    image: ""
                }]
            }

        case "GET_MUG":
            return {
                ...globalState,
                mug: [action.payload]
            }

        default: 
            return globalState

    }


}

export default reducer