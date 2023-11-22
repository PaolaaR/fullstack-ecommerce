
export const reducers = (globalState, action) => {

    switch(action.type){

        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":

        localStorage.setItem("token", action.payload.token)

            return {
                ...globalState,
                authStatus: true
            }

        case "GET_USER":

        return {
            ...globalState,
            authStatus: true,
            user: action.payload
        }

        case "LOGIN_ERROR":
        case "LOGOUT_USER":
            localStorage.removeItem("token")

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload,

            }


        default:
            return globalState

    }

}


export default reducers